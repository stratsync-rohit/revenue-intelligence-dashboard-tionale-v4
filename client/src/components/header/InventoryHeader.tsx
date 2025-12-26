import { ArrowLeft } from "lucide-react";
import StatusChip from "../common/StatusChip";

type Status = {
  label: string;
  count: number;
  variant: "red" | "orange" | "green";
};

const STATUS: Status[] = [
  { label: "Critical", count: 3, variant: "red" },
  { label: "Aging", count: 2, variant: "orange" },
  { label: "Healthy", count: 2, variant: "green" },
];

const InventoryHeader = () => {
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
              Inventory Intelligence
            </h1>
            <p className="text-sm text-gray-500">
              Stock Levels, Aging Analysis & Revenue Exposure
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

export default InventoryHeader;
