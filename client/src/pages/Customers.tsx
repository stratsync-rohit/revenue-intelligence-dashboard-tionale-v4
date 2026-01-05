import React from "react";

const Customers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* ===== Top Stats ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard
          title="Pending Customer Responses"
          value="7"
          subtitle="Across 4 customers"
          color="border-red-500"
        />
        <StatCard
          title="Deals at Risk"
          value="3"
          subtitle="High probability of slippage"
          color="border-orange-500"
        />
        <StatCard
          title="Pipeline at Risk"
          value="$1870K"
          subtitle="Requires intervention"
          color="border-blue-500"
        />
        <StatCard
          title="Total Pipeline"
          value="$2.3M"
          subtitle="Across all customers"
          color="border-green-500"
        />
      </div>

      {/* ===== Pending Customer Responses ===== */}
      <h2 className="text-2xl font-semibold mb-6">
        Pending Customer Responses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ResponseCard
          customer="Middle East Distributor"
          days="9 days"
          text="Awaiting response on revised pricing proposal"
          risk="high"
        />
        <ResponseCard
          customer="Middle East Distributor"
          days="7 days"
          text="Commercial approval pending from procurement head"
          risk="high"
        />
        <ResponseCard
          customer="Luxe Beauty Group"
          days="4 days"
          text="Waiting for sample approval feedback"
          risk="medium"
        />
        <ResponseCard
          customer="European Duty Free"
          days="6 days"
          text="Awaiting feedback on volume discount proposal"
          risk="medium"
        />
        <ResponseCard
          customer="North Africa Trading"
          days="12 days"
          text="Trade license verification pending"
          risk="high"
        />
        <ResponseCard
          customer="North Africa Trading"
          days="10 days"
          text="Credit application not submitted"
          risk="high"
        />
        <ResponseCard
          customer="North Africa Trading"
          days="14 days"
          text="Introductory call not scheduled"
          risk="high"
        />
      </div>
    </div>
  );
};

export default Customers;

/* ===== Reusable Components ===== */

const StatCard = ({
  title,
  value,
  subtitle,
  color,
}: {
  title: string;
  value: string;
  subtitle: string;
  color: string;
}) => (
  <div
    className={`bg-white rounded-xl p-6 border-l-4 ${color} shadow-sm`}
  >
    <p className="text-sm text-gray-500 mb-2">{title}</p>
    <h3 className="text-3xl font-bold">{value}</h3>
    <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
  </div>
);

const ResponseCard = ({
  customer,
  days,
  text,
  risk,
}: {
  customer: string;
  days: string;
  text: string;
  risk: "high" | "medium";
}) => {
  const borderColor =
    risk === "high" ? "border-red-400" : "border-orange-400";
  const bgColor =
    risk === "high" ? "bg-red-50" : "bg-orange-50";

  return (
    <div
      className={`rounded-xl p-5 border-l-4 ${borderColor} ${bgColor}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="px-3 py-1 text-sm bg-white rounded-full font-medium">
          {customer}
        </span>
        <span className="text-sm text-gray-500">{days}</span>
      </div>
      <p className="text-gray-800">{text}</p>
    </div>
  );
};
