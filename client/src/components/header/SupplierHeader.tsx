
import { ArrowLeft } from "lucide-react";

const SupplierHeader = () => {
  return (
    <header className="bg-white border-b px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-4">
          <button className="mt-1 text-gray-500 hover:text-gray-800">
            <ArrowLeft size={20} />
          </button>

          <div>
            <h1 className="text-lg font-semibold">
              Supplier Intelligence
            </h1>
            <p className="text-sm text-gray-500">
              Supplier Performance, Risks & Communications
            </p>
          </div>
        </div>

        {/* Right: Status Pills */}
        <div className="flex items-center gap-3">
          <StatusPill
            label="1 Critical"
            type="critical"
          />
          <StatusPill
            label="2 Warnings"
            type="warning"
          />
          <StatusPill
            label="2 Healthy"
            type="healthy"
          />
        </div>
      </div>
    </header>
  );
};

/* ---------------- Sub Components ---------------- */

const StatusPill = ({
  label,
  type,
}: {
  label: string;
  type: "critical" | "warning" | "healthy";
}) => {
  const styles =
    type === "critical"
      ? "bg-red-50 text-red-600 border-red-200"
      : type === "warning"
      ? "bg-yellow-50 text-yellow-700 border-yellow-200"
      : "bg-green-50 text-green-700 border-green-200";

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm border ${styles}`}
    >
      {label}
    </span>
  );
};

export default SupplierHeader;
