const divisionColumns = [
  { key: "select", label: "Select" },
  { key: "id", label: "Item ID" },
  { key: "sku", label: "SKU" },
  { key: "brand", label: "Brand" },
  { key: "details", label: "Details" },
  { key: "ncuStocks", label: "NCU Stocks" },
  { key: "ncuCows", label: "NCU Cows" },
  { key: "etax", label: "ETAX" }
];


const divisionData = [
  {
    id: "596865",
    sku: "SKU-ZHD3L8",
    brand: "GUCCI",
    details: "Sophisticated woody composition long-lasting premium quality inspired by long-lasting",
    ncuStocks: 879,
    ncuCows: 902,
    etax: "25/02/2026"
  },
  {
    id: "313794",
    sku: "SKU-HCBC30",
    brand: "CHANNEL",
    details: "Vibrant citrus blend limited edition limited edition featuring",
    ncuStocks: 493,
    ncuCows: 2359,
    etax: "21/02/2026"
  },
  {
    id: "353324",
    sku: "SKU-MOYY15",
    brand: "BURBERRY",
    details: "Subtle aquatic composition long-lasting featuring with hints of",
    ncuStocks: 367,
    ncuCows: 1061,
    etax: "02/04/2026"
  },
  {
    id: "605839",
    sku: "SKU-CJ2W6N",
    brand: "GUCCI",
    details: "Subtle spicy blend with hints of inspired by long-lasting",
    ncuStocks: 505,
    ncuCows: 0,
    etax: null
  },
  {
    id: "794186",
    sku: "SKU-70MULF",
    brand: "BURBERRY",
    details: "Vibrant aquatic blend limited edition inspired by premium quality",
    ncuStocks: 483,
    ncuCows: 0,
    etax: null
  },
  {
    id: "376515",
    sku: "SKU-2FJC3N",
    brand: "BURBERRY",
    details: "Fresh floral blend with hints of limited edition inspired by premium quality",
    ncuStocks: 916,
    ncuCows: 690,
    etax: "08/02/2026"
  },
  {
    id: "669042",
    sku: "SKU-MEYAYG",
    brand: "CHANNEL",
    details: "Vibrant floral essence premium quality limited edition inspired by hints of",
    ncuStocks: 170,
    ncuCows: 905,
    etax: "12/02/2026"
  },
  {
    id: "245263",
    sku: "SKU-RVH4R5",
    brand: "HUGO BOSS",
    details: "Elegant oriental fragrance long-lasting with hints of premium quality",
    ncuStocks: 84,
    ncuCows: 129,
    etax: "14/03/2026"
  },
  {
    id: "796435",
    sku: "SKU-QZBHNI",
    brand: "HUGO BOSS",
    details: "Elegant spicy composition with hints of limited edition premium quality",
    ncuStocks: 952,
    ncuCows: 667,
    etax: "24/02/2026"
  },
  {
    id: "227600",
    sku: "SKU-IJWD4G",
    brand: "GUCCI",
    details: "Luxurious aquatic composition with hints of long-lasting inspired by",
    ncuStocks: 280,
    ncuCows: 0,
    etax: null
  },
  {
    id: "638252",
    sku: "SKU-49BA7O",
    brand: "HUGO BOSS",
    details: "Bold spicy fragrance long-lasting limited edition inspired by premium quality",
    ncuStocks: 551,
    ncuCows: 1061,
    etax: "03/04/2026"
  }
];

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import divisionsData from "../pages/DivisionsData";


const DivisionPage = () => {
  const { divisionId } = useParams();
  const division = useSelector((state) => state.division.selectedDivision);

  const [selectedItems, setSelectedItems] = useState([]);
  const [showOffer, setShowOffer] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [offerName, setOfferName] = useState(false);

  let divisionName =
    division && String(division.id) === String(divisionId)
      ? division.name
      : divisionsData.find((d) => String(d.id) === String(divisionId))?.name;

  /* ------------------ HANDLERS ------------------ */
  const handleDraftSave = () => {
    const draft = {
      id: Date.now(),
      divisionId,
      items: selectedItems
    };
    localStorage.setItem("offerDraft", JSON.stringify(draft));
    setShowCancelModal(false);
    setShowOffer(false);
  };

  const handleFinalSave = () => {
    const finalOffer = {
      name: offerName,
      items: selectedItems,
      divisionId
    };
    localStorage.setItem("finalOffer", JSON.stringify(finalOffer));
    setShowSaveModal(false);
    setShowOffer(false);
    setSelectedItems([]);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Offer generation</h1>
        <p className="text-sm text-gray-500">
          Division: {divisionName || "-"}
        </p>
      </div>

      {/* ================= FILTER BAR ================= */}
      <div className="bg-white rounded-lg shadow-sm border p-4 flex items-center gap-6">
        <label className="flex items-center gap-2 font-semibold">
          <input type="checkbox" defaultChecked className="w-5 h-5" />
          COW
        </label>

        <div className="flex items-center gap-2">
          <span className="font-semibold">ETA:</span>
          <select className="border rounded-md px-3 py-2">
            <option>All</option>
            <option>Next 7 Days</option>
            <option>Next 30 Days</option>
          </select>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <span className="font-semibold">Customers:</span>
          <select className="border rounded-md px-3 py-2 min-w-[180px]">
            <option>All Customers</option>
            <option>Retail</option>
            <option>Wholesale</option>
          </select>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-lg shadow border overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              {divisionColumns.map((col) => (
                <th key={col.key} className="p-3 text-left font-semibold">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {divisionData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-indigo-50">
                {divisionColumns.map((col) =>
                  col.key === "select" ? (
                    <td key={col.key} className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() =>
                          setSelectedItems((prev) =>
                            prev.includes(item.id)
                              ? prev.filter((id) => id !== item.id)
                              : [...prev, item.id]
                          )
                        }
                      />
                    </td>
                  ) : (
                    <td key={col.key} className="p-3">
                      {item[col.key] || "—"}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* GENERATE OFFER BUTTON */}
      <div className="flex justify-end">
        <button
          disabled={selectedItems.length === 0}
          onClick={() => setShowOffer(true)}
          className={`px-6 py-2 rounded-lg text-white font-semibold ${
            selectedItems.length === 0
              ? "bg-gray-300"
              : "bg-indigo-500 hover:bg-indigo-600"
          }`}
        >
          Generate Offer
        </button>
      </div>

      {/* ================= OFFER PACKET ================= */}
      {showOffer && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[80%] rounded-xl p-6">
            <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
              Offer Packet
            </h2>

            <table className="w-full mb-8 border rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <tr>
                  <th className="p-3 text-left">SKU</th>
                  <th className="p-3">Units</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">ETA</th>
                </tr>
              </thead>
              <tbody>
                {divisionData
                  .filter((i) => selectedItems.includes(i.id))
                  .map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-3">{item.sku}</td>
                      <td className="p-3">{item.ncuStocks}</td>
                      <td className="p-3">$12290.26</td>
                      <td className="p-3">{item.etax || "N/A"}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="flex justify-between">
              <button
                onClick={() => setShowSaveModal(true)}
                className="bg-green-500 text-white px-6 py-2 rounded-lg"
              >
                Save
              </button>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                Export
              </button>
              <button className="bg-yellow-400 px-6 py-2 rounded-lg">
                Send Email
              </button>
              <button
                onClick={() => setShowCancelModal(true)}
                className="bg-red-500 text-white px-6 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SAVE MODAL */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            <h3 className="text-xl font-semibold mb-4">Save Offer Packet</h3>
            <input
              placeholder="Enter offer packet name"
              onChange={(e) => setOfferName(e.target.value)}
              className="w-full border p-2 rounded mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowSaveModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Close
              </button>
              <button
                onClick={handleFinalSave}
                className="bg-indigo-500 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CANCEL MODAL */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[450px]">
            <h3 className="text-xl font-semibold mb-4">
              Cancel Offer Packet
            </h3>
            <p className="mb-6">
              Do you want to save the draft or cancel the offer packet?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowCancelModal(false);
                  setShowOffer(false);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel Offer
              </button>
              <button
                onClick={handleDraftSave}
                className="bg-indigo-500 text-white px-4 py-2 rounded"
              >
                Save Draft
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DivisionPage;