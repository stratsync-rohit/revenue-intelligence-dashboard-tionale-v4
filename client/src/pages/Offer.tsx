import { useState } from "react";

const Offer = () => {
  const [division, setDivision] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  // Divisions array inlined below

  const handleDivisionChange = async (e) => {
    const selectedDivision = e.target.value;
    setDivision(selectedDivision);

    setLoading(true);

    try {
      // 🔗 API call (dummy)
      const response = await fetch(
        `/api/offers?division=${selectedDivision}`
      );

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 max-w-2xl mx-auto">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Create Offer Page</h1>

      {/* Text Area */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700">Offer Name / Description</label>
        <textarea
          rows="3"
          placeholder="Enter offer details..."
          className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Division Dropdown */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700">Division</label>
        <select
          value={division}
          onChange={handleDivisionChange}
          className="w-52 mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Division</option>
          {[
            { id: 1, name: "North" },
            { id: 2, name: "South" },
            { id: 3, name: "East" },
            { id: 4, name: "West" }
          ].map((div) => (
            <option key={div.id} value={div.name}>
              {div.name}
            </option>
          ))}
        </select>
      </div>

      

      {loading && <p className="text-blue-500">Loading data, please wait...</p>}

     
      {!loading && data && (
        <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
          <h3 className="font-semibold mb-2">Division Data</h3>
          <pre className="text-xs text-gray-700 bg-white p-2 rounded overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Offer;
