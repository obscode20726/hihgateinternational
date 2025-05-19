// components/ImageUploader.tsx
import { FC } from "react";
import { SchoolLifeEntry } from "../../../../types/schoolLife";

interface ImageUploaderProps {
    imageSourceType: "url" | "upload";
    entry: SchoolLifeEntry; // Use the correct type instead of any
    setEntry: React.Dispatch<React.SetStateAction<SchoolLifeEntry>>;
    imagePreview: string;
    entryFormErrors: Record<string, string>;
    handleImageSourceChange: (source: "url" | "upload") => void;
    handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploader: FC<ImageUploaderProps> = ({
    imageSourceType,
    entry,
    setEntry,
    imagePreview,
    handleImageSourceChange,
    handleImageUpload,
}) => (
    <div>
        <div className="mt-1 mb-2 flex space-x-4">
            <label className="inline-flex items-center">
                <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    name="imageSource"
                    checked={imageSourceType === "url"}
                    onChange={() => handleImageSourceChange("url")}
                />
                <span className="ml-2 text-sm text-gray-700">URL</span>
            </label>
            <label className="inline-flex items-center">
                <input
                    type="radio"
                    className="form-radio text-indigo-600"
                    name="imageSource"
                    checked={imageSourceType === "upload"}
                    onChange={() => handleImageSourceChange("upload")}
                />
                <span className="ml-2 text-sm text-gray-700">Upload</span>
            </label>
        </div>

        {imageSourceType === "url" ? (
            <input
                type="text"
                id="imageUrl"
                value={entry.imageUrl}
                onChange={(e) =>
                    setEntry({ ...entry, imageUrl: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300 text-black"
                placeholder="Enter image URL"
                required
            />
        ) : (
            <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
        )}
        {imagePreview && (
            <div className="mt-2">
                <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-20 h-20 rounded-lg object-cover"
                />
            </div>
        )}
    </div>
);

export default ImageUploader;
