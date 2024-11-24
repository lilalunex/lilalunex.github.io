import { Outlet, Link } from "@remix-run/react";

export default function Tools() {
  return (
    <div className="tools flex">
      <div className="sub-navi">
        <h2>Navigation:</h2>
        <ul>
          <li><Link to="change-log">- Change Log</Link></li>
        </ul>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
