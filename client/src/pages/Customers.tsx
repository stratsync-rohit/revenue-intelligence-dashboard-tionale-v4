import React, { useState } from "react";



const customerStats = [
  {
    title: "Pending Customer Responses",
    value: "7",
    subtitle: "Across 4 customers",
    color: "border-red-500",
  },
  {
    title: "Deals at Risk",
    value: "3",
    subtitle: "High probability of slippage",
    color: "border-orange-500",
  },
  {
    title: "Pipeline at Risk",
    value: "$1870K",
    subtitle: "Requires intervention",
    color: "border-blue-500",
  },
  {
    title: "Total Pipeline",
    value: "$2.3M",
    subtitle: "Across all customers",
    color: "border-green-500",
  },
];

const customers = [
  {
    id: "CUS-001",
    name: "Middle East Distributor",
    country: "UAE",
    status: "down",
    pending: 2,
    lastResponse: "9 days ago",
    stage: "Commercial Approval",
    daysInStage: 9,
    pipeline: "$620K",
  },
  {
    id: "CUS-002",
    name: "Luxe Beauty Group",
    country: "France",
    status: "warning",
    pending: 1,
    lastResponse: "4 days ago",
    stage: "Negotiation",
    daysInStage: 6,
    pipeline: "$450K",
  },
];


const Customers: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (customer: any) => {
    setSelectedCustomer(customer);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedCustomer(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">
      {/* ===== Top Stats ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {customerStats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>


      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">👥 All Customers</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="pb-3">Customer</th>
                <th>Status</th>
                <th>Pending</th>
                <th>Last Response</th>
                <th>Deal Stage</th>
                <th>Days in Stage</th>
                <th>Pipeline</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {customers.map((customer) => (
                <CustomerRow
                  key={customer.id}
                  customer={customer}
                  onView={openDrawer}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <DrawerOverlay isOpen={isDrawerOpen} onClose={closeDrawer} />
      <CustomerDrawer
        customer={selectedCustomer}
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
      />
    </div>
  );
};

export default Customers;



const StatCard = ({ title, value, subtitle, color }: any) => (
  <div className={`bg-white rounded-xl p-6 border-l-4 ${color} shadow-sm`}>
    <p className="text-sm text-gray-500 mb-2">{title}</p>
    <h3 className="text-3xl font-bold">{value}</h3>
    <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
  </div>
);

const CustomerRow = ({
  customer,
  onView,
}: {
  customer: any;
  onView: (customer: any) => void;
}) => {
  const statusIconMap: Record<"down" | "warning" | "ok", string> = {
    down: "📉",
    warning: "⚠️",
    ok: "✅",
  };

  return (
    <tr className="text-sm">
      <td className="py-4">
        <p className="font-medium">{customer.name}</p>
        <p className="text-gray-500">
          {customer.id} • {customer.country}
        </p>
      </td>

      <td className="text-lg">{statusIconMap[customer.status]}</td>

      <td>
        {customer.pending > 0 ? (
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            {customer.pending}
          </span>
        ) : (
          "—"
        )}
      </td>

      <td className="text-red-500">{customer.lastResponse}</td>

      <td>
        <span className="px-3 py-1 border rounded-full text-xs font-medium">
          {customer.stage}
        </span>
      </td>

      <td
        className={
          customer.daysInStage >= 8 ? "text-red-500" : "text-gray-600"
        }
      >
        {customer.daysInStage}
      </td>

      <td className="font-semibold">{customer.pipeline}</td>

      <td>
        <button
          onClick={() => onView(customer)}
          className="text-blue-600 font-medium hover:underline"
        >
          View
        </button>
      </td>
    </tr>
  );
};



const DrawerOverlay = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <div
    onClick={onClose}
    className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  />
);

const CustomerDrawer = ({
  customer,
  isOpen,
  onClose,
}: {
  customer: any;
  isOpen: boolean;
  onClose: () => void;
}) => (
  <div
    className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-xl p-6 overflow-y-auto
      transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
  >
    {customer && (
      <>
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold">{customer.name}</h2>
            <p className="text-gray-500 text-sm">
              {customer.id} • {customer.country}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <DrawerStat label="Total Pipeline" value={customer.pipeline} />
          <DrawerStat label="Pending Actions" value={customer.pending} />
          <DrawerStat label="Deal Stage" value={customer.stage} />
          <DrawerStat label="Days in Stage" value={customer.daysInStage} />
        </div>


        <div>
          <h3 className="font-semibold mb-2">Recent Communication</h3>
          <div className="border rounded-lg p-4 text-sm text-gray-700">
            We are reviewing the pricing internally. Will revert.
          </div>
        </div>
      </>
    )}
  </div>
);

const DrawerStat = ({ label, value }: any) => (
  <div className="border rounded-lg p-4">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-lg font-semibold">{value}</p>
  </div>
);
