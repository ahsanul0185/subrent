import React from "react";
import img_1 from "../assets/about-1-1536x976.webp";
import img_2 from "../assets/about-2-768x768.webp";
import { BsCheck } from "react-icons/bs";
import { motion } from "motion/react";

import Button from "../components/Button";

const WhoAreWe = () => {
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

  return (
    <div className="default-width section-y-padding flex gap-28 flex-col lg:flex-row items-start">
      <div className="relative w-[95%] lg:w-[45%] shrink-0">
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
            className="text-[2.6rem] leading-12"
          >
            {" "}
            We become your perfect tenant!
          </motion.h1>

          <div className="mt-6">
            <motion.p  variants={itemVariants} className="text-gray-600">
              Non anim in pariatur in ex excepteur commodo do officia amet
              incididunt ullamco nostrud aliquip minim magna esse dolore ea quis
              laborum eiusmod dolore ex pariatur ut cillum non excepteur irure
              dolore reprehenderit dolor id ut ut in ut occaecat culpa minim
              dolore elit non ut tempor ut in ex ut tempor.
            </motion.p>
            <motion.ul  variants={itemVariants} className="mt-5 text-gray-900">
              <li className="flex items-center gap-0.5">
                <BsCheck className="text-primary text-2xl mt-0.5" />{" "}
                Contemporary design with high ceilings
              </li>
              <li className="flex items-center gap-0.5">
                <BsCheck className="text-primary text-2xl mt-0.5" /> Spacious
                bedrooms with built-in wardrobes
              </li>
              <li className="flex items-center gap-0.5">
                <BsCheck className="text-primary text-2xl mt-0.5" /> Fully
                integrated smart home system
              </li>
              <li className="flex items-center gap-0.5">
                <BsCheck className="text-primary text-2xl mt-0.5" /> Gagarage
                with electric vehicle charging port
              </li>
            </motion.ul>
          </div>

          <motion.div variants={itemVariants}>
            <Button>Contact us</Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhoAreWe;
