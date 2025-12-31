import React from "react";
import {
  AlertTriangle,
  BarChart3,
  Boxes,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const Categories: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-10 space-y-12">

      {/* ===== Category Alerts (TOP) ===== */}
      <div>
        <h1 className="text-2xl font-semibold mb-6">Category Alerts</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AlertCard
            title="Body Care"
            desc="Margin dropped 4.2% vs last quarter"
            sub="USD 38,000 margin erosion"
            color="orange"
          />
          <AlertCard
            title="Tester Kits"
            desc="12 SKUs below safety stock"
            sub="USD 185,000 revenue at risk"
            color="red"
          />
          <AlertCard
            title="Eau de Toilette"
            desc="Primary supplier lead time increased"
            sub="Potential stockout in 18 days"
            color="orange"
          />
        </div>
      </div>

      {/* ===== Category Performance Overview (MIDDLE) ===== */}
      <div className="rounded-xl border shadow-sm">
        <div className="px-6 py-4 border-b font-semibold text-lg flex items-center gap-2">
          <BarChart3 size={18} />
          Category Performance Overview
        </div>

        <table className="w-full text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left p-4">Category</th>
              <th>SKUs</th>
              <th>Active Deals</th>
              <th>Revenue (USD)</th>
              <th>Margin %</th>
              <th>Trend</th>
              <th>Inventory</th>
              <th>Alerts</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <Row
              name="Eau de Parfum"
              brands="Brand X, Brand Y, Brand Z"
              skus="48"
              deals="12"
              revenue="$2450K"
              margin="28.5%"
              trend="up"
              inventory="healthy"
              alerts="2"
            />
            <Row
              name="Eau de Toilette"
              brands="Brand A, Brand B"
              skus="35"
              deals="8"
              revenue="$1280K"
              margin="24.2%"
              trend="up"
              inventory="warning"
              alerts="1"
            />
            <Row
              name="Body Care"
              brands="Brand C, Brand D, Brand E"
              skus="62"
              deals="15"
              revenue="$890K"
              margin="32.1%"
              trend="down"
              inventory="critical"
              alerts="3"
            />
            <Row
              name="Makeup"
              brands="Brand F, Brand G"
              skus="124"
              deals="22"
              revenue="$1650K"
              margin="35.8%"
              trend="up"
              inventory="healthy"
            />
            <Row
              name="Skincare"
              brands="Brand H, Brand I, Brand J"
              skus="89"
              deals="18"
              revenue="$2100K"
              margin="29.4%"
              trend="up"
              inventory="healthy"
              alerts="1"
            />
            <Row
              name="Tester Kits"
              brands="Various"
              skus="28"
              deals="6"
              revenue="$420K"
              margin="18.2%"
              trend="down"
              inventory="critical"
              alerts="4"
            />
          </tbody>
        </table>
      </div>

      {/* ===== Summary Cards (BOTTOM) ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Summary title="Total Categories" value="6" icon={<BarChart3 />} />
        <Summary title="Total SKUs" value="386" icon={<Boxes />} />
        <Summary title="Total Revenue" value="$8.8M" icon={<DollarSign />} />
        <Summary title="Avg Margin" value="28.0%" icon={<TrendingUp />} />
      </div>
    </div>
  );
};

/* ===== Small Components ===== */

const AlertCard = ({ title, desc, sub, color }: any) => (
  <div
    className={`rounded-xl border-l-4 p-5 shadow-sm ${
      color === "red"
        ? "border-red-500 bg-red-50"
        : "border-orange-400 bg-orange-50"
    }`}
  >
    <div className="flex justify-between mb-3">
      <span className="px-3 py-1 text-sm rounded-full bg-white border">
        {title}
      </span>
      <AlertTriangle
        size={18}
        className={color === "red" ? "text-red-500" : "text-orange-500"}
      />
    </div>
    <h3 className="font-semibold">{desc}</h3>
    <p className="text-sm text-gray-600 mt-1">{sub}</p>
  </div>
);

const Row = ({
  name,
  brands,
  skus,
  deals,
  revenue,
  margin,
  trend,
  inventory,
  alerts,
}: any) => (
  <tr className="border-b last:border-none">
    <td className="p-4">
      <div className="font-medium">{name}</div>
      <div className="text-gray-500 text-xs">{brands}</div>
    </td>
    <td className="text-center">{skus}</td>
    <td className="text-center">{deals}</td>
    <td className="text-center font-medium">{revenue}</td>
    <td className="text-center">
      <span className="px-2 py-1 rounded-full bg-green-50 text-green-600">
        {margin}
      </span>
    </td>
    <td className="text-center">
      {trend === "up" ? (
        <ArrowUpRight className="text-green-500 mx-auto" />
      ) : (
        <ArrowDownRight className="text-red-500 mx-auto" />
      )}
    </td>
    <td className="text-center">
      <span
        className={`px-3 py-1 rounded-full text-xs ${
          inventory === "critical"
            ? "bg-red-50 text-red-600"
            : inventory === "warning"
            ? "bg-orange-50 text-orange-600"
            : "bg-green-50 text-green-600"
        }`}
      >
        {inventory}
      </span>
    </td>
    <td className="text-center">
      {alerts ? (
        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
          {alerts}
        </span>
      ) : (
        "—"
      )}
    </td>
    <td className="text-center text-blue-600 cursor-pointer">View</td>
  </tr>
);

const Summary = ({ title, value, icon }: any) => (
  <div className="rounded-xl border p-6 shadow-sm flex justify-between items-center">
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
    <div className="text-blue-300">{icon}</div>
  </div>
);

export default Categories;
