import React from "react";

export default function Pagination({
  page,
  onPageChange,
  total,
  pageSize = 100,
}) {
  const totalPages = Math.ceil(total / pageSize) || 1;
  return (
    <div className="mt-4 flex items-center gap-3">
      <button
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span className="text-sm">
        Page {page} / {totalPages}
      </span>
      <button
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
