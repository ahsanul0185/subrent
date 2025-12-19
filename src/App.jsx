import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import WhoAreWe from './sections/WhoAreWe'
import WhyChooseUs from './sections/WhyChooseUs'
import OurMethod from './sections/OurMethod'
import OurTenants from './sections/OurTenants'
import Reviews from './sections/Reviews'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <WhoAreWe />
      <WhyChooseUs />
      <OurMethod />
      <OurTenants />
      {/* <Reviews/> */}
      <div className='h-screen'></div>
    </>
  )
}

export default App