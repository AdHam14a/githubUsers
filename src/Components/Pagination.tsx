interface IPagination {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export default function Pagination({ page, setPage, totalPages }:IPagination) {
  return (
    <>
      <div className="flex justify-around m-4">
        <button
          className="p-2 bg-gray-900 rounded-xl cursor-pointer text-gray-200 disabled:opacity-50 disabled:cursor-auto"
          disabled={page === 1}
          onClick={() => setPage(1)}
        >
          First
        </button>

        <div className="flex gap-7 items-center">
          <button
            className="p-2 bg-gray-900 rounded-xl cursor-pointer text-gray-200 disabled:opacity-50 disabled:cursor-auto"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
          >
            Previous
          </button>

          <span className="px-4 py-2">
            Page {page} of {totalPages}
          </span>

          <button
            className="p-2 bg-gray-900 rounded-xl cursor-pointer text-gray-200 disabled:opacity-50 disabled:cursor-auto"
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          >
            Next
          </button>
        </div>

        <button
          className="p-2 bg-gray-900 rounded-xl cursor-pointer text-gray-200 disabled:opacity-50 disabled:cursor-auto"
          disabled={page === totalPages}
          onClick={() => setPage(totalPages)}
        >
          Last
        </button>
      </div>
    </>
  );
}
