"use client";
import BookFilter from "@/components/books/BookFilter";
import BookList from "@/components/books/BookList";
import Navbar from "@/components/Navbar";
import { useGetBookQuery } from "@/redux/features/bookSliceApi";
import { useState } from "react";

export default function Home() {
  const { data: books, isError, isLoading, isSuccess } = useGetBookQuery();
  const [filterType, setFilterType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // ফিল্টার করা বই
  let filteredBooks =
    filterType === "featured" ? books.filter((book) => book.featured) : books;

  // Filter books based on Search
  if (searchTerm.trim() !== "") {
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
      <main className="py-12 px-6 2xl:px-6 container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>
          <BookFilter filterType={filterType} setFilterType={setFilterType} />
        </div>
        <BookList
          books={filteredBooks}
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </main>
    </div>
  );
}
