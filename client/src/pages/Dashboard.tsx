import React, { useState } from "react";
import HeaderSlider from "../components/HeaderSlider";
import OverviewContent from "../components/OverviewContent";
import DataIngestionContent from "../components/DataIngestionContent";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "dataIngestion">("overview");

  return (
    <div className="mx-auto max-w-7xl w-full px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-6 space-y-4 sm:space-y-6">
      <HeaderSlider activeTab={activeTab} onChange={setActiveTab} />
      <div className="relative">
        <div
          key={activeTab}
          className="animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          {activeTab === "overview" ? (
            <OverviewContent />
          ) : (
            <DataIngestionContent />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
