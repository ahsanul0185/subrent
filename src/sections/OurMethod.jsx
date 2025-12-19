
import React from 'react';
import { CheckCircle, Home, FileText, Users, Sparkles, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import Button from '../components/Button';


 const steps = [
    {
      id: 1,
      title: "Appointment Making",
      description: "Initial meeting and presentation of our rental solution."
    },
    {
      id: 2,
      title: "House Visit",
      description: "We arrange a visit to your property to determine its potential."
    },
    {
      id: 3,
      title: "Signing of the Lease",
      description: "After the inventory of fixtures, we will sign a lease so that we become your tenants."
    },
    {
      id: 4,
      title: "Resident Search",
      description: "Putting your property on the market and strictly selecting future tenants."
    },
    {
      id: 5,
      title: "Furniture & Decoration",
      description: "Our team can furnish and decorate your home if needed."
    },
    {
      id: 6,
      title: "Professional Cleaning",
      description: "Our professional team takes care of the maintenance of your accommodation."
    },
    {
      id: 7,
      title: "We Take Care of the Rest",
      description: "We take care of all the formalities and guarantee you rent payments without delay."
    }
  ];

const OurMethod = () => {
 
  return (
    <div className='default-width section-y-padding'>
        <Title eyebrow="Our method">
            A simple, 100% WIN-WIN process!
        </Title>
        <div className="min-h-screen bg-white mt-20">
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
          className="text-center mt-20 pt-8 border-t border-gray-200"
        >
          <Button arrow={false}>
          Get Started
          </Button>
        </motion.div>
      </div>
    </div>
    </div>
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
  
  const Icon = icons[step.id];
  const isLeft = index % 2 === 0;
  
  return (
    <div className="relative flex items-start justify-center mb-20 last:mb-0">
      {/* Content Left */}
      <div className={`w-5/12 ${isLeft ? 'text-right pr-12' : ''}`}>
        {isLeft && (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className='border p-4 border-primary'
          >
            <div className="mb-2">
              <span className="text-xs font-semibold text-gray-500 tracking-wider">
                STEP {step.id}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        )}
      </div>
      
      {/* Center line and icon */}
      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        {index < 6 && (
          <div className="absolute top-0 w-[1.5px] bg-primary" style={{ height: 'calc(100% + 230px)' }}></div>
        )}
        
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative z-10 w-12 h-12 rounded-full bg-primary border border-gray-700 flex items-center justify-center"
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>
      
      {/* Content Right */}
      <div className={`w-5/12 ${!isLeft ? 'text-left pl-12' : ''}`}>
        {!isLeft && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className='border p-4 border-primary'
          >
            <div className="mb-2">
              <span className="text-xs font-semibold text-gray-500 tracking-wider">
                STEP {step.id}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};