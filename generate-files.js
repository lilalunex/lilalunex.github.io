import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import wget from "wget-improved";
import waitPort from "wait-port";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const baseURL = `http://localhost:3000`;
const outputPath = `build/client`;

function saveFile(fileName) {
    let fullURL = `${baseURL}/${fileName}`;
    let outputFileName = `${outputPath}/${fileName}`;
    
    // Ensure the directory exists
    const dirName = path.dirname(outputFileName);
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName, { recursive: true }); // Create the directory if it doesn't exist
    }

    if (fullURL.endsWith("/")) {
        outputFileName = `${outputFileName}index`;
    }

    let download = wget.download(fullURL, `${outputFileName}.html`);

    download.on("end", function () {
        console.log(`Page ${fileName} built successfully`);
    });
    download.on("error", function (err) {
        console.log(err);
    });
}

function getRouteFromFileName(fileName) {
    let parts = fileName.split(".");
    parts.pop();
    return parts.join("/").replaceAll("_index", "");
}

await waitPort({
    port: 3000,
    host: "localhost",
});

const directoryPath = path.join(__dirname, "app", "routes");
let files = [];
try {
    files = fs.readdirSync(directoryPath);
    files.forEach((file) => {
        const route = getRouteFromFileName(file);
        saveFile(route);
    });
} catch (error) {
    console.error(error);
}
