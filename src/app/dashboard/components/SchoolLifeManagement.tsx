"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Interface defining the structure of a SchoolLife entry
// id is optional since it may not be present for new entries
// All other fields are required strings
interface SchoolLife {
    id?: string; // Optional unique identifier
    title: string; // Title of the school life entry
    description: string; // Description text
    imageUrl: string; // URL to the entry's image
    link: string; // Navigation link for the entry
}

export default function SchoolLifeManagement() {
    // --- Section: Tab state ---
    // State managing which dashboard tab is active (events or school-life)
    const [activeTab] = useState<"events" | "school-life">("school-life");

    // --- Section: School life state ---
    // Holds all school-life entries and related form state
    const [entries, setEntries] = useState<SchoolLife[]>([]);
    const [entry, setEntry] = useState<SchoolLife>({
        title: "",
        description: "",
        imageUrl: "",
        link: "#",
    });
    const [entryLoading, setEntryLoading] = useState(false);
    const [entryFetching, setEntryFetching] = useState(true);
    const [entryNotification, setEntryNotification] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [entryEditingId, setEntryEditingId] = useState<string | null>(null);
    const [showEntryDeleteConfirm, setShowEntryDeleteConfirm] = useState<
        string | null
    >(null);
    const [entryFormErrors, setEntryFormErrors] = useState<
        Record<string, string>
    >({});
    // State for image upload mode and previews
    const [imageSourceType, setImageSourceType] = useState<"url" | "upload">(
        "url"
    );
    const [uploadedImage, setUploadedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    // --- School Life Dashboard Logic ---
    useEffect(() => {
        if (activeTab === "school-life") {
            const fetchEntries = async () => {
                setEntryFetching(true); // Start fetching
                try {
                    const response = await fetch("/api/school-life");
                    if (!response.ok)
                        throw new Error(
                            `HTTP error! status: ${response.status}`
                        );
                    const data = await response.json();
                    if (Array.isArray(data)) setEntries(data);
                    else console.error("Received non-array data:", data);
                } catch (error) {
                    console.error("Error fetching school life entries:", error);
                    setEntryNotification({
                        type: "error",
                        message: "Failed to load entries. Please try again.",
                    });
                } finally {
                    setEntryFetching(false); // Done fetching
                }
            };
            fetchEntries();
        }
    }, [activeTab]); // Fetch when tab changes to 'school-life'

    useEffect(() => {
        if (entryNotification.type) {
            const timer = setTimeout(
                () => setEntryNotification({ type: null, message: "" }),
                5000
            );
            return () => clearTimeout(timer);
        }
    }, [entryNotification]);
    const isValidUrl = (url: string) => {
        // This function is shared, keep one instance
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const validateEntryForm = () => {
        const errors: Record<string, string> = {};
        if (!entry.title.trim()) errors.title = "Title is required";
        if (!entry.description.trim())
            errors.description = "Description is required";

        // Validate image based on source type
        if (imageSourceType === "url") {
            if (!entry.imageUrl.trim())
                errors.imageUrl = "Image URL is required";
            else if (!isValidUrl(entry.imageUrl))
                errors.imageUrl = "Please enter a valid URL";
        } else {
            // For upload type
            if (!uploadedImage) errors.imageUrl = "Please upload an image";
        }

        // Add validation for link if needed, e.g., isValidUrl(entry.link)
        setEntryFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleEntrySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEntryForm()) {
            setEntryNotification({
                type: "error",
                message: "Please fix the errors in the form",
            });
            return;
        }
        setEntryLoading(true);
        try {
            let imageUrl = entry.imageUrl;

            // If we have an uploaded image, we need to handle it
            if (imageSourceType === "upload" && uploadedImage) {
                // In a real application, you would upload the file to a server or cloud storage
                // and get back a URL. For this example, we'll use the data URL directly.
                // In production, you should replace this with actual file upload logic.
                imageUrl = imagePreview || "";

                // Example of how you might upload to a server:
                // const formData = new FormData();
                // formData.append('image', uploadedImage);
                // const uploadResponse = await fetch('/api/upload', {
                //     method: 'POST',
                //     body: formData,
                // });
                // if (uploadResponse.ok) {
                //     const data = await uploadResponse.json();
                //     imageUrl = data.url;
                // } else {
                //     throw new Error('Failed to upload image');
                // }
            }

            const url = entryEditingId
                ? `/api/school-life/${entryEditingId}`
                : "/api/school-life";
            const method = entryEditingId ? "PUT" : "POST";
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...entry,
                    imageUrl,
                }),
            });
            if (response.ok) {
                setEntry({
                    title: "",
                    description: "",
                    imageUrl: "",
                    link: "#",
                });
                setEntryEditingId(null);
                setImageSourceType("url");
                setUploadedImage(null);
                setImagePreview(null);
                setEntryNotification({
                    type: "success",
                    message: entryEditingId
                        ? "Entry updated successfully!"
                        : "Entry created successfully!",
                });
                const entriesResponse = await fetch("/api/school-life"); // Refresh list
                if (entriesResponse.ok) {
                    const data = await entriesResponse.json();
                    if (Array.isArray(data)) setEntries(data);
                }
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to save entry");
            }
        } catch (error) {
            console.error("Error saving entry:", error);
            setEntryNotification({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to save entry. Please try again.",
            });
        } finally {
            setEntryLoading(false);
        }
    };

    const handleEntryEdit = (entryToEdit: SchoolLife) => {
        setEntry({
            title: entryToEdit.title,
            description: entryToEdit.description,
            imageUrl: entryToEdit.imageUrl,
            link: entryToEdit.link,
        });
        setEntryEditingId(entryToEdit.id || null);
        // Reset image upload state when editing
        setImageSourceType("url");
        setUploadedImage(null);
        setImagePreview(null);
        document
            .getElementById("entry-form")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    const handleEntryDelete = async (id: string) => {
        setEntryLoading(true);
        try {
            const response = await fetch(`/api/school-life/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setEntries(entries.filter((en) => en.id !== id));
                setEntryNotification({
                    type: "success",
                    message: "Entry deleted successfully!",
                });
            } else {
                throw new Error("Failed to delete entry");
            }
        } catch (error) {
            console.error("Error deleting entry:", error);
            setEntryNotification({
                type: "error",
                message: "Failed to delete entry. Please try again.",
            });
        } finally {
            setEntryLoading(false);
            setShowEntryDeleteConfirm(null);
        }
    };

    const cancelEntryEdit = () => {
        setEntry({ title: "", description: "", imageUrl: "", link: "#" });
        setEntryEditingId(null);
        setEntryFormErrors({});
        setImageSourceType("url");
        setUploadedImage(null);
        setImagePreview(null);
    };

    // Function to handle file upload
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setUploadedImage(file);
            // Create a preview URL for the image
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
                // Set the imageUrl to the preview URL for now
                setEntry({
                    ...entry,
                    imageUrl: reader.result as string,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    // Function to handle image source type change
    const handleImageSourceChange = (type: "url" | "upload") => {
        setImageSourceType(type);
        if (type === "url") {
            setUploadedImage(null);
            setImagePreview(null);
            setEntry({
                ...entry,
                imageUrl: "",
            });
        } else {
            // Reset the URL input when switching to upload
            setEntry({
                ...entry,
                imageUrl: "",
            });
        }
    };

    return (
        <div className="flex h-screen bg-[#f5f6fa]">
            {/* Content Area */}
            <div className="p-6 w-full">
                {/* School Life content with similar styling */}
                {activeTab === "school-life" && (
                    <div className="space-y-6">
                        {/* Split Panel Layout */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Left Panel - Form Fields */}
                                <div className="p-6 md:border-r border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-6">
                                        {entryEditingId
                                            ? "Edit Entry"
                                            : "Add Entry"}
                                    </h3>
                                    <form
                                        onSubmit={handleEntrySubmit}
                                        className="space-y-6"
                                    >
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
                                                    setEntry({
                                                        ...entry,
                                                        title: e.target.value,
                                                    })
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
                                                    setEntry({
                                                        ...entry,
                                                        description:
                                                            e.target.value,
                                                    })
                                                }
                                                rows={4}
                                                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300 text-black"
                                                required
                                            />
                                            {entryFormErrors.description && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {
                                                        entryFormErrors.description
                                                    }
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
                                                    setEntry({
                                                        ...entry,
                                                        link: e.target.value,
                                                    })
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
                                </div>

                                {/* Right Panel - Image Upload */}
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-6">
                                        Upload images
                                    </h3>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="mt-1 mb-2 flex space-x-4">
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        className="form-radio text-indigo-600"
                                                        name="imageSource"
                                                        checked={
                                                            imageSourceType ===
                                                            "url"
                                                        }
                                                        onChange={() =>
                                                            handleImageSourceChange(
                                                                "url"
                                                            )
                                                        }
                                                    />
                                                    <span className="ml-2 text-sm text-gray-700">
                                                        URL
                                                    </span>
                                                </label>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        className="form-radio text-indigo-600"
                                                        name="imageSource"
                                                        checked={
                                                            imageSourceType ===
                                                            "upload"
                                                        }
                                                        onChange={() =>
                                                            handleImageSourceChange(
                                                                "upload"
                                                            )
                                                        }
                                                    />
                                                    <span className="ml-2 text-sm text-gray-700">
                                                        Upload
                                                    </span>
                                                </label>
                                            </div>

                                            {imageSourceType === "url" ? (
                                                <>
                                                    <input
                                                        type="text"
                                                        id="imageUrl"
                                                        value={entry.imageUrl}
                                                        onChange={(e) =>
                                                            setEntry({
                                                                ...entry,
                                                                imageUrl:
                                                                    e.target
                                                                        .value,
                                                            })
                                                        }
                                                        className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300 text-black"
                                                        placeholder="Enter image URL"
                                                        required
                                                    />
                                                    {entryFormErrors.imageUrl && (
                                                        <p className="mt-1 text-sm text-red-600">
                                                            {
                                                                entryFormErrors.imageUrl
                                                            }
                                                        </p>
                                                    )}
                                                </>
                                            ) : (
                                                <div className="mt-1">
                                                    <input
                                                        type="file"
                                                        id="imageUpload"
                                                        accept="image/*"
                                                        onChange={
                                                            handleImageUpload
                                                        }
                                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                                    />
                                                    {imagePreview && (
                                                        <div className="mt-4">
                                                            <div className="relative h-40 w-full">
                                                                <Image
                                                                    src={
                                                                        imagePreview
                                                                    }
                                                                    alt="Preview"
                                                                    fill
                                                                    className="object-contain rounded-md"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {/* Preview Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            {imagePreview && (
                                                <div className="relative aspect-square">
                                                    <Image
                                                        src={imagePreview}
                                                        alt="Preview"
                                                        fill
                                                        className="object-cover rounded-lg"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Entries List */}
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
                                        <p>
                                            No entries found. Create your first
                                            entry above!
                                        </p>
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
                                                                        src={
                                                                            en.imageUrl
                                                                        }
                                                                        alt={
                                                                            en.title
                                                                        }
                                                                        width={
                                                                            40
                                                                        }
                                                                        height={
                                                                            40
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">
                                                                        {
                                                                            en.title
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <button
                                                                onClick={() =>
                                                                    handleEntryEdit(
                                                                        en
                                                                    )
                                                                }
                                                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    setShowEntryDeleteConfirm(
                                                                        en.id ||
                                                                            ""
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
                    </div>
                )}
            </div>

            {/* Delete Confirmation Modals */}
            {showEntryDeleteConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            Confirm Delete
                        </h3>
                        <p className="text-sm text-gray-500 mb-6">
                            Are you sure you want to delete this entry? This
                            action cannot be undone.
                        </p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setShowEntryDeleteConfirm(null)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() =>
                                    handleEntryDelete(showEntryDeleteConfirm)
                                }
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
