import { useState } from "react";

export default function FirstVueWebsite() {
  const [iframeWidth, setIframeWidth] = useState("100%");
  const [iframeHeight, setIframeHeight] = useState("1000px");

  const adjustIframeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "iframe-width") {
      setIframeWidth(value);
    } else if (id === "iframe-height") {
      setIframeHeight(value);
    }
  };

  return (
    <div className="idea first-vue-website">
      <h2>First Vue website</h2>
      <p>
        <a href="/ideas/first-vue-website/index.html" target="_blank" rel="noopener noreferrer">
          Open in a new tab
        </a>
      </p>
      <br />
      <p>iFrame:</p>
      <br />

      <div className="flex gap-4">
        <label htmlFor="iframe-width" className="block text-lg">Width:</label>
        <input
          id="iframe-width"
          type="text"
          value={iframeWidth}
          className="text-center border px-2 py-1 rounded w-24"
          onChange={adjustIframeSize}
        />
        <label htmlFor="iframe-height" className="block text-lg">Height:</label>
        <input
          id="iframe-height"
          type="text"
          value={iframeHeight}
          className="text-center border px-2 py-1 rounded w-24"
          onChange={adjustIframeSize}
        />
      </div>

      <br />
      <iframe
        src="/ideas/first-vue-website/index.html"
        style={{
          width: iframeWidth,
          height: iframeHeight,
        }}
      ></iframe>
    </div>
  );
}
