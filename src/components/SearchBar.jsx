import React from "react";

export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <input
        type="text"
        placeholder="Search by title (e.g., Pride and Prejudice)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-grow px-4 py-2 rounded-md bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="flex gap-2 mt-2 sm:mt-0">
        <button
          onClick={() => onChange(value)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
