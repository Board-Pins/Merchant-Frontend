import React from "react";
import Modal from "./Modal";

const ConfirmDialog = ({ 
  isOpen, 
  title, 
  message, 
  confirmText = "Confirm", 
  cancelText = "Cancel", 
  onConfirm, 
  onCancel,
  danger = false
}) => {
  return (
    <Modal
      isOpen={isOpen}
      className="lg:w-[500px] w-[95%] mx-auto overflow-hidden rounded-xl bg-white p-4"
    >
      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        
        {/* Message */}
        <p className="text-gray-600 mb-6">{message}</p>
        
        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-lg text-white ${
              danger ? "bg-red-600 hover:bg-red-700" : "bg-indigo-500 hover:bg-indigo-600"
            } transition-colors`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;