"use client";
import { useState } from "react";

const BookForm = ({ onSubmit, defaultValues = {}, submitText }) => {
  const [formData, setFormData] = useState({
    name: defaultValues.name || "",
    author: defaultValues.author || "",
    thumbnail: defaultValues.thumbnail || "",
    price: defaultValues.price || "",
    rating: defaultValues.rating || "",
    featured: defaultValues.featured || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="book-form space-y-4">
      {/* Book Name */}
      <div className="space-y-2">
        <label htmlFor="lws-bookName">Book Name</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Author */}
      <div className="space-y-2">
        <label htmlFor="lws-author">Author</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </div>

      {/* Thumbnail */}
      <div className="space-y-2">
        <label htmlFor="lws-thumbnail">Image URL</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
        />
      </div>

      {/* Price & Rating */}
      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label htmlFor="lws-price">Price</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-rating">Rating</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Featured Checkbox */}
      <div className="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
          className="w-4 h-4"
        />
        <label htmlFor="lws-featured" className="ml-2 text-sm">
          This is a featured book
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit" id="lws-submit">
        {submitText}
      </button>
    </form>
  );
};

export default BookForm;
