
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface OfferPacketSavePopupProps {
	open: boolean;
	onClose: () => void;
	onSave: (packetName: string) => void;
	selectedList: any[];
}

const OFFER_PACKET_HEADERS = [
	"Item Ref",
	"UPC",
	"Brand",
	"Sub Brand",
	"Description",
	"Brand Classification",
	"Pack Size",
	"MIN (USD)",
	"FLOOR (USD)",
	"LSP",
	"LSP DATE",
	"PSO FOR CUSTOMER",
	"OFFER PRICE",
	"OFFER QTY CLEAN",
	"OFFER QTY PROCESSED",
	"OFFER QTY CLEAN",
	"OFFER QTY PROCESSED",
	"OFFER QTY CLEAN",
	"OFFER QTY PROCESSED"
];

const OfferPacketSavePopup: React.FC<OfferPacketSavePopupProps> = ({ open, onClose, onSave, selectedList }) => {
	const [packetName, setPacketName] = useState("");
	const today = new Date().toLocaleDateString();

	// Map data fields to headers for display
	const getRowData = (row: any) => [
		row.itemRef,
		row.upc,
		row.brand,
		row.subBrand,
		row.description,
		row.brandClassification || "N/A",
		row.packSize,
		row.minUsd,
		row.floorUsd,
		row.lsp,
		row.lspDate,
		row.psoForCustomer,
		row.offerPrice,
		row.stockClean,
		row.stockProcess,
		row.week2Clean,
		row.week2Process,
		row.week4Clean,
		row.week4Process
	];

	if (typeof document === "undefined" || !open) return null;
	return createPortal(
		<AnimatePresence>
			{open && (
				<motion.div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center p-4">
					<motion.div
						className="w-full max-w-6xl rounded-2xl shadow-xl bg-white p-6 flex flex-col"
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
					>
						<h2 className="text-lg font-semibold mb-2">Save Offer Packet</h2>
						<div className="mb-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
							<div className="flex-1">
								<label className="block text-sm font-medium text-gray-700 mb-1">Packet Name</label>
								<input
									type="text"
									className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
									placeholder="Enter packet name"
									value={packetName}
									onChange={e => setPacketName(e.target.value)}
								/>
							</div>
							<div className="flex-1 text-right">
								<span className="text-sm text-gray-500">Date: <span className="font-medium text-gray-700">{today}</span></span>
							</div>
						</div>
						<div className="overflow-x-auto mb-4">
							<table className="w-full text-xs border-collapse rounded-xl overflow-hidden">
								<thead className="bg-gray-100">
									<tr>
										{OFFER_PACKET_HEADERS.map(h => (
											<th key={h} className="p-2 border border-gray-200 text-left whitespace-nowrap">{h}</th>
										))}
									</tr>
								</thead>
								<tbody>
									{selectedList.map((row, idx) => (
										<tr key={idx} className="even:bg-gray-50">
											{getRowData(row).map((val, i) => (
												<td key={i} className="p-2 border border-gray-200 whitespace-nowrap">{val !== undefined ? String(val) : ""}</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
							{selectedList.length === 0 && <div className="text-center text-gray-400 py-4">No items selected.</div>}
						</div>
						<div className="flex justify-end gap-3 mt-2">
							<button
								className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
								onClick={onClose}
							>
								Cancel
							</button>
							<button
								className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
								onClick={() => onSave(packetName)}
								disabled={!packetName.trim()}
							>
								Save
							</button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.body
	);
};

export default OfferPacketSavePopup;
