import React, { useState } from "react";
import Title from "../components/Title";
import { useTranslation } from "../contexts/useTranslation";
import { Phone, Mail, MapPin } from "lucide-react";
import Button from "../components/Button";
import img from '../assets/contact-us.jpg'
import {motion} from 'motion/react'

const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // alert("Visit request submitted successfully!");
  };

  return (
    <section id="contact-us" className="default-width section-y-padding">
      <Title>{t("Contact Us***Nous contacter")}</Title>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto flex gap-12 mt-20 justify-center">

        {/* Left Side - Profile Card */}
        <div className="hidden md:flex w-1/2 flex-col items-center justify-center">
            <motion.img initial={{y : 50, opacity : 0}} whileInView={{y : 0, opacity : 1}} transition={{duration : 0.5}} viewport={{amount : 0.5, once : true}} src={img} alt="" className="w-[90%]" />
        </div>

        {/* Right Side - Form */}
        <motion.div initial={{ opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 0.5}} viewport={{amount : 0.5, once : true}} className="w-full max-w-2xl">
          <div className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder={t("Your Name***Votre nom")}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-[0.5px] focus:ring-primary focus:border-transparent text-gray-900 placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder={t("Your Email***Votre e-mail")}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-[0.5px] focus:ring-primary focus:border-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="8"
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-[0.5px] focus:ring-primary focus:border-transparent text-gray-900 placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              className="px- mt-0"
            >
              {t("Send Message***Envoyer un message")}
            </Button>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default ContactUs;
