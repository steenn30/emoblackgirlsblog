import React, { useState } from "react";
import ClickableGridItem from "./ClickableGridItem";

const ClickableGridParent = ({ articles }) => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Calculate the index of the first and last article for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

  // Get the articles to display on the current page
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Handle next and previous page navigation
  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {currentArticles.map((article, index) => (
          <ClickableGridItem key={index} article={article} />
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center items-center space-x-4 mt-4">
        {/* Left arrow (previous page) */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white text-black"}`}
        >
          &#8592; {/* Left arrow */}
        </button>

        {/* Page number buttons */}
        <span className="text-black">
          {currentPage} / {totalPages}
        </span>

        {/* Right arrow (next page) */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white text-black"}`}
        >
          &#8594; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default ClickableGridParent;
