import React from "react";
import GlobalHeader from "../components/header/GlobalHeader";
import Footer from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: "rgb(var(--color-bg-secondary))",
        color: "rgb(var(--color-text-primary))",
      }}
    >
      <GlobalHeader />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
