export default function SkeletonLoader() {
    return (
        <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-4">
                        <div className="h-80 bg-gray-300 rounded-lg" />
                        <div className="h-4 bg-gray-300 rounded w-3/4" />
                        <div className="h-3 bg-gray-300 rounded w-full" />
                        <div className="h-3 bg-gray-300 rounded w-5/6" />
                    </div>
                ))}
            </div>
        </div>
    );
}
