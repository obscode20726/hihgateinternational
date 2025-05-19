import React from "react";
import Image from "next/image";
import { SchoolLife } from "@/app/types";

interface SchoolLifeListProps {
    entries: SchoolLife[];
    handleEntryEdit: (entryToEdit: SchoolLife) => void;
    handleEntryDelete: (id: string) => void;
}

const SchoolLifeList: React.FC<SchoolLifeListProps> = ({
    entries,
    handleEntryEdit,
    handleEntryDelete,
}) => {
    return (
        <table className="text-black">
            <thead>
                <tr>
                    <th>Entry</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((en) => (
                    <tr key={en.id}>
                        <td>
                            <Image
                                src={en.imageUrl}
                                alt={en.title}
                                width={40}
                                height={40}
                            />
                            {en.title}
                        </td>
                        <td>
                            <button onClick={() => handleEntryEdit(en)}>
                                Edit
                            </button>
                            <button
                                onClick={() => handleEntryDelete(en.id || "")}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SchoolLifeList;
