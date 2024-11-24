import { useEffect, useState } from "react";

export default function Index() {
  const images = [
    "/dev/dev1.jpg",
    "/dev/dev2.jpg",
    "/dev/dev3.jpg"
  ];

  const [randomImage, setRandomImage] = useState<string>("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return (
    <div className="dev">
      <div className="mx-auto w-[450px] text-center uc">
        <div className="w-auto py-6 info flex">
          <p className="w-[20px] text-5xl ps-8">🛈</p>
          <p className="flex-grow">
            🚧 Website under construction
            <br />
            💻 As of now desktop only
          </p>
        </div>
      </div>

      <div className="mx-auto w-full pb-12">
        <div className="flex justify-between">
          <div className="w-2/3 text-center">
            <h2>Yet another web developer</h2>
            <p className="link-holder">
              <a
                href="mailto:&#x61;&#x6c;&#x65;&#x78;&#x61;&#x6e;&#x64;&#x65;&#x72;&#x73;&#x63;&#x68;&#x61;&#x72;&#x6f;&#x77;&#x40;&#x69;&#x63;&#x6c;&#x6f;&#x75;&#x64;&#x2e;&#x63;&#x6f;&#x6d;"
                className="btn border-2 py-4 px-6 rounded-full"
              >
                Contact me
              </a>
            </p>
            <div className="pt-8">
              <p className="pb-4">Skills:</p>
              <div className="skills mx-auto flex flex-wrap justify-center gap-4">
                <img src="/dev/skills/html5.png" alt="HTML5" className="w-24 h-24" />
                <img src="/dev/skills/css3.png" alt="CSS3" className="w-24 h-24" />
                <img src="/dev/skills/js.png" alt="JavaScript" className="w-24 h-24" />
                <img src="/dev/skills/mysql.png" alt="MySQL" className="w-24 h-24" />
                <img src="/dev/skills/sass.png" alt="Sass" className="w-24 h-24" />
                <img src="/dev/skills/bs.png" alt="Bootstrap" className="w-24 h-24" />
                <img src="/dev/skills/tw.png" alt="Tailwind" className="w-24 h-24" />
                <img src="/dev/skills/wp.png" alt="WordPress" className="w-24 h-24" />
                <img src="/dev/skills/woo.png" alt="WooCommerce" className="w-24 h-24" />
                <img src="/dev/skills/t3.png" alt="WooCommerce" className="w-24 h-24" />
                <img src="/dev/skills/vue.png" alt="Vue.js" className="w-24 h-24" />
                <img src="/dev/skills/sw.png" alt="Vue.js" className="w-24 h-24" />
              </div>
            </div>
          </div>
          <div className="w-1/3 flex items-center">
            <figure>
              {randomImage && (
                <img
                  src={randomImage}
                  alt="Random image of dev"
                  className="rounded-xl"
                  width="400"
                />
              )}
              <figcaption className="text-center pt-1">📸 Sergej Dukkardt</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
