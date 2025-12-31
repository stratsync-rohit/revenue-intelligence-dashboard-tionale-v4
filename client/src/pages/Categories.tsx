import React from "react";
import {
  AlertTriangle,
  BarChart3,
  Boxes,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const Categories: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-10 space-y-10">

      {/* ===== Category Alerts (TOP) ===== */}
      <div>
        <h1 className="text-2xl font-semibold mb-6">Category Alerts</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Body Care */}
          <div className="rounded-xl border-l-4 border-orange-400 bg-orange-50 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 text-sm rounded-full border bg-white font-medium">
                Body Care
              </span>
              <AlertTriangle className="text-orange-500" size={18} />
            </div>
            <h3 className="font-semibold text-lg">
              Margin dropped 4.2% vs last quarter
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              USD 38,000 margin erosion
            </p>
          </div>

          {/* Tester Kits */}
          <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 text-sm rounded-full border bg-white font-medium">
                Tester Kits
              </span>
              <AlertTriangle className="text-red-500" size={18} />
            </div>
            <h3 className="font-semibold text-lg">
              12 SKUs below safety stock
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              USD 185,000 revenue at risk
            </p>
          </div>

          {/* Eau de Toilette */}
          <div className="rounded-xl border-l-4 border-orange-400 bg-orange-50 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 text-sm rounded-full border bg-white font-medium">
                Eau de Toilette
              </span>
              <AlertTriangle className="text-orange-500" size={18} />
            </div>
            <h3 className="font-semibold text-lg">
              Primary supplier lead time increased
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Potential stockout in 18 days
            </p>
          </div>
        </div>
      </div>

      {/* ===== Summary Cards (BOTTOM) ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-xl border p-6 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Categories</p>
            <h2 className="text-3xl font-bold">6</h2>
          </div>
          <BarChart3 className="text-blue-300" size={32} />
        </div>

        <div className="rounded-xl border p-6 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total SKUs</p>
            <h2 className="text-3xl font-bold">386</h2>
          </div>
          <Boxes className="text-blue-300" size={32} />
        </div>

        <div className="rounded-xl border p-6 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <h2 className="text-3xl font-bold">$8.8M</h2>
          </div>
          <DollarSign className="text-blue-300" size={32} />
        </div>

        <div className="rounded-xl border p-6 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Avg Margin</p>
            <h2 className="text-3xl font-bold">28.0%</h2>
          </div>
          <TrendingUp className="text-blue-300" size={32} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
