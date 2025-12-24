import CammandCenter from "../components/CammandCenter";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/command-center",
    element: <CammandCenter />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default AppRouter;
