import React from 'react'

const Home = () => {
  return (
    <div className='header-home relative'>
      <div className='contenedor flex flex-col md:flex-row md:justify-between md:items-end  '>
        <div className='text-center mt-387 md:text-left'> {/**absolute top-96 left-40 */}
          <h5>So, you want to travel to</h5>
          <h1>SPACE</h1>
          <p className='md:w-2/4'>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className='header-explore flex mx-auto md:p-20 my-20  '> {/**absolute bottom-32 right-96 cursor-pointer */}
          <p className='text-Azul text-center mx-auto my-auto'>EXPLORE</p>
        </div>
      </div>
      
    </div>
        
  
  )
}

export default Home