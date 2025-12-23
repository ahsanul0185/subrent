
import React from 'react';
import { CheckCircle, Home, FileText, Users, Sparkles, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import Button from '../components/Button';
import { useTranslation } from '../contexts/useTranslation';


const steps = [
  {
    id: 1,
    title: "APPOINTMENT SCHEDULING***PRISE DE RENDEZ-VOUS",
    description:
      "First meeting and presentation of our rental solution.***Première rencontre et présentation de notre solution de location.",
  },
  {
    id: 2,
    title: "PROPERTY VISIT***VISITE DU LOGEMENT",
    description:
      "We organize a visit to your property to assess its potential.***Nous organisons une visite de votre logement pour déterminer son potentiel.",
  },
  {
    id: 3,
    title: "LEASE SIGNING***SIGNATURE DU BAIL",
    description:
      "After the property inspection, we sign a lease so that we become your tenants.***Après l'état des lieux, signature d'un bail pour que nous devenions vos locataires.",
  },
  {
    id: 4,
    title: "FURNISHING & DECORATION***AMEUBLEMENT & DÉCORATION",
    description:
      "Our team steps in to furnish and decorate your property if needed.***Notre équipe intervient pour meubler et décorer votre logement si nécessaire.",
  },
  {
    id: 5,
    title: "RESIDENT SEARCH***RECHERCHE DES RÉSIDENTS",
    description:
      "Your property is put on the market with a strict selection process for future tenants.***Mise sur le marché de votre logement et sélection stricte des futurs locataires.",
  },
  {
    id: 6,
    title: "PROFESSIONAL CLEANING***NETTOYAGES PROFESSIONNELS",
    description:
      "Our professional team takes care of maintaining your property.***Notre équipe professionnelle se charge de l'entretien de votre logement.",
  },
  {
    id: 7,
    title: "LOCA SIMPLY TAKES CARE OF THE REST!***LOCA SIMPLY S'OCCUPE DU RESTE !",
    description:
      "We handle all the formalities and guarantee you on-time rent payments.***Nous nous occupons de toutes les démarches et vous garantissons un loyer sans retard.",
  },
];


const OurMethod = () => {

  const {t} = useTranslation();
 
  return (
    <section id="our-method" className='default-width section-y-padding overflow-x-hidden'>
        <Title eyebrow={t("Our method***Notre méthode")}>
            {t("A simple, 100% WIN-WIN process!***Un process simple 100% GAGNANT-GAGNANT !")}
        </Title>
        <div className="bg-white mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {steps.map((step, index) => (
            <TimelineItem 
              key={step.id}
              step={step} 
              index={index}
            />
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-6 md:mt-16 pt-8 border-t border-gray-200"
        >
          <Button arrow={false} className="mt-2">
          Get Started
          </Button>
        </motion.div>
      </div>
    </div>
    </section>
  );
}

export default OurMethod


const TimelineItem = ({ step, index }) => {
  const icons = {
    1: Calendar,
    2: Home,
    3: FileText,
    4: Users,
    5: Sparkles,
    6: Home,
    7: CheckCircle
  };
  const {t} = useTranslation();
  
  const Icon = icons[step.id];
  const isLeft = index % 2 === 0;
  
  return (
    <div className="relative flex items-start justify-center md:justify-center mb-12 last:mb-0">
      {/* Content Left - Hidden on mobile */}
      <div className={`hidden md:block w-5/12 ${isLeft ? 'text-right pr-12' : ''}`}>
        {isLeft && (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className='border p-4 border-primary'
          >
            <div className="mb-2">
            </div>
            <h3 className="md:text-xl font-semibold text-primary mb-2">
              {t(step.title)}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t(step.description)}
            </p>
          </motion.div>
        )}
      </div>
      
      {/* Center line and icon */}
      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        {index < 6 && (
          <div className="absolute top-0 w-[1.5px] bg-primary md:block" style={{ height: 'calc(100% + 160px)' }}></div>
        )}
        
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative z-10 w-12 h-12 rounded-full bg-primary border border-gray-700 flex items-center justify-center flex-shrink-0"
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>
      
      {/* Content Right - Desktop: alternating, Mobile: always shown */}
      <div className={`w-full md:w-5/12 pl-6 md:pl-0 ${!isLeft ? 'md:text-left md:pl-12' : ''}`}>
        {/* Mobile: Always show content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`border p-4 border-primary ${isLeft ? 'md:hidden' : ''}`}
        >
          <div className="mb-2">
          </div>
           <h3 className="md:text-xl font-semibold text-primary mb-2">
            {t(step.title)}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {t(step.description)}
          </p>
        </motion.div>
      </div>
    </div>
  );
};