import React from 'react'
import { Link } from 'react-router-dom'
import useScrollTop from '../utils/useScrollTop'
import useScrollDirection from '../utils/useScrollDirection'

const navLinks = [
    {
        text : "Qui sommes-nous ?",
        hash : 'who-are-we'
    },
    {
        text : "Pourquoi nous choisir ?",
        hash : 'who-choose-us'
    },
    {
        text : "Notre méthode",
        hash : 'our-method'
    },
        {
        text : "Nos locataires",
        hash : 'our-tenants'
    },
    {
        text : "Contactez-nous",
        hash : 'contact-us'
    },
]

const Navbar = () => {
    const isTop = useScrollTop();
    const showNavbar = useScrollDirection();

  return (
    <nav className={`w-full left-0 top-0 z-50 fixed ${isTop ? "" : "bg-primary-dark"} duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className='default-width flex items-center justify-between gap-6 py-4'>
            <img src="./logo.jpeg" className='w-12 cursor-pointer' alt="Subrent logo" />
            {/* <h2>Logo Here</h2> */}
            <ul className='flex gap-5'>
               {navLinks.map((item, idx) => <Link to={`#${item.hash}`} key={idx} className={`flex flex-col items-center  justify-center gap-0.5 group text-gray-50`}>
                <span>{item.text}</span>
                <span className={`w-full h-0.5 bg-white opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 duration-200 ease-out`}/>
               </Link>)}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar