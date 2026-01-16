import { ArrowLeft, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatusChip from "../common/StatusChip";
import APP_CONFIG from "../../config/app.config";
import { useClient } from "../../context/ClientContext";
import clientLogo from "/assets/client-images/logo.png"

const CommandCenterHeader = () => {
  const navigate = useNavigate();
  const client = useClient();
  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button
            
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex items-center gap-3">
           
              <img
            src={clientLogo}
            alt="Tionale Logo"
            className="h-9 w-auto object-contain brightness-125 contrast-125"
          />

            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                {APP_CONFIG.productName} Revenue Command Center
                
              </h1>
              <p className="text-sm text-gray-500">
               
                {client.name} | {client.industry}
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
