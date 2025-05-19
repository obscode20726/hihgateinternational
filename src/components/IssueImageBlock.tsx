import React from "react";
import Image from "next/image";

const IssueImageBlock: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 mt-8">
            <div className="bg-white shadow-md p-4 rounded-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Inside this issue
                </h2>
                <Image
                    src="https://cdn.prod.website-files.com/645514bf46c37985244c4dfc/657cf3abe263ba3262b376b0_Group%207.png"
                    alt="Inside this issue"
                    width={1200}
                    height={800}
                    className="w-full rounded-md"
                />
            </div>
        </div>
    );
};

export default IssueImageBlock;
