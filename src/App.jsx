import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import Pagination from "./components/Pagination";
import { searchBooks } from "./api/openLibrary";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [numFound, setNumFound] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) {
      setResults([]);
      setNumFound(0);
      return;
    }
    setLoading(true);
    setError("");
    searchBooks(query, page)
      .then(({ docs, numFound }) => {
        setResults(docs || []);
        setNumFound(numFound || 0);
      })
      .catch(() => setError("Failed to fetch results."))
      .finally(() => setLoading(false));
  }, [query, page]);

  return (
    /* 🌄 Background Image */
    <div
      style={{
        backgroundImage: "url('/bg.jpg')", // 👈 your image from /public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      {/* 🖤 Transparent Overlay */}
      <div className="bg-black/40 min-h-screen text-white">
        <div className="p-4 md:p-8">
          <header className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-2">📚 Book Finder</h1>
            <p className="text-sm text-gray-200">
              Search books quickly using OpenLibrary
            </p>
          </header>

          <main className="max-w-4xl mx-auto mt-6">
            <SearchBar
              value={query}
              onChange={(v) => {
                setQuery(v);
                setPage(1);
              }}
              onClear={() => {
                setQuery("");
                setPage(1);
              }}
            />
            {loading && <p className="mt-4 text-gray-200">Loading…</p>}
            {error && <p className="mt-4 text-red-400">{error}</p>}
            {!loading && !error && (
              <>
                <p className="mt-4 text-sm text-gray-200">
                  Found {numFound} results
                </p>
                <ResultsList books={results} />
                <Pagination
                  page={page}
                  total={numFound}
                  pageSize={100}
                  onPageChange={(p) => setPage(p)}
                />
              </>
            )}
          </main>

          <footer className="max-w-4xl mx-auto mt-8 text-xs text-gray-300 text-center">
            <p>Data from OpenLibrary. Built with React + Tailwind.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
