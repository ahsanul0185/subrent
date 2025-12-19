import React from "react";
import Title from "../components/Title";
import { FaHandPeace, FaHandshake, FaLock, FaNewspaper, FaSmile } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { motion } from "motion/react";

const features = [
  {
    title: "Serenity",
    description: "We manage your entire property with no hidden fees!",
    icon: <FaHandPeace />,
  },
  {
    title: "Profitability",
    description: "Paying your rent every month is our number one commitment.",
    icon: <FaMoneyBillTrendUp />,
  },
  {
    title: "Flexibility",
    description: "You can retrieve your property whenever you wish.",
    icon: <FaSmile />,
  },
  {
    title: "Insurance",
    description: "Your property is protected against damage with our insurance.",
    icon: <FaNewspaper />,
  },
  {
    title: "Security",
    description:
      "Our commercial lease guarantees you a fixed monthly rent and the option to terminate at any time.",
    icon: <FaLock />,
  },
  {
    title: "Interview",
    description:
      "Professionals will be present to maintain your property on a daily basis.",
    icon: <FaHandshake />,
  },
];


const WhyChooseUs = () => {
  return (
    <div className="section-y-padding bg-gray-100">
      <div className="default-width ">
        <Title eyebrow="Why choose Subrent?">A unique experience</Title>



<motion.div initial={{opacity : 0, y : 50}} whileInView={{opacity : 1, y : 0}} transition={{duration : 1, ease: [0.22, 1, 0.36, 1],}} viewport={{amount : 0.2, once : true}} className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 bg-gray-500 gap-px p-px">
  {features.map((feature, idx) => (
    <div
      key={idx}
      className="
        flex flex-col items-center gap-3 p-10 text-center
         hover:bg-primary duration-300 ease-in-out group bg-gray-100"
    >
      <div className="text-2xl text-primary group-hover:text-white">{feature.icon}</div>
      <h4 className="font-semibold text-2xl group-hover:text-white">{feature.title}</h4>
      <p className="text-gray-600 group-hover:text-white">{feature.description}</p>
    </div>
  ))}
</motion.div>


        
      </div>
    </div>
  );
};

export default WhyChooseUs;
