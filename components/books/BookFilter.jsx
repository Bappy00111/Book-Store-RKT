const BookFilter = ({ filterType, setFilterType }) => {
  return (
    <div className="flex items-center space-x-4">
      {/* All Button */}
      <button
        onClick={() => setFilterType("all")}
        className={`lws-filter-btn ${
          filterType === "all" ? "active-filter" : ""
        }`}
      >
        All
      </button>

      {/* Featured Button */}
      <button
        onClick={() => setFilterType("featured")}
        className={`lws-filter-btn ${
          filterType === "featured" ? "active-filter" : ""
        }`}
      >
        Featured
      </button>
    </div>
  );
};

export default BookFilter;
