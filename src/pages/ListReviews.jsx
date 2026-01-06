import React, { useEffect, useState } from "react";
import {
  approveReview,
  deleteReview,
  getAllReviews,
  rejectReview,
} from "../firebase/actions";
import { Check, X, Edit, Trash2, Star, Eye } from "lucide-react";

const ListReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState(null); // For modal
  const [reviewToDelete, setReviewToDelete] = useState(null);


  const fetchReviews = async () => {
    try {
      const data = await getAllReviews();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleApprove = async (id) => {
    const res = await approveReview(id);
    if (res.success) {
      await fetchReviews();
    }
  };

  const handleReject = async (id) => {
    const res = await rejectReview(id);
    if (res.success) {
      await fetchReviews();
    }
  };

const handleDelete = async (id) => {
  const res = await deleteReview(id);
  if (res.success) {
    setReviewToDelete(null);
    await fetchReviews();
  }
};

  const renderStars = (rating) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-black text-black" : "text-zinc-400"}
        />
      ))}
    </div>
  );

  useEffect(() => {
    fetchReviews();
  }, []);


  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-zinc-400">Loading reviews...</p>
      </div>
    );
  }

  return (
    <div className="p-8 overflow-x-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Reviews</h1>
      </div>

      <div className="border border-zinc-400  overflow-hidden  overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-400 bg-zinc-100">
              {[
                "Name",
                "Email",
                "Rating",
                "Review",
                "Date",
                "Status",
                "Actions",
              ].map((col) => (
                <th
                  key={col}
                  className="text-left px-6 py-4 text-xs font-medium text-zinc-900 uppercase tracking-wider"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reviews.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-12 text-center text-zinc-500"
                >
                  No reviews found
                </td>
              </tr>
            ) : (
              reviews.map((review) => (
                <tr
                  key={review.id}
                  className="border-b border-zinc-400 hover:bg-zinc-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {review.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-700">
                    {review.email}
                  </td>
                  <td className="px-6 py-4">{renderStars(review.rating)}</td>
                  <td className="px-6 py-4 text-sm text-zinc-800 max-w-xs truncate">
                    {review.review}
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-700">
                    {review.date}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium`}
                    >
                      {review.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedReview(review)}
                        className="p-2 bg-zinc-200 text-black hover:bg-zinc-800 hover:text-white transition-colors"
                        title="View Review"
                      >
                        <Eye size={16} />
                      </button>

                      {review.status === "PENDING" ? (
                        <>
                          <button
                            onClick={() => handleApprove(review.id)}
                            className="p-2 bg-gray-200 text-black hover:bg-zinc-800 hover:text-white transition-colors"
                            title="Approve"
                          >
                            <Check size={16} />
                          </button>
                          <button
                            onClick={() => handleReject(review.id)}
                            className="p-2 bg-gray-200 text-black hover:bg-zinc-800 hover:text-white transition-colors"
                            title="Reject"
                          >
                            <X size={16} />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEdit(review.id)}
                            className="p-2 bg-zinc-200 text-black hover:bg-zinc-800 hover:text-white transition-colors"
                            title="Edit"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => setReviewToDelete(review)}
                            className="p-2 bg-zinc-200 text-black hover:bg-zinc-800 hover:text-white transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 max-w-lg p-6 relative">
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-2 right-3 text-zinc-500 hover:text-black transition-colors"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {selectedReview.name}
            </h2>
            <p className="text-sm text-zinc-600 mb-2 flex items-center gap-2">
              <strong>Email:</strong> {selectedReview.email}
            </p>
            <p className="text-sm text-zinc-600 mb-3 flex items-center gap-2">
              <strong>Rating:</strong> {renderStars(selectedReview.rating)}
            </p>
            <p className="text-sm text-zinc-800 mb-4">
              {selectedReview.review}
            </p>
            <p className="text-xs text-zinc-500">{selectedReview.date}</p>
          </div>
        </div>
      )}


{/* Delete Confirmation Modal */}
{reviewToDelete  && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white w-11/12 max-w-sm p-6 relative ">
      <button
        onClick={() => setReviewToDelete(null)}
        className="absolute top-2 right-3 text-zinc-500 hover:text-black transition-colors"
      >
        ✕
      </button>

      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Confirm Deletion
      </h2>

      <p className="text-sm text-zinc-700 mb-4">
        Are you sure you want to delete the review by <strong>{reviewToDelete.name}</strong>?
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setReviewToDelete(null)}
          className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
        >
          Cancel
        </button>

        <button
          onClick={() => handleDelete(reviewToDelete.id)}
          className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}



    </div>
  );
};

export default ListReviews;
