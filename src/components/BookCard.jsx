import React from "react";
import { coverUrlFromDoc } from "../api/openLibrary";

export default function BookCard({ book }) {
  const cover = coverUrlFromDoc(book) || "/default-cover.png";
  const authors = (book.author_name || []).join(", ");
  const openLink = `https://openlibrary.org${book.key}`;
  return (
    <a
      href={openLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-3 bg-white rounded shadow hover:shadow-md transition"
    >
      <div className="flex gap-3">
        <img
          src={cover}
          alt={`${book.title} cover`}
          className="w-20 h-28 object-cover rounded"
        />
        <div>
          <h3 className="font-semibold">{book.title}</h3>
          <p className="text-sm text-gray-600">{authors}</p>
          <p className="text-xs text-gray-500 mt-2">
            First published: {book.first_publish_year || "N/A"}
          </p>
          {book.subject && (
            <p className="text-xs text-gray-500 mt-1">
              Subjects: {(book.subject.slice(0, 3) || []).join(", ")}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}
