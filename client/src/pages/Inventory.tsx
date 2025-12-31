import React from "react";
import {
  AlertTriangle,
  Archive,
  DollarSign,
  Package,
  CheckCircle,
} from "lucide-react";

/* ===================== MAIN PAGE ===================== */

const Inventory: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-10 space-y-12">

      {/* ===== TOP KPI CARDS ===== */}
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

      {/* ===== ALERTS SECTION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ---- Critical Stock Alerts ---- */}
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

        {/* ---- Aging Inventory Alerts ---- */}
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

      {/* ===== ALL INVENTORY SKUs TABLE ===== */}
      <div className="rounded-xl border shadow-sm">
        <div className="px-6 py-4 border-b font-semibold text-lg">
          📦 All Inventory SKUs
        </div>

        <table className="w-full text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left p-4">SKU / Product</th>
              <th>Status</th>
              <th>Stock Qty</th>
              <th>Days Cover</th>
              <th>Age Profile</th>
              <th>Cost Value</th>
              <th>Linked Deals</th>
              <th>Exposure</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <SkuRow
              name="Brand X EDP 100ml"
              sku="SKU-001 • Eau de Parfum"
              status="down"
              qty="240"
              days="18d"
              cost="$48K"
              deals="2"
              exposure="$310K"
            />
            <SkuRow
              name="Brand Y Tester Kits"
              sku="SKU-002 • Tester Kits"
              status="down"
              qty="85"
              days="12d"
              cost="$17K"
              deals="2"
              exposure="$185K"
            />
            <SkuRow
              name="Brand Z EDP 50ml"
              sku="SKU-003 • Eau de Parfum"
              status="warning"
              qty="520"
              days="28d"
              cost="$78K"
              deals="3"
              exposure="$420K"
            />
            <SkuRow
              name="Brand A Body Lotion 200ml"
              sku="SKU-004 • Body Care"
              status="aging"
              qty="180"
              days="65d"
              cost="$9K"
            />
            <SkuRow
              name="Brand B Perfume Set"
              sku="SKU-005 • Gift Sets"
              status="healthy"
              qty="420"
              days="42d"
              cost="$126K"
              deals="4"
              exposure="$580K"
            />
            <SkuRow
              name="Brand C Skincare Serum"
              sku="SKU-006 • Skincare"
              status="healthy"
              qty="890"
              days="55d"
              cost="$178K"
              deals="5"
              exposure="$720K"
            />
            <SkuRow
              name="Brand D Makeup Palette"
              sku="SKU-007 • Makeup"
              status="down"
              qty="65"
              days="8d"
              cost="$20K"
              deals="3"
              exposure="$245K"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;

/* ===================== COMPONENTS ===================== */

const colorMap: any = {
  red: "border-red-500 text-red-500",
  orange: "border-orange-500 text-orange-500",
  blue: "border-blue-500 text-blue-500",
  purple: "border-purple-500 text-purple-500",
  green: "border-green-500 text-green-500",
};

const StatCard = ({ title, value, sub, color, icon }: any) => (
  <div className={`rounded-xl border-l-4 p-5 shadow-sm ${colorMap[color]}`}>
    <div className="flex justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-sm text-gray-500">{sub}</p>
      </div>
      {icon}
    </div>
  </div>
);

const CriticalCard = ({ title, sku, badge, points, action }: any) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
    <div className="flex justify-between mb-2">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{sku}</p>
      </div>
      <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
        {badge}
      </span>
    </div>
    <ul className="text-sm list-disc pl-5 mb-2">
      {points.map((p: string, i: number) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
    <p className="text-sm text-blue-600">→ {action}</p>
  </div>
);

const AgingCard = ({ title, sku, badge, expired }: any) => (
  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
    <div className="flex justify-between mb-2">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{sku}</p>
      </div>
      <span className="bg-orange-200 text-orange-700 text-xs px-3 py-1 rounded-full">
        {badge}
      </span>
    </div>

    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
      <div className="h-full bg-green-500 w-2/5 float-left" />
      <div className="h-full bg-orange-400 w-2/5 float-left" />
      <div className="h-full bg-red-500 w-1/5 float-left" />
    </div>

    <p className="text-sm text-gray-600">{expired} expired</p>
    <p className="text-sm text-blue-600">
      → Launch clearance offer immediately, consider write-off
    </p>
  </div>
);

const SkuRow = ({
  name,
  sku,
  status,
  qty,
  days,
  cost,
  deals,
  exposure,
}: any) => (
  <tr className="border-b last:border-none">
    <td className="p-4">
      <div className="font-medium">{name}</div>
      <div className="text-xs text-gray-500">{sku}</div>
    </td>
    <td className="text-center">
      {status === "healthy" && "✅"}
      {status === "warning" && "⚠️"}
      {status === "aging" && "🧴"}
      {status === "down" && "📉"}
    </td>
    <td className="text-center font-medium">{qty}</td>
    <td className="text-center">
      <span className="px-2 py-1 rounded-full bg-orange-50 text-orange-600 text-xs">
        {days}
      </span>
    </td>
    <td className="text-center">
      <div className="h-2 w-24 bg-gray-200 rounded-full mx-auto overflow-hidden">
        <div className="h-full bg-green-500 w-1/2 float-left" />
        <div className="h-full bg-orange-400 w-1/4 float-left" />
        <div className="h-full bg-red-500 w-1/4 float-left" />
      </div>
    </td>
    <td className="text-center font-medium">{cost}</td>
    <td className="text-center">{deals || "—"}</td>
    <td className="text-center font-medium">{exposure || "—"}</td>
    <td className="text-center text-blue-600 cursor-pointer">View</td>
  </tr>
);
