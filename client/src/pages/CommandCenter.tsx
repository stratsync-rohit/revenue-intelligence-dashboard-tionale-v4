const CommandCenter = () => {
  return (
    <>
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
              <div className="text-2xl mb-2">✨</div>
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
