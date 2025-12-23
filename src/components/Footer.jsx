import React from 'react';
import { Phone, Clock, Mail } from 'lucide-react';
import logo from '/logo-1.jpeg'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import Button from './Button';
import { useTranslation } from '../contexts/useTranslation';
export default function Footer() {

  const {t} = useTranslation()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white py-10 md:py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Address Section */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full overflow-clip">
              <img src={logo} alt="" className='rounded-full scale-110' />
            </div>
            <h2 className="text-3xl md:text-4xl">SUBRENT</h2>
          </div>
          <p className="text-gray-300 md:text-lg">712 Jefferson Ave, Brooklyn</p>
          <p className="text-gray-300 md:text-lg">New York 11221</p>
        </div>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-12 mb-8 md:mb-16">
          {/* Call Us */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0">
              <Phone className="size-8 md:size-11 text-white/90" />
            </div>
            <div>
              <h3 className="text-gray-300 text-xs md:text-sm mb-0.5">{t("Call Us***Appelez-nous")}</h3>
              <p className="md:text-xl text-white">+1 123 456 789</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0">
              <Clock className="size-8 md:size-11 text-white/90" />
            </div>
            <div>
              <h3 className="text-gray-300 text-xs md:text-sm mb-0.5">{t("Opening Hours***Heures d'ouverture")}</h3>
              <p className="md:text-xl text-white">Mon to Sat 08:00 - 20:00</p>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16  rounded-full flex items-center justify-center shrink-0">
              <Mail className="size-8 md:size-11 text-white/90" />
            </div>
            <div>
              <h3 className="text-gray-300 text-xs md:text-sm mb-0.5">{t("Email Us***Envoyez-nous un courriel")}</h3>
              <p className="md:text-xl text-white">contact@subrent.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} SUBRENT
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 transition-colors" aria-label="Facebook">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 transition-colors" aria-label="Twitter">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 transition-colors" aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 transition-colors" aria-label="YouTube">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}