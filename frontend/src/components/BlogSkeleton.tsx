export const BlogSkeleton = () => {
  return (
    <div>
      <div role="status" className="animate-pulse">
        <div className="border-b border-slate-200 p-4 w-screen max-w-2xl cursor-pointer">
          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="pl-2 font-light text-slate-500 text-sm">
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
          </div>
          <div className="text-xl font-semibold">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div className="text-slate-400 text-sm">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
