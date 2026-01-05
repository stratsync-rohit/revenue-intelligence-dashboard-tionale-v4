import React, { useState } from "react";
import {
  AlertTriangle,
  Archive,
  DollarSign,
  Package,
  CheckCircle,
} from "lucide-react";

/* ===================== DATA (API READY) ===================== */

const inventoryStats = [
  {
    title: "Critical Stock",
    value: "3 SKUs",
    sub: "Below safety buffer",
    color: "red",
    icon: <AlertTriangle />,
  },
  {
    title: "Aging Inventory",
    value: "$66K",
    sub: "Value at risk",
    color: "orange",
    icon: <Archive />,
  },
  {
    title: "Revenue Exposure",
    value: "$2.5M",
    sub: "Linked to inventory",
    color: "blue",
    icon: <DollarSign />,
  },
  {
    title: "Total Stock Value",
    value: "$476K",
    sub: "At cost",
    color: "purple",
    icon: <Package />,
  },
  {
    title: "Healthy SKUs",
    value: "2",
    sub: "Within safety buffer",
    color: "green",
    icon: <CheckCircle />,
  },
];

const criticalStockAlerts = [
  {
    title: "Brand X EDP 100ml",
    sku: "SKU-001",
    badge: "18 days cover",
    points: [
      "15% stock approaching expiry in 60 days",
      "Days of cover below safety buffer",
    ],
    action: "Create clearance offer or reserve for priority deals",
  },
  {
    title: "Brand Y Tester Kits",
    sku: "SKU-002",
    badge: "12 days cover",
    points: [
      "Urgent: Only 12 days of stock remaining",
      "Sales call: Customer needs testers urgently",
    ],
    action: "Reserve inventory for high value deals, pause new commitments",
  },
  {
    title: "Brand D Makeup Palette",
    sku: "SKU-007",
    badge: "8 days cover",
    points: [
      "Risk of stockout in 8 days",
      "3 active deals dependent on this SKU",
    ],
    action: "Trigger emergency replenishment, prioritize allocation",
  },
];

const agingInventoryAlerts = [
  {
    title: "Brand X EDP 100ml",
    sku: "SKU-001 • Eau de Parfum",
    badge: "45d avg age",
    expired: "15%",
  },
  {
    title: "Brand A Body Lotion 200ml",
    sku: "SKU-004 • Body Care",
    badge: "120d avg age",
    expired: "20%",
  },
];

const inventorySkus = [
  {
    id: "SKU-001",
    name: "Brand X EDP 100ml",
    category: "Eau de Parfum",
    status: "down",
    qty: 240,
    days: "18d",
    cost: "$48K",
    deals: 2,
    exposure: "$310K",
  },
  {
    id: "SKU-002",
    name: "Brand Y Tester Kits",
    category: "Tester Kits",
    status: "down",
    qty: 85,
    days: "12d",
    cost: "$17K",
    deals: 2,
    exposure: "$185K",
  },
  {
    id: "SKU-003",
    name: "Brand Z EDP 50ml",
    category: "Eau de Parfum",
    status: "warning",
    qty: 520,
    days: "28d",
    cost: "$78K",
    deals: 3,
    exposure: "$420K",
  },
  {
    id: "SKU-004",
    name: "Brand A Body Lotion 200ml",
    category: "Body Care",
    status: "aging",
    qty: 180,
    days: "65d",
    cost: "$9K",
  },
  {
    id: "SKU-005",
    name: "Brand B Perfume Set",
    category: "Gift Sets",
    status: "healthy",
    qty: 420,
    days: "42d",
    cost: "$126K",
    deals: 4,
    exposure: "$580K",
  },
  {
    id: "SKU-006",
    name: "Brand C Skincare Serum",
    category: "Skincare",
    status: "healthy",
    qty: 890,
    days: "55d",
    cost: "$178K",
    deals: 5,
    exposure: "$720K",
  },
  {
    id: "SKU-007",
    name: "Brand D Makeup Palette",
    category: "Makeup",
    status: "down",
    qty: 65,
    days: "8d",
    cost: "$20K",
    deals: 3,
    exposure: "$245K",
  },
];

/* ===================== MAIN PAGE ===================== */

const Inventory: React.FC = () => {
  const [selectedSku, setSelectedSku] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (sku: any) => {
    setSelectedSku(sku);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedSku(null);
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10 space-y-12 relative">

      {/* ===== TOP KPI CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {inventoryStats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* ===== ALERTS SECTION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-xl border p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-red-600 flex items-center gap-2 mb-6">
            <AlertTriangle size={20} />
            Critical Stock Alerts
          </h2>

          {criticalStockAlerts.map((item, i) => (
            <CriticalCard key={i} {...item} />
          ))}
        </div>

        <div className="rounded-xl border p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-orange-500 flex items-center gap-2 mb-6">
            <Archive size={20} />
            Aging Inventory Alerts
          </h2>

          {agingInventoryAlerts.map((item, i) => (
            <AgingCard key={i} {...item} />
          ))}
        </div>
      </div>

      {/* ===== SKU TABLE ===== */}
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
            {inventorySkus.map((sku) => (
              <SkuRow key={sku.id} sku={sku} onView={openDrawer} />
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== SIDE DRAWER ===== */}
      <DrawerOverlay isOpen={isDrawerOpen} onClose={closeDrawer} />
      <SkuDrawer sku={selectedSku} isOpen={isDrawerOpen} onClose={closeDrawer} />
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

const SkuRow = ({ sku, onView }: any) => (
  <tr className="border-b last:border-none">
    <td className="p-4">
      <div className="font-medium">{sku.name}</div>
      <div className="text-xs text-gray-500">
        {sku.id} • {sku.category}
      </div>
    </td>
    <td className="text-center">
      {sku.status === "healthy" && "✅"}
      {sku.status === "warning" && "⚠️"}
      {sku.status === "aging" && "🧴"}
      {sku.status === "down" && "📉"}
    </td>
    <td className="text-center font-medium">{sku.qty}</td>
    <td className="text-center">
      <span className="px-2 py-1 rounded-full bg-orange-50 text-orange-600 text-xs">
        {sku.days}
      </span>
    </td>
    <td className="text-center font-medium">{sku.cost}</td>
    <td className="text-center">{sku.deals ?? "—"}</td>
    <td className="text-center font-medium">{sku.exposure ?? "—"}</td>
    <td
      className="text-center text-blue-600 cursor-pointer"
      onClick={() => onView(sku)}
    >
      View
    </td>
  </tr>
);

/* ===================== DRAWER ===================== */

const DrawerOverlay = ({ isOpen, onClose }: any) => (
  <div
    onClick={onClose}
    className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  />
);

const SkuDrawer = ({ sku, isOpen, onClose }: any) => (
  <div
    className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-xl p-6 overflow-y-auto
      transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
  >
    {sku && (
      <>
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">{sku.name}</h2>
            <p className="text-sm text-gray-500">
              {sku.id} • {sku.category}
            </p>
          </div>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <DrawerStat label="Stock Qty" value={sku.qty} />
          <DrawerStat label="Days Cover" value={sku.days} />
          <DrawerStat label="Cost Value" value={sku.cost} />
          <DrawerStat label="Revenue Exposure" value={sku.exposure ?? "—"} />
        </div>

        <div className="border rounded-lg p-4 text-sm text-gray-700">
          ⚠️ This SKU is impacting active deals. Consider priority allocation or emergency replenishment.
        </div>
      </>
    )}
  </div>
);

const DrawerStat = ({ label, value }: any) => (
  <div className="border rounded-lg p-4">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-lg font-semibold">{value}</p>
  </div>
);
