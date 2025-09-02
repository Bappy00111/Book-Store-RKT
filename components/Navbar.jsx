import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="py-4 2xl:px-6 shadow-sm bg-white">
            <div className="container mx-auto flex items-center justify-between">
                <Link href='/'>
                    <Image src="/logo.svg" width={150} height={50} alt="Logo" />
                </Link>

                {/* Menu Items */}
                <ul className="hidden md:flex items-center space-x-6">
                    <li>
                        <Link href="/" className="font-semibold cursor-pointer">
                            Book Store
                        </Link>
                    </li>
                    <li>
                        <Link href="/addbook" className="cursor-pointer">
                            Add Book
                        </Link>
                    </li>
                </ul>

                {/* Search Box */}
                <div className="flex items-center">
                    <div className="group relative rounded-md bg-white">
                        <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            ></path>
                        </svg>
                        <input
                            type="text"
                            placeholder="Filter books..."
                            className="search pl-10 pr-3 py-2 border rounded-md"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
