"use client";
import { useGetBookQuery } from "@/redux/features/boolSliceApi";
import BookCard from "./BookCard";

const BookList = () => {
  const { data: books, isError, isLoading, isSuccess } = useGetBookQuery();
  console.log("Fetched books:", books);

  // Loading state handle
  if (isLoading) {
    return <p className="text-center text-lg">Loading books...</p>;
  }

  // Error state handle
  if (isError) {
    return <p className="text-center text-red-500">Failed to fetch books.</p>;
  }

  // Success state handle
  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {isSuccess && books?.length > 0 ? (
        books.map((book) => <BookCard key={book.id} book={book} />)
      ) : (
        <p className="text-center text-gray-500">No books available.</p>
      )}
    </div>
  );
};

export default BookList;

