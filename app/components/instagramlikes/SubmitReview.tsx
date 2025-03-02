"use client";

import React, { useState } from "react";

function SubmitReview() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    review: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Review submitted:", formData);
    setSubmitted(true);
    // Here you would typically send data to your backend
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      rating: 5,
      review: "",
    });
    setSubmitted(false);
  };

  return (
    <div className=" bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Submit Your Review
      </h2>

      {submitted ? (
        <div className="text-center">
          <div className="mb-4 text-green-600 font-semibold">
            Thank you for your review!
          </div>
          <p className="mb-6 text-gray-600">
            We appreciate your feedback and will use it to improve our service.
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Write Another Review
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Rating
            </label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={star <= formData.rating ? "currentColor" : "none"}
                    stroke={star <= formData.rating ? "none" : "currentColor"}
                    className={`w-6 h-6 ${
                      star <= formData.rating
                        ? "text-orange-400"
                        : "text-orange-500"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="review"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Review
            </label>
            <textarea
              id="review"
              name="review"
              rows={4}
              value={formData.review}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Your Review"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
}

export default SubmitReview;
