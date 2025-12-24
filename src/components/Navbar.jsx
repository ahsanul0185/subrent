import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrollTop from '../utils/useScrollTop'
import useScrollDirection from '../utils/useScrollDirection'
import LangToggleButton from './LangToggleButton'
import { useTranslation } from '../contexts/useTranslation'
import MobileNavbar from './MobileNavbar'
import { Menu } from 'lucide-react'
import { TbMenu3 } from 'react-icons/tb'
import { getLenis } from '../contexts/useLenis'

const navLinks = [
  {
    text: "Who are we?***Qui sommes-nous ?",
    hash: "who-are-we",
  },
  {
    text: "Why choose us?***Pourquoi nous choisir ?",
    hash: "who-choose-us",
  },
  {
    text: "Our method***Notre méthode",
    hash: "our-method",
  },
  {
    text: "Our tenants***Nos locataires",
    hash: "our-tenants",
  },
  {
    text: "Contact us***Contactez-nous",
    hash: "contact-us",
  },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isTop = useScrollTop();
    const showNavbar = useScrollDirection();
    const {t} = useTranslation();

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
      setMobileMenuOpen(false);
    };

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  const lenis = getLenis();
  if (!section || !lenis) return;

  const offset = -80; // fixed navbar
  const targetY = section.getBoundingClientRect().top + window.scrollY + offset;
  lenis.scrollTo(targetY, { duration: 1 });
};


  return (
    <>
      <nav className={`w-full left-0 top-0 z-50 fixed ${isTop ? "" : "bg-primary"} duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className='default-width flex items-center justify-between gap-6 py-4'>
          <div className='flex items-center gap-6'>
            <div onClick={() => window.location = "/"}  className='flex items-center gap-2 cursor-pointer'>
              <div className=' rounded-full w-9 grid place-items-center aspect-square overflow-clip'>
                <img src="./logo-1.jpeg" className='w-12 cursor-pointer rounded-full aspect-square scale-108' alt="Subrent logo" />
              </div>
              <h2 className='text-white font-bold tracking-wider text-xl md:text-2xl cursor-pointer'>SUBRENT</h2>
            </div>
            <div className='hidden md:block'>
              <LangToggleButton />
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className='hidden lg:flex gap-5'>
            {navLinks.map((item, idx) => (
              <button key={idx} onClick={() => scrollToSection(item.hash)} className={`flex cursor-pointer flex-col items-center justify-center gap-0.5 group text-gray-50`}>
                <span>{t(item.text)}</span>
                <span className={`w-full h-0.5 bg-white opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 duration-200 ease-out`}/>
              </button>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className='lg:hidden text-white text-2xl'
          >
            <TbMenu3 />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileNavbar 
        isOpen={mobileMenuOpen} 
        onClose={closeMobileMenu} 
        navLinks={navLinks}
        scrollToSection={scrollToSection}
      />
    </>
  )
}

export default Navbar