import {useState} from 'react'
import datos from '../../data.json'

const Destination = () => {

  const [valor, setValor] = useState('Moon')
  const [value, setValue] = useState(0)

  return (

    <div className='header-destination'>
      <div className='contenedor flex justify-center items-center gap-x-5 text-2xl text-center md:text-4xl md:text-left md:justify-start '>
        <p className='font-bold text-gray-600 mt-24 md:mt-96'>01</p>
        <span className='text-white uppercase tracking-widest mt-24 md:mt-96'>pick your destination</span>
      </div>
        
        {/**Contenedor de planetas */}
        {datos.destinations.map((planetas, index) => {
          if(planetas.name === valor){
            return (
              <>
              <div className='contenedor md:flex md:gap-x-96 ' key={index}  >
                <img src={planetas.images.webp} alt={`Imagen de ${planetas.name}`} className="h-96 mx-auto mt-10 md:h-auto md:mt-20 md:ml-56" />
                <div className=' text-left mt-20 '>
                  <div className='flex justify-center md:justify-start gap-x-10'>
                  {datos.destinations.map((nombres, index) => (
                    <button 
                      onClick={e => {
                        setValor(e.target.value)
                        setValue(index)
                      }} 
                      value={nombres.name} 
                      className={`uppercase tracking-widest hover:border-b-2 hover:border-gray-500 ${index  === value ? 'border-b-2 text-white ': 'text-GrisAzul'}`}>{nombres.name}

                    </button>
                  ))}
                  </div>
                  <div>
                    <h2 className='uppercase'>{planetas.name}</h2>
                    <p>
                      {planetas.description}
                    </p>
                    <p className='w-full bg-gray-500 h-px mt-10 md:mt-28 mb-10'></p>
                  </div>
                  
                  <div className='block text-center md:flex justify-start gap-x-40 my-10'>
                    <div>
                      <p className='subHeading2'>Avg. distance</p>
                      <span className='subHeading1 '>{planetas.distance}</span>
                    </div>
                   
                    <div>
                      <p className='subHeading2'>est. travel time</p>
                      <span className='subHeading1'>{planetas.travel}</span>
                    </div>
                  </div>
                </div>{/*Fin contenido */}
              </div>
              </>
       
            )
          }
          
        
        })}
    
    </div>
  )
}

export default Destination