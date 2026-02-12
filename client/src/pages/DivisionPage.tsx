import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import Select from "react-select";

/* ================= TYPES ================= */
type OptionType = { value: string; label: string };

type DivisionItem = {
  id: string;
  sku: string;
  brand: string;
  subBrand: string;
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
    details: "Sophisticated woody composition",
    ncuStocks: 879,
    ncuCows: 902,
    eta: "18/01/2026" // Next 7 Days
  },
  {
    id: "605839",
    sku: "SKU-CJ2W6N",
    brand: "GUCCI",
    subBrand: "Gucci Guilty",
    details: "Subtle spicy blend",
    ncuStocks: 505,
    ncuCows: 0,
    eta: "20/01/2026" // Next 7 Days
  },
  {
    id: "353324",
    sku: "SKU-MOYY15",
    brand: "BURBERRY",
    subBrand: "Burberry Brit",
    details: "Subtle aquatic composition",
    ncuStocks: 367,
    ncuCows: 1061,
    eta: "05/02/2026" // Next 30 Days
  },
  {
    id: "313794",
    sku: "SKU-HCBC30",
    brand: "CHANNEL",
    subBrand: "Chanel No. 5",
    details: "Vibrant citrus blend limited edition",
    ncuStocks: 493,
    ncuCows: 2359,
    eta: "10/02/2026" // Next 30 Days
  },
  {
    id: "245263",
    sku: "SKU-RVH4R5",
    brand: "HUGO BOSS",
    subBrand: "Boss Bottled",
    details: "Elegant oriental fragrance long-lasting",
    ncuStocks: 84,
    ncuCows: 129,
    eta: "28/02/2026" // Next 60 Days
  },

  { id: "782341", sku: "SKU-PLX9T2", brand: "DIOR", subBrand: "Sauvage", details: "Fresh aromatic masculine fragrance", ncuStocks: 720, ncuCows: 1450, eta: "16/01/2026" }, // 7 Days
  { id: "918274", sku: "SKU-QWE8K1", brand: "YVES SAINT LAURENT", subBrand: "Y Eau de Parfum", details: "Intense woody fougere fragrance", ncuStocks: 640, ncuCows: 890, eta: null },
  { id: "462918", sku: "SKU-XMZ3P9", brand: "ARMANI", subBrand: "Acqua di Gio", details: "Fresh marine citrus scent", ncuStocks: 520, ncuCows: 1320, eta: "02/02/2026" }, // 30 Days
  { id: "574839", sku: "SKU-LKJ7N4", brand: "PRADA", subBrand: "Luna Rossa", details: "Clean and energetic fragrance", ncuStocks: 310, ncuCows: 450, eta: "25/02/2026" }, // 60 Days
  { id: "689120", sku: "SKU-TYU6V8", brand: "VERSACE", subBrand: "Eros", details: "Sweet vanilla mint fragrance", ncuStocks: 415, ncuCows: 980, eta: "22/01/2026" }, // 7 Days
  { id: "834729", sku: "SKU-UIO4M6", brand: "TOM FORD", subBrand: "Black Orchid", details: "Rich dark floral fragrance", ncuStocks: 290, ncuCows: 610, eta: "12/02/2026" }, // 30 Days
  { id: "219384", sku: "SKU-ASD2F7", brand: "CALVIN KLEIN", subBrand: "CK One", details: "Light fresh unisex fragrance", ncuStocks: 860, ncuCows: 1200, eta: null },
  { id: "748291", sku: "SKU-ZXC8V1", brand: "DOLCE & GABBANA", subBrand: "Light Blue", details: "Crisp fruity summer scent", ncuStocks: 430, ncuCows: 760, eta: "18/02/2026" }, // 60 Days
  { id: "563920", sku: "SKU-HJK3L2", brand: "MONT BLANC", subBrand: "Legend", details: "Woody aromatic masculine scent", ncuStocks: 375, ncuCows: 540, eta: "19/01/2026" }, // 7 Days
  { id: "192837", sku: "SKU-ERT9P4", brand: "BVLGARI", subBrand: "Man in Black", details: "Spicy oriental bold fragrance", ncuStocks: 260, ncuCows: 410, eta: "05/03/2026" }, // 60 Days
  { id: "847362", sku: "SKU-YUI7K5", brand: "LANCOME", subBrand: "La Vie Est Belle", details: "Sweet floral gourmand fragrance", ncuStocks: 540, ncuCows: 890, eta: "03/02/2026" }, // 30 Days
  { id: "384756", sku: "SKU-GHF6D3", brand: "PACO RABANNE", subBrand: "1 Million", details: "Warm spicy leather fragrance", ncuStocks: 610, ncuCows: 1020, eta: null },
  { id: "657483", sku: "SKU-BNM5Q2", brand: "ISSEY MIYAKE", subBrand: "L'Eau d'Issey", details: "Fresh aquatic floral scent", ncuStocks: 295, ncuCows: 470, eta: "01/03/2026" }, // 60 Days
  { id: "918203", sku: "SKU-WER4T8", brand: "CAROLINA HERRERA", subBrand: "Good Girl", details: "Sweet warm sensual fragrance", ncuStocks: 480, ncuCows: 810, eta: "21/01/2026" }, // 7 Days
  { id: "274839", sku: "SKU-MNB1X9", brand: "JEAN PAUL GAULTIER", subBrand: "Le Male", details: "Minty vanilla masculine scent", ncuStocks: 350, ncuCows: 620, eta: "15/02/2026" }, // 30 Days
  { id: "556712", sku: "SKU-POI8L0", brand: "MAISON MARGIELA", subBrand: "Replica Jazz Club", details: "Warm rum tobacco fragrance", ncuStocks: 210, ncuCows: 330, eta: null }
];


const getTimelineFromEta = (eta: string | null) => {
  if (!eta) return null;

  const today = new Date();
  const [day, month, year] = eta.split("/").map(Number);
  const etaDate = new Date(year, month - 1, day);

  const diffDays = Math.ceil(
    (etaDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffDays <= 7) return "Next 7 Days";
  if (diffDays <= 30) return "Next 30 Days";
  if (diffDays <= 60) return "Next 60 Days";

  return "Beyond 60 Days";
};

/* ================= COMPONENT ================= */
const DivisionPage = () => {
  const { divisionId } = useParams();
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [cowOnly, setCowOnly] = useState(true);
  const [etaFilter, setEtaFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const [selectedShipping, setSelectedShipping] = useState<OptionType[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<OptionType[]>([]);
  const [selectedSubBrands, setSelectedSubBrands] = useState<OptionType[]>([]);
  const [selectedCustomers, setSelectedCustomers] = useState<OptionType[]>([]);
  // Dummy customer options
  const customerOptions: OptionType[] = [
    { value: "customer1", label: "Customer 1" },
    { value: "customer2", label: "Customer 2" },
    { value: "customer3", label: "Customer 3" },
    { value: "customer4", label: "Customer 4" },
  ];

  /* ================= OPTIONS ================= */
  const shippingOptions: OptionType[] = [
    { value: "Next 7 Days", label: "Next 7 Days" },
    { value: "Next 30 Days", label: "Next 30 Days" },
    { value: "Next 60 Days", label: "Next 60 Days" }
  ];

  const brandOptions: OptionType[] = useMemo(
    () =>
      [...new Set(divisionData.map(d => d.brand))].map(b => ({
        value: b,
        label: b
      })),
    []
  );

  const subBrandOptions: OptionType[] = useMemo(() => {
    if (!selectedBrands.length) return [];
    const brands = selectedBrands.map(b => b.value);

    return [...new Set(
      divisionData
        .filter(d => brands.includes(d.brand))
        .map(d => d.subBrand)
    )].map(sb => ({ value: sb, label: sb }));
  }, [selectedBrands]);

  /* ================= FILTER LOGIC ================= */
  const tableData = useMemo(() => {
    return divisionData.filter(item => {
      const timeline = getTimelineFromEta(item.eta);

      if (cowOnly && item.ncuCows === 0) return false;

      if (etaFilter !== "All" && timeline !== etaFilter) return false;

      if (
        selectedShipping.length &&
        !selectedShipping.some(s => s.value === timeline)
      )
        return false;

      if (
        selectedBrands.length &&
        !selectedBrands.some(b => b.value === item.brand)
      )
        return false;

      if (
        selectedSubBrands.length &&
        !selectedSubBrands.some(sb => sb.value === item.subBrand)
      )
        return false;

      // Customer filter logic placeholder (no customer in item)
      // If you want to filter by customer, add customer property to DivisionItem and update here
      return true;
    });
  }, [
    cowOnly,
    etaFilter,
    selectedShipping,
    selectedBrands,
    selectedSubBrands,
    selectedCustomers
  ]);

  /* ================= UI ================= */
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Offer generation</h1>
        <p className="text-sm text-gray-500">Division: Grocery</p>
      </div>

      {/* TOP BAR */}
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
            <option value="Next 60 Days">Next 60 Days</option>
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
          
            value={selectedCustomers}
            onChange={v => setSelectedCustomers(v as OptionType[])}
            options={customerOptions}
            placeholder="Search Customer"
            isSearchable={true}
          />

          <Select
            
            value={selectedShipping}
            onChange={v => setSelectedShipping(v as OptionType[])}
            options={shippingOptions}
            placeholder="Shipping Timeline"
          />

          <Select
            isMulti
            value={selectedBrands}
            onChange={v => {
              setSelectedBrands(v as OptionType[]);
              setSelectedSubBrands([]);
            }}
            options={brandOptions}
            placeholder="Search Brand"
            isSearchable={true}
          />

          <Select
            isMulti
            value={selectedSubBrands}
            onChange={v => setSelectedSubBrands(v as OptionType[])}
            options={subBrandOptions}
            isDisabled={!selectedBrands.length}
            placeholder="Search Sub-Brand"
            isSearchable={true}
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
