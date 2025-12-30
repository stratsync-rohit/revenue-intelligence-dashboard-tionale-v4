import { AlertTriangle, AlertCircle } from "lucide-react";
import RevenueAlert from "../components/command-center/RevenueAlert";

const CommandCenter = () => {
  return (
    <>
    <RevenueAlert />

      {/* ===== Section 1 ===== */}
      <div className="border rounded-xl p-6 m-6 bg-white">
        <h3 className="text-lg font-semibold mb-3">
          Why These Three Scenarios Matter Together
        </h3>

        <p className="text-sm text-gray-600 mb-5">
          For a revenue leader, this shows that:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span>
              <strong>Supply risk</strong> kills execution
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span>
              <strong>Revenue escape</strong> kills growth
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span>
              <strong>Inventory risk</strong> kills credibility
            </span>
          </div>
        </div>

        <p className="text-sm text-blue-600 font-medium">
          StratSync connects all three before revenue is lost, using both
          structured and unstructured signals.
        </p>
      </div>

      {/* ===== Section 5: Deal Pipeline with Intelligence Overlay ===== */}
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
              {/* Row 1 */}
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

              {/* Row 2 */}
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

              {/* Row 3 */}
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

              {/* Row 4 */}
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold">
                  Asia Pacific Roll-out
                </td>
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

      {/* ===== Section 3: Inventory Intelligence ===== */}
      <div className="border rounded-2xl p-6 m-6 bg-white">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-orange-500 text-xl">📦</span>
          <h3 className="text-lg font-semibold">Inventory Intelligence</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Critical Inventory */}
          <div className="border-l-4 border-red-500 rounded-xl bg-red-50 p-5">
            <div className="flex items-center gap-2 mb-3 text-red-600 font-semibold">
              ⚠️ Critical Inventory
            </div>

            <div className="bg-white rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-sm">Brand X EDP 100ml</h4>
                <span className="text-sm font-semibold">USD 310,000</span>
              </div>

              <div className="text-xs text-gray-600 flex items-center gap-2 mb-1">
                ⏱️ 18 days cover
              </div>

              <div className="text-xs flex items-center gap-2 text-gray-600">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                Supplier reliability: medium
              </div>
            </div>
          </div>

          {/* Watchlist */}
          <div className="border-l-4 border-yellow-400 rounded-xl bg-yellow-50 p-5">
            <div className="flex items-center gap-2 mb-3 text-yellow-700 font-semibold">
              ⚠️ Watchlist
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-sm">Brand Z EDP 50ml</h4>
                  <span className="text-sm font-semibold">USD 145,000</span>
                </div>

                <div className="text-xs text-gray-600 mb-1">
                  ⏱️ 28 days cover
                </div>

                <div className="text-xs flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  Supplier lead time: declining
                </div>
              </div>

              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-sm">Oud Intense 75ml</h4>
                  <span className="text-sm font-semibold">USD 98,000</span>
                </div>

                <div className="text-xs text-gray-600 mb-1">
                  ⏱️ 32 days cover
                </div>

                <div className="text-xs flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Supplier lead time: stable
                </div>
              </div>
            </div>
          </div>

          {/* Healthy */}
          <div className="border-l-4 border-green-500 rounded-xl bg-green-50 p-5 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-1">24</div>
              <p className="text-sm text-gray-600">SKUs within safety buffer</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Section 2 ===== */}
      <div className="border rounded-2xl p-6 m-6 bg-white">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-blue-500 text-xl">🗂️</span>
          <h3 className="text-lg font-semibold">
            Where StratSync Signals Come From
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
            {[
              "CRM Deals & Stages",
              "ERP Purchase Orders",
              "Inventory & WMS",
              "WhatsApp Messages",
              "Emails",
              "Sales Call Transcripts",
              "Supplier PDFs & Invoices",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-xl p-6 text-center text-sm font-medium text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex flex-col gap-3 text-gray-400 text-xl">
            <span>→</span>
            <span>→</span>
            <span>→</span>
          </div>

          {/* Engine */}
          <div className="w-44 h-44 rounded-full border-[12px] border-blue-200 flex items-center justify-center text-center">
            <div>
              <p className="text-sm font-semibold text-gray-700">
                StratSync <br /> Intelligence <br /> Engine
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommandCenter;
