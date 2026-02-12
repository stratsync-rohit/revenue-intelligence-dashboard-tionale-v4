
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CancelPopup from "../components/common/CancelPopup";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const OfferPacketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    selectedItems = [],
    tableData = [],
    divisionName = "-",
    divisionId = "",
  } = location.state || {};

  if (!selectedItems.length || !tableData.length) {
    navigate(`/division/${divisionId}`);
    return null;
  }


  // Table state for editing offer price
  const [editId, setEditId] = useState<string | null>(null);
  const [rows, setRows] = useState<any[]>(
    tableData.filter((i: any) => selectedItems.includes(i.id))
  );
  const [showCancelPopup, setShowCancelPopup] = useState(false);

  const handlePriceChange = (id: string, value: string) => {
    setRows(prev =>
      prev.map(item =>
        item.id === id ? { ...item, offerPrice: Number(value) } : item
      )
    );
  };

  // ...existing code...

  
  const handleSaveDraft = () => {
    const draft = {
      rows,
      divisionName,
      divisionId,
      selectedItems,
      tableData,
      ts: Date.now(),
    };
    localStorage.setItem("offerPacketDraft", JSON.stringify(draft));
    setShowCancelPopup(false);
    navigate(-1);
  };

  // Cancel draft (remove from localStorage)
  const handleCancelDraft = () => {
    localStorage.removeItem("offerPacketDraft");
    setShowCancelPopup(false);
    navigate(-1);
  };

  // Just close popup
  const handleClosePopup = () => {
    setShowCancelPopup(false);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-100 flex justify-center py-10 px-4">
        <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-200">

    
        <div className="px-8 py-6 border-b">
          <h1 className="text-2xl font-semibold text-slate-800">
            Offer Packet
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Division: <span className="font-medium">{divisionName}</span>
          </p>
        </div>

        
        <div className="px-2 sm:px-4 md:px-8 py-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="sticky top-0 z-20">
              <tr className="bg-gray-200 text-xs uppercase text-gray-600">
                <th colSpan={14} className="p-2 text-center">Item Details</th>
                <th className="p-2 text-center">Offer Price</th>
                <th colSpan={2} className="p-2 text-center">Stocks</th>
                <th colSpan={2} className="p-2 text-center">2 Weeks</th>
                <th colSpan={2} className="p-2 text-center">4 Weeks</th>
              </tr>
              <tr className="bg-gray-100 text-left sticky top-[32px]">
                {[
                  "Item Ref",
                  "UPC",
                  "Brand",
                  "Sub Brand",
                  "Description",
                  "Brand Classification",
                  "Remarks",
                  "Pack Size",
                  "MIN (USD)",
                  "FLOOR (USD)",
                  "LSP",
                  "LSP DATE",
                  "PSO_FOR_CUSTOMER",
                  "Offer Price",
                  "OFFER QTY CLEAN",
                  "OFFER QTY PROCESSED",
                  "OFFER QTY CLEAN",
                  "OFFER QTY PROCESSED",
                  "OFFER QTY CLEAN",
                  "OFFER QTY PROCESSED",
                  "4W OFFER QTY PROCESSED",
                  "Actions"
                ].map(h => (
                  <th key={h} className={h === "Offer Price" ? "px-12 py-3 border text-base" : "px-6 py-3 border text-base"}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(item => (
                <tr key={item.id} className="hover:bg-indigo-50">
                  <td className="px-6 py-3 border">{item.itemRef}</td>
                  <td className="px-6 py-3 border">{item.upc}</td>
                  <td className="px-6 py-3 border">{item.brand}</td>
                  <td className="px-6 py-3 border">{item.subBrand}</td>
                  <td className="px-6 py-3 border">{item.description}</td>
                  <td className="px-6 py-3 border">{item.brandClassification || "N/A"}</td>
                  <td className="px-6 py-3 border">{item.remarks}</td>
                  <td className="px-6 py-3 border">{item.packSize}</td>
                  <td className="px-6 py-3 border">{item.minUsd}</td>
                  <td className="px-6 py-3 border">{item.floorUsd}</td>
                  <td className="px-6 py-3 border">{item.lsp}</td>
                  <td className="px-6 py-3 border">{item.lspDate}</td>
                  <td className="px-6 py-3 border">{item.psoForCustomer}</td>
                  <td className="px-12 py-3 border text-base">
                    {editId === item.id ? (
                      <input
                        type="number"
                        min={0}
                        value={item.offerPrice}
                        onChange={e => handlePriceChange(item.id, e.target.value)}
                        className="w-32 rounded-lg border border-slate-300 px-3 py-1.5 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onBlur={() => setEditId(null)}
                        autoFocus
                      />
                    ) : (
                      <span>{item.offerPrice}</span>
                    )}
                  </td>
                  <td className="px-6 py-3 border">{item.stockClean}</td>
                  <td className="px-6 py-3 border">{item.stockProcess}</td>
                  <td className="px-6 py-3 border">{item.week2Clean}</td>
                  <td className="px-6 py-3 border">{item.week2Process}</td>
                  <td className="px-6 py-3 border">{item.week4Clean}</td>
                  <td className="px-6 py-3 border">{item.week4Process}</td>
                  <td className="px-12 py-3 border text-base">{item.offerQtyProcessed4W}</td>
                  <td className="px-6 py-3 border text-center">
                    <button
                      className="text-gray-600 hover:text-indigo-600 p-2"
                      onClick={() => setEditId(item.id)}
                      title="Edit Price"
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 p-2"
                      onClick={() => setRows(rows.filter(r => r.id !== item.id))}
                      title="Delete Row"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="px-8 py-5 border-t bg-slate-50 flex justify-between items-center">
          <button
            onClick={() => setShowCancelPopup(true)}
            className="text-slate-600 hover:text-slate-800 text-sm font-medium"
          >
            Cancel
          </button>

          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 transition">
              Export
            </button>

            <button className="px-5 py-2 rounded-lg bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition">
              Send Email
            </button>

            <button className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition shadow">
              Save Offer
            </button>
          </div>
        </div>
      </div>
    </div>
    <CancelPopup
      open={showCancelPopup}
      onClose={handleClosePopup}
      onCancelDraft={handleCancelDraft}
      onSaveDraft={handleSaveDraft}
    />
    </>
  );
};

export default OfferPacketPage;
