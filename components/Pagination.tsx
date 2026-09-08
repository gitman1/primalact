export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const showEllipsis = totalPages > 4;
  const leadingPages = showEllipsis ? [1, 2, 3] : Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mx-auto flex w-full max-w-1200 items-center justify-between container-px py-60">
      <div className="flex flex-wrap items-center gap-4">
        {leadingPages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`font-dirty text-[28px] leading-none transition-colors ${
              currentPage === page ? "text-green-base" : "text-orange hover:text-green-base"
            }`}
          >
            {page}
          </button>
        ))}

        {showEllipsis && (
          <>
            <span className="font-dirty text-[28px] text-orange">...</span>
            <button
              type="button"
              onClick={() => onPageChange(totalPages)}
              className={`font-dirty text-[28px] leading-none transition-colors ${
                currentPage === totalPages ? "text-green-base" : "text-orange hover:text-green-base"
              }`}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        aria-label="Pagina următoare"
        className="flex h-[50px] w-[50px] items-center justify-center rounded-10 border border-beige-700 font-dirty text-20 text-orange transition-colors hover:border-orange disabled:cursor-not-allowed disabled:opacity-40"
      >
        &gt;
      </button>
    </div>
  );
}
