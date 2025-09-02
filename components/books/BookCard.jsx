
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  // destructure book props
  const { id, name, author, thumbnail, price, rating, featured } = book;

  return (
    <div className="book-card">
      {/* Book Thumbnail */}
      <Image
        className="h-[240px] w-[170px] object-cover"
        src={thumbnail}
        width={170}
        height={240}
        alt={name}
      />

      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        {/* Featured Badge & Action Buttons */}
        <div className="flex items-center justify-between">
          {featured && <span className="lws-badge">Featured</span>}
          
          <div className="text-gray-500 space-x-2 flex">
            {/* Edit Button */}
            <Link href={`/editbook/${id}`}>
              <button className="lws-edit">✏️</button>
            </Link>

            {/* Delete Button */}
            <button className="lws-deleteBook" onClick={() => console.log("Delete book", id)}>
              🗑️
            </button>
          </div>
        </div>

        {/* Book Details */}
        <div className="space-y-2 mt-4 h-full">
          <h4 className="lws-book-name">{name}</h4>
          <p className="lws-author">{author}</p>

          {/* Rating Stars */}
          <div className="lws-stars flex">
            {Array.from({ length: rating }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 20 20"
                fill="currentColor"
                className="star"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                />
              </svg>
            ))}
          </div>

          {/* Price */}
          <p className="lws-price">BDT {price}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

