import React, { useState } from "react";

/* ================= DATA (API READY) ================= */

const supplierStats = [
  {
    title: "Pending PO Confirmations",
    value: "10",
    sub: "$1700K value",
    color: "border-red-500",
  },
  {
    title: "Supplier Alerts",
    value: "5",
    sub: "Requiring attention",
    color: "border-yellow-500",
  },
  {
    title: "Revenue Exposure",
    value: "$3.0M",
    sub: "Across all suppliers",
    color: "border-blue-500",
  },
  {
    title: "Avg Reliability",
    value: "84%",
    sub: "Across all suppliers",
    color: "border-green-500",
  },
];

const supplierAlerts = [
  {
    supplier: "ABC Fragrances",
    text: "PO #4521 pending 11 days – no confirmation",
    severity: "high",
  },
  {
    supplier: "ABC Fragrances",
    text: "WhatsApp: Stock confirmation next week – 6 days ago",
    severity: "high",
  },
  {
    supplier: "Dubai Aromatics LLC",
    text: "Requested 8% price increase on Brand Y range",
    severity: "medium",
  },
];

const suppliers = [
  {
    id: "SUP-001",
    name: "ABC Fragrances",
    country: "France",
    status: "bad",
    pendingPOs: 3,
    pendingValue: "$680K",
    leadTime: "14 days",
    reliability: "72%",
    lastContact: "6 days ago",
    alerts: 2,
  },
  {
    id: "SUP-002",
    name: "Dubai Aromatics LLC",
    country: "UAE",
    status: "warning",
    pendingPOs: 2,
    pendingValue: "$320K",
    leadTime: "8 days",
    reliability: "85%",
    lastContact: "2 days ago",
    alerts: 1,
  },
  {
    id: "SUP-003",
    name: "European Cosmetics GmbH",
    country: "Germany",
    status: "good",
    pendingPOs: 1,
    pendingValue: "$180K",
    leadTime: "6 days",
    reliability: "94%",
    lastContact: "1 day ago",
    alerts: 0,
  },
];

/* ================= MAIN PAGE ================= */

const Suppliers: React.FC = () => {
  const [selectedSupplier, setSelectedSupplier] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (supplier: any) => {
    setSelectedSupplier(supplier);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedSupplier(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">
      <h1 className="text-3xl font-semibold mb-8">Supplier Center</h1>

      {/* ===== TOP STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {supplierStats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* ===== ALERTS ===== */}
      <h2 className="text-2xl font-semibold mb-6">Active Supplier Alerts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {supplierAlerts.map((alert, i) => (
          <AlertCard key={i} {...alert} />
        ))}
      </div>

      {/* ===== TABLE ===== */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="text-left px-6 py-4">Supplier</th>
              <th className="text-center">Status</th>
              <th className="text-center">Pending POs</th>
              <th className="text-center">Pending Value</th>
              <th className="text-center">Lead Time</th>
              <th className="text-center">Reliability</th>
              <th className="text-center">Last Contact</th>
              <th className="text-center">Alerts</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((s) => (
              <SupplierRow
                key={s.id}
                supplier={s}
                onView={openDrawer}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== DRAWER ===== */}
      <DrawerOverlay isOpen={isDrawerOpen} onClose={closeDrawer} />
      <SupplierDrawer
        supplier={selectedSupplier}
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
      />
    </div>
  );
};

export default Suppliers;

/* ================= COMPONENTS ================= */

const StatCard = ({ title, value, sub, color }: any) => (
  <div className={`bg-white rounded-xl p-6 shadow-sm border-l-4 ${color}`}>
    <p className="text-sm text-gray-500 mb-2">{title}</p>
    <p className="text-3xl font-bold">{value}</p>
    <p className="text-sm text-gray-400">{sub}</p>
  </div>
);

const AlertCard = ({ supplier, text, severity }: any) => {
  const style =
    severity === "high"
      ? "border-red-500 bg-red-50"
      : "border-yellow-500 bg-yellow-50";

  return (
    <div className={`rounded-xl p-5 border-l-4 ${style}`}>
      <span className="inline-block mb-2 px-3 py-1 bg-white rounded-full text-sm">
        {supplier}
      </span>
      <p>{text}</p>
    </div>
  );
};

const SupplierRow = ({ supplier, onView }: any) => {
  const statusIcon =
    supplier.status === "good"
      ? "✅"
      : supplier.status === "warning"
      ? "⚠️"
      : "❌";

  return (
    <tr className="border-t">
      <td className="px-6 py-4">
        <p className="font-semibold">{supplier.name}</p>
        <p className="text-xs text-gray-400">
          {supplier.id} • {supplier.country}
        </p>
      </td>
      <td className="text-center">{statusIcon}</td>
      <td className="text-center">{supplier.pendingPOs}</td>
      <td className="text-center">{supplier.pendingValue}</td>
      <td className="text-center">{supplier.leadTime}</td>
      <td className="text-center">{supplier.reliability}</td>
      <td className="text-center text-gray-500">{supplier.lastContact}</td>
      <td className="text-center">
        {supplier.alerts > 0 ? (
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
            {supplier.alerts}
          </span>
        ) : (
          "—"
        )}
      </td>
      <td className="text-center">
        <button
          onClick={() => onView(supplier)}
          className="text-blue-600 font-medium hover:underline"
        >
          View
        </button>
      </td>
    </tr>
  );
};

/* ================= DRAWER ================= */

const DrawerOverlay = ({ isOpen, onClose }: any) => (
  <div
    onClick={onClose}
    className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  />
);

const SupplierDrawer = ({ supplier, isOpen, onClose }: any) => (
  <div
    className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-xl p-6 overflow-y-auto
      transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
  >
    {supplier && (
      <>
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">{supplier.name}</h2>
            <p className="text-sm text-gray-500">
              {supplier.id} • {supplier.country}
            </p>
          </div>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Stat label="Reliability" value={supplier.reliability} />
          <Stat label="Lead Time" value={supplier.leadTime} />
          <Stat label="Pending Value" value={supplier.pendingValue} />
          <Stat label="Active Alerts" value={supplier.alerts} />
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg">
            Contact Supplier
          </button>
          <button className="flex-1 border py-2 rounded-lg">
            View All POs
          </button>
        </div>
      </>
    )}
  </div>
);

const Stat = ({ label, value }: any) => (
  <div className="border rounded-lg p-4">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-lg font-semibold">{value}</p>
  </div>
);
