import { ArrowLeft, Calendar } from "lucide-react";
import StatusChip from "../common/StatusChip";

const CommandCenterHeader = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="flex items-center justify-between px-6 py-4">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <ArrowLeft size={18} />
          </button>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold">
              ✦
            </div>

            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                StratSync Revenue Command Center
              </h1>
              <p className="text-sm text-gray-500">
                Tionale | Perfumes and Cosmetics Trading
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <StatusChip
            label="Critical Alerts"
            count={3}
            variant="red"
          />

          <StatusChip
            label="Warnings"
            count={5}
            variant="orange"
          />

          <StatusChip
            label="Stable"
            count={18}
            variant="green"
          />

          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-50">
            <Calendar size={16} />
            Last 30 Days
          </button>
        </div>
      </div>
    </header>
  );
};

export default CommandCenterHeader;
