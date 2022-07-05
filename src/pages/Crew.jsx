import {useState} from 'react'
import datos from '../../data.json'

const Crew = () => {

  const [valor, setValor] = useState('Douglas Hurley')
  const [value, setValue] = useState(0)


  return (
    <div className='header-crew'>
      <div className='contenedor '>
        <div className='contenedor flex items-center gap-x-5 text-4xl text-left '>
          <p className='font-bold text-gray-600 mt-96'>02</p>
          <span className='text-white uppercase tracking-widest mt-96'>meet your crew</span>
        </div>
      </div>
      {datos.crew.map((personas, index ) => {
          if(personas.name === valor){
          return (
        
            <div className='contenedor grid grid-cols-2'>
              <div>
                <h4 className='text-gray-400 uppercase mt-56'>{personas.role}</h4>
                <h3 className='uppercase'>{personas.name}</h3>
                <p className='w-2/3'>
                  {personas.bio}
                </p>
                <div className='contenedor flex gap-x-10 '>
                  {datos.crew.map ((boton, index) => (
                    <button 
                    onClick={e => {
                      setValor(e.target.value)
                      setValue(index)
                    }}
                    value={boton.name}
                    className={`rounded-full h-5 w-5 mt-40 hover:bg-gray-400 ${index === value ? 'bg-white': 'bg-gray-600 '}`}>

                    </button>
                  ))}
                </div>
              </div>
              <img src={personas.images.webp} alt={`Imagen de crew`}  className='grid self-end place-self-center maximo'/>
              {}
            </div>
            )
          }
        })}
      
    </div>
  )
}

export default Crew