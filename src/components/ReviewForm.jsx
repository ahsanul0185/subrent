import { CheckCircle, Star } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../contexts/useTranslation";
import Button from "./Button";
import { createReview } from "../firebase/actions";

const ReviewForm = ({ setShowReviewForm, submitted, setSubmitted }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    review: "",
    date: "",
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.rating === 0) {
      newErrors.rating = "Rating is required";
    }

    if (!formData.review.trim()) {
      newErrors.review = "Review is required";
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    let reviewData;
    if (!formData.date || formData.date === "") {
      reviewData = { ...formData, date: new Date() };
    } else {
      reviewData = { ...formData};
    }

    reviewData.status = "PENDING";

    setIsLoading(true);
    const res = await createReview(reviewData);
    setIsLoading(false);
    if (res.success) {
      setSubmitted(true);
      setErrors({});

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          rating: 0,
          review: "",
        });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleRating = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
    if (errors.rating) {
      setErrors({
        ...errors,
        rating: "",
      });
    }
  };


  return (
    <div className="max-w-5xl mx-auto flex items-center justify-center mt-8">
      <div className="w-full">
        <div className="space-y-8">
          <div className="flex gap-8">
            <div className="w-1/2">
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider text-gray-700 mb-3"
              >
                {t("Full Name***Nom et prénom")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-400 focus:border-black outline-none transition text-sm"
                placeholder={t("Enter your name***Entrez votre nom")}
              />
              {errors.name && (
                <p className="text-red-600 text-xs mt-2">{errors.name}</p>
              )}
            </div>

            <div className="w-1/2">
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider text-gray-700 mb-3"
              >
                {t("Email***E-mail")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-400 focus:border-black outline-none transition text-sm"
                placeholder={t("Enter your email***Entrez votre email")}
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-2">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-1/2">
              <label
                htmlFor="date"
                className="block text-xs uppercase tracking-wider text-gray-700 mb-3"
              >
                {t("Date***Date")}
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-400 focus:border-black outline-none transition text-sm"
                // placeholder={t("Enter your email***Entrez votre email")}
              />
            </div>

            <div className="w-1/2">
              <label className="block text-xs uppercase tracking-wider text-gray-600 mb-3">
                {t("Rating***Note")}
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="transition-opacity hover:opacity-70"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hoveredStar || formData.rating)
                          ? "fill-black text-black"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {errors.rating && (
                <p className="text-red-600 text-xs mt-2">{errors.rating}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="review"
              className="block text-xs uppercase tracking-wider text-gray-700 mb-3"
            >
              {t("Review***Revoir")}
            </label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 border bg-gray-50 border-gray-400 focus:border-black outline-none transition resize-none text-sm"
              placeholder={t("Share your thoughts***Partagez vos pensées")}
            />
            {errors.review && (
              <p className="text-red-600 text-xs mt-2">{errors.review}</p>
            )}
          </div>

          <div className="flex justify-end gap-6">
            <button onClick={() => setShowReviewForm(false)} className="px-4 py-2 text-xs uppercase cursor-pointer hover:bg-gray-200">
                {t("Cancel***Annuler")}
            </button>
            <Button
              onClick={handleSubmit}
              className="md:text-xs mt-0 uppercase"
              arrow={false}
              disabled={isLoading}
            >
              {t(isLoading ? "Submitting...***En cours..." : "Submit Review***Envoyer un avis")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
