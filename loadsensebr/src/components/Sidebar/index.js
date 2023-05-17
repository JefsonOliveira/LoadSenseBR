import "./styles.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="Sidebar h-full">
      <aside
        className="fixed top-14 left-0 z-40 w-1/5 h-full transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="bg-[#3062c0] h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-0 font-medium ">
            <li>
              <button
                type="button"
                className="flex items-center p-2 mb- rounded-lg font-semibold hover:bg-white"
                onClick={handleCollapseToggle}
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="text-white font-sans flex-1 ml-3 whitespace-nowrap"
                  sidebar-toggle-item
                >
                  Solicitação
                </span>
                <svg
                  class="w-6 h-6 ml-16 text-white "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            {isCollapsed && (
              <ul class=" py-0 space-y-2">
                <NavLink to="/solicitar">
                  <li className="flex items-center p-2 rounded-lg font-semibold hover:bg-white">
                    <span
                      href="#"
                      class="text-white ml-11 font-sans flex-1 ml-3 whitespace-nowrap"
                    >
                      Solicitar
                    </span>
                  </li>
                  </NavLink>
                  <NavLink to="/solicitacoes">
                  <li className="flex items-center p-2 rounded-lg font-semibold hover:bg-white">
                    <span
                      href="#"
                      class="text-white ml-11 font-sans flex-1 ml-3 whitespace-nowrap"
                    >
                      Solicitações
                    </span>
                  </li>
                  </NavLink>
              </ul>
            )}
            <NavLink to="/status">
            <li>
              <a
                href="Sidebar"
                className="flex items-center p-2  rounded-lg font-semibold hover:bg-white"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="text-white font-sans flex-1 ml-3 whitespace-nowrap">
                  Status
                </span>
                {/* <h1 className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-bold text-blue-800 bg-blue-100 rounded-full">
                    5
                  </h1> */}
              </a>
            </li>
            </NavLink>
            <NavLink to="/relatorios">
            <li>
              <a
                href="Sidebar"
                className="flex items-center p-2  rounded-lg font-semibold hover:bg-white"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-white font-sans flex-1 ml-3 whitespace-nowrap">
                  Relatorios
                </span>
              </a>
            </li>
            </NavLink>
            <NavLink to="/cadastros">
            <li>
              <a
                href="Sidebar"
                className="flex items-center p-2  rounded-lg font-semibold hover:bg-white"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-white font-sans flex-1 ml-3 whitespace-nowrap">
                  Cadastros
                </span>
              </a>
            </li>
            </NavLink>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
