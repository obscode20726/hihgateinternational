import React from "react";

interface SchoolLife {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

interface SchoolLifeFormProps {
    entry: SchoolLife;
    setEntry: React.Dispatch<React.SetStateAction<SchoolLife>>;
    handleEntrySubmit: (e: React.FormEvent) => Promise<void>;
    entryFormErrors: Record<string, string>;
    entryEditingId: string | null;
    entryLoading: boolean;
    cancelEntryEdit: () => void;
}

const SchoolLifeForm: React.FC<SchoolLifeFormProps> = ({
    entry,
    setEntry,
    handleEntrySubmit,
    entryFormErrors,
    entryEditingId,
    entryLoading,
    cancelEntryEdit,
}) => {
    return (
        <form onSubmit={handleEntrySubmit} className="space-y-6 text-black">
            {/* Form Fields */}
            <div>
                <label htmlFor="title" className="text-black">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={entry.title}
                    onChange={(e) =>
                        setEntry({ ...entry, title: e.target.value })
                    }
                    required
                    className="text-black"
                />
                {entryFormErrors.title && <p>{entryFormErrors.title}</p>}
            </div>
            {/* Other fields... */}
            <div>
                <button type="button" onClick={cancelEntryEdit}>
                    Cancel
                </button>
                <button type="submit" disabled={entryLoading}>
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

export default SchoolLifeForm;
