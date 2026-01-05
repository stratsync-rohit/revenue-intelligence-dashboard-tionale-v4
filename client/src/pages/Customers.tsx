import React from "react";

/* ================= MAIN PAGE ================= */

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
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

      {/* ===== All Customers ===== */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          👥 All Customers
        </h2>

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
              <CustomerRow
                name="Middle East Distributor"
                code="CUS-001 · UAE"
                status="down"
                pending={2}
                last="9 days ago"
                stage="Commercial Approval"
                days={9}
                pipeline="$620K"
              />
              <CustomerRow
                name="Luxe Beauty Group"
                code="CUS-002 · France"
                status="warning"
                pending={1}
                last="4 days ago"
                stage="Negotiation"
                days={6}
                pipeline="$450K"
              />
              <CustomerRow
                name="Asia Pacific Retail"
                code="CUS-003 · Singapore"
                status="ok"
                pending={0}
                last="1 day ago"
                stage="Contract"
                days={2}
                pipeline="$380K"
              />
              <CustomerRow
                name="European Duty Free"
                code="CUS-004 · Germany"
                status="warning"
                pending={1}
                last="6 days ago"
                stage="Proposal"
                days={8}
                pipeline="$520K"
              />
              <CustomerRow
                name="North Africa Trading"
                code="CUS-005 · Morocco"
                status="down"
                pending={3}
                last="12 days ago"
                stage="Qualification"
                days={14}
                pipeline="$280K"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;

/* ================= COMPONENTS ================= */

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
  const border =
    risk === "high" ? "border-red-400 bg-red-50" : "border-orange-400 bg-orange-50";

  return (
    <div className={`rounded-xl p-5 border-l-4 ${border}`}>
      <div className="flex justify-between mb-3">
        <span className="px-3 py-1 bg-white rounded-full text-sm font-medium">
          {customer}
        </span>
        <span className="text-sm text-gray-500">{days}</span>
      </div>
      <p className="text-gray-800">{text}</p>
    </div>
  );
};

const CustomerRow = ({
  name,
  code,
  status,
  pending,
  last,
  stage,
  days,
  pipeline,
}: any) => {
  const statusIcon = {
    down: "📉",
    warning: "⚠️",
    ok: "✅",
  }[status];

  return (
    <tr className="text-sm">
      <td className="py-4">
        <p className="font-medium">{name}</p>
        <p className="text-gray-500">{code}</p>
      </td>

      <td className="text-lg">{statusIcon}</td>

      <td>
        {pending > 0 ? (
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            {pending}
          </span>
        ) : (
          "—"
        )}
      </td>

      <td className={last.includes("days") ? "text-red-500" : "text-gray-600"}>
        {last}
      </td>

      <td>
        <span className="px-3 py-1 border rounded-full text-xs font-medium">
          {stage}
        </span>
      </td>

      <td className={days >= 8 ? "text-red-500" : "text-gray-600"}>
        {days}
      </td>

      <td className="font-semibold">{pipeline}</td>

      <td>
        <button className="text-blue-600 font-medium hover:underline">
          View
        </button>
      </td>
    </tr>
  );
};
