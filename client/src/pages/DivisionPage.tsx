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

  // ---------------- CREED ----------------
  {
    id: "1",
    brand: "CREED",
    subBrand: "Aventus",
    eta: "20/01/2026",
    ncuCows: 950,
    cow: true,
    itemRef: "3508441001114",
    upc: "3508441001114",
    description: "Creed Aventus EDP 100ML",
    brandClassification: "Niche",
    remarks: "Top Seller",
    packSize: "100ML",
    minUsd: 220,
    floorUsd: 210,
    lsp: 260,
    lspDate: "2026-01-20",
    psoForCustomer: "PSO001",
    spData: 245,
    soForCustomer: 230,
    offerPrice: 230,
    stockClean: 140,
    stockProcess: 60,
    week2Clean: 110,
    week2Process: 70,
    week4Clean: 135,
    week4Process: 90,
    offerQtyProcessed4W: 95
  },
  {
    id: "2",
    brand: "CREED",
    subBrand: "Silver Mountain Water",
    eta: "25/01/2026",
    ncuCows: 620,
    cow: false,
    itemRef: "3508440501112",
    upc: "3508440501112",
    description: "Silver Mountain Water 100ML",
    brandClassification: "Niche",
    remarks: "Fresh Bestseller",
    packSize: "100ML",
    minUsd: 210,
    floorUsd: 200,
    lsp: 250,
    lspDate: "2026-01-25",
    psoForCustomer: "PSO002",
    spData: 235,
    soForCustomer: 220,
    offerPrice: 220,
    stockClean: 95,
    stockProcess: 40,
    week2Clean: 85,
    week2Process: 55,
    week4Clean: 110,
    week4Process: 75,
    offerQtyProcessed4W: 80
  },

  // ---------------- PARFUMS DE MARLY ----------------
  {
    id: "3",
    brand: "PARFUMS DE MARLY",
    subBrand: "Layton",
    eta: "28/01/2026",
    ncuCows: 780,
    cow: true,
    itemRef: "3700578502050",
    upc: "3700578502050",
    description: "Layton EDP 125ML",
    brandClassification: "Niche",
    remarks: "High Demand",
    packSize: "125ML",
    minUsd: 180,
    floorUsd: 170,
    lsp: 210,
    lspDate: "2026-01-28",
    psoForCustomer: "PSO003",
    spData: 200,
    soForCustomer: 185,
    offerPrice: 185,
    stockClean: 160,
    stockProcess: 70,
    week2Clean: 120,
    week2Process: 85,
    week4Clean: 150,
    week4Process: 105,
    offerQtyProcessed4W: 110
  },
  {
    id: "4",
    brand: "PARFUMS DE MARLY",
    subBrand: "Herod",
    eta: "30/01/2026",
    ncuCows: 620,
    cow: false,
    itemRef: "3700578503002",
    upc: "3700578503002",
    description: "Herod EDP 125ML",
    brandClassification: "Niche",
    remarks: "Winter Favorite",
    packSize: "125ML",
    minUsd: 175,
    floorUsd: 165,
    lsp: 200,
    lspDate: "2026-01-30",
    psoForCustomer: "PSO004",
    spData: 190,
    soForCustomer: 178,
    offerPrice: 178,
    stockClean: 90,
    stockProcess: 35,
    week2Clean: 95,
    week2Process: 60,
    week4Clean: 120,
    week4Process: 85,
    offerQtyProcessed4W: 85
  },

  // ---------------- MAISON FRANCIS KURKDJIAN ----------------
  {
    id: "5",
    brand: "MAISON FRANCIS KURKDJIAN",
    subBrand: "Baccarat Rouge 540",
    eta: "02/02/2026",
    ncuCows: 1100,
    cow: true,
    itemRef: "3700559612112",
    upc: "3700559612112",
    description: "Baccarat Rouge 540 EDP 70ML",
    brandClassification: "Niche",
    remarks: "Luxury Bestseller",
    packSize: "70ML",
    minUsd: 195,
    floorUsd: 185,
    lsp: 230,
    lspDate: "2026-02-02",
    psoForCustomer: "PSO005",
    spData: 215,
    soForCustomer: 200,
    offerPrice: 200,
    stockClean: 180,
    stockProcess: 80,
    week2Clean: 140,
    week2Process: 90,
    week4Clean: 170,
    week4Process: 110,
    offerQtyProcessed4W: 120
  },
  {
    id: "6",
    brand: "MAISON FRANCIS KURKDJIAN",
    subBrand: "Oud Satin Mood",
    eta: "05/02/2026",
    ncuCows: 540,
    cow: false,
    itemRef: "3700559613010",
    upc: "3700559613010",
    description: "Oud Satin Mood 70ML",
    brandClassification: "Niche",
    remarks: "Premium Oud Line",
    packSize: "70ML",
    minUsd: 210,
    floorUsd: 200,
    lsp: 245,
    lspDate: "2026-02-05",
    psoForCustomer: "PSO006",
    spData: 230,
    soForCustomer: 215,
    offerPrice: 215,
    stockClean: 75,
    stockProcess: 30,
    week2Clean: 65,
    week2Process: 40,
    week4Clean: 90,
    week4Process: 60,
    offerQtyProcessed4W: 70
  },

  // ---------------- AMOUAGE ----------------
  {
    id: "7",
    brand: "AMOUAGE",
    subBrand: "Interlude Man",
    eta: "08/02/2026",
    ncuCows: 480,
    cow: false,
    itemRef: "701666410006",
    upc: "701666410006",
    description: "Interlude Man 100ML",
    brandClassification: "Ultra Niche",
    remarks: "High Value SKU",
    packSize: "100ML",
    minUsd: 190,
    floorUsd: 180,
    lsp: 225,
    lspDate: "2026-02-08",
    psoForCustomer: "PSO007",
    spData: 215,
    soForCustomer: 205,
    offerPrice: 205,
    stockClean: 60,
    stockProcess: 20,
    week2Clean: 50,
    week2Process: 30,
    week4Clean: 70,
    week4Process: 45,
    offerQtyProcessed4W: 55
  },
  {
    id: "8",
    brand: "AMOUAGE",
    subBrand: "Reflection Man",
    eta: "10/02/2026",
    ncuCows: 520,
    cow: false,
    itemRef: "701666410020",
    upc: "701666410020",
    description: "Reflection Man 100ML",
    brandClassification: "Ultra Niche",
    remarks: "Fresh Luxury",
    packSize: "100ML",
    minUsd: 185,
    floorUsd: 175,
    lsp: 220,
    lspDate: "2026-02-10",
    psoForCustomer: "PSO008",
    spData: 210,
    soForCustomer: 198,
    offerPrice: 198,
    stockClean: 85,
    stockProcess: 35,
    week2Clean: 70,
    week2Process: 45,
    week4Clean: 95,
    week4Process: 60,
    offerQtyProcessed4W: 75
  },

  // ---------------- XERJOFF ----------------
  {
    id: "9",
    brand: "XERJOFF",
    subBrand: "Naxos",
    eta: "12/02/2026",
    ncuCows: 640,
    cow: true,
    itemRef: "8033488155113",
    upc: "8033488155113",
    description: "Xerjoff Naxos 100ML",
    brandClassification: "Ultra Niche",
    remarks: "Luxury Bestseller",
    packSize: "100ML",
    minUsd: 175,
    floorUsd: 168,
    lsp: 210,
    lspDate: "2026-02-12",
    psoForCustomer: "PSO009",
    spData: 200,
    soForCustomer: 188,
    offerPrice: 188,
    stockClean: 120,
    stockProcess: 50,
    week2Clean: 95,
    week2Process: 60,
    week4Clean: 130,
    week4Process: 85,
    offerQtyProcessed4W: 90
  },
  {
    id: "10",
    brand: "XERJOFF",
    subBrand: "Erba Pura",
    eta: "14/02/2026",
    ncuCows: 700,
    cow: false,
    itemRef: "8033488155120",
    upc: "8033488155120",
    description: "Xerjoff Erba Pura 100ML",
    brandClassification: "Ultra Niche",
    remarks: "Strong Projection",
    packSize: "100ML",
    minUsd: 180,
    floorUsd: 170,
    lsp: 215,
    lspDate: "2026-02-14",
    psoForCustomer: "PSO010",
    spData: 205,
    soForCustomer: 192,
    offerPrice: 192,
    stockClean: 135,
    stockProcess: 55,
    week2Clean: 110,
    week2Process: 75,
    week4Clean: 150,
    week4Process: 95,
    offerQtyProcessed4W: 100
  },

  // ---------------- INITIO ----------------
  {
    id: "11",
    brand: "INITIO",
    subBrand: "Oud for Greatness",
    eta: "16/02/2026",
    ncuCows: 600,
    cow: true,
    itemRef: "3701415901449",
    upc: "3701415901449",
    description: "Oud for Greatness 90ML",
    brandClassification: "Ultra Niche",
    remarks: "Premium Oud",
    packSize: "90ML",
    minUsd: 210,
    floorUsd: 200,
    lsp: 250,
    lspDate: "2026-02-16",
    psoForCustomer: "PSO011",
    spData: 235,
    soForCustomer: 220,
    offerPrice: 220,
    stockClean: 95,
    stockProcess: 40,
    week2Clean: 85,
    week2Process: 55,
    week4Clean: 120,
    week4Process: 80,
    offerQtyProcessed4W: 85
  },
  {
    id: "12",
    brand: "INITIO",
    subBrand: "Side Effect",
    eta: "18/02/2026",
    ncuCows: 540,
    cow: false,
    itemRef: "3701415901555",
    upc: "3701415901555",
    description: "Side Effect 90ML",
    brandClassification: "Ultra Niche",
    remarks: "Night Wear Favorite",
    packSize: "90ML",
    minUsd: 205,
    floorUsd: 195,
    lsp: 245,
    lspDate: "2026-02-18",
    psoForCustomer: "PSO012",
    spData: 230,
    soForCustomer: 215,
    offerPrice: 215,
    stockClean: 80,
    stockProcess: 30,
    week2Clean: 75,
    week2Process: 45,
    week4Clean: 105,
    week4Process: 70,
    offerQtyProcessed4W: 75
  },

  {
    id: "13",
    brand: "INITIO",
    subBrand: "Rehab",
    eta: "20/02/2026",
    ncuCows: 500,
    cow: false,
    itemRef: "3701415901662",
    upc: "3701415901662",
    description: "Rehab 90ML",
    brandClassification: "Ultra Niche",
    remarks: "Fresh Woody",
    packSize: "90ML",
    minUsd: 200,
    floorUsd: 190,
    lsp: 240,
    lspDate: "2026-02-20",
    psoForCustomer: "PSO013",
    spData: 225,
    soForCustomer: 210,
    offerPrice: 210,
    stockClean: 70,
    stockProcess: 25,
    week2Clean: 60,
    week2Process: 40,
    week4Clean: 95,
    week4Process: 65,
    offerQtyProcessed4W: 65
  },
  {
    id: "14",
    brand: "INITIO",
    subBrand: "Blessed Baraka",
    eta: "22/02/2026",
    ncuCows: 450,
    cow: false,
    itemRef: "3701415901779",
    upc: "3701415901779",
    description: "Blessed Baraka 90ML",
    brandClassification: "Ultra Niche",
    remarks: "Warm Amber",
    packSize: "90ML",
    minUsd: 195,
    floorUsd: 185,
    lsp: 235,
    lspDate: "2026-02-22",
    psoForCustomer: "PSO014",
    spData: 220,
    soForCustomer: 205,
    offerPrice: 205,
    stockClean: 65,
    stockProcess: 20,
    week2Clean: 55,
    week2Process: 35,
    week4Clean: 85,
    week4Process: 55,
    offerQtyProcessed4W: 60
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
        Offer Generation 
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