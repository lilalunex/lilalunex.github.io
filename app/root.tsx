import { Links, Meta, Outlet, Scripts, ScrollRestoration, Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./css/base.css";
import "./css/dev.css";
import "./css/ideas.css";
import "./css/nav.css";
import "./css/spacing.css";
import "./css/typography.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="container mx-auto pt-5 md:pt-10">
          <nav className="main-navi">
            <ul className="flex space-x-12 text-2xl">
              <li><Link to="/"><img src="/menu/home.png" alt="" /></Link></li>
              <li><Link to="/ideas"><img src="/menu/ideas.png" alt="" /></Link></li>
              <li><Link to="/tools"><img src="/menu/tools.png" alt="" /></Link></li>
              <li><Link to="/partner"><img src="/menu/partner.png" alt="" /></Link></li>
              <li><Link to="/peace"><img src="/menu/peace.png" alt="" /></Link></li>
            </ul>
          </nav>
          <main>{children}</main>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
