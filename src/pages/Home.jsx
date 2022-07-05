import React from 'react'

const Home = () => {
  return (
    <div className='header-home relative'>
      <div className='contenedor flex justify-between items-end  '>
        <div className='mt-387'> {/**absolute top-96 left-40 */}
          <h5>So, you want to travel to</h5>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well </p>
          <p>genuinely go to outer space and not hover kind of on the </p>
          <p>edge of it. Well sit back, and relax because we’ll give you a </p>
          <p>truly out of this world experience!</p>
        </div>
        <div className='header-explore flex mr-40'> {/**absolute bottom-32 right-96 cursor-pointer */}
          <p className='text-Azul m-auto'>EXPLORE</p>
        </div>
      </div>
      
    </div>
        
  
  )
}

export default Home