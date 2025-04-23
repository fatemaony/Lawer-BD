import React, { useState } from "react";
import blogs from "../data/blogs";

const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none"
            >
              <span className="text-lg font-semibold text-gray-800">
                {blog.question}
              </span>
              <span className="text-xl text-gray-500">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                {blog.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
