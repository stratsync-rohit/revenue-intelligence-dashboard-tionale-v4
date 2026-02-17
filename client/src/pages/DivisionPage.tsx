import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { useSelectedDivision } from "../context/SelectedDivisionContext";
import { sampleDivisions } from "../data/divisions";
import Select from "react-select";

/* ================= TYPES ================= */
type OptionType = { value: string; label: string };

type DivisionItem = {
    brandClassification?: string;
    remarks?: string;
    lspDate?: string;
    psoForCustomer?: string;
  id: string;
  brand: string;
  subBrand: string;
  eta: string | null;
  ncuCows: number;
  cow: boolean;

  itemRef: string;
  upc: string;
  description: string;
  packSize: string;

  minUsd: number;
  floorUsd: number;
  lsp: number;
  spData: number;
  soForCustomer: number;

  offerPrice: number;

  stockClean: number;
  stockProcess: number;

  week2Clean: number;
  week2Process: number;

  week4Clean: number;
  week4Process: number;
};

/* ================= SAMPLE DATA (14 ITEMS) ================= */
const divisionData: DivisionItem[] = [
  {
    id: "1",
    brand: "CREED",
    subBrand: "Aventus",
    eta: "18/01/2026",
    ncuCows: 920,
    cow: false,
    itemRef: "3508441001114",
    upc: "3508441001114",
    description: "Creed Aventus EDP 100ML",
    brandClassification: "Luxury",
    remarks: "Top Seller",
    packSize: "100ML",
    minUsd: 220,
    floorUsd: 210,
    lsp: 250,
    lspDate: "2026-02-01",
    psoForCustomer: "PSO001",
    spData: 240,
    soForCustomer: 225,
    offerPrice: 225,
    stockClean: 120,
    stockProcess: 50,
    week2Clean: 80,
    week2Process: 40,
    week4Clean: 100,
    week4Process: 60,
    offerQtyProcessed4W: 70
  },
  {
    id: "2",
    brand: "MAISON FRANCIS KURKDJIAN",
    subBrand: "Baccarat Rouge 540",
    eta: "20/01/2026",
    ncuCows: 1100,
    cow: false,
    itemRef: "3700559612112",
    upc: "3700559612112",
    description: "MFK Baccarat Rouge 540 EDP 70ML",
    brandClassification: "Luxury",
    remarks: "Trending",
    packSize: "70ML",
    minUsd: 195,
    floorUsd: 185,
    lsp: 220,
    lspDate: "2026-01-20",
    psoForCustomer: "PSO002",
    spData: 210,
    soForCustomer: 198,
    offerPrice: 198,
    stockClean: 140,
    stockProcess: 60,
    week2Clean: 100,
    week2Process: 55,
    week4Clean: 130,
    week4Process: 70,
    offerQtyProcessed4W: 85
  },
  {
    id: "3",
    brand: "CHANEL",
    subBrand: "Bleu de Chanel",
    eta: "05/02/2026",
    ncuCows: 1500,
    cow: true,
    itemRef: "3145891073607",
    upc: "3145891073607",
    description: "Chanel Bleu de Chanel EDP 100ML",
    brandClassification: "Premium",
    remarks: "Best Seller",
    packSize: "100ML",
    minUsd: 105,
    floorUsd: 100,
    lsp: 125,
    lspDate: "2026-02-05",
    psoForCustomer: "PSO003",
    spData: 118,
    soForCustomer: 110,
    offerPrice: 110,
    stockClean: 250,
    stockProcess: 90,
    week2Clean: 200,
    week2Process: 120,
    week4Clean: 230,
    week4Process: 140,
    offerQtyProcessed4W: 150
  },
  {
    id: "4",
    brand: "YVES SAINT LAURENT",
    subBrand: "Y EDP",
    eta: "28/02/2026",
    ncuCows: 870,
    cow: false,
    itemRef: "3614272050343",
    upc: "3614272050343",
    description: "YSL Y EDP 100ML",
    packSize: "100ML",
    minUsd: 92,
    floorUsd: 88,
    lsp: 110,
    spData: 104,
    soForCustomer: 95,
    offerPrice: 95,
    stockClean: 210,
    stockProcess: 70,
    week2Clean: 170,
    week2Process: 85,
    week4Clean: 200,
    week4Process: 100,
    offerQtyProcessed4W: 120
  },
  {
    id: "5",
    brand: "PARFUMS DE MARLY",
    subBrand: "Layton",
    eta: "02/02/2026",
    ncuCows: 780,
    cow: true,
    itemRef: "3700578502050",
    upc: "3700578502050",
    description: "Parfums de Marly Layton EDP 125ML",
    packSize: "125ML",
    minUsd: 180,
    floorUsd: 170,
    lsp: 205,
    spData: 198,
    soForCustomer: 185,
    offerPrice: 185,
    stockClean: 130,
    stockProcess: 50,
    week2Clean: 100,
    week2Process: 60,
    week4Clean: 120,
    week4Process: 75,
    offerQtyProcessed4W: 90
  },
  {
    id: "6",
    brand: "JEAN PAUL GAULTIER",
    subBrand: "Le Male Elixir",
    eta: "22/01/2026",
    ncuCows: 950,
    cow: false,
    itemRef: "8435415032278",
    upc: "8435415032278",
    description: "JPG Le Male Elixir 125ML",
    packSize: "125ML",
    minUsd: 95,
    floorUsd: 90,
    lsp: 115,
    spData: 108,
    soForCustomer: 100,
    offerPrice: 100,
    stockClean: 220,
    stockProcess: 80,
    week2Clean: 180,
    week2Process: 95,
    week4Clean: 200,
    week4Process: 110,
    offerQtyProcessed4W: 130
  },
  {
    id: "7",
    brand: "DIOR",
    subBrand: "Sauvage Elixir",
    eta: "10/02/2026",
    ncuCows: 1600,
    cow: true,
    itemRef: "3348901567574",
    upc: "3348901567574",
    description: "Dior Sauvage Elixir 60ML",
    packSize: "60ML",
    minUsd: 120,
    floorUsd: 115,
    lsp: 145,
    spData: 138,
    soForCustomer: 130,
    offerPrice: 130,
    stockClean: 260,
    stockProcess: 100,
    week2Clean: 220,
    week2Process: 120,
    week4Clean: 250,
    week4Process: 140,
    offerQtyProcessed4W: 160
  },
  {
    id: "8",
    brand: "GIVENCHY",
    subBrand: "Gentleman Reserve Privee",
    eta: "15/02/2026",
    ncuCows: 840,
    cow: false,
    itemRef: "3274872441929",
    upc: "3274872441929",
    description: "Givenchy Gentleman EDP 100ML",
    packSize: "100ML",
    minUsd: 88,
    floorUsd: 85,
    lsp: 105,
    spData: 98,
    soForCustomer: 92,
    offerPrice: 92,
    stockClean: 190,
    stockProcess: 65,
    week2Clean: 150,
    week2Process: 80,
    week4Clean: 170,
    week4Process: 95,
    offerQtyProcessed4W: 110
  },
  {
    id: "9",
    brand: "XERJOFF",
    subBrand: "Naxos",
    eta: "18/02/2026",
    ncuCows: 620,
    cow: true,
    itemRef: "8033488155113",
    upc: "8033488155113",
    description: "Xerjoff Naxos EDP 100ML",
    packSize: "100ML",
    minUsd: 175,
    floorUsd: 168,
    lsp: 205,
    spData: 198,
    soForCustomer: 185,
    offerPrice: 185,
    stockClean: 110,
    stockProcess: 45,
    week2Clean: 85,
    week2Process: 55,
    week4Clean: 95,
    week4Process: 65,
    offerQtyProcessed4W: 75
  },
  {
    id: "10",
    brand: "TOM FORD",
    subBrand: "Oud Wood",
    eta: "25/02/2026",
    ncuCows: 890,
    cow: false,
    itemRef: "888066015159",
    upc: "888066015159",
    description: "Tom Ford Oud Wood 100ML",
    packSize: "100ML",
    minUsd: 210,
    floorUsd: 200,
    lsp: 245,
    spData: 235,
    soForCustomer: 220,
    offerPrice: 220,
    stockClean: 140,
    stockProcess: 60,
    week2Clean: 110,
    week2Process: 75,
    week4Clean: 130,
    week4Process: 90,
    offerQtyProcessed4W: 95
  }
];


/* ================= HELPER ================= */
const getTimelineFromEta = (eta: string | null) => {
  if (!eta) return null;
  const today = new Date();
  const [d, m, y] = eta.split("/").map(Number);
  const etaDate = new Date(y, m - 1, d);
  const diff =
    (etaDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
  if (diff <= 7) return "Next 7 Days";
  if (diff <= 30) return "Next 30 Days";
  if (diff <= 60) return "Next 60 Days";
  return "Beyond 60 Days";
};

/* ================= COMPONENT ================= */


const divisionIdToName: Record<string, string> = Object.fromEntries(
  sampleDivisions.map(d => [String(d.id), d.name])
);

const DivisionPage = () => {
  const { divisionId } = useParams();
  const navigate = useNavigate();
  const { selectedDivision, setSelectedDivision } = useSelectedDivision();


  const [selectedItems, setSelectedItems] = useState<string[]>([]); // Default unchecked
  const [cowOnly, setCowOnly] = useState(true);
  const [items, setItems] = useState<DivisionItem[]>(divisionData);
  const [selectedBrands, setSelectedBrands] = useState<OptionType[]>([]);
  const [selectedCustomers, setSelectedCustomers] = useState<OptionType[]>([]);
  const [selectedShipping, setSelectedShipping] = useState<OptionType[]>([]);

  const shippingOptions: OptionType[] = [
    { value: "Next 7 Days", label: "Next 7 Days" },
    { value: "Next 30 Days", label: "Next 30 Days" },
    { value: "Next 60 Days", label: "Next 60 Days" }
  ];

  const customerOptions: OptionType[] = [
    { value: "customer1", label: "Customer 1" },
    { value: "customer2", label: "Customer 2" },
    { value: "customer3", label: "Customer 3" },
    { value: "customer4", label: "Customer 4" }
  ];

  const brandOptions = useMemo(
    () =>
      [...new Set(items.map(d => d.brand))].map(b => ({
        value: b,
        label: b
      })),
    [items]
  );

  /* ================= FILTER LOGIC ================= */
  const tableData = useMemo(() => {
    return items.filter(item => {
      const timeline = getTimelineFromEta(item.eta);

      if (cowOnly && !item.cow) return false;

      // Customer filter logic placeholder (no customer in item)
      // If you want to filter by customer, add customer property to DivisionItem and update here

      if (
        selectedBrands.length &&
        !selectedBrands.some(b => b.value === item.brand)
      )
        return false;

      if (
        selectedCustomers.length &&
        !selectedCustomers.some(c => c.value === (item.customer || ""))
      )
        return false;

      if (
        selectedShipping.length &&
        !selectedShipping.some(s => s.value === timeline)
      )
        return false;

      return true;
    });
  }, [
    items,
    cowOnly,
    selectedBrands,
    selectedCustomers,
    selectedShipping
  ]);

  const [editId, setEditId] = useState<string | null>(null);
  const handlePriceChange = (id: string, value: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, offerPrice: Number(value) }
          : item
      )
    );
  };


  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      <h1 className="text-2xl font-semibold">
        OFFER Generation 
      </h1>
      <div className="text-lg font-medium text-black">
        Division: <span className="text-blue-700 font-bold">{selectedDivision || divisionIdToName[divisionId || ""] || "-"}</span>
      </div>
      {/* Show Step 1 only for division/2 */}
      <div className="text-lg font-medium text-blue-700 mb-2">Step 2</div>


      {/* FILTER BAR */}
<div className="bg-white p-4 rounded-xl shadow flex items-start gap-6 flex-nowrap z-[100] relative">

  {/* Cow Filter */}
  <div className="flex mt-2 items-center gap-2 shrink-0 relative z-[110]">
    <span className="font-medium">Include COW</span>
    <input
      type="checkbox"
      checked={cowOnly}
      onChange={() => setCowOnly(!cowOnly)}
      className="w-5 h-5"
    />
  </div>

  {/* Brand Filter */}
<div className="min-w-[200px] max-w-[450px] w-auto relative z-[110]">
    <Select
      isMulti
      value={selectedBrands}
      onChange={v => setSelectedBrands(v as OptionType[])}
      options={brandOptions}
      placeholder="Brand"
    />
  </div>

  {/* Customer Filter */}
  <div className="w-[220px] shrink-0 relative z-[110]">
    <Select
      isMulti
      value={selectedCustomers}
      onChange={v => setSelectedCustomers(v as OptionType[])}
      options={customerOptions}
      placeholder="Customer"
    />
  </div>

  {/* Shipping Timeline Filter */}
  <div className="w-[220px] shrink-0 relative z-[110]">
    <Select
      isMulti
      value={selectedShipping}
      onChange={v => setSelectedShipping(v as OptionType[])}
      options={shippingOptions}
      placeholder="Shipping Timeline"
    />
  </div>

</div>


      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto max-h-[600px]">
        <table className="min-w-full text-sm border-collapse">
          <thead className="sticky top-0 z-20 ">
            <tr className="bg-gray-200 text-xs uppercase text-gray-600">
              <th colSpan={13} className="p-2 text-center whitespace-nowrap border border-gray-300">NCUs listing</th>
              <th className="p-2 text-center border border-gray-300"> Price</th>
              <th colSpan={2} className="p-2 text-center border border-gray-300">Stocks</th>
              <th colSpan={2} className="p-2 text-center border border-gray-300">2 Weeks</th>
              <th colSpan={2} className="p-2 text-center border border-gray-300">4 Weeks</th>
            </tr>

            <tr className="bg-gray-100 text-left sticky top-[32px]">
              {[
                "Select",
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
            {tableData.map(item => (
              <tr key={item.id} className="hover:bg-indigo-50">
                <td className="px-6 py-3 border text-center">
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
                <td className="px-6 py-3 border text-center">{item.stockClean}</td>
                <td className="px-6 py-3 border text-center">{item.stockProcess}</td>
                <td className="px-6 py-3 border text-center">{item.week2Clean}</td>
                <td className="px-6 py-3 border text-center">{item.week2Process}</td>
                <td className="px-6 py-3 border text-center">{item.week4Clean}</td>
                <td className="px-6 py-3 border text-center">{item.week4Process}</td>
                <td className="px-12 py-3 border text-base text-center">
                  <span>{item.offerPrice}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ACTION */}
      <div className="flex justify-end">
        <button
          disabled={!selectedItems.length}
          onClick={() => {
            // Set selected division in context
            const divisionName = divisionIdToName[divisionId || ""] || "-";
            setSelectedDivision(divisionName);
            navigate(`/division/${divisionId}/offer`, {
              state: { selectedItems, tableData, divisionName, divisionId }
            });
          }}
          className={`px-6 py-2 rounded-lg text-white ${
            selectedItems.length
              ? "bg-green-600 hover:bg-green-700"
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