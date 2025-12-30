import { AlertTriangle, AlertCircle } from "lucide-react";
import { Database } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Lightbulb } from "lucide-react";



const RevenueAlert = () => {
  return (
    <>
      <div className="border rounded-2xl p-6 m-6 bg-white">
        <div className="flex items-center gap-2 mb-6">
          <AlertTriangle className="text-red-500" />
          <h3 className="text-lg font-semibold">Priority Revenue Alerts</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Alert 1 */}
          <div className="border-l-4 border-red-500 bg-red-50 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-2">
                <AlertCircle className="text-red-700" />
                <h4 className="font-semibold text-sm text-red-700">
                  Supplier Fulfilment Risk Detected
                </h4>
                <span className="text-xs bg-white px-2 py-0.5 rounded-full">
                  #1
                </span>
              </div>

              <p className="text-xs italic text-gray-600 mb-3">
                When suppliers become the bottleneck
              </p>

              <div className="text-sm text-gray-700 space-y-1 mb-4">
                <p>
                  <strong>Supplier:</strong> ABC Fragrances
                </p>
                <p>
                  <strong>SKU:</strong> Brand X EDP 100ml
                </p>
                <p>
                  <strong>Revenue at Risk:</strong>{" "}
                  <span className="font-semibold">USD 420,000</span>
                </p>
              </div>

              <div className="mb-3">
                <p className="text-xs font-semibold text-gray-600 mb-1">
                  SIGNALS SURFACED
                </p>

                <div className="text-xs mb-2 bg-white/50 p-2 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Database className="inline-block text-blue-600 w-3 h-3" />
                    <p className="font-medium text-blue-600 mb-0">
                      Structured Data
                    </p>
                  </div>
                  <ul className="list-disc ml-4 text-gray-600">
                    <li>PO pending for 11 days in ERP</li>
                    <li>Supplier avg confirmation time is 4 days</li>
                  </ul>
                </div>

              <div className="text-xs mb-2 bg-white/50 p-2 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare className="inline-block text-green-600 w-3 h-3" />
                    <p className="font-medium text-green-600 mb-0">
                      Unstructured Data
                    </p>
                  </div>
                  <ul className="list-disc ml-4 text-gray-600">
                    <li>
                      WhatsApp: “Stock confirmation next week” (6 days ago)
                    </li>
                    <li>No follow-up communication since</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-100 text-red-700 text-xs p-3 rounded-lg mb-3">
                <strong>Impact:</strong> High probability of shipment delay
                leading to customer penalty or cancellation
              </div>

              <div className="bg-blue-50 text-blue-700 text-xs p-3 rounded-lg">
                <Lightbulb className="inline-block w-3 h-3 mr-1" />
                <strong>StratSync Recommendation:</strong>
                <ul className="list-disc ml-4 mt-1">
                  <li>Escalate supplier immediately</li>
                  <li>Activate alternate supplier</li>
                  <li>Flag impacted customer deals</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                className="bg-red-600 text-white text-sm px-2 py-2 rounded-lg font-semibold shadow-sm transition-all duration-200 hover:bg-blue-700 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                
                Escalate Supplier
              </button>
              <button
                className="border border-blue-600 text-blue-600 text-sm px-4 py-2 rounded-lg font-semibold bg-white shadow-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-800 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span className="inline-block align-middle mr-2">🔄</span>
                Secure Alternate Stock
              </button>
            </div>
          </div>

          {/* Alert 2 */}
          <div className="border-l-4 border-red-500 bg-red-50 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-2">
                <AlertCircle className="text-red-700" />
                <h4 className="font-semibold text-sm text-red-700">
                  Deal Slippage Risk Increasing
                </h4>
                <span className="text-xs bg-white px-2 py-0.5 rounded-full">
                  #2
                </span>
              </div>

              <p className="text-xs italic text-gray-600 mb-3">
                When deals silently slip away
              </p>

              <div className="text-sm text-gray-700 space-y-1 mb-4">
                <p>
                  <strong>Customer:</strong> Middle East Distributor
                </p>
                <p>
                  <strong>SKU:</strong> Brand X EDP 100ml
                </p>
                <p>
                  <strong>Revenue at Risk:</strong>{" "}
                  <span className="font-semibold">USD 310,000</span>
                </p>
              </div>

              <div className="bg-red-100 text-red-700 text-xs p-3 rounded-lg mb-3">
                <strong>Impact:</strong> High likelihood of deal loss or margin
                erosion
              </div>

              <div className="bg-blue-50 text-blue-700 text-xs p-3 rounded-lg">
                <strong>StratSync Recommendation:</strong>
                <ul className="list-disc ml-4 mt-1">
                  <li>Trigger commercial nudge</li>
                  <li>Surface competitive pricing intel</li>
                  <li>Recommend senior-level intervention</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg">
                Trigger Commercial Nudge
              </button>
              <button className="border text-sm px-4 py-2 rounded-lg">
                Escalate to Leadership
              </button>
            </div>
          </div>

          {/* Alert 3 */}
          <div className="border-l-4 border-yellow-500 bg-yellow-50 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-2">
                <AlertTriangle className="text-yellow-700" />
                <h4 className="font-semibold text-sm text-yellow-700">
                  Inventory Constraint Detected
                </h4>
                <span className="text-xs bg-white px-2 py-0.5 rounded-full">
                  #3
                </span>
              </div>

              <p className="text-xs italic text-gray-600 mb-3">
                When stock becomes the hidden blocker
              </p>

              <div className="text-sm text-gray-700 space-y-1 mb-4">
                <p>
                  <strong>SKU:</strong> Brand Y Tester Kits
                </p>
                <p>
                  <strong>Inventory Cover:</strong> 12 days remaining
                </p>
                <p>
                  <strong>Revenue Exposure:</strong>{" "}
                  <span className="font-semibold">USD 185,000</span>
                </p>
              </div>

              <div className="bg-yellow-100 text-yellow-700 text-xs p-3 rounded-lg mb-3">
                <strong>Impact:</strong> Deal execution risk and delayed
                onboarding
              </div>

              <div className="bg-blue-50 text-blue-700 text-xs p-3 rounded-lg">
                <strong>StratSync Recommendation:</strong>
                <ul className="list-disc ml-4 mt-1">
                  <li>Reserve inventory for high-value deals</li>
                  <li>Pause new deal creation</li>
                  <li>Trigger replenishment workflow</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg">
                Reserve Inventory
              </button>
              <button className="border text-sm px-4 py-2 rounded-lg">
                Pause New Deals
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevenueAlert;
