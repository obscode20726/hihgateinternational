// components/EntryForm.tsx
import { FC } from "react";
import { SchoolLifeEntry, EntryFormErrors } from "@/types/schoolLife";

interface EntryFormProps {
    entry: SchoolLifeEntry;
    entryFormErrors: EntryFormErrors;
    setEntry: React.Dispatch<React.SetStateAction<SchoolLifeEntry>>;
    handleEntrySubmit: React.FormEventHandler<HTMLFormElement>;
    entryEditingId: string | null;
    entryLoading: boolean;
    cancelEntryEdit: () => void;
}

const EntryForm: FC<EntryFormProps> = ({
    entry,
    entryFormErrors,
    setEntry,
    handleEntrySubmit,
    entryEditingId,
    entryLoading,
    cancelEntryEdit,
}) => {
    return (
        <form onSubmit={handleEntrySubmit} className="space-y-6">
            <div>
                <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={entry.title}
                    onChange={(e) =>
                        setEntry({ ...entry, title: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300 text-black"
                    required
                />
                {entryFormErrors.title && (
                    <p className="mt-1 text-sm text-red-600">
                        {entryFormErrors.title}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    value={entry.description}
                    onChange={(e) =>
                        setEntry({ ...entry, description: e.target.value })
                    }
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300 text-black"
                    required
                />
                {entryFormErrors.description && (
                    <p className="mt-1 text-sm text-red-600">
                        {entryFormErrors.description}
                    </p>
                )}
            </div>

            <div>
                <label
                    htmlFor="link"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Link URL
                </label>
                <input
                    type="text"
                    id="link"
                    value={entry.link}
                    onChange={(e) =>
                        setEntry({ ...entry, link: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300 text-black"
                    placeholder="e.g., /school-life/details or #"
                />
            </div>

            <div className="flex items-center justify-end space-x-4">
                {entryEditingId && (
                    <button
                        type="button"
                        onClick={cancelEntryEdit}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                )}
                <button
                    type="submit"
                    disabled={entryLoading}
                    className="px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    {entryLoading
                        ? "Saving..."
                        : entryEditingId
                        ? "Update Entry"
                        : "Add Entry"}
                </button>
            </div>
        </form>
    );
};

export default EntryForm;
