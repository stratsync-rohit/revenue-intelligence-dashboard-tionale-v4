import React, { useEffect, useState } from "react";

const CreateOffer = () => {
  const [description, setDescription] = useState("");
  const [divisions, setDivisions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  // Loading state (optional)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use sample data for now
    const sampleDivisions = [
      { id: 1, name: "Electronics" },
      { id: 2, name: "Fashion" },
      { id: 3, name: "Grocery" },
    ];
    const sampleDescription = "This is a sample offer description fetched from backend.";
    setTimeout(() => {
      setDivisions(sampleDivisions);
      setDescription(sampleDescription);
      setLoading(false);
    }, 700); // Simulate network delay
  }, []);

  return (
    <div className="w-full h-full px-0 py-8">
      {/* Card */}
      <div className="bg-white rounded-xl shadow-sm border p-8 w-full min-h-[80vh]">
        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center h-40 text-gray-500">Loading...</div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold tracking-tight">
                Create Offer
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Add offer details and assign it to a division
              </p>
            </div>

            {/* Offer Description */}
            <div className="mb-7">
              <label className="block text-sm font-medium mb-2">
                Offer Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write offer details here..."
                rows={10}
                className="w-full border rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 my-6" />

            {/* Division Section */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                Select Division
              </label>
              <select
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Division</option>
                {divisions.map((division) => (
                  <option key={division.id} value={division.id}>
                    {division.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end pt-4 border-t">
              <button
                className="bg-gray-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                Save Offer
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateOffer;
