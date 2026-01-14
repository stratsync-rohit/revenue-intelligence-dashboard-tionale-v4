import React, { useState } from "react";

const deals = [
  {
    name: "ME Distributor Q4",
    customer: "UAE Distributor",
    supplier: "ABC Fragrances",
    sku: "Brand X EDP 100ml",
    value: "USD 310,000",
    stage: "Commercial Approval",
    signal: "Supplier confirmation missing…",
    risk: "High",
    margin: "-2.3%",
    inventory: "850 units",
    whatsapp:
      "We're still waiting on the lab certification. Should have update by Monday.",
    email: "Last response 9 days ago discussing volume discounts",
  },
  {
    name: "EU Retail Launch",
    customer: "Sephora France",
    supplier: "Grasse Essences",
    sku: "Rose Absolute 50ml",
    value: "USD 485,000",
    stage: "Contract Review",
    signal: "Lead time exceeds delivery…",
    risk: "Medium",
    margin: "+1.4%",
    inventory: "420 units",
    whatsapp: "Supplier asked for revised forecast.",
    email: "Contract redlines shared last week",
  },
];

const DealPipelineTable = () => {
  const [selectedDeal, setSelectedDeal] = useState(null);

  return (
    <>
      {/* TABLE */}
      <div className="border rounded-2xl p-6 m-6 bg-white">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-blue-500 text-xl">🗂️</span>
          <h3 className="text-lg font-semibold">
            Deal Pipeline with Intelligence Overlay
          </h3>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="text-xs uppercase text-gray-500 border-b bg-gray-50">
              <th className="text-left py-3 px-4">Deal Name</th>
              <th className="text-left py-3 px-4">Customer</th>
              <th className="text-left py-3 px-4">Supplier</th>
              <th className="text-left py-3 px-4">SKU</th>
              <th className="text-left py-3 px-4">Deal Value</th>
              <th className="text-left py-3 px-4">Stage</th>
              <th className="text-left py-3 px-4">Signal</th>
              <th className="text-left py-3 px-4">Risk</th>
              <th />
            </tr>
          </thead>

          <tbody className="text-sm">
            {deals.map((deal, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold">{deal.name}</td>
                <td className="px-4">{deal.customer}</td>
                <td className="px-4">{deal.supplier}</td>
                <td className="px-4">{deal.sku}</td>
                <td className="px-4 font-semibold">{deal.value}</td>
                <td className="px-4">
                  <span className="px-3 py-1 text-xs rounded-full border">
                    {deal.stage}
                  </span>
                </td>
                <td className="px-4 text-gray-600">{deal.signal}</td>
                <td
                  className={`px-4 flex items-center gap-2 ${
                    deal.risk === "High"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      deal.risk === "High"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  />
                  {deal.risk}
                </td>
                <td
                  className="px-4 text-gray-400 cursor-pointer text-xl"
                  onClick={() => setSelectedDeal(deal)}
                >
                  ›
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* OVERLAY */}
      {selectedDeal && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setSelectedDeal(null)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[420px] bg-white z-50 shadow-xl
        transform transition-transform duration-300
        ${selectedDeal ? "translate-x-0" : "translate-x-full"}`}
      >
        {selectedDeal && (
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-semibold">
                {selectedDeal.name}
              </h2>
              <button
                className="text-gray-400 text-xl"
                onClick={() => setSelectedDeal(null)}
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Deal Value</span>
                <span className="font-semibold">{selectedDeal.value}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Margin vs Target</span>
                <span className="text-red-600 font-semibold">
                  {selectedDeal.margin}
                </span>
              </div>

              <div className="bg-green-50 p-3 rounded-xl">
                <p className="font-semibold mb-1">WhatsApp Snippet</p>
                <p className="text-gray-700">
                  {selectedDeal.whatsapp}
                </p>
              </div>

              <div className="bg-purple-50 p-3 rounded-xl">
                <p className="font-semibold mb-1">Email Excerpt</p>
                <p className="text-gray-700">
                  {selectedDeal.email}
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-xl">
                <p className="font-semibold text-lg">
                  {selectedDeal.inventory}
                </p>
                <p className="text-sm text-gray-600">
                  Available in warehouse
                </p>
              </div>
            </div>

            <button className="mt-auto bg-blue-600 text-white py-3 rounded-xl font-semibold">
              Take Action on Deal
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default DealPipelineTable;
