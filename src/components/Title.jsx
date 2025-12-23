import React from 'react'

const Title = ({eyebrow,className, children}) => {
  return (
    <div className={`flex flex-col items-center text-center justify-center gap-3 md:gap-4 w-fit mx-auto ${className}`}>
  {eyebrow && <span className='uppercase tracking-[0.2em] text-primary text-xs md:text-sm font-black'>{eyebrow}</span>}
  <h1 className='text-3xl md:text-4xl lg:text-5xl tracking-wide'>{children}</h1>
  <span className='w-[70%] h-0.5 bg-primary mt-2 md:mt-5'/>
</div>
  )
}

export default Title