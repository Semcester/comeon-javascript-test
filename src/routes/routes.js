import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../components/Login/LoginForm";
import Casino from "../components/Casino/Casino";
import PlayGame from "../components/Games/PlayGame";
import ErrorPage from "../components/Error/ErrorPage";
import ProtectedRoute from "./ProtectedCasino";
import ProtectLogin from "./ProtectLogin";
import ProtectGame from "./ProtectGame";

export default function Router() {
  const routes = () => [
    {
      path: "/",
      element: <ProtectLogin children={<Login />} />,
      exact: true,
      children: [
        {
          path: "",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <ProtectedRoute children={<Casino />} />,
      exact: true,
      children: [
        {
          path: "casino",
          element: <Casino />,
        },
      ],
    },
    {
      path: "casino/game/",
      element: <ProtectGame children={<PlayGame />} />,
      exact: true,
      replace: true,
      children: [
        {
          path: "/casino/game/:name",
          element: <PlayGame />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
      exact: true,
    },
  ];
  const routing = useRoutes(routes());

  return routing;
}
