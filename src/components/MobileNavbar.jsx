import React from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import LangToggleButton from './LangToggleButton'
import { useTranslation } from '../contexts/useTranslation'

const MobileNavbar = ({ isOpen, onClose, navLinks, scrollToSection }) => {
  const { t } = useTranslation();

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full bg-primary z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full'>
          {/* Mobile Menu Header */}
          <div className='flex items-center justify-between p-4 border-b border-white/10'>
            <div className='flex items-center gap-2'>
              <div className='rounded-full w-8 grid place-items-center aspect-square overflow-clip'>
                <img src="./logo-1.jpeg" className='w-10 cursor-pointer rounded-full aspect-square scale-108' alt="Subrent logo" />
              </div>
              <h2 className='text-white font-bold tracking-wider text-xl'>SUBRENT</h2>
            </div>
            <button 
              onClick={onClose}
              className='text-white p-2 hover:bg-white/10 transition-colors'
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <ul className='flex flex-col py-4 gap-2 flex-1 items-start'>
            {navLinks.map((item, idx) => (
              <button
                key={idx} 
                onClick={() => {onClose(); scrollToSection(item.hash)}}
                className='text-gray-50 py-3 hover:bg-white/10 transition-colors duration-200 w-full text-left'
              >
                <span className='px-6'>{t(item.text)}</span>
              </button>
            ))}
          </ul>

          {/* Language Toggle in Mobile Menu */}
          <div className='p-4 border-t border-white/10 md:hidden'>
            <LangToggleButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNavbar