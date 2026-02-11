import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect, useMemo } from "react";
import Select from "react-select";

/* ================= TYPES ================= */
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
  eta: string | null;
};

/* ================= COLUMNS ================= */
const divisionColumns = [
  { key: "select", label: "Select" },
  { key: "id", label: "Item ID" },
  { key: "sku", label: "SKU" },
  { key: "brand", label: "Brand" },
  { key: "details", label: "Details" },
  { key: "ncuStocks", label: "NCU Stocks" },
  { key: "ncuCows", label: "NCU Cows" },
  { key: "eta", label: "ETA" }
];

const divisionData: DivisionItem[] = [
  {
    id: "596865",
    sku: "SKU-ZHD3L8",
    brand: "GUCCI",
    subBrand: "Gucci Bloom",
    shippingTimeline: "Next 7 Days",
    details: "Sophisticated woody composition",
    ncuStocks: 879,
    ncuCows: 902,
    eta: "25/02/2026"
  },
  {
    id: "605839",
    sku: "SKU-CJ2W6N",
    brand: "GUCCI",
    subBrand: "Gucci Guilty",
    shippingTimeline: "Next 30 Days",
    details: "Subtle spicy blend",
    ncuStocks: 505,
    ncuCows: 0,
    eta: null
  },
  {
    id: "353324",
    sku: "SKU-MOYY15",
    brand: "BURBERRY",
    subBrand: "Burberry Brit",
    shippingTimeline: "Next 7 Days",
    details: "Subtle aquatic composition",
    ncuStocks: 367,
    ncuCows: 1061,
    eta: "02/04/2026"
  },
  {
    id: "794186",
    sku: "SKU-70MULF",
    brand: "BURBERRY",
    subBrand: "Burberry Touch",
    shippingTimeline: "Next 30 Days",
    details: "Vibrant aquatic blend inspired by premium quality",
    ncuStocks: 483,
    ncuCows: 0,
    eta: null
  },
  {
    id: "313794",
    sku: "SKU-HCBC30",
    brand: "CHANNEL",
    subBrand: "Chanel No. 5",
    shippingTimeline: "Next 7 Days",
    details: "Vibrant citrus blend limited edition",
    ncuStocks: 493,
    ncuCows: 2359,
    eta: "21/02/2026"
  },
  {
    id: "669042",
    sku: "SKU-MEYAYG",
    brand: "CHANNEL",
    subBrand: "Chanel Coco",
    shippingTimeline: "Next 30 Days",
    details: "Vibrant floral essence premium quality",
    ncuStocks: 170,
    ncuCows: 905,
    eta: "12/02/2026"
  },
  {
    id: "245263",
    sku: "SKU-RVH4R5",
    brand: "HUGO BOSS",
    subBrand: "Boss Bottled",
    shippingTimeline: "Next 7 Days",
    details: "Elegant oriental fragrance long-lasting",
    ncuStocks: 84,
    ncuCows: 129,
    eta: "14/03/2026"
  },
  {
    id: "796435",
    sku: "SKU-QZBHNI",
    brand: "HUGO BOSS",
    subBrand: "Boss The Scent",
    shippingTimeline: "Next 30 Days",
    details: "Elegant spicy composition premium quality",
    ncuStocks: 952,
    ncuCows: 667,
    eta: "24/02/2026"
  },
  {
    id: "227600",
    sku: "SKU-IJWD4G",
    brand: "GUCCI",
    subBrand: "Gucci Bloom",
    shippingTimeline: "Next 30 Days",
    details: "Luxurious aquatic composition long-lasting",
    ncuStocks: 280,
    ncuCows: 0,
    eta: null
  },
  {
    id: "638252",
    sku: "SKU-49BA7O",
    brand: "HUGO BOSS",
    subBrand: "Boss Bottled",
    shippingTimeline: "Next 7 Days",
    details: "Bold spicy fragrance limited edition",
    ncuStocks: 551,
    ncuCows: 1061,
    eta: "03/04/2026"
  }
];



const DivisionPage = () => {
  const { divisionId } = useParams();
  const navigate = useNavigate();


  const [sourceData, setSourceData] = useState<DivisionItem[]>(divisionData);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);


  const [cowOnly, setCowOnly] = useState(true);
  const [etaFilter, setEtaFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState<OptionType | null>(null);
  const [selectedShipping, setSelectedShipping] = useState<OptionType[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<OptionType[]>([]);
  const [selectedSubBrands, setSelectedSubBrands] = useState<OptionType[]>([]);

  const customers: OptionType[] = [
    { value: "1", label: "Customer A" },
    { value: "2", label: "Customer B" },
    { value: "3", label: "Customer C" }
  ];

  const shippingOptions: OptionType[] = [
    { value: "Next 7 Days", label: "Next 7 Days" },
    { value: "Next 30 Days", label: "Next 30 Days" }
  ];

  const brandOptions: OptionType[] = useMemo(() => {
    return [...new Set(sourceData.map(d => d.brand))].map(b => ({
      value: b,
      label: b
    }));
  }, [sourceData]);

  const subBrandOptions: OptionType[] = useMemo(() => {
    if (selectedBrands.length === 0) return [];
    const brands = selectedBrands.map(b => b.value);

    return [...new Set(
      sourceData
        .filter(d => brands.includes(d.brand))
        .map(d => d.subBrand)
    )].map(sb => ({ value: sb, label: sb }));
  }, [selectedBrands, sourceData]);

  const tableData = useMemo(() => {
    return sourceData.filter(item => {
   
      if (cowOnly && item.ncuCows === 0) return false;

 
      if (etaFilter !== "All" && item.shippingTimeline !== etaFilter) {
        return false;
      }

  
      if (
        selectedShipping.length &&
        !selectedShipping.some(s => s.value === item.shippingTimeline)
      ) {
        return false;
      }

      if (
        selectedBrands.length &&
        !selectedBrands.some(b => b.value === item.brand)
      ) {
        return false;
      }

      // SubBrand
      if (
        selectedSubBrands.length &&
        !selectedSubBrands.some(sb => sb.value === item.subBrand)
      ) {
        return false;
      }

      return true;
    });
  }, [
    sourceData,
    cowOnly,
    etaFilter,
    selectedShipping,
    selectedBrands,
    selectedSubBrands
  ]);

  /* ================= UI ================= */
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Offer generation</h1>
        <p className="text-sm text-gray-500">Division: Grocery</p>
      </div>

      {/* TOP FILTER BAR */}
      <div className="bg-white p-4 rounded-lg shadow flex items-center gap-6">
        <label className="flex items-center gap-2 font-semibold">
          <input
            type="checkbox"
            checked={cowOnly}
            onChange={() => setCowOnly(!cowOnly)}
            className="w-5 h-5"
          />
          COW
        </label>

        <div className="flex items-center gap-2">
          <span className="font-semibold">ETA:</span>
          <select
            value={etaFilter}
            onChange={e => setEtaFilter(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="All">All</option>
            <option value="Next 7 Days">Next 7 Days</option>
            <option value="Next 30 Days">Next 30 Days</option>
          </select>
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="ml-auto px-4 py-2 border rounded-md font-semibold"
        >
          Filter
        </button>
      </div>

      {/* ADVANCED FILTERS */}
      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow grid grid-cols-1 md:grid-cols-4 gap-4">
          <Select
            value={selectedCustomer}
            onChange={v => setSelectedCustomer(v as OptionType)}
            options={customers}
            isClearable
            placeholder="Select Customer"
          />

          <Select
            isMulti
            value={selectedShipping}
            onChange={v => setSelectedShipping(v as OptionType[])}
            options={shippingOptions}
            placeholder="Select Timelines"
          />

          <Select
            isMulti
            value={selectedBrands}
            onChange={v => {
              setSelectedBrands(v as OptionType[]);
              setSelectedSubBrands([]);
            }}
            options={brandOptions}
            placeholder="Select Brands"
          />

          <Select
            isMulti
            value={selectedSubBrands}
            onChange={v => setSelectedSubBrands(v as OptionType[])}
            options={subBrandOptions}
            isDisabled={selectedBrands.length === 0}
            placeholder="Select Sub-Brands"
          />
        </div>
      )}

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              {divisionColumns.map(col => (
                <th key={col.key} className="p-3 text-left font-semibold">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map(item => (
              <tr key={item.id} className="border-b hover:bg-indigo-50">
                {divisionColumns.map(col =>
                  col.key === "select" ? (
                    <td key={col.key} className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() =>
                          setSelectedItems(prev =>
                            prev.includes(item.id)
                              ? prev.filter(i => i !== item.id)
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

      {/* ACTION */}
      <div className="flex justify-end">
        <button
          disabled={!selectedItems.length}
          onClick={() =>
            navigate(`/division/${divisionId}/offer`, {
              state: { selectedItems, tableData }
            })
          }
          className={`px-6 py-2 rounded-lg text-white ${
            selectedItems.length
              ? "bg-indigo-500 hover:bg-indigo-600"
              : "bg-gray-300"
          }`}
        >
          Generate Offer
        </button>
      </div>
    </div>
  );
};

export default DivisionPage;
