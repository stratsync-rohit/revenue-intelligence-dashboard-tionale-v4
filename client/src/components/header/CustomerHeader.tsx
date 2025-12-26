import { ArrowLeft } from "lucide-react";
import StatusChip from "../common/StatusChip";

type Status = {
  label: string;
  count: number;
  variant: "red" | "orange" | "green";
};

const STATUS: Status[] = [
  { label: "Critical", count: 2, variant: "red" },
  { label: "Warnings", count: 2, variant: "orange" },
  { label: "Healthy", count: 1, variant: "green" },
];

const CustomerHeader = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="flex items-center justify-between px-6 py-4">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <ArrowLeft size={18} />
          </button>

          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              Customer Intelligence
            </h1>
            <p className="text-sm text-gray-500">
              Pending Responses, Deal Status & Communications
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {STATUS.map((s) => (
            <StatusChip
              key={s.label}
              label={s.label}
              count={s.count}
              variant={s.variant}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default CustomerHeader;
