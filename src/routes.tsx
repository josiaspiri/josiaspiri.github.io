import type { RouteObject } from "react-router-dom";
import Layout from "@/components/Layout";
import ErrorBoundary from "@/components/ErrorBoundary";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
