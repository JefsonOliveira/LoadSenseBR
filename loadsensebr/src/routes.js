import React from "react";
import "./index.css";
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Cadastros from "./pages/Cadastros";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Relatorios from "./pages/Relatorios";
import Solicitacoes from "./pages/Solicitacoes";
import Solicitar from "./pages/Solicitar";
import Status from "./pages/Status";

const HomeTemplate = () => (
  <Home>
    <Outlet />
  </Home>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeTemplate />}>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastros" element={<Cadastros />} />
      <Route path="/relatorios" element={<Relatorios />} />
      <Route path="/solicitacoes" element={<Solicitacoes />} />
      <Route path="/solicitar" element={<Solicitar />} />
      <Route path="/status" element={<Status />} />
    </Route>
  )
);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
