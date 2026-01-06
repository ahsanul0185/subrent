import React, { useState } from "react";
import Title from "../components/Title";
import { useTranslation } from "../contexts/useTranslation";
import ReviewForm from "../components/ReviewForm";
import ReveiwSlider from "../components/ReviewSlider";
import Button from "../components/Button";
import { PiNotePencilThin } from "react-icons/pi";

const reviews = [
  {
    name: "Alex Johnson",
    designation: "Startup Founder***Fondateur de startup",
    profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Subrent gave me complete peace of mind. I no longer worry about unpaid rent or property management—they handle everything professionally and transparently.***Subrent m’a offert une tranquillité d’esprit totale. Je ne me soucie plus des loyers impayés ni de la gestion du bien — tout est pris en charge de manière professionnelle et transparente.",
    date: "November 25, 2024***25 novembre 2024",
    rating: 5,
  },
  {
    name: "Sofia Martinez",
    designation: "Product Manager***Chef de produit",
    profilePhoto: "https://randomuser.me/api/portraits/women/45.jpg",
    description:
      "The guaranteed monthly rent is exactly what I needed. Clear contract, no hidden fees, and a team that truly takes care of the property.***Le loyer mensuel garanti est exactement ce dont j’avais besoin. Contrat clair, aucun frais caché et une équipe qui prend réellement soin du bien.",
    date: "January 20, 2025***20 janvier 2025",
    rating: 5,
  },
  {
    name: "Liam Chen",
    designation: "CEO***PDG",
    profilePhoto: "https://randomuser.me/api/portraits/men/22.jpg",
    description:
      "Subrent transformed my vacant home into a reliable source of income. Everything is managed smoothly, and the communication is excellent.***Subrent a transformé ma maison inoccupée en une source de revenus fiable. Tout est géré efficacement et la communication est excellente.",
    date: "November 22, 2024***22 novembre 2024",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    designation: "Marketing Head***Responsable marketing",
    profilePhoto: "https://randomuser.me/api/portraits/women/56.jpg",
    description:
      "A stress-free rental solution! From maintenance to tenant management, everything is handled with care and professionalism.***Une solution locative sans stress ! De l’entretien à la gestion des locataires, tout est pris en charge avec soin et professionnalisme.",
    date: "December 18, 2024***18 décembre 2024",
    rating: 5,
  },
  {
    name: "Rajiv Kapoor",
    designation: "Entrepreneur***Entrepreneur",
    profilePhoto: "https://randomuser.me/api/portraits/men/78.jpg",
    description:
      "Reliable income, full flexibility, and great security. Subrent delivers exactly what they promise. Highly trustworthy service.***Revenus fiables, flexibilité totale et excellente sécurité. Subrent tient parfaitement ses promesses. Un service digne de confiance.",
    date: "December 29, 2024***29 décembre 2024",
    rating: 5,
  },
];

const Reviews = () => {
  const { t } = useTranslation();
  const [showReviewForm, setShowReviewForm] = useState(false);
  return (
    <div id="reviews" className="section-y-padding">
      <Title>{t("Client Reviews***Avis-Clients")}</Title>
      <div className="default-width">
        {reviews.length > 7 ? (
          <ReveiwSlider
            reviews={reviews}
            setShowReviewForm={setShowReviewForm}
          />
        ) : (
          <div className="flex flex-col gap-3 items-center mt-12">
            <h2 className="text-3xl text-gray-700 text-center mb-8">
              {t("No Reviews Found***Aucun avis trouvé")}
            </h2>
            <Button
                onClick={() => setShowReviewForm((prev) => !prev)}
                className="flex text-xs md:mt-0 md:py-2 tracking-normal md:text-xs"
                arrow={false}
              >
                <PiNotePencilThin />
                {t("Write a Review***Ecrire un avis")}
              </Button>
          </div>
        )}

        <hr className="border-0 my-6" />

        {showReviewForm && (
          <div className="border p-8 max-w-5xl mx-auto border-gray-400">
            <h2 className="text-2xl md:text-3xl text-center mb-8">
              {t("Leave a Review***Laisser un avis")}
            </h2>
            <ReviewForm setShowReviewForm={setShowReviewForm} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
