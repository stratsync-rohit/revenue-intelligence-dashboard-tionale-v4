import SectionHeader from "../components/header/SectionHeader";

const RevenueCommandCenter = () => {
  return (
    <>
      <SectionHeader
        title="StratSync Revenue Command Center"
        subtitle="Tionale | Perfumes and Cosmetics Trading"
        stats={[
          { label: "Critical", count: 3, color: "red" },
          { label: "Warnings", count: 5, color: "orange" },
          { label: "Stable", count: 18, color: "green" },
        ]}
        rightAction={<button className="btn">Last 30 Days</button>}
      />

      {/* page content */}
      <div className="p-6">
        {/* cards, alerts, tables */}
      </div>
    </>
  );
};

export default RevenueCommandCenter;
