import React from "react";

const DealPipelineTable = () => (
  <div className="border rounded-2xl p-6 m-6 bg-white">
    <div className="flex items-center gap-2 mb-6">
      <span className="text-blue-500 text-xl">🗂️</span>
      <h3 className="text-lg font-semibold">
        Deal Pipeline with Intelligence Overlay
      </h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-xs uppercase text-gray-500 border-b bg-gray-50">
            <th className="text-left py-3 px-4">Deal Name</th>
            <th className="text-left py-3 px-4">Customer</th>
            <th className="text-left py-3 px-4">Supplier</th>
            <th className="text-left py-3 px-4">SKU</th>
            <th className="text-left py-3 px-4">Deal Value</th>
            <th className="text-left py-3 px-4">Stage</th>
            <th className="text-left py-3 px-4">Risk</th>
            <th className="text-left py-3 px-4">Signal</th>
            <th />
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr className="border-b hover:bg-gray-50">
            <td className="py-4 px-4 font-semibold">ME Distributor Q4</td>
            <td className="px-4">UAE Distributor</td>
            <td className="px-4">ABC Fragrances</td>
            <td className="px-4">Brand X EDP 100ml</td>
            <td className="px-4 font-semibold">USD 310,000</td>
            <td className="px-4">
              <span className="px-3 py-1 text-xs rounded-full border">
                Commercial Approval
              </span>
            </td>
            <td className="px-4 flex items-center gap-2 text-red-600">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              High
            </td>
            <td className="px-4 text-gray-600">
              Supplier confirmation missing…
            </td>
            <td className="px-4 text-gray-400">›</td>
          </tr>
          <tr className="border-b hover:bg-gray-50">
            <td className="py-4 px-4 font-semibold">EU Retail Launch</td>
            <td className="px-4">Sephora France</td>
            <td className="px-4">Grasse Essences</td>
            <td className="px-4">Rose Absolute 50ml</td>
            <td className="px-4 font-semibold">USD 485,000</td>
            <td className="px-4">
              <span className="px-3 py-1 text-xs rounded-full border">
                Contract Review
              </span>
            </td>
            <td className="px-4 flex items-center gap-2 text-yellow-600">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              Medium
            </td>
            <td className="px-4 text-gray-600">
              Lead time exceeds delivery…
            </td>
            <td className="px-4 text-gray-400">›</td>
          </tr>
          <tr className="border-b hover:bg-gray-50">
            <td className="py-4 px-4 font-semibold">GCC Exclusive</td>
            <td className="px-4">Dubai Luxury Retail</td>
            <td className="px-4">Oriental Scents</td>
            <td className="px-4">Oud Collection Set</td>
            <td className="px-4 font-semibold">USD 275,000</td>
            <td className="px-4">
              <span className="px-3 py-1 text-xs rounded-full border">
                Negotiation
              </span>
            </td>
            <td className="px-4 flex items-center gap-2 text-green-600">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Low
            </td>
            <td className="px-4 text-gray-600">On track</td>
            <td className="px-4 text-gray-400">›</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-4 px-4 font-semibold">Asia Pacific Roll-out</td>
            <td className="px-4">Singapore Cosmetics</td>
            <td className="px-4">ABC Fragrances</td>
            <td className="px-4">Floral EDT Range</td>
            <td className="px-4 font-semibold">USD 195,000</td>
            <td className="px-4">
              <span className="px-3 py-1 text-xs rounded-full border">
                Final Approval
              </span>
            </td>
            <td className="px-4 flex items-center gap-2 text-yellow-600">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              Medium
            </td>
            <td className="px-4 text-gray-600">
              Payment terms under discussion…
            </td>
            <td className="px-4 text-gray-400">›</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default DealPipelineTable;
