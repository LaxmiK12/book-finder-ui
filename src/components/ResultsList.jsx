import React from "react";
import BookCard from "./BookCard";

export default function ResultsList({ books = [] }) {
  if (!books || books.length === 0)
    return <p className="mt-4">No results yet.</p>;
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {books.map((b) => (
        <BookCard key={b.key} book={b} />
      ))}
    </div>
  );
}
