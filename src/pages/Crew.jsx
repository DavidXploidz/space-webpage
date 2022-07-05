import {useState} from 'react'
import datos from '../../data.json'

const Crew = () => {

  const [valor, setValor] = useState('Douglas Hurley')
  const [value, setValue] = useState(0)


  return (
    <div className='header-crew'>

      <div className='contenedor flex justify-center items-center gap-x-5 text-2xl text-center md:text-4xl md:text-left md:justify-start '>
        <p className='font-bold text-gray-600 mt-24 md:mt-96'>02</p>
        <span className='text-white uppercase tracking-widest mt-24 md:mt-96'>meet your crew</span>
      </div>   
 
      {datos.crew.map((personas, index ) => {
          if(personas.name === valor){
          return (
        
            <div className='contenedor flex flex-col-reverse md:grid md:grid-cols-2 '> {/**grid grid-cols-1 md:grid md:grid-cols-2 */}
              <div className='flex flex-col-reverse md:block'>
                <div>
                  <h4 className=' text-gray-400 uppercase  md:mt-56'>{personas.role}</h4>
                  <h3 className='uppercase'>{personas.name}</h3>
                  <p className='md:w-2/3'>
                    {personas.bio}
                  </p>
                </div>
                
                <div className='contenedor flex justify-center  gap-x-10 md:justify-start '>
                  {datos.crew.map ((boton, index) => (
                    <button 
                    onClick={e => {
                      setValor(e.target.value)
                      setValue(index)
                    }}
                    value={boton.name}
                    className={`rounded-full h-5 w-5 my-20 md:mt-40 hover:bg-gray-400 ${index === value ? 'bg-white': 'bg-gray-600 '}`}>

                    </button>
                  ))}
                </div>
              </div>
              <img src={personas.images.webp} alt={`Imagen de crew`}  className='h-96 md:h-auto grid self-center md:self-end place-self-center maximo mt-5 md:mt-0'/>
              {}
            </div>
            )
          }
        })}
      
    </div>
  )
}

export default Crew