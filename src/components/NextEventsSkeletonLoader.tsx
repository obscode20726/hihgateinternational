export default function NextEventsSkeletonLoader() {
    return (
        <section className="py-16 bg-[#f6f9ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="h-8 bg-gray-300 w-1/3 mx-auto rounded mb-4" />
                    <div className="h-4 bg-gray-300 w-2/3 mx-auto rounded" />
                </div>

                {/* Main upcoming event */}
                <div className="flex flex-col lg:flex-row items-stretch bg-white p-6 md:p-8 rounded-lg shadow-md gap-6 md:gap-8">
                    <div className="w-full sm:w-[23rem] md:w-[28rem] lg:w-1/3 flex-shrink-0 flex flex-col mx-auto">
                        <div className="aspect-[3/4] bg-gray-300 rounded-lg mb-4" />
                    </div>

                    <div className="lg:w-2/3 w-full flex flex-col justify-center gap-4">
                        <div className="h-6 bg-gray-300 rounded w-1/2" />
                        <div className="h-4 bg-gray-300 rounded w-1/3" />
                        <div className="space-y-3">
                            <div className="h-3 bg-gray-300 rounded w-full" />
                            <div className="h-3 bg-gray-300 rounded w-5/6" />
                            <div className="h-3 bg-gray-300 rounded w-4/5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
