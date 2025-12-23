import React from "react";
import Title from "../components/Title";
import { FaHandPeace, FaHandshake, FaLock, FaNewspaper, FaSmile } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { motion } from "motion/react";
import { useTranslation } from "../contexts/useTranslation";

const features = [
  {
    title: "Serenity***Sérénité",
    description: "We manage your entire property with no hidden fees!***Nous gérons l'intégralité de votre bien sans frais cachés !",
    icon: <FaHandPeace />,
  },
  {
    title: "Profitability***Rentabilité",
    description: "Paying your rent every month is our number one commitment.***Le paiement, tous les mois, de votre loyer est notre engagement N°1",
    icon: <FaMoneyBillTrendUp />,
  },
  {
    title: "Flexibility***Flexibilité",
    description: "You can retrieve your property whenever you wish.***Vous pouvez récupérer votre bien quand vous le souhaitez.",
    icon: <FaSmile />,
  },
  {
    title: "Insurance***Assurance",
    description: "Your property is protected against damage with our insurance.***Votre bien immobilier est protégé avec notre assurance contre les dégradations.",
    icon: <FaNewspaper />,
  },
  {
    title: "Security***Sécurité",
    description:
      "Our commercial lease guarantees you a fixed monthly rent and the option to terminate at any time.***Notre bail professionnel vous assure un loyer mensuel fixe et une rupture à tout moment.",
    icon: <FaLock />,
  },
  {
    title: "Interview***Entretien",
    description:
      "Professionals will be present to maintain your property on a daily basis.***Des professionnels seront présents afin d'entretenir quotidiennement votre bien.",
    icon: <FaHandshake />,
  },
];


const WhyChooseUs = () => {

  const {t} = useTranslation();

  return (
    <div className="section-y-padding bg-gray-100">
      <div className="default-width ">
        <Title eyebrow={t("Why choose Subrent?***Pourquoi choisir Subrent?")}>{t("A unique experience***Une expérience unique")}</Title>



<motion.div initial={{opacity : 0, y : 50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 1, ease: [0.22, 1, 0.36, 1],}} viewport={{amount : 0.2, once : true}} className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 bg-gray-500 gap-px p-px">
  {features.map((feature, idx) => (
    <div
      key={idx}
      className="
        flex flex-col items-center gap-3 p-10 text-center
         hover:bg-primary duration-300 ease-in-out group bg-gray-100"
    >
      <div className="text-2xl text-primary group-hover:text-white">{feature.icon}</div>
      <h4 className="font-semibold text-2xl group-hover:text-white">{t(feature.title)}</h4>
      <p className="text-gray-600 group-hover:text-white">{t(feature.description)}</p>
    </div>
  ))}
</motion.div>


        
      </div>
    </div>
  );
};

export default WhyChooseUs;
