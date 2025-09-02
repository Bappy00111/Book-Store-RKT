"use client"
import BookForm from "@/components/from/BookForm";

export default function AddBookPage() {
  const handleAddBook = (bookData) => {
    console.log("New Book Added:", bookData);
    // এখানে API কল করে ডেটা পাঠানো হবে
  };

  return (
    <>
      <main className="py-6 2xl:px-6">
        <div className="container">
          <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <BookForm onSubmit={handleAddBook} submitText="Add Book" />
          </div>
        </div>
      </main>
    </>
  );
}
