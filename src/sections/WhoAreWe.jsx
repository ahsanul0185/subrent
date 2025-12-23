import React from "react";
import img_1 from "../assets/img4.jpg";
import img_2 from "../assets/about-2-768x768.webp";
import { BsCheck } from "react-icons/bs";
import { motion } from "motion/react";

import Button from "../components/Button";
import { useTranslation } from "../contexts/useTranslation";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.17,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 54,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WhoAreWe = () => {
  const { t } = useTranslation();

  return (
    <section id="who-are-we" className="default-width section-y-padding flex gap-28 flex-col lg:flex-row items-start">
      <div className="relative w-[90%] md:w-[95%] lg:w-[45%] shrink-0">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={img_1}
          alt=""
          className="rounded-2xl"
        />
        <motion.img
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          src={img_2}
          alt=""
          className="absolute w-[45%] -right-12 -bottom-12 rounded-2xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* title */}
        <div>
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-[2.6rem] leading-12"
          >
            {t(
              "We become your perfect tenant!***Nous devenons votre locataire parfait !"
            )}
          </motion.h1>

          <div className="mt-6 text-sm md:text-base space-y-4">
            <motion.p variants={itemVariants} className="text-gray-600">
              {t(
                "The ideal solution to rent out your property with complete peace of mind.***La solution idéale pour louer votre bien en toute tranquillité"
              )}
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600">
              {t(
                "Entrust us with your property and receive a fixed, guaranteed monthly rent, defined from the moment the contract is signed. No management fees, no unpleasant surprises: you know your income in advance.***Confiez-nous votre logement et percevez un loyer mensuel fixe et garanti, défini dès la signature du contrat. Aucun frais de gestion, aucune mauvaise surprise : vous connaissez vos revenus à l’avance."
              )}
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600">
              {t(
                "We take care of the entire rental management process, from legally compliant listings to daily short-term rental management. You have nothing to manage — we take care of everything.***Nous prenons en charge l’intégralité de la gestion locative, de la mise en ligne conforme à la réglementation jusqu’au suivi quotidien des locations courte durée. Vous n’avez rien à gérer, nous nous occupons de tout."
              )}
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600">
              {t(
                "Your property joins a portfolio of homes designed for professional clients and demanding travelers, ensuring reliability, quality, and respect for the property.***Votre bien rejoint un portefeuille de logements destinés à une clientèle professionnelle et des voyageurs exigeants, garantissant sérieux, qualité et respect du logement."
              )}
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600">
              {t(
                "You enjoy regular, secure, hassle-free income with complete peace of mind.***Vous profitez ainsi de revenus réguliers, sécurisés et sans contrainte, en toute sérénité."
              )}
            </motion.p>
          </div>

          <motion.div variants={itemVariants}>
            <Button>{t("Contact us***Contactez-nous")}</Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhoAreWe;
