import React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface CancelPopupProps {
  open: boolean;
  onClose: () => void;
  onCancelDraft: () => void;
  onSaveDraft: () => void;
}

const CancelPopup: React.FC<CancelPopupProps> = ({ open, onClose, onCancelDraft, onSaveDraft }) => {
  if (typeof document === "undefined" || !open) return null;
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center p-4">
          <motion.div
            className="w-full max-w-sm rounded-2xl shadow-xl bg-white p-6 flex flex-col items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-lg font-semibold mb-2">Cancel Offer Packet?</h2>
            <p className="text-sm text-gray-600 mb-6 text-center">Do you want to close, cancel draft, or save this draft before leaving?</p>
            <div className="flex gap-3 w-full justify-center">
              <button
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                onClick={onCancelDraft}
              >
                Cancel Draft
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                onClick={onSaveDraft}
              >
                Save Draft
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default CancelPopup;
