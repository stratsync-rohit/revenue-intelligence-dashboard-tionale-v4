

import { Outlet } from "react-router-dom";
import Header from "../components/header/GlobalHeader";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: "rgb(var(--color-bg-secondary))",
        color: "rgb(var(--color-text-primary))",
      }}
    >
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
