
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useSelector } from "react-redux";
import { useSelectedDivision } from "../context/SelectedDivisionContext";
import CancelPopup from "../components/common/CancelPopup";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const OfferPacketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();



  // Always get selectedItems and tableData from location.state for navigation reliability
  const { selectedItems = [], tableData = [], divisionName: stateDivisionName = "-", divisionId: stateDivisionId = "" } = location.state || {};

  // Get selected division from context
  const { selectedDivision } = useSelectedDivision();

  // Use context division if available, else fallback to state
  const divisionName = selectedDivision || stateDivisionName;
  const divisionId = stateDivisionId;


  if (!selectedItems.length || !tableData.length) {
    navigate(`/division/${divisionId}`);
    return null;
  }


  // Table state for editing offer price
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
            <h1 className="text-2xl font-semibold text-slate-800">Offer Packet</h1>
            <div className="text-lg font-medium text-blue-700 mb-2">Step 3</div>
            <p className="text-sm text-slate-500 mt-1">
              Division: <span className="font-medium">{divisionName}</span>
            </p>
          </div>
          <div className="px-2 sm:px-4 md:px-8 py-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse whitespace-nowrap rounded-xl overflow-hidden">
              <thead className="sticky top-0 z-20 ">
                <tr className="bg-gray-200 text-xs uppercase text-gray-600">
                  <th colSpan={12} className="p-2 text-center whitespace-nowrap border border-gray-300 rounded-tl-xl">NCUs listing</th>
                  <th className="p-2 text-center border border-gray-300"> Price</th>
                  <th colSpan={2} className="p-2 text-center border border-gray-300">Stocks</th>
                  <th colSpan={2} className="p-2 text-center border border-gray-300">2 Weeks</th>
                  <th colSpan={2} className="p-2 text-center border border-gray-300">4 Weeks</th>
                  <th rowSpan={2} className="p-2 px-4 text-center border border-gray-300 rounded-tr-xl">Actions</th>
                </tr>
                <tr className="bg-gray-100 text-left sticky top-[32px]">
                  {[
                    "Item Ref",
                    "UPC",
                    "Brand",
                    "Sub Brand",
                    "Description",
                    "Brand Classification",
                    // "Remarks",
                    "Pack Size",
                    "MIN (USD)",
                    "FLOOR (USD)",
                    "LSP",
                    "LSP DATE",
                    "PSO FOR CUSTOMER",
                    "OFFER PRICE",
                    "OFFER QTY CLEAN",
                    "OFFER QTY PROCESSED",
                    "OFFER QTY CLEAN",
                    "OFFER QTY PROCESSED",
                    "OFFER QTY CLEAN",
                    "OFFER QTY PROCESSED"
                  ].map(h => (
                    <th
                      key={h}
                      className={
                        (["MIN (USD)", "FLOOR (USD)", "LSP", "LSP DATE"].includes(h)
                          ? "bg-yellow-100 "
                          : "") +
                        (h === "OFFER PRICE"
                          ? "px-12 "
                          : h === "LSP DATE"
                            ? "px-14 "
                            : h === "Description"
                              ? "px-6 min-w-[260px] "
                              : h === "Sub Brand"
                                ? "px-6 min-w-[240px] "
                                : "px-6 ") +
                        "py-3 border text-base whitespace-nowrap"
                      }
                    >
                      {h}
                    </th>
                  ))}
                 
                </tr>
              </thead>
              <tbody>
                {rows.map(item => (
                  <tr key={item.id} className="hover:bg-indigo-50">
                    <td className="px-6 py-3 border">{item.itemRef}</td>
                    <td className="px-6 py-3 border">{item.upc}</td>
                    <td className="px-6 py-3 border">{item.brand}</td>
                    <td className="px-6 min-w-[240px] py-3 border">{item.subBrand}</td>
                    <td className="px-6 min-w-[260px] py-3 border">{item.description}</td>
                    <td className="px-6 py-3 border text-center">{item.brandClassification || "N/A"}</td>
                    {/* <td className="px-6 py-3 border">{item.remarks}</td> */}
                    <td className="px-6 py-3 border">{item.packSize}</td>
                    <td className="px-6 py-3 border text-center bg-yellow-50">{item.minUsd}</td>
                    <td className="px-6 py-3 border text-center bg-yellow-50">{item.floorUsd}</td>
                    <td className="px-6 py-3 border text-center bg-yellow-50">{item.lsp}</td>
                    <td className="px-6 py-3 border text-center bg-yellow-50">{item.lspDate}</td>
                    <td className="px-6 py-3 border text-center">{item.psoForCustomer}</td>
                    <td className="px-12 py-3 border text-base text-center">
                      {editId === item.id ? (
                        <input
                          type="number"
                          min={0}
                          value={item.offerPrice}
                          onChange={e => handlePriceChange(item.id, e.target.value)}
                          className="w-32  rounded-lg border border-slate-300 px-3 py-1.5 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          autoFocus
                        />
                      ) : (
                        <span>{item.offerPrice}</span>
                      )}
                    </td>
                    <td className="px-6 py-3 border text-center">
                      {editId === item.id ? (
                        <input
                          type="number"
                          min={0}
                          max={999999}
                          value={item.stockClean}
                          onChange={e => setRows(prev => prev.map(row => row.id === item.id ? { ...row, stockClean: Number(e.target.value) } : row))}
                          className="w-24 rounded-lg border border-slate-300 px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      ) : (
                        <span>{item.stockClean}</span>
                      )}
                    </td>
                    <td className="px-6 py-3 border text-center">
                      {editId === item.id ? (
                        <input
                          type="number"
                          min={0}
                          max={999999}
                          value={item.stockProcess}
                          onChange={e => setRows(prev => prev.map(row => row.id === item.id ? { ...row, stockProcess: Number(e.target.value) } : row))}
                          className="w-24 rounded-lg border border-slate-300 px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      ) : (
                        <span>{item.stockProcess}</span>
                      )}
                    </td>
                    <td className="px-6 py-3 border text-center">
                      {editId === item.id ? (
                        <input
                          type="number"
                          min={0}
                          max={999999}
                          value={item.week2Clean}
                          onChange={e => setRows(prev => prev.map(row => row.id === item.id ? { ...row, week2Clean: Number(e.target.value) } : row))}
                          className="w-24 rounded-lg border border-slate-300 px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      ) : (
                        <span>{item.week2Clean}</span>
                      )}
                    </td>
                    <td className="px-6 py-3 border text-center">
                      {editId === item.id ? (
                        <input
                          type="number"
                          min={0}
                          max={999999}
                          value={item.week2Process}
                          onChange={e => setRows(prev => prev.map(row => row.id === item.id ? { ...row, week2Process: Number(e.target.value) } : row))}
                          className="w-24 rounded-lg border border-slate-300 px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      ) : (
                        <span>{item.week2Process}</span>
                      )}
                    </td>
                    <td className="px-6 py-3 border text-center">
                      {editId === item.id ? (
                        <input
                          type="number"
                          min={0}
                          max={999999}
                          value={item.week4Clean}
                          onChange={e => setRows(prev => prev.map(row => row.id === item.id ? { ...row, week4Clean: Number(e.target.value) } : row))}
                          className="w-24 rounded-lg border border-slate-300 px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      ) : (
                        <span>{item.week4Clean}</span>
                      )}
                    </td>
                    <td className="px-6 py-3 border text-center">
                      {editId === item.id ? (
                        <input
                          type="number"
                          min={0}
                          max={999999}
                          value={item.week4Process}
                          onChange={e => setRows(prev => prev.map(row => row.id === item.id ? { ...row, week4Process: Number(e.target.value) } : row))}
                          className="w-24 rounded-lg border border-slate-300 px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      ) : (
                        <span>{item.week4Process}</span>
                      )}
                    </td>
                    <td className="px-6 py-3 border text-center">
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        <button
                          className="text-gray-600 hover:text-indigo-600 p-2"
                          onClick={() => setEditId(item.id)}
                          title="Edit"
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
                      </span>
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