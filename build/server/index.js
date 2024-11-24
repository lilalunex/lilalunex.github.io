import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, json } from "@remix-run/node";
import { RemixServer, Outlet, useLoaderData, Meta, Links, Link, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
const loader = async () => {
  return json({
    baseUrl: process.env.BASE_URL || "/"
  });
};
function Layout({ children }) {
  const { baseUrl } = useLoaderData();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("base", { href: baseUrl }),
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto pt-5 md:pt-10", children: [
        /* @__PURE__ */ jsx("nav", { className: "main-navi", children: /* @__PURE__ */ jsxs("ul", { className: "flex space-x-12 text-2xl", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("img", { src: "/menu/home.png", alt: "" }) }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ideas", children: /* @__PURE__ */ jsx("img", { src: "/menu/ideas.png", alt: "" }) }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/tools", children: /* @__PURE__ */ jsx("img", { src: "/menu/tools.png", alt: "" }) }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/partner", children: /* @__PURE__ */ jsx("img", { src: "/menu/partner.png", alt: "" }) }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/peace", children: /* @__PURE__ */ jsx("img", { src: "/menu/peace.png", alt: "" }) }) })
        ] }) }),
        /* @__PURE__ */ jsx("main", { children })
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links,
  loader
}, Symbol.toStringTag, { value: "Module" }));
function FirstVueWebsite() {
  const [iframeWidth, setIframeWidth] = useState("100%");
  const [iframeHeight, setIframeHeight] = useState("1000px");
  const adjustIframeSize = (event) => {
    const { id, value } = event.target;
    if (id === "iframe-width") {
      setIframeWidth(value);
    } else if (id === "iframe-height") {
      setIframeHeight(value);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "idea first-vue-website", children: [
    /* @__PURE__ */ jsx("h2", { children: "First Vue website" }),
    /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "/ideas/first-vue-website/index.html", target: "_blank", rel: "noopener noreferrer", children: "Open in a new tab" }) }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("p", { children: "iFrame:" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "iframe-width", className: "block text-lg", children: "Width:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "iframe-width",
          type: "text",
          value: iframeWidth,
          className: "text-center border px-2 py-1 rounded w-24",
          onChange: adjustIframeSize
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: "iframe-height", className: "block text-lg", children: "Height:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "iframe-height",
          type: "text",
          value: iframeHeight,
          className: "text-center border px-2 py-1 rounded w-24",
          onChange: adjustIframeSize
        }
      )
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "/ideas/first-vue-website/index.html",
        style: {
          width: iframeWidth,
          height: iframeHeight
        }
      }
    )
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FirstVueWebsite
}, Symbol.toStringTag, { value: "Module" }));
function MobileWhileMenu() {
  return /* @__PURE__ */ jsxs("div", { className: "idea mobile-wheel-menu", children: [
    /* @__PURE__ */ jsx("h2", { children: "One handed mobile menu" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Mobile websites have their menu on the top.",
      /* @__PURE__ */ jsx("br", {}),
      "Nice to look at but not handy to use.",
      /* @__PURE__ */ jsx("br", {}),
      "Phones gotten way to big to use them with one hand."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex py-12", children: [
      /* @__PURE__ */ jsx("img", { src: "/ideas/mobile-wheel-menu/one.png", alt: "" }),
      /* @__PURE__ */ jsx("img", { src: "/ideas/mobile-wheel-menu/two.png", alt: "" }),
      /* @__PURE__ */ jsx("img", { src: "/ideas/mobile-wheel-menu/three.png", alt: "" }),
      /* @__PURE__ */ jsx("img", { src: "/ideas/mobile-wheel-menu/four.png", alt: "" })
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "I will not pursue this idea further:",
      /* @__PURE__ */ jsx("br", {}),
      "1. Menu will take up too much space in the middle of the page. You could hide it but doing a fancy gesture everytime to get the menu will annoy the user.",
      /* @__PURE__ */ jsx("br", {}),
      "2. Learning: The content displayed on a site is more important than the menu which got me there.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "Drawn on iPad with Procreate."
    ] })
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MobileWhileMenu
}, Symbol.toStringTag, { value: "Module" }));
function SocializeMMO() {
  return /* @__PURE__ */ jsxs("div", { className: "idea mobile-wheel-menu", children: [
    /* @__PURE__ */ jsx("h2", { children: "Socialize MMO" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "In thinking about what little chill game you can play here and there,",
      /* @__PURE__ */ jsx("br", {}),
      "I came up with this idea.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "2D MMO. Playable in the browser. Just hop in. Text with random people.",
      /* @__PURE__ */ jsx("br", {}),
      "Maybe features like fishing, housing.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "I'd like to work on that one day.",
      /* @__PURE__ */ jsx("br", {}),
      "Mostly for fun and vision."
    ] })
  ] });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SocializeMMO
}, Symbol.toStringTag, { value: "Module" }));
function ChangeLog() {
  const changeLogEntries = [
    {
      date: "20.10.24",
      entries: [
        "Starting to learn Remix for potential new job.",
        "Planning on creating this website with Remix."
      ]
    },
    {
      date: "23-24.10.24",
      entries: [
        "Realizing this website in version 1.0."
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "page", children: [
    /* @__PURE__ */ jsx("h2", { children: "Change Log" }),
    /* @__PURE__ */ jsx("div", { children: changeLogEntries.map((entryGroup, index) => /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsx("div", { className: "font-bold w-32", children: entryGroup.date }),
      /* @__PURE__ */ jsx("div", { className: "flex-1", children: entryGroup.entries.map((entry2, entryIndex) => /* @__PURE__ */ jsx("p", { className: "pl-4", children: entry2 }, entryIndex)) })
    ] }) }, index)) })
  ] });
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ChangeLog
}, Symbol.toStringTag, { value: "Module" }));
function IdeasIndex() {
  return /* @__PURE__ */ jsx("div", { className: "idea", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: "Ideas" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Here you will find:",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "💡 Ideas I have",
        /* @__PURE__ */ jsx("br", {}),
        "💼 Websites I made",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "Have fun strolling around!"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsx("img", { src: "/ideas/dancer.png", alt: "", className: "rounded-3xl", width: "300" }) })
  ] }) });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: IdeasIndex
}, Symbol.toStringTag, { value: "Module" }));
function ToolsIndex() {
  return /* @__PURE__ */ jsx("div", { className: "idea", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: "Tools" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Ideas for tools, to play around,",
        /* @__PURE__ */ jsx("br", {}),
        "learn and think of solutions:",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "➖ Calculator",
        /* @__PURE__ */ jsx("br", {}),
        "➖ Countdown",
        /* @__PURE__ */ jsx("br", {}),
        "➖ Timer",
        /* @__PURE__ */ jsx("br", {}),
        "➖ Alarm",
        /* @__PURE__ */ jsx("br", {}),
        "➖ Pomodoro timer",
        /* @__PURE__ */ jsx("br", {}),
        "➖ Button: Sum of clicks across",
        /* @__PURE__ */ jsx("br", {}),
        "all users to realize REST API",
        /* @__PURE__ */ jsx("br", {}),
        "➖ Coin throw with ThreeJS",
        /* @__PURE__ */ jsx("br", {}),
        "➖ Coin counter"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsxs("figure", { children: [
      /* @__PURE__ */ jsx("img", { src: "/dev/dev4.jpg", alt: "", className: "rounded-3xl", width: "300" }),
      /* @__PURE__ */ jsx("figcaption", { className: "text-center pt-1", children: "📸 Sergej Dukkardt" })
    ] }) })
  ] }) });
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ToolsIndex
}, Symbol.toStringTag, { value: "Module" }));
function Partner() {
  return /* @__PURE__ */ jsxs("div", { className: "partner", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-center py-5", children: "Partner" }),
    /* @__PURE__ */ jsx("div", { className: "py-5 container mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-8", children: [
      /* @__PURE__ */ jsx("img", { src: "/partner/dukkart.png", className: "rounded-3xl w-96", alt: "Sergej Dukkardt" }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "pt-3", children: "Sergej Dukkardt" }),
        /* @__PURE__ */ jsx("p", { className: "px-3 mx-auto", children: "Fotograf. Media Creator. Mietstudio." }),
        /* @__PURE__ */ jsx("div", { className: "pt-3 link-holder", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "http://dukkart.de",
            className: "btn border-2 py-4 px-6 rounded-full",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Website"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "pt-5 link-holder", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "http://dreamstudiobadoeynhausen.de",
            className: "btn border-2 py-4 px-6 rounded-full",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Mietstudio"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "pt-5 link-holder", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.instagram.com/dukkart/",
            className: "btn border-2 py-4 px-6 rounded-full",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Instagram"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "py-5 container mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "pt-3", children: "Reza Jaxon" }),
        /* @__PURE__ */ jsx("p", { className: "px-3 mx-auto", children: "Tänzer. Graffiti-Artist. Designer." }),
        /* @__PURE__ */ jsx("div", { className: "pt-3 link-holder", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://shibuy.art/",
            className: "btn border-2 py-4 px-6 rounded-full",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Website"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "pt-5 link-holder", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.instagram.com/jaxon_the_6th/",
            className: "btn border-2 py-4 px-6 rounded-full",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Instagram"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("img", { src: "/partner/jaxon.png", className: "rounded-3xl w-96", alt: "Reza Jaxon" })
    ] }) })
  ] });
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Partner
}, Symbol.toStringTag, { value: "Module" }));
function Index() {
  const images = [
    "/dev/dev1.jpg",
    "/dev/dev2.jpg",
    "/dev/dev3.jpg"
  ];
  const [randomImage, setRandomImage] = useState("");
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "dev", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto w-[450px] text-center uc", children: /* @__PURE__ */ jsxs("div", { className: "w-auto py-6 info flex", children: [
      /* @__PURE__ */ jsx("p", { className: "w-[20px] text-5xl ps-8", children: "🛈" }),
      /* @__PURE__ */ jsxs("p", { className: "flex-grow", children: [
        "🚧 Website under construction",
        /* @__PURE__ */ jsx("br", {}),
        "💻 As of now desktop only"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto w-[75%] pb-12", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-2/3 text-center", children: [
        /* @__PURE__ */ jsx("h2", { children: "Yet another web developer" }),
        /* @__PURE__ */ jsx("p", { className: "link-holder", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "mailto:alexanderscharow@icloud.com",
            className: "btn border-2 py-4 px-6 rounded-full",
            children: "Contact me"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "pt-8", children: [
          /* @__PURE__ */ jsx("p", { className: "pb-4", children: "Skills:" }),
          /* @__PURE__ */ jsxs("div", { className: "skills mx-auto flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsx("img", { src: "/dev/skills/html5.png", alt: "HTML5", className: "w-24 h-24" }),
            /* @__PURE__ */ jsx("img", { src: "/dev/skills/css3.png", alt: "CSS3", className: "w-24 h-24" }),
            /* @__PURE__ */ jsx("img", { src: "/dev/skills/js.png", alt: "JavaScript", className: "w-24 h-24" }),
            /* @__PURE__ */ jsx("img", { src: "/dev/skills/mysql.png", alt: "MySQL", className: "w-24 h-24" }),
            /* @__PURE__ */ jsx("img", { src: "/dev/skills/sass.png", alt: "Sass", className: "w-24 h-24" }),
            /* @__PURE__ */ jsx("img", { src: "/dev/skills/bs.png", alt: "Bootstrap", className: "w-24 h-24" }),
            /* @__PURE__ */ jsx("img", { src: "/dev/skills/tw.png", alt: "Tailwind", className: "w-24 h-24" }),
            /* @__PURE__ */ jsx("img", { src: "/dev/skills/wp.png", alt: "WordPress", className: "w-24 h-24" }),
            /* @__PURE__ */ jsx("img", { src: "/dev/skills/woo.png", alt: "WooCommerce", className: "w-24 h-24" }),
            /* @__PURE__ */ jsx("img", { src: "/dev/skills/t3.png", alt: "WooCommerce", className: "w-24 h-24" }),
            /* @__PURE__ */ jsx("img", { src: "/dev/skills/vue.png", alt: "Vue.js", className: "w-24 h-24" }),
            /* @__PURE__ */ jsx("img", { src: "/dev/skills/sw.png", alt: "Vue.js", className: "w-24 h-24" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-1/3 flex items-center", children: /* @__PURE__ */ jsxs("figure", { children: [
        randomImage && /* @__PURE__ */ jsx(
          "img",
          {
            src: randomImage,
            alt: "Random image of dev",
            className: "rounded-xl",
            width: "400"
          }
        ),
        /* @__PURE__ */ jsx("figcaption", { className: "text-center pt-1", children: "📸 Sergej Dukkardt" })
      ] }) })
    ] }) })
  ] });
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
function Ideas() {
  return /* @__PURE__ */ jsxs("section", { id: "ideas", className: "flex", children: [
    /* @__PURE__ */ jsxs("div", { className: "sub-navi", children: [
      /* @__PURE__ */ jsx("h2", { children: "Navigation:" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "mobile-wheel-menu", children: "- One handed mobile menu" }) }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "first-vue-website", children: "- First Vue website" }) }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "socialize-mmo", children: "- Socialize MMO" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-grow", children: /* @__PURE__ */ jsx(Outlet, {}) })
  ] });
}
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ideas
}, Symbol.toStringTag, { value: "Module" }));
function Peace() {
  return /* @__PURE__ */ jsxs("div", { className: "peace text-center", children: [
    /* @__PURE__ */ jsx("h2", { children: '"The faster the world moves, the slower I go."' }),
    /* @__PURE__ */ jsx("img", { src: "/peace/peace.jpg", alt: "peace", className: "w-1/2 mx-auto" }),
    /* @__PURE__ */ jsxs("p", { className: "pt-8", children: [
      "The machines are there to make our lives easier. Not to replace them.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "Don't forget in our hasty technology times to take some time to breath.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "Don't ask yourself what gadget you can get next - look around what you can reduce in your life."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "pt-24", children: "Relax, Breath & Move." }),
    /* @__PURE__ */ jsx("p", { className: "text-8xl pt-8", children: "✌" })
  ] });
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Peace
}, Symbol.toStringTag, { value: "Module" }));
function Tools() {
  return /* @__PURE__ */ jsxs("div", { className: "tools flex", children: [
    /* @__PURE__ */ jsxs("div", { className: "sub-navi", children: [
      /* @__PURE__ */ jsx("h2", { children: "Navigation:" }),
      /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "change-log", children: "- Change Log" }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-grow", children: /* @__PURE__ */ jsx(Outlet, {}) })
  ] });
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tools
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Dyr-ks-3.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-DlaH13ap.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-BxD8fKPL.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-DlaH13ap.js"], "css": ["/assets/root-lUCtsFJ7.css"] }, "routes/ideas.first-vue-website": { "id": "routes/ideas.first-vue-website", "parentId": "routes/ideas", "path": "first-vue-website", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/ideas.first-vue-website-CKZ6ud05.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] }, "routes/ideas.mobile-wheel-menu": { "id": "routes/ideas.mobile-wheel-menu", "parentId": "routes/ideas", "path": "mobile-wheel-menu", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/ideas.mobile-wheel-menu-CAhn4gYw.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] }, "routes/ideas.socialize-mmo": { "id": "routes/ideas.socialize-mmo", "parentId": "routes/ideas", "path": "socialize-mmo", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/ideas.socialize-mmo-HYrSTvCg.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] }, "routes/tools.change-log": { "id": "routes/tools.change-log", "parentId": "routes/tools", "path": "change-log", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/tools.change-log-FFbJLbSg.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] }, "routes/ideas._index": { "id": "routes/ideas._index", "parentId": "routes/ideas", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/ideas._index-BLGMQpRS.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] }, "routes/tools._index": { "id": "routes/tools._index", "parentId": "routes/tools", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/tools._index-DZgQYLM1.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] }, "routes/partner": { "id": "routes/partner", "parentId": "root", "path": "partner", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/partner-BJcH4Mu3.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-B74Rl9KG.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] }, "routes/ideas": { "id": "routes/ideas", "parentId": "root", "path": "ideas", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/ideas-DGpeiF3r.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-DlaH13ap.js"], "css": [] }, "routes/peace": { "id": "routes/peace", "parentId": "root", "path": "peace", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/peace-BmGbpX_1.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] }, "routes/tools": { "id": "routes/tools", "parentId": "root", "path": "tools", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/tools-BhL3QVSM.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-DlaH13ap.js"], "css": [] } }, "url": "/assets/manifest-0e585ec9.js", "version": "0e585ec9" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_singleFetch": true, "v3_lazyRouteDiscovery": true, "unstable_optimizeDeps": false, "unstable_routeConfig": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/ideas.first-vue-website": {
    id: "routes/ideas.first-vue-website",
    parentId: "routes/ideas",
    path: "first-vue-website",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/ideas.mobile-wheel-menu": {
    id: "routes/ideas.mobile-wheel-menu",
    parentId: "routes/ideas",
    path: "mobile-wheel-menu",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/ideas.socialize-mmo": {
    id: "routes/ideas.socialize-mmo",
    parentId: "routes/ideas",
    path: "socialize-mmo",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/tools.change-log": {
    id: "routes/tools.change-log",
    parentId: "routes/tools",
    path: "change-log",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/ideas._index": {
    id: "routes/ideas._index",
    parentId: "routes/ideas",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route5
  },
  "routes/tools._index": {
    id: "routes/tools._index",
    parentId: "routes/tools",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route6
  },
  "routes/partner": {
    id: "routes/partner",
    parentId: "root",
    path: "partner",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route8
  },
  "routes/ideas": {
    id: "routes/ideas",
    parentId: "root",
    path: "ideas",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/peace": {
    id: "routes/peace",
    parentId: "root",
    path: "peace",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/tools": {
    id: "routes/tools",
    parentId: "root",
    path: "tools",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
