export async function searchBooks(title, page = 1) {
  if (!title) return { docs: [], numFound: 0 };
  const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(
    title
  )}&page=${page}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network response not ok");
  const data = await res.json();
  return { docs: data.docs, numFound: data.numFound };
}

export function coverUrlFromDoc(doc, size = "M") {
  if (doc.cover_i)
    return `https://covers.openlibrary.org/b/id/${doc.cover_i}-${size}.jpg`;
  if (doc.isbn && doc.isbn[0])
    return `https://covers.openlibrary.org/b/isbn/${doc.isbn[0]}-${size}.jpg`;
  return null;
}
