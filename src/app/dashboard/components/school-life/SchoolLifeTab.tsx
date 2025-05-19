"use client";

import React, { useState, useEffect } from "react";
import EntryForm from "./EntryForm";
import ImageUploader from "./ImageUploader";
import EntryTable from "./EntryTable";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { SchoolLifeEntry } from "../../../../types/schoolLife"; // Adjust the path as necessary

const initialEntry: SchoolLifeEntry = {
    id: "",
    title: "",
    description: "",
    link: "",
    imageUrl: "",
};

export default function SchoolLifeTab() {
    const [entries, setEntries] = useState<SchoolLifeEntry[]>([]);
    const [entry, setEntry] = useState(initialEntry);
    const [entryLoading, setEntryLoading] = useState(false);
    const [entryFetching, setEntryFetching] = useState(true);
    const [entryFormErrors, setEntryFormErrors] = useState({});
    const [entryEditingId, setEntryEditingId] = useState<string | null>(null);
    const [imageSourceType, setImageSourceType] = useState<"url" | "upload">(
        "url"
    );
    const [imagePreview, setImagePreview] = useState<string>("");
    const [showEntryDeleteConfirm, setShowEntryDeleteConfirm] = useState<
        string | null
    >(null);

    // Fetch entries on mount
    useEffect(() => {
        fetchEntries();
    }, []);

    const fetchEntries = async () => {
        setEntryFetching(true);
        try {
            const res = await fetch("/api/school-life");
            const data = await res.json();
            setEntries(data || []);
        } catch (error) {
            console.error("Error fetching entries:", error);
        }
        setEntryFetching(false);
    };

    const validateForm = () => {
        const errors: Record<string, string> = {};
        if (!entry.title) errors.title = "Title is required.";
        if (!entry.description) errors.description = "Description is required.";
        if (!entry.imageUrl) errors.imageUrl = "Image is required.";
        return errors;
    };

    const handleEntrySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setEntryFormErrors(errors);
            return;
        }

        setEntryLoading(true);
        try {
            if (entryEditingId) {
                await fetch(`/api/school-life/${entryEditingId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(entry),
                });
            } else {
                await fetch("/api/school-life", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(entry),
                });
            }

            await fetchEntries();
            setEntry(initialEntry);
            setEntryEditingId(null);
            setImagePreview("");
        } catch (error) {
            console.error("Submission error:", error);
        }
        setEntryLoading(false);
    };

    const handleEntryEdit = (entryToEdit: SchoolLifeEntry) => {
        setEntry(entryToEdit);
        setEntryEditingId(entryToEdit.id);
        setImagePreview(entryToEdit.imageUrl);
        setImageSourceType("url");
    };

    const handleEntryDelete = async (id: string) => {
        try {
            await fetch(`/api/school-life/${id}`, { method: "DELETE" });
            await fetchEntries();
        } catch (error) {
            console.error("Delete error:", error);
        }
        setShowEntryDeleteConfirm(null);
    };

    const handleImageSourceChange = (source: "url" | "upload") => {
        setImageSourceType(source);
        setImagePreview("");
        setEntry({ ...entry, imageUrl: "" });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setImagePreview(result);
                setEntry({ ...entry, imageUrl: result });
            };
            reader.readAsDataURL(file);
        }
    };

    const cancelEntryEdit = () => {
        setEntry(initialEntry);
        setEntryEditingId(null);
        setImagePreview("");
        setImageSourceType("url");
    };

    return (
        <div className="flex h-screen bg-[#f5f6fa]">
            <div className="flex-1 flex flex-col md:flex-row p-4 overflow-y-auto gap-6">
                <div className="w-full md:w-1/2">
                    <EntryForm
                        entry={entry}
                        entryEditingId={entryEditingId}
                        entryLoading={entryLoading}
                        entryFormErrors={entryFormErrors}
                        setEntry={setEntry}
                        handleEntrySubmit={handleEntrySubmit}
                        cancelEntryEdit={cancelEntryEdit}
                    />
                    <ImageUploader
                        entry={entry}
                        imageSourceType={imageSourceType}
                        imagePreview={imagePreview}
                        entryFormErrors={entryFormErrors}
                        setEntry={setEntry}
                        handleImageSourceChange={handleImageSourceChange}
                        handleImageUpload={handleImageUpload}
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-6">
                                Entries List
                            </h3>
                            <EntryTable
                                entries={entries}
                                entryFetching={entryFetching}
                                handleEntryEdit={handleEntryEdit}
                                setShowEntryDeleteConfirm={
                                    setShowEntryDeleteConfirm
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            {showEntryDeleteConfirm && (
                <DeleteConfirmModal
                    onCancel={() => setShowEntryDeleteConfirm(null)}
                    onConfirm={() => handleEntryDelete(showEntryDeleteConfirm)}
                />
            )}
        </div>
    );
}
