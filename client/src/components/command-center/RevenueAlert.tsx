import {
  AlertTriangle,
  AlertCircle,
  Database,
  MessageSquare,
  Lightbulb,
} from "lucide-react";

/* ===============================
   SAMPLE DATA (API READY)
================================ */
const alertsData = [
  {
    id: 1,
    priority: "#1",
    color: "red",
    title: "Supplier Fulfilment Risk Detected",
    subtitle: "When suppliers become the bottleneck",
    meta: [
      { label: "Supplier", value: "ABC Fragrances" },
      { label: "SKU", value: "Brand X EDP 100ml" },
      {
        label: "Revenue at Risk",
        value: "USD 420,000 across 2 active customer deals",
      },
    ],
    signals: {
      structured: [
        "Purchase Order pending for 11 days in ERP",
        "Supplier historical average confirmation time is 4 days",
      ],
      unstructured: [
        'WhatsApp message from supplier: "Stock confirmation next week" sent 6 days ago',
        "No follow-up communication since",
      ],
    },
    impact:
      "High probability of shipment delay leading to customer penalty or cancellation",
    recommendations: [
      "Escalate supplier immediately",
      "Activate alternate supplier mapped for this SKU",
      "Flag affected customer deals for proactive communication",
    ],
    actions: ["Escalate Supplier", "Secure Alternate Stock"],
  },

  {
    id: 2,
    priority: "#2",
    color: "red",
    title: "Deal Slippage Risk Increasing",
    subtitle: "When deals silently slip away",
    meta: [
      { label: "Customer", value: "Middle East Distributor" },
      { label: "SKU", value: "Brand X EDP 100ml" },
      { label: "Revenue at Risk", value: "USD 310,000" },
    ],
    signals: {
      structured: [
        "Deal stuck at Commercial Approval stage for 9 days",
        "Pricing revision logged twice without movement",
      ],
      unstructured: [
        "Email thread inactive since last price negotiation",
        'Sales call transcript mentions "Customer evaluating alternate supplier"',
      ],
    },
    impact:
      "High likelihood of deal loss or price renegotiation below margin threshold",
    recommendations: [
      "Trigger commercial nudge with revised pricing band",
      "Surface competitive pricing intelligence",
      "Recommend senior level intervention",
    ],
    actions: ["Trigger Commercial Nudge", "Escalate to Leadership"],
  },

  {
    id: 3,
    priority: "#3",
    color: "yellow",
    title: "Inventory Constraint Detected",
    subtitle: "When stock becomes the hidden blocker",
    meta: [
      { label: "SKU", value: "Brand Y Tester Kits" },
      { label: "Inventory Cover", value: "12 days remaining" },
      { label: "Linked Deals", value: "2 open deals" },
      { label: "Revenue Exposure", value: "USD 185,000" },
    ],
    signals: {
      structured: [
        "Warehouse inventory below safety buffer",
        "No replenishment PO raised",
      ],
      unstructured: [
        'Sales call transcript highlights "Customer needs testers urgently for retail rollout"',
        "WhatsApp from sales team requesting priority allocation",
      ],
    },
    impact: "Deal execution risk and delayed customer onboarding",
    recommendations: [
      "Reserve inventory for high value deals",
      "Pause new deal creation for this SKU",
      "Trigger replenishment workflow",
    ],
    actions: ["Reserve Inventory", "Pause New Deals"],
  },
   {
    id: 4,
    priority: "#2",
    color: "red",
    title: "Deal Slippage Risk Increasing",
    subtitle: "When deals silently slip away",
    meta: [
      { label: "Customer", value: "Middle East Distributor" },
      { label: "SKU", value: "Brand X EDP 100ml" },
      { label: "Revenue at Risk", value: "USD 310,000" },
    ],
    signals: {
      structured: [
        "Deal stuck at Commercial Approval stage for 9 days",
        "Pricing revision logged twice without movement",
      ],
      unstructured: [
        "Email thread inactive since last price negotiation",
        'Sales call transcript mentions "Customer evaluating alternate supplier"',
      ],
    },
    impact:
      "High likelihood of deal loss or price renegotiation below margin threshold",
    recommendations: [
      "Trigger commercial nudge with revised pricing band",
      "Surface competitive pricing intelligence",
      "Recommend senior level intervention",
    ],
    actions: ["Trigger Commercial Nudge", "Escalate to Leadership"],
  }
];

/* ===============================
   THEME CONFIG
================================ */
const themeMap = {
  red: {
    border: "border-red-500",
    bg: "bg-red-50",
    text: "text-red-700",
    impactBg: "bg-red-100",
    icon: <AlertCircle className="text-red-600" />,
  },
  yellow: {
    border: "border-yellow-500",
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    impactBg: "bg-yellow-100",
    icon: <AlertTriangle className="text-yellow-600" />,
  },
};

const RevenueAlert = () => {
  return (
    <div className="border rounded-2xl p-6 m-6 bg-white">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="text-red-500" />
        <h3 className="text-lg font-semibold">Priority Revenue Alerts</h3>
      </div>

      {/* Cards – Horizontal Scroll */}
      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
        {alertsData.map((alert) => {
          const theme = themeMap[alert.color];

          return (
            <div
              key={alert.id}
              className={`
                border-l-4 ${theme.border} ${theme.bg}
                rounded-xl p-6
                flex flex-col justify-between
                min-h-[780px]
                min-w-[420px] max-w-[420px]
                flex-shrink-0
              `}
            >
              <div>
                {/* Title */}
                <div className="flex items-center gap-2 mb-2">
                  {theme.icon}
                  <h4 className="font-semibold text-sm">
                    {alert.title}
                  </h4>
                  <span className="ml-auto text-xs bg-white px-2 py-0.5 rounded-full">
                    {alert.priority}
                  </span>
                </div>

                <p className="text-sm italic text-gray-600 mb-4">
                  {alert.subtitle}
                </p>

                {/* Meta */}
                <div className="space-y-2 text-sm text-gray-800 mb-5">
                  {alert.meta.map((m, i) => (
                    <p key={i}>
                      <strong>{m.label}:</strong> {m.value}
                    </p>
                  ))}
                </div>

                {/* Signals */}
                <p className="text-xs font-semibold text-gray-500 mb-2">
                  SIGNALS SURFACED
                </p>

                <div className="bg-white/70 rounded-xl p-4 mb-3 text-sm">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Database className="w-4 h-4" />
                    <span className="font-medium">Structured Data</span>
                  </div>
                  <ul className="list-disc ml-5 text-gray-700 space-y-1">
                    {alert.signals.structured.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/70 rounded-xl p-4 mb-5 text-sm">
                  <div className="flex items-center gap-2 text-green-600 mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-medium">Unstructured Data</span>
                  </div>
                  <ul className="list-disc ml-5 text-gray-700 space-y-1">
                    {alert.signals.unstructured.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div
                  className={`${theme.impactBg} ${theme.text} rounded-xl p-4 mb-4 text-sm`}
                >
                  <strong>Impact:</strong> {alert.impact}
                </div>

                {/* Recommendation */}
                <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4" />
                    <strong>StratSync Recommendation:</strong>
                  </div>
                  <ul className="list-disc ml-5 space-y-1">
                    {alert.recommendations.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  {alert.actions[0]}
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium bg-white">
                  {alert.actions[1]}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RevenueAlert;
