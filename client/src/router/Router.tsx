import CammandCenter from "../components/CammandCenter";
import Suppliers from "../pages/Suppliers";
import Customers from "../pages/Customers";
import Inventory from "../pages/Inventory";
import Categories from "../pages/Categories";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";

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
    path: "/suppliers",
    element: <Suppliers />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
  },
  {
    path: "/categories",
    element: <Categories />,
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
