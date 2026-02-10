import { useLocation, useNavigate } from "react-router-dom";


import { useState } from "react";

const OfferPacketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedItems = [], tableData = [], divisionName = "-", divisionId = "" } = location.state || {};

  // If no data, redirect back
  if (!selectedItems.length || !tableData.length) {
    navigate(`/division/${divisionId}`);
    return null;
  }

  // Editable state for units and price
  const initialRows = tableData
    .filter((i: any) => selectedItems.includes(i.id))
    .map((item: any) => ({
      id: item.id,
      sku: item.sku,
      units: item.ncuStocks,
      price: 12290.26,
      eta: item.etax || "N/A"
    }));
  const [rows, setRows] = useState(initialRows);

  const handleChange = (id: string, field: "units" | "price", value: string) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? { ...row, [field]: field === "units" ? Number(value) : Number(value) }
          : row
      )
    );
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="bg-white w-full max-w-4xl rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
          Offer Packet
        </h2>
        <p className="text-center text-gray-500 mb-4">Division: {divisionName}</p>
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
            {rows.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="p-3">{row.sku}</td>
                <td className="p-3">
                  <input
                    type="number"
                    min={0}
                    value={row.units}
                    onChange={e => handleChange(row.id, "units", e.target.value)}
                    className="border rounded px-2 py-1 w-24"
                  />
                </td>
                <td className="p-3">
                  <input
                    type="number"
                    min={0}
                    value={row.price}
                    onChange={e => handleChange(row.id, "price", e.target.value)}
                    className="border rounded px-2 py-1 w-28"
                  />
                </td>
                <td className="p-3">{row.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Save</button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Export</button>
          <button className="bg-yellow-400 px-6 py-2 rounded-lg">Send Email</button>
          <button
            onClick={() => navigate(-1)}
            className="bg-red-500 text-white px-6 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferPacketPage;
