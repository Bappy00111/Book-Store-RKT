import Navbar from "@/components/Navbar";
import BookFilter from "@/components/books/BookFilter";
import BookList from "@/components/books/BookList";

export default function Home() {
    return (
        <div>
            <Navbar />

            <main className="py-12 px-6 2xl:px-6 container mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <h4 className="mt-2 text-xl font-bold">Book List</h4>
                    <BookFilter />
                </div>

                <BookList />
            </main>
        </div>
    );
}
