
import RevenueAlert from "../components/command-center/RevenueAlert";
import DealPipelineTable from "../components/command-center/DealPipelineTable";

const CommandCenter = () => {
  return (
    <>
    <RevenueAlert />

      
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

    
      <DealPipelineTable />

    
      <div className="border rounded-2xl p-6 m-6 bg-white">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-orange-500 text-xl">📦</span>
          <h3 className="text-lg font-semibold">Inventory Intelligence</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
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

     
          <div className="border-l-4 border-green-500 rounded-xl bg-green-50 p-5 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-1">24</div>
              <p className="text-sm text-gray-600">SKUs within safety buffer</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border rounded-2xl p-6 m-6 bg-white">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-blue-500 text-xl">🗂️</span>
          <h3 className="text-lg font-semibold">
            Where StratSync Signals Come From
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
         
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

          
          <div className="flex flex-col gap-3 text-gray-400 text-xl">
            <span>→</span>
            <span>→</span>
            <span>→</span>
          </div>

     
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
