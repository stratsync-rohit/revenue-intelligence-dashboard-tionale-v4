import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Footer from "../components/Footer";
import DashboardHeader from "../components/header/DashboardHeader";
import CommandCenterHeader from "../components/header/CommandCenterHeader";
import SupplierHeader from "../components/header/SupplierHeader";
import CustomerHeader from "../components/header/CustomerHeader";
import InventoryHeader from "../components/header/InventoryHeader";
import CategoryHeader from "../components/header/CategoryHeader";

const AppLayout = () => {
  const location = useLocation();
  const { pathname } = location;

  const renderHeader = () => {
    if (pathname === "/") return <DashboardHeader />;
    if (pathname.startsWith("/command-center")) return <CommandCenterHeader />;
    if (pathname.startsWith("/suppliers")) return <SupplierHeader />;
    if (pathname.startsWith("/customers")) return <CustomerHeader />;
    if (pathname.startsWith("/inventory")) return <InventoryHeader />;
    if (pathname.startsWith("/categories")) return <CategoryHeader />;
    return null;
  };

  return (
    <>
      {renderHeader()}

     
      <AnimatePresence mode="wait">
        {/* <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 1 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="min-h-screen bg-gray-50"
        > */}
          <Outlet />
        {/* </motion.main> */}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default AppLayout;
