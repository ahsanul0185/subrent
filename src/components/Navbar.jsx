import React from 'react'
import { Link } from 'react-router-dom'
import useScrollTop from '../utils/useScrollTop'
import useScrollDirection from '../utils/useScrollDirection'
import LangToggleButton from './LangToggleButton'
import { useTranslation } from '../contexts/useTranslation'

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
    const isTop = useScrollTop();
    const showNavbar = useScrollDirection();
    const {t} = useTranslation();

  return (
    <nav className={`w-full left-0 top-0 z-50 fixed ${isTop ? "" : "bg-primary"} duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className='default-width flex items-center justify-between gap-6 py-4'>
            <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
                <div className='rounded-full w-9 grid place-items-center aspect-square overflow-clip'>
            <img src="./logo-1.jpeg" className='w-12 cursor-pointer rounded-full aspect-square scale-108' alt="Subrent logo" />
            </div>
            <h2 className='text-white font-bold tracking-wider text-2xl'>SUBRENT</h2>
            </div>
            <LangToggleButton />
            </div>
            {/* <h2>Logo Here</h2> */}
            <ul className='flex gap-5'>
               {navLinks.map((item, idx) => <Link to={`#${item.hash}`} key={idx} className={`flex flex-col items-center  justify-center gap-0.5 group text-gray-50`}>
                <span>{t(item.text)}</span>
                <span className={`w-full h-0.5 bg-white opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 duration-200 ease-out`}/>
               </Link>)}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar