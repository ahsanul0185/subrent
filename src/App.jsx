import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import WhoAreWe from './sections/WhoAreWe'
import WhyChooseUs from './sections/WhyChooseUs'
import OurMethod from './sections/OurMethod'
import OurTenants from './sections/OurTenants'
import Reviews from './sections/Reviews'
import ContactUs from './sections/ContactUs'
import Footer from './components/Footer'
import { useLenis } from './contexts/useLenis'

const App = () => {

    useLenis();
  return (
    <>
      <Navbar/>
      <Hero />
      <WhoAreWe />
      <WhyChooseUs />
      <OurMethod />
      <OurTenants />
      <ContactUs />
      {/* <Reviews/> */}
      <Footer />
    </>
  )
}

export default App