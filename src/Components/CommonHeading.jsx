import React from 'react'

const CommonHeading = (props) => {
  return (
  <>

        <h2 className='bg-[#006699] ml-[5vw] text[20px] md:text-[2.5vw] pl-[4vw] text-white'>{props.title} </h2>
        
        <div className='w-[50vw] absolute top-[30px] h-[0.5vw] md:top-[5vw] bg-[#969696]'></div>
        <div className='w-[0.5vw]  absolute top-[0vw] left-[3vw] h-full bg-[#969696]'></div>
    
 </>
  )
}

export default CommonHeading
