// import BookForm from "@/components/from/BookForm";
// import { useParams } from "next/navigation";

// export default function EditBookPage() {
//   const { id } = useParams();
//   return (
//     <>
//       <main className="py-6 2xl:px-6">
//         <div className="container">
//           <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
//             <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
//             <BookForm submitText="Edit Book" />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

"use client";
import BookForm from "@/components/from/BookForm";
import { useParams } from "next/navigation";
import { useGetBookQuery } from "@/redux/features/boolSliceApi";
import { useMemo } from "react";

export default function EditBookPage() {
  const { id } = useParams();

  // একক বইয়ের ডেটা ফেচ
  const {
    data: book,
    isLoading,
    isError,
  } = useGetBookQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((b) => b.id === Number(id)),
    }),
  });

  const memoizedDefaultValues = useMemo(() => book || {}, [book]);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-600">Error loading book!</p>;

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          <BookForm
            defaultValues={memoizedDefaultValues}
            submitText="Update Book"
            bookId={id} // 👈 এখানে id পাঠালাম
          />
        </div>
      </div>
    </main>
  );
}
