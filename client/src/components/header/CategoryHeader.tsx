import { ArrowLeft, Filter } from "lucide-react";
import StatusChip from "../common/StatusChip";

const CategoryHeader = () => {
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
              Category Manager
            </h1>
            <p className="text-sm text-gray-500">
              Performance & Intelligence by Product Category
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* Filter Button */}
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter size={16} />
            Filter
          </button>

          <StatusChip
            label="Critical"
            count={1}
            variant="red"
          />

          <StatusChip
            label="Warnings"
            count={2}
            variant="orange"
          />
        </div>
      </div>
    </header>
  );
};

export default CategoryHeader;
