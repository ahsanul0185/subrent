import React from 'react'
import img from "../assets/img1.jpg"

const OurTenants = () => {
  return (
    <div className='flex h-[65vh]'>
      <div className='w-1/2'>
        <img src={img} className='w-full h-full object-cover' alt="" />
      </div>

      <div className='w-1/2 h-full bg-primary-dark py-16 px-12'>
          <h1 className='text-white text-4xl'>We become your perfect tenant!
</h1>

<p className='text-gray-300 mt-5 text-lg'>Subrent, experts in rental management and operation  with NO FEES , guarantees you a fixed monthly rent. This rent is established upon signing the lease, and  no management fees  will be charged. Your property is then legally listed on  short-term rental platforms .</p>

<p className='text-gray-300 mt-5 text-lg'>Our team takes care of all the management, so you can simply enjoy your rental income with complete  peace of mind . Your property will then be integrated into our portfolio of apartments intended for a   high-end clientele of business  travelers .</p>
      </div>

    </div>
  )
}

export default OurTenants