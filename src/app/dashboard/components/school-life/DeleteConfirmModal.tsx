// components/school-life/DeleteConfirmModal.tsx
import React from "react";

type Props = {
    onCancel: () => void;
    onConfirm: () => void;
};

export default function DeleteConfirmModal({ onCancel, onConfirm }: Props) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Confirm Delete
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                    Are you sure you want to delete this entry? This action
                    cannot be undone.
                </p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
