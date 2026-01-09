import React, { useState } from "react";

/* ===================== DATA ===================== */

const pendingResponses = [
  {
    customer: "Middle East Distributor",
    message: "Awaiting response on revised pricing proposal",
    days: 9,
    severity: "high",
  },
  {
    customer: "Middle East Distributor",
    message: "Commercial approval pending from procurement head",
    days: 7,
    severity: "high",
  },
  {
    customer: "Luxe Beauty Group",
    message: "Waiting for sample approval feedback",
    days: 4,
    severity: "medium",
  },
  {
    customer: "European Duty Free",
    message: "Awaiting feedback on volume discount proposal",
    days: 6,
    severity: "medium",
  },
  {
    customer: "North Africa Trading",
    message: "Trade license verification pending",
    days: 12,
    severity: "high",
  },
  {
    customer: "North Africa Trading",
    message: "Credit application not submitted",
    days: 10,
    severity: "high",
  },
  {
    customer: "North Africa Trading",
    message: "Introductory call not scheduled",
    days: 14,
    severity: "high",
  },
];

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
    id: "CUS-003",
    name: "Asia Pacific Retail",
    country: "Singapore",
    pipeline: "$380K",
    activeDeals: 1,
    deal: {
      title: "Annual Contract 2025",
      amount: "$380K",
      risk: "low risk",
    },
    lastMessage: {
      time: "1 day ago",
      text: "Contract signed and returned. Please proceed with PO.",
    },
  },
];

/* ===================== MAIN ===================== */

const Customers: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* ===== Top Stats ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {customerStats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* ===== Pending Customer Responses ===== */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Pending Customer Responses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pendingResponses.map((item, i) => (
            <PendingResponseCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* ===== Customers Table ===== */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6">👥 All Customers</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="pb-3">Customer</th>
              <th>Pipeline</th>
              <th>Active Deals</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {customers.map((customer) => (
              <tr key={customer.id} className="text-sm">
                <td className="py-4">
                  <p className="font-medium">{customer.name}</p>
                  <p className="text-gray-500">
                    {customer.id} • {customer.country}
                  </p>
                </td>
                <td className="font-semibold">{customer.pipeline}</td>
                <td>{customer.activeDeals}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelectedCustomer(customer);
                      setIsDrawerOpen(true);
                    }}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DrawerOverlay
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <CustomerDrawer
        customer={selectedCustomer}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default Customers;

/* ===================== COMPONENTS ===================== */

const StatCard = ({ title, value, subtitle, color }: any) => (
  <div className={`bg-white rounded-xl p-6 border-l-4 ${color}`}>
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-3xl font-bold">{value}</h3>
    <p className="text-sm text-gray-500">{subtitle}</p>
  </div>
);

const PendingResponseCard = ({ item }: any) => {
  const border =
    item.severity === "high" ? "border-red-500" : "border-orange-400";

  return (
    <div
      className={`bg-red-50 rounded-xl p-4 border-l-4 ${border} flex justify-between`}
    >
      <div>
        <span className="inline-block bg-white border rounded-full px-3 py-1 text-sm font-medium mb-2">
          {item.customer}
        </span>
        <p className="text-sm">{item.message}</p>
      </div>
      <div className="text-sm text-gray-500">⏱ {item.days} days</div>
    </div>
  );
};

/* ===================== DRAWER ===================== */

const DrawerOverlay = ({ isOpen, onClose }: any) => (
  <div
    onClick={onClose}
    className={`fixed inset-0 bg-black/40 z-40 ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  />
);

const CustomerDrawer = ({ customer, isOpen, onClose }: any) => (
  <div
    className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-xl
    transform transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {customer && (
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">{customer.name}</h2>
            <p className="text-sm text-gray-500">
              {customer.id} • {customer.country}
            </p>
          </div>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">Total Pipeline</p>
            <p className="text-2xl font-bold">{customer.pipeline}</p>
          </div>
          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">Active Deals</p>
            <p className="text-2xl font-bold">{customer.activeDeals}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Active Deals</h3>
          <div className="bg-gray-50 rounded-xl p-4 flex justify-between">
            <div>
              <p className="font-medium">{customer.deal.title}</p>
              <p className="text-sm text-gray-500">Contract</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{customer.deal.amount}</p>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                {customer.deal.risk}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Recent Communications</h3>
          <div className="border rounded-xl p-4 text-sm">
            <p className="text-gray-500">{customer.lastMessage.time}</p>
            <p>{customer.lastMessage.text}</p>
          </div>
        </div>

        <div className="mt-auto flex gap-3">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg">
            Send Follow-up
          </button>
          <button className="flex-1 border py-2 rounded-lg">
            Schedule Call
          </button>
        </div>
      </div>
    )}
  </div>
);
