import React from "react";
import {
  AlertTriangle,
  Package,
  DollarSign,
  Archive,
  CheckCircle,
} from "lucide-react";

const Inventory: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-10 space-y-10">

      {/* ===== Top Inventory Summary ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatCard
          title="Critical Stock"
          value="3 SKUs"
          sub="Below safety buffer"
          color="red"
          icon={<AlertTriangle />}
        />
        <StatCard
          title="Aging Inventory"
          value="$66K"
          sub="Value at risk"
          color="orange"
          icon={<Archive />}
        />
        <StatCard
          title="Revenue Exposure"
          value="$2.5M"
          sub="Linked to inventory"
          color="blue"
          icon={<DollarSign />}
        />
        <StatCard
          title="Total Stock Value"
          value="$476K"
          sub="At cost"
          color="purple"
          icon={<Package />}
        />
        <StatCard
          title="Healthy SKUs"
          value="2"
          sub="Within safety buffer"
          color="green"
          icon={<CheckCircle />}
        />
      </div>

      {/* ===== Alerts Section ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ===== Critical Stock Alerts ===== */}
        <div className="rounded-xl border p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-red-600 flex items-center gap-2 mb-6">
            <AlertTriangle size={20} />
            Critical Stock Alerts
          </h2>

          <CriticalCard
            title="Brand X EDP 100ml"
            sku="SKU-001"
            badge="18 days cover"
            points={[
              "15% stock approaching expiry in 60 days",
              "Days of cover below safety buffer",
            ]}
            action="Create clearance offer or reserve for priority deals"
          />

          <CriticalCard
            title="Brand Y Tester Kits"
            sku="SKU-002"
            badge="12 days cover"
            points={[
              "Urgent: Only 12 days of stock remaining",
              "Sales call: Customer needs testers urgently",
            ]}
            action="Reserve inventory for high value deals, pause new commitments"
          />

          <CriticalCard
            title="Brand D Makeup Palette"
            sku="SKU-007"
            badge="8 days cover"
            points={[
              "Risk of stockout in 8 days",
              "3 active deals dependent on this SKU",
            ]}
            action="Trigger emergency replenishment, prioritize allocation"
          />
        </div>

        {/* ===== Aging Inventory Alerts ===== */}
        <div className="rounded-xl border p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-orange-500 flex items-center gap-2 mb-6">
            <Archive size={20} />
            Aging Inventory Alerts
          </h2>

          <AgingCard
            title="Brand X EDP 100ml"
            sku="SKU-001 • Eau de Parfum"
            badge="45d avg age"
            expired="15%"
          />

          <AgingCard
            title="Brand A Body Lotion 200ml"
            sku="SKU-004 • Body Care"
            badge="120d avg age"
            expired="20%"
          />
        </div>
      </div>
    </div>
  );
};

/* ===== Components ===== */

const StatCard = ({ title, value, sub, color, icon }: any) => (
  <div
    className={`rounded-xl border-l-4 p-5 shadow-sm bg-white border-${color}-500`}
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-sm text-gray-500">{sub}</p>
      </div>
      <div className={`text-${color}-500`}>{icon}</div>
    </div>
  </div>
);

const CriticalCard = ({ title, sku, badge, points, action }: any) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
    <div className="flex justify-between items-center mb-2">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{sku}</p>
      </div>
      <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
        {badge}
      </span>
    </div>
    <ul className="text-sm text-gray-700 space-y-1 mb-2 list-disc pl-5">
      {points.map((p: string, i: number) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
    <p className="text-sm text-blue-600 cursor-pointer">
      → {action}
    </p>
  </div>
);

const AgingCard = ({ title, sku, badge, expired }: any) => (
  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
    <div className="flex justify-between items-center mb-2">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{sku}</p>
      </div>
      <span className="bg-orange-200 text-orange-700 text-xs px-3 py-1 rounded-full">
        {badge}
      </span>
    </div>

    <div className="h-2 rounded-full bg-gray-200 overflow-hidden mb-2">
      <div className="h-full bg-green-500 w-2/5 float-left" />
      <div className="h-full bg-orange-400 w-2/5 float-left" />
      <div className="h-full bg-red-500 w-1/5 float-left" />
    </div>

    <p className="text-sm text-gray-600 mb-1">{expired} expired</p>
    <p className="text-sm text-blue-600 cursor-pointer">
      → Launch clearance offer immediately, consider write-off for expired stock
    </p>
  </div>
);

export default Inventory;
