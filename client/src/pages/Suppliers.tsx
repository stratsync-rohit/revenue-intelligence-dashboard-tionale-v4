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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

      {/* ---------------- All Suppliers Table ---------------- */}
      <h2 className="text-2xl font-semibold mb-6">All Suppliers</h2>

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
            <SupplierRow
              name="ABC Fragrances"
              meta="SUP-001 • France"
              status="bad"
              pos="3"
              value="$680K"
              lead="14d"
              reliability="72%"
              lastContact="6 days ago"
              alerts={2}
            />
            <SupplierRow
              name="Dubai Aromatics LLC"
              meta="SUP-002 • UAE"
              status="warning"
              pos="2"
              value="$320K"
              lead="8d"
              reliability="85%"
              lastContact="2 days ago"
              alerts={1}
            />
            <SupplierRow
              name="European Cosmetics GmbH"
              meta="SUP-003 • Germany"
              status="good"
              pos="1"
              value="$180K"
              lead="6d"
              reliability="94%"
              lastContact="1 day ago"
              alerts={0}
            />
            <SupplierRow
              name="Milano Beauty SpA"
              meta="SUP-004 • Italy"
              status="good"
              pos="0"
              value="$0K"
              lead="7d"
              reliability="91%"
              lastContact="3 days ago"
              alerts={0}
            />
            <SupplierRow
              name="Oriental Scents Trading"
              meta="SUP-005 • India"
              status="warning"
              pos="4"
              value="$520K"
              lead="18d"
              reliability="78%"
              lastContact="5 days ago"
              alerts={2}
            />
          </tbody>
        </table>
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
  <div className={`bg-white rounded-xl shadow-sm p-6 border-l-4 ${color}`}>
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
    <div className={`relative rounded-xl p-5 border-l-4 ${styles}`}>
      <span className="inline-block mb-3 px-3 py-1 text-sm rounded-full bg-white border">
        {supplier}
      </span>
      <p className="text-gray-800">{text}</p>
      <div className="absolute top-4 right-4 text-gray-400">⚠️</div>
    </div>
  );
};

const SupplierRow = ({
  name,
  meta,
  status,
  pos,
  value,
  lead,
  reliability,
  lastContact,
  alerts,
}: any) => {
  const statusIcon =
    status === "good"
      ? "✅"
      : status === "warning"
      ? "⚠️"
      : "❌";

  return (
    <tr className="border-t">
      <td className="px-6 py-4">
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-gray-400">{meta}</p>
      </td>
      <td className="text-center">{statusIcon}</td>
      <td className="text-center">{pos}</td>
      <td className="text-center">{value}</td>
      <td className="text-center">{lead}</td>
      <td className="text-center">
        <span className="px-2 py-1 rounded-full bg-gray-100">
          {reliability}
        </span>
      </td>
      <td className="text-center text-gray-500">{lastContact}</td>
      <td className="text-center">
        {alerts > 0 ? (
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
            {alerts}
          </span>
        ) : (
          "—"
        )}
      </td>
      <td className="text-center text-blue-600 cursor-pointer">
        View
      </td>
    </tr>
  );
};

export default Suppliers;
