// components/EntryTable.tsx
import { FC } from "react";
import { SchoolLifeEntry } from "@/types/schoolLife";
import Image from "next/image";

interface EntryTableProps {
    entries: SchoolLifeEntry[];
    entryFetching: boolean;
    handleEntryEdit: (entry: SchoolLifeEntry) => void;
    setShowEntryDeleteConfirm: (id: string) => void;
}

const EntryTable: FC<EntryTableProps> = ({
    entries,
    entryFetching,
    handleEntryEdit,
    setShowEntryDeleteConfirm,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">
                    Entries List
                </h3>
                {entryFetching ? (
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                    </div>
                ) : entries.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        <p>No entries found. Create your first entry above!</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Entry
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {entries.map((en) => (
                                    <tr
                                        key={en.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <Image
                                                        className="h-10 w-10 rounded-full object-cover"
                                                        src={en.imageUrl}
                                                        alt={en.title}
                                                        width={40}
                                                        height={40}
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {en.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() =>
                                                    handleEntryEdit(en)
                                                }
                                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setShowEntryDeleteConfirm(
                                                        en.id
                                                    )
                                                }
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EntryTable;
