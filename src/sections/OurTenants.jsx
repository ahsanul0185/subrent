import React from "react";
import img from "../assets/img1.jpg";
import { useTranslation } from "../contexts/useTranslation";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const OurTenants = () => {
  const { t } = useTranslation();

  return (
    <section id="our-tenants" className="flex md:h-[65vh] flex-col md:flex-row">
      <div className="md:w-1/2 overflow-clip">
        <motion.img
          initial={{ scale: 1.4 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ amount: 0.1, once: true }}
          src={img}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

      <motion.div
        className="md:w-1/2 h-full bg-primary-dark py-16 px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1 className="text-white text-2xl md:text-4xl" variants={itemVariants}>
          {t("Who are our tenants?***Qui sont nos locataires ?")}
        </motion.h1>

        <motion.p
          className="text-gray-300 mt-5 md:text-lg"
          variants={itemVariants}
        >
          {t(
            "Our accommodations are intended for professionals on assignment—employees, executives, or contractors—who are looking for temporary housing for a few days or several weeks.***Nos hébergements s’adressent aux professionnels en mission : salariés, cadres ou prestataires, à la recherche d’un logement temporaire, quelques jours ou plusieurs semaines."
          )}
        </motion.p>

        <motion.p
          className="text-gray-300 mt-5 md:text-lg"
          variants={itemVariants}
        >
          {t(
            "We also offer housing for those who are settling permanently in the region and need a temporary solution, for example during a trial period or while waiting for their future home. Comfortable, practical, and fully equipped, each accommodation is designed to offer a worry-free stay.***Nous proposons également des logements pour ceux qui s’installent durablement dans la région et ont besoin d’une solution temporaire, par exemple pendant une période d’essai ou en attendant leur futur logement. Confortable, pratique et entièrement équipé, chaque logement est pensé pour leur offrir un séjour sans souci."
          )}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default OurTenants;
