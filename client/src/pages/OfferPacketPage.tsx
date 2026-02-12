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

  type Row = {
    id: string;
    sku: string;
    units: number;
    price: number;
    eta: string;
  };

  const initialRows: Row[] = tableData
    .filter((i: any) => selectedItems.includes(i.id))
    .map((item: any) => ({
      id: item.id,
      sku: item.sku,
      units: item.ncuStocks,
      price: 12290.26,
      eta: item.etax || "N/A",
    }));

  const [rows, setRows] = useState<Row[]>(initialRows);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [showCancelPopup, setShowCancelPopup] = useState(false);

  const handleChange = (
    id: string,
    field: "units" | "price",
    value: string
  ) => {
    setRows((prev: Row[]) =>
      prev.map((row: Row) =>
        row.id === id ? { ...row, [field]: Number(value) } : row
      )
    );
  };

  const handleEdit = (idx: number) => {
    setEditIdx(idx);
  };

  const handleDelete = (idx: number) => {
    setRows((prev: Row[]) => prev.filter((_: Row, i: number) => i !== idx));
    if (editIdx === idx) setEditIdx(null);
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
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-slate-200">

    
        <div className="px-8 py-6 border-b">
          <h1 className="text-2xl font-semibold text-slate-800">
            Offer Packet
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Division: <span className="font-medium">{divisionName}</span>
          </p>
        </div>

        
        <div className="px-8 py-6 overflow-x-auto">
          <table className="w-full border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-50 text-slate-600 text-sm">
              <tr>
                <th className="px-4 py-3 text-left">SKU</th>
                <th className="px-4 py-3 text-center">Units</th>
                <th className="px-4 py-3 text-center">Price</th>
                <th className="px-4 py-3 text-center">ETA</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {rows.map((row: Row, idx: number) => (
                <tr
                  key={row.id}
                  className={`border-t ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                  } hover:bg-indigo-50 transition`}
                >
                  <td className="px-4 py-3 font-medium text-slate-700">
                    {row.sku}
                  </td>

                  <td className="px-4 py-3 text-center">
                    {editIdx === idx ? (
                      <input
                        type="number"
                        min={0}
                        value={row.units}
                        onChange={(e) =>
                          handleChange(row.id, "units", e.target.value)
                        }
                        className="w-24 rounded-lg border border-slate-300 px-3 py-1.5 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    ) : (
                      <span>{row.units}</span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-center">
                    {editIdx === idx ? (
                      <input
                        type="number"
                        min={0}
                        value={row.price}
                        onChange={(e) =>
                          handleChange(row.id, "price", e.target.value)
                        }
                        className="w-32 rounded-lg border border-slate-300 px-3 py-1.5 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    ) : (
                      <span>{row.price}</span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-center text-slate-600">
                    {row.eta}
                  </td>

                  <td className="px-4 py-3 text-center flex items-center gap-2 justify-center">
                    <button
                      className="text-gray-600 hover:text-gray-800 p-2"
                      onClick={() => handleEdit(idx)}
                      title="Edit"
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 p-2"
                      onClick={() => handleDelete(idx)}
                      title="Delete"
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
