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
    brand: "BURBERRY",
    subBrand: "Her EDP",
    eta: "18/01/2026",
    ncuCows: 902,
    cow: false,
    itemRef: "3616305181069",
    upc: "3616305181069",
    description: "Burberry Her EDP Spray 100ML",
    brandClassification: "Luxury",
    remarks: "Best Seller",
    packSize: "100ML",
    minUsd: 64.75,
    floorUsd: 63.5,
    lsp: 72,
    lspDate: "2026-02-01",
    psoForCustomer: "PSO001",
    spData: 69,
    soForCustomer: 65.35,
    offerPrice: 65.35,
    stockClean: 269,
    stockProcess: 120,
    week2Clean: 150,
    week2Process: 80,
    week4Clean: 200,
    week4Process: 140,
    offerQtyProcessed4W: 120
  },
  {
    id: "2",
    brand: "DIOR",
    subBrand: "Sauvage",
    eta: "20/01/2026",
    ncuCows: 1450,
    cow: false,
    itemRef: "3348901520197",
    upc: "3348901520197",
    description: "Dior Sauvage EDT 100ML",
    brandClassification: "Premium",
    remarks: "Trending",
    packSize: "100ML",
    minUsd: 75,
    floorUsd: 72,
    lsp: 85,
    lspDate: "2026-01-20",
    psoForCustomer: "PSO002",
    spData: 82,
    soForCustomer: 78,
    offerPrice: 78,
    stockClean: 310,
    stockProcess: 90,
    week2Clean: 200,
    week2Process: 110,
    week4Clean: 250,
    week4Process: 150,
    offerQtyProcessed4W: 130
  },
  {
    id: "3",
    brand: "GUCCI",
    subBrand: "Gucci Bloom",
    eta: "05/02/2026",
    ncuCows: 800,
    cow: true,
    itemRef: "8005610328942",
    upc: "8005610328942",
    description: "Gucci Bloom EDP 100ML",
    brandClassification: "Standard",
    remarks: "Popular",
    packSize: "100ML",
    minUsd: 68,
    floorUsd: 65,
    lsp: 79,
    lspDate: "2026-02-05",
    psoForCustomer: "PSO003",
    spData: 75,
    soForCustomer: 70,
    offerPrice: 70,
    stockClean: 220,
    stockProcess: 70,
    week2Clean: 180,
    week2Process: 90,
    week4Clean: 210,
    week4Process: 120,
    offerQtyProcessed4W: 110
  },
  {
    id: "4",
    brand: "PRADA",
    subBrand: "Luna Rossa",
    eta: "28/02/2026",
    ncuCows: 450,
    // customer removed
    cow: false,
    itemRef: "8435137700023",
    upc: "8435137700023",
    description: "Prada Luna Rossa 100ML",
    packSize: "100ML",
    minUsd: 62,
    floorUsd: 60,
    lsp: 70,
    spData: 67,
    soForCustomer: 63,
    offerPrice: 63,
    stockClean: 180,
    stockProcess: 50,
    week2Clean: 130,
    week2Process: 60,
    week4Clean: 160,
    week4Process: 80,
    offerQtyProcessed4W: 70
  },
  {
    id: "5",
    brand: "ARMANI",
    subBrand: "Acqua di Gio",
    eta: "02/02/2026",
    ncuCows: 1320,
    customer: "Customer A",
    cow: true,
    itemRef: "3614273956762",
    upc: "3614273956762",
    description: "Acqua di Gio EDT 100ML",
    packSize: "100ML",
    minUsd: 70,
    floorUsd: 67,
    lsp: 82,
    spData: 79,
    soForCustomer: 73,
    offerPrice: 73,
    stockClean: 290,
    stockProcess: 95,
    week2Clean: 210,
    week2Process: 105,
    week4Clean: 240,
    week4Process: 130,
    offerQtyProcessed4W: 100
  },
  {
    id: "6",
    brand: "VERSACE",
    subBrand: "Eros",
    eta: "22/01/2026",
    ncuCows: 980,
    customer: "Customer B",
    cow: false,
    itemRef: "8011003809219",
    upc: "8011003809219",
    description: "Versace Eros EDT 100ML",
    packSize: "100ML",
    minUsd: 66,
    floorUsd: 63,
    lsp: 76,
    spData: 73,
    soForCustomer: 68,
    offerPrice: 68,
    stockClean: 260,
    stockProcess: 85,
    week2Clean: 170,
    week2Process: 90,
    week4Clean: 210,
    week4Process: 120,
    offerQtyProcessed4W: 90
  },
  {
    id: "7",
    brand: "TOM FORD",
    subBrand: "Black Orchid",
    eta: "12/02/2026",
    ncuCows: 610,
    customer: "Customer C",
    cow: true,
    itemRef: "888066000582",
    upc: "888066000582",
    description: "Tom Ford Black Orchid 100ML",
    packSize: "100ML",
    minUsd: 88,
    floorUsd: 85,
    lsp: 98,
    spData: 95,
    soForCustomer: 90,
    offerPrice: 90,
    stockClean: 150,
    stockProcess: 60,
    week2Clean: 120,
    week2Process: 70,
    week4Clean: 140,
    week4Process: 85,
    offerQtyProcessed4W: 60
  },
  {
    id: "8",
    brand: "CALVIN KLEIN",
    subBrand: "CK One",
    eta: null,
    ncuCows: 1200,
    customer: "Customer D",
    cow: false,
    itemRef: "3607343811798",
    upc: "3607343811798",
    description: "CK One EDT 100ML",
    packSize: "100ML",
    minUsd: 40,
    floorUsd: 38,
    lsp: 50,
    spData: 47,
    soForCustomer: 42,
    offerPrice: 42,
    stockClean: 350,
    stockProcess: 100,
    week2Clean: 280,
    week2Process: 130,
    week4Clean: 300,
    week4Process: 160,
    offerQtyProcessed4W: 140
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