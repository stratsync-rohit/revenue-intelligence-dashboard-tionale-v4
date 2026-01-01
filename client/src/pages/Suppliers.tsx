import React from "react";

const Suppliers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold mb-8">Supplier Center</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard
          title="Pending PO Confirmations"
          value="10"
          sub="$1700K value"
          color="border-red-500"
        />
        <StatCard
          title="Supplier Alerts"
          value="5"
          sub="Requiring attention"
          color="border-yellow-500"
        />
        <StatCard
          title="Revenue Exposure"
          value="$3.0M"
          sub="Across all suppliers"
          color="border-blue-500"
        />
        <StatCard
          title="Avg Reliability"
          value="84%"
          sub="Across all suppliers"
          color="border-green-500"
        />
      </div>

      {/* Active Supplier Alerts */}
      <h2 className="text-2xl font-semibold mb-6">Active Supplier Alerts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AlertCard
          supplier="ABC Fragrances"
          text="PO #4521 pending 11 days – no confirmation"
          severity="high"
        />
        <AlertCard
          supplier="ABC Fragrances"
          text="WhatsApp: 'Stock confirmation next week' – 6 days ago"
          severity="high"
        />
        <AlertCard
          supplier="Dubai Aromatics LLC"
          text="Requested 8% price increase on Brand Y range"
          severity="medium"
        />
        <AlertCard
          supplier="Oriental Scents Trading"
          text="Lead time increased from 12 to 18 days"
          severity="medium"
        />
        <AlertCard
          supplier="Oriental Scents Trading"
          text="Quality issue flagged on last shipment"
          severity="medium"
        />
      </div>
    </div>
  );
};

/* ---------------- Components ---------------- */

const StatCard = ({
  title,
  value,
  sub,
  color,
}: {
  title: string;
  value: string;
  sub: string;
  color: string;
}) => (
  <div
    className={`bg-white rounded-xl shadow-sm p-6 border-l-4 ${color}`}
  >
    <p className="text-sm text-gray-500 mb-2">{title}</p>
    <p className="text-3xl font-bold mb-1">{value}</p>
    <p className="text-sm text-gray-400">{sub}</p>
  </div>
);

const AlertCard = ({
  supplier,
  text,
  severity,
}: {
  supplier: string;
  text: string;
  severity: "high" | "medium";
}) => {
  const styles =
    severity === "high"
      ? "border-red-500 bg-red-50"
      : "border-yellow-500 bg-yellow-50";

  return (
    <div
      className={`relative rounded-xl p-5 border-l-4 ${styles}`}
    >
      <span className="inline-block mb-3 px-3 py-1 text-sm rounded-full bg-white border">
        {supplier}
      </span>
      <p className="text-gray-800">{text}</p>

      {/* Warning Icon */}
      <div className="absolute top-4 right-4 text-gray-400">
        ⚠️
      </div>
    </div>
  );
};

export default Suppliers;
