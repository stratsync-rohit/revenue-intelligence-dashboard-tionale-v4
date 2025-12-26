
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import Dashboard from "../pages/Dashboard";
import CommandCenter from "../components/CommandCenter";
import Suppliers from "../pages/Suppliers";
import Customers from "../pages/Customers";
import Inventory from "../pages/Inventory";
import Categories from "../pages/Categories";
import NotFound from "../pages/NotFound";




const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/command-center" element={<CommandCenter />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;