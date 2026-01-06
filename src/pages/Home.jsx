
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import WhoAreWe from '../sections/WhoAreWe'
import WhyChooseUs from '../sections/WhyChooseUs'
import OurMethod from '../sections/OurMethod'
import OurTenants from '../sections/OurTenants'
import ContactUs from '../sections/ContactUs'
import Reviews from '../sections/Reviews'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='overflow-x-clip'>
    <Navbar/>
      <Hero />
      <WhoAreWe />
      <WhyChooseUs />
      <OurMethod />
      <OurTenants />
      <ContactUs />
      <Reviews/>
      <Footer />
    </div>
  )
}

export default Home