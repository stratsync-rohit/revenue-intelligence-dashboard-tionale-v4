

// import { Outlet } from "react-router-dom";
// import Header from "../components/header/DashboardHeader";
// import Footer from "../components/Footer";

// const AppLayout = () => {
//   return (
//     <div
//       className="flex flex-col min-h-screen"
//       style={{
//         backgroundColor: "rgb(var(--color-bg-secondary))",
//         color: "rgb(var(--color-text-primary))",
//       }}
//     >
//       <Header />
//       <main className="flex-grow">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default AppLayout;
// // 



import { Outlet, useLocation } from "react-router-dom";

import DashboardHeader from "../components/header/DashboardHeader";
import CommandCenterHeader from "../components/header/CommandCenterHeader";
import SupplierHeader from "../components/header/SupplierHeader";
 import CustomerHeader from "../components/header/CustomerHeader";
  import InventoryHeader from "../components/header/InventoryHeader";
import CategoryHeader from "../components/header/CategoryHeader";

const AppLayout = () => {
  const { pathname } = useLocation();

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
      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
