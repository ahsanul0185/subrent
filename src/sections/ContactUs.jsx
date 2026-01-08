import React, { useState } from "react";
import Title from "../components/Title";
import { useTranslation } from "../contexts/useTranslation";
import Button from "../components/Button";
import img from '../assets/contact-us.jpg'
import {motion} from 'motion/react'
import { submitContactForm } from "../firebase/actions";

const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log("Form submitted:", formData);
    setLoading(true);
    const res = await submitContactForm(formData)
    setLoading(false);
    if (res.success) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
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
                className="w-full px-4 py-3 bg-gray-50 border border-gray-400 focus:border-black outline-none transition text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder={t("Your Email***Votre e-mail")}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-400 focus:border-black outline-none transition text-sm"
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
                className="w-full px-4 py-3 border bg-gray-50 border-gray-400 focus:border-black outline-none transition resize-none text-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <Button
              onClick={handleSubmit}
              className="md:text-sm mt-0"
              disabled={loading}
            >
              {t(loading ? "Sending...***Envoi en cours" : "Send Message***Envoyer un message")}
            </Button>
            {submitted && <p className="text-sm text-primary mt-2">{t("Message sent successfully***Message envoyé avec succès")}</p>}
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default ContactUs;
