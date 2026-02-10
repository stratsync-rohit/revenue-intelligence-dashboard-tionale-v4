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
    subBrand: "Gucci Bloom",
    shippingTimeline: "Next 7 Days",
    details: "Sophisticated woody composition long-lasting premium quality inspired by long-lasting",
    ncuStocks: 879,
    ncuCows: 902,
    etax: "25/02/2026"
  },
  {
    id: "313794",
    sku: "SKU-HCBC30",
    brand: "CHANNEL",
    subBrand: "Chanel No. 5",
    shippingTimeline: "Next 30 Days",
    details: "Vibrant citrus blend limited edition limited edition featuring",
    ncuStocks: 493,
    ncuCows: 2359,
    etax: "21/02/2026"
  },
  {
    id: "353324",
    sku: "SKU-MOYY15",
    brand: "BURBERRY",
    subBrand: "Burberry Brit",
    shippingTimeline: "Next 7 Days",
    details: "Subtle aquatic composition long-lasting featuring with hints of",
    ncuStocks: 367,
    ncuCows: 1061,
    etax: "02/04/2026"
  },
  {
    id: "605839",
    sku: "SKU-CJ2W6N",
    brand: "GUCCI",
    subBrand: "Gucci Guilty",
    shippingTimeline: "Next 30 Days",
    details: "Subtle spicy blend with hints of inspired by long-lasting",
    ncuStocks: 505,
    ncuCows: 0,
    etax: null
  },
  {
    id: "794186",
    sku: "SKU-70MULF",
    brand: "BURBERRY",
    subBrand: "Burberry Touch",
    shippingTimeline: "Next 7 Days",
    details: "Vibrant aquatic blend limited edition inspired by premium quality",
    ncuStocks: 483,
    ncuCows: 0,
    etax: null
  },
  {
    id: "376515",
    sku: "SKU-2FJC3N",
    brand: "BURBERRY",
    subBrand: "Burberry Brit",
    shippingTimeline: "Next 30 Days",
    details: "Fresh floral blend with hints of limited edition inspired by premium quality",
    ncuStocks: 916,
    ncuCows: 690,
    etax: "08/02/2026"
  },
  {
    id: "669042",
    sku: "SKU-MEYAYG",
    brand: "CHANNEL",
    subBrand: "Chanel Coco",
    shippingTimeline: "Next 7 Days",
    details: "Vibrant floral essence premium quality limited edition inspired by hints of",
    ncuStocks: 170,
    ncuCows: 905,
    etax: "12/02/2026"
  },
  {
    id: "245263",
    sku: "SKU-RVH4R5",
    brand: "HUGO BOSS",
    subBrand: "Boss Bottled",
    shippingTimeline: "Next 30 Days",
    details: "Elegant oriental fragrance long-lasting with hints of premium quality",
    ncuStocks: 84,
    ncuCows: 129,
    etax: "14/03/2026"
  },
  {
    id: "796435",
    sku: "SKU-QZBHNI",
    brand: "HUGO BOSS",
    subBrand: "Boss The Scent",
    shippingTimeline: "Next 7 Days",
    details: "Elegant spicy composition with hints of limited edition premium quality",
    ncuStocks: 952,
    ncuCows: 667,
    etax: "24/02/2026"
  },
  {
    id: "227600",
    sku: "SKU-IJWD4G",
    brand: "GUCCI",
    subBrand: "Gucci Bloom",
    shippingTimeline: "Next 30 Days",
    details: "Luxurious aquatic composition with hints of long-lasting inspired by",
    ncuStocks: 280,
    ncuCows: 0,
    etax: null
  },
  {
    id: "638252",
    sku: "SKU-49BA7O",
    brand: "HUGO BOSS",
    subBrand: "Boss Bottled",
    shippingTimeline: "Next 7 Days",
    details: "Bold spicy fragrance long-lasting limited edition inspired by premium quality",
    ncuStocks: 551,
    ncuCows: 1061,
    etax: "03/04/2026"
  }
];

import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import divisionsData from "../pages/divisionsData";

// Type definitions
type OptionType = { value: string; label: string };
type DivisionItem = {
  id: string;
  sku: string;
  brand: string;
  subBrand: string;
  shippingTimeline: string;
  details: string;
  ncuStocks: number;
  ncuCows: number;
  etax: string | null;
};


const DivisionPage = () => {
  const { divisionId } = useParams();
  const division = useSelector((state: any) => state.division.selectedDivision);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const navigate = useNavigate();
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [offerName, setOfferName] = useState("");
  
  // Filter states
  const [selectedCustomer, setSelectedCustomer] = useState<OptionType | null>(null);
  const [selectedShippingTimelines, setSelectedShippingTimelines] = useState<OptionType[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<OptionType[]>([]);
  const [selectedSubBrands, setSelectedSubBrands] = useState<OptionType[]>([]);
  const [tableData, setTableData] = useState<DivisionItem[]>(divisionData);
  const [showFilters, setShowFilters] = useState(false);

  // Sample data for dropdowns
  const customers: OptionType[] = [
    { value: "1", label: "Customer A" },
    { value: "2", label: "Customer B" },
    { value: "3", label: "Customer C" },
    { value: "4", label: "Customer D" },
    { value: "5", label: "Customer E" },
  ];

  const shippingTimelines: OptionType[] = [
    { value: "Next 7 Days", label: "Next 7 Days" },
    { value: "Next 30 Days", label: "Next 30 Days" },
    { value: "Next 60 Days", label: "Next 60 Days" },
    { value: "Next 90 Days", label: "Next 90 Days" },
  ];

  // Extract unique brands and sub-brands from data
  const brands: OptionType[] = useMemo(() => {
    const uniqueBrands = [...new Set(divisionData.map(item => item.brand))];
    return uniqueBrands.map(brand => ({ value: brand, label: brand }));
  }, []);

  const subBrands: OptionType[] = useMemo(() => {
    const uniqueSubBrands = [...new Set(divisionData.map(item => item.subBrand))];
    return uniqueSubBrands.map(subBrand => ({ value: subBrand, label: subBrand }));
  }, []);

  // Initialize filters with all options selected by default
  useEffect(() => {
    if (brands.length > 0 && subBrands.length > 0) {
      setSelectedShippingTimelines(shippingTimelines);
      setSelectedBrands(brands);
      setSelectedSubBrands(subBrands);
    }
  }, [brands, subBrands]);

  // Fetch data when customer changes
  useEffect(() => {
    if (selectedCustomer && divisionId) {
      fetchDivisionData(divisionId, selectedCustomer.value);
    }
  }, [selectedCustomer, divisionId]);

  // Local filtering logic
  useEffect(() => {
    let filtered = [...divisionData];

    // Filter by shipping timeline
    if (selectedShippingTimelines.length > 0 && selectedShippingTimelines.length < shippingTimelines.length) {
      const timelineValues = selectedShippingTimelines.map(t => t.value);
      filtered = filtered.filter(item => timelineValues.includes(item.shippingTimeline));
    }

    // Filter by brand
    if (selectedBrands.length > 0 && selectedBrands.length < brands.length) {
      const brandValues = selectedBrands.map(b => b.value);
      filtered = filtered.filter(item => brandValues.includes(item.brand));
    }

    // Filter by sub-brand
    if (selectedSubBrands.length > 0 && selectedSubBrands.length < subBrands.length) {
      const subBrandValues = selectedSubBrands.map(sb => sb.value);
      filtered = filtered.filter(item => subBrandValues.includes(item.subBrand));
    }

    setTableData(filtered);
  }, [selectedShippingTimelines, selectedBrands, selectedSubBrands, brands, subBrands]);

  // API call function
  const fetchDivisionData = async (divisionId: string, customerId: string) => {
    try {
      const response = await fetch(`/api/division/${divisionId}/customer/${customerId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        // Update table data with new data from API
        setTableData(data);
        // Reload page
        window.location.reload();
      } else {
        console.error("Failed to fetch division data");
      }
    } catch (error) {
      console.error("Error fetching division data:", error);
      // For now, just reload the page even if API fails
      window.location.reload();
    }
  };

  // Handle customer change
  const handleCustomerChange = (selectedOption: OptionType | null) => {
    setSelectedCustomer(selectedOption);
    // API call and page reload will happen in useEffect
  };

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
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-center gap-6 flex-wrap">
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
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 border rounded-md font-semibold hover:bg-gray-50"
            >
              Filter
            </button>
          </div>
        </div>

        {/* Filter Options - Shown below Filter button */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Customer Dropdown - Single Select, Searchable */}
            <div>
              <label className="block text-sm font-semibold mb-2">Customer</label>
              <Select
                value={selectedCustomer}
                onChange={handleCustomerChange}
                options={customers}
                isSearchable
                isClearable
                placeholder="Select Customer"
                className="text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "38px",
                    fontSize: "14px",
                  }),
                }}
              />
            </div>

            {/* Shipping Timeline - Multi Select, All Selected by Default */}
            <div>
              <label className="block text-sm font-semibold mb-2">Shipping Timeline</label>
              <Select<OptionType, true>
                value={selectedShippingTimelines}
                onChange={(newValue) => setSelectedShippingTimelines(newValue as OptionType[])}
                options={shippingTimelines}
                isMulti
                placeholder="Select Timelines"
                className="text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "38px",
                    fontSize: "14px",
                  }),
                }}
              />
            </div>

            {/* Brand - Multi Select, Searchable, All Selected by Default */}
            <div>
              <label className="block text-sm font-semibold mb-2">Brand</label>
              <Select<OptionType, true>
                value={selectedBrands}
                onChange={(newValue) => setSelectedBrands(newValue as OptionType[])}
                options={brands}
                isMulti
                isSearchable
                placeholder="Select Brands"
                className="text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "38px",
                    fontSize: "14px",
                  }),
                }}
              />
            </div>

            {/* Sub-Brand - Multi Select, Searchable, All Selected by Default */}
            <div>
              <label className="block text-sm font-semibold mb-2">Sub-Brand</label>
              <Select<OptionType, true>
                value={selectedSubBrands}
                onChange={(newValue) => setSelectedSubBrands(newValue as OptionType[])}
                options={subBrands}
                isMulti
                isSearchable
                placeholder="Select Sub-Brands"
                className="text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "38px",
                    fontSize: "14px",
                  }),
                }}
              />
            </div>
          </div>
        )}
      </div>

  
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
            {tableData.map((item) => (
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
                      {(item as any)[col.key] || "—"}
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
          onClick={() => {
            if (selectedItems.length > 0) {
              // Pass selectedItems via state
              navigate(`/division/${divisionId}/offer`, {
                state: {
                  selectedItems,
                  tableData,
                  divisionName,
                  divisionId
                }
              });
            }
          }}
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
      {/* Offer Packet now opens in a new page */}

      {/* SAVE MODAL */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            <h3 className="text-xl font-semibold mb-4">Save Offer Packet</h3>
            <input
              placeholder="Enter offer packet name"
              value={offerName}
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