import React from "react";
import { NavLink } from "react-router-dom";
type Props = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="grid min-h-screen grid-cols-4">
      <div className="col-span-1">
        <div className="flex h-full flex-col  bg-gray-100 py-5 px-5">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  const activeClass = isActive ? "bg-gray-300" : "";
                  return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300 `;
                }}
              >
                {({ isActive }) => (
                  <span className={isActive ? "font-bold" : ""}>Dashboard</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/students"
                className={({ isActive }) => {
                  const activeClass = isActive ? "bg-gray-300" : "";
                  return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal`;
                }}
              >
                {({ isActive }) => (
                  <span className={isActive ? "font-bold" : ""}>Students</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  const activeClass = isActive ? "bg-gray-300" : "";
                  return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal`;
                }}
              >
                {({ isActive }) => (
                  <span className={isActive ? "font-bold" : ""}>About</span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-3 h-full p-3">{children}</div>
    </div>
  );
};
export default MainLayout;
