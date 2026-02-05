import { useState } from "react";

const Offer = () => {
  const [division, setDivision] = useState("");
  const [brands, setBrands] = useState([]);
  const [subBrands, setSubBrands] = useState([]);
  const [shipping, setShipping] = useState([]);
  const [cowOnly, setCowOnly] = useState(false);

  const [loading, setLoading] = useState(false);
  const [offers, setOffers] = useState([]);

  // 🔹 Division → API call
  const handleDivisionChange = async (e) => {
    const selectedDivision = e.target.value;
    setDivision(selectedDivision);
    setLoading(true);

    try {
      const response = await fetch(
        `/api/offers?division=${selectedDivision}`
      );
      const result = await response.json();
      setOffers(result); // expecting array
    } catch (error) {
      console.error("Error fetching offers", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Generic multi-select handler
  const toggleValue = (value, state, setState) => {
    setState(
      state.includes(value)
        ? state.filter((v) => v !== value)
        : [...state, value]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-8">

        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              Create Offer
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Configure and reference previously generated offers
            </p>
          </div>
        </div>

        {/* Offer Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Offer Description
          </label>
          <textarea
            rows="3"
            placeholder="Example: 10% discount for North division customers"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Division */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Division
          </label>
          <select
            value={division}
            onChange={handleDivisionChange}
            className="w-64 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Division</option>
            {["North", "South", "East", "West"].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-4 gap-6 mb-10">

          {/* Brand */}
          <div>
            <p className="font-medium text-gray-700 mb-2">Brand</p>
            {["HUGO BOSS", "BURBERRY", "CHANNEL"].map((b) => (
              <label key={b} className="flex items-center gap-2 text-sm mb-1">
                <input
                  type="checkbox"
                  checked={brands.includes(b)}
                  onChange={() => toggleValue(b, brands, setBrands)}
                />
                {b}
              </label>
            ))}
          </div>

          {/* Sub Brand */}
          <div>
            <p className="font-medium text-gray-700 mb-2">Sub Brand</p>
            {["Premium", "Limited", "Eco"].map((sb) => (
              <label key={sb} className="flex items-center gap-2 text-sm mb-1">
                <input
                  type="checkbox"
                  checked={subBrands.includes(sb)}
                  onChange={() => toggleValue(sb, subBrands, setSubBrands)}
                />
                {sb}
              </label>
            ))}
          </div>

          {/* Shipping */}
          <div>
            <p className="font-medium text-gray-700 mb-2">Shipping Timeline</p>
            {["1-2 Days", "3-5 Days", "7+ Days"].map((s) => (
              <label key={s} className="flex items-center gap-2 text-sm mb-1">
                <input
                  type="checkbox"
                  checked={shipping.includes(s)}
                  onChange={() => toggleValue(s, shipping, setShipping)}
                />
                {s}
              </label>
            ))}
          </div>

          {/* COW */}
          <div className="flex items-center gap-3 mt-6">
            <input
              type="checkbox"
              checked={cowOnly}
              onChange={() => setCowOnly(!cowOnly)}
            />
            <span className="text-sm font-medium text-gray-700">
              COW Only
            </span>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-blue-600 text-sm mb-6">
            Fetching offers for selected division...
          </div>
        )}

        {/* Offers Table */}
        {!loading && offers.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              List of Offers Generated Earlier
            </h2>

            <div className="overflow-x-auto border rounded-lg">
              <table className="min-w-full text-sm">
                <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  <tr>
                    <th className="p-3">
                      <input type="checkbox" />
                    </th>
                    <th className="p-3 text-left">Item ID</th>
                    <th className="p-3 text-left">SKU</th>
                    <th className="p-3 text-left">Brand</th>
                    <th className="p-3 text-left">Details</th>
                    <th className="p-3 text-right">NCU Stock</th>
                    <th className="p-3 text-right">NCU COW</th>
                    <th className="p-3 text-left">ETA</th>
                  </tr>
                </thead>

                <tbody>
                  {offers.map((item) => (
                    <tr
                      key={item.itemId}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-3">
                        <input type="checkbox" />
                      </td>
                      <td className="p-3">{item.itemId}</td>
                      <td className="p-3">{item.sku}</td>
                      <td className="p-3 font-medium">{item.brand}</td>
                      <td className="p-3 max-w-md truncate">
                        {item.details}
                      </td>
                      <td className="p-3 text-right">{item.ncuStock}</td>
                      <td className="p-3 text-right">{item.ncuCow}</td>
                      <td className="p-3">{item.eta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Offer;
