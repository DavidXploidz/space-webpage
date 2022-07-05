import {useState} from 'react'
import datos from '../../data.json'

const Technology = () => {

  const [valor, setValor] = useState('Launch vehicle')
  const [value, setValue] = useState(0)


  return (
    <div className='header-technology'>
      <div>
      <div className='contenedor flex justify-center items-center gap-x-5 text-2xl text-center md:text-4xl md:text-left md:justify-start '>
        <p className='font-bold text-gray-600 mt-24 md:mt-96'>03</p>
        <span className='text-white uppercase tracking-widest mt-24 md:mt-96'>space launch 001</span>
      </div>
        {datos.technology.map((cohetes, index) => {
          if(cohetes.name === valor){
            return (
              <>
              <div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-x-10'>
                <div className='flex flex-col md:flex-row gap-x-20 '>
                  <div className='flex flex-row mx-auto md:ml-96 md:flex-col gap-5 mt-10 md:mt-0'>
                    {datos.technology.map((boton, index) => (
                      <button 
                      value={boton.name}
                      onClick={e => {setValor(e.target.value), setValue(index)}} 
                      className={`p-4 rounded-full w-20 h-20 flex ${index === value ? 'bg-white' : 'border rounded-full p-5'}`}>
                      <p className={`mx-auto cursor-not-allowed ${index === value ? 'text-Azul' : 'text-white'}`}>{index + 1}</p>
                      </button>
                    ))}

                  </div>
                  <div className='mt-10 md:mt-0'>
                    <h5 className='text-2xl'>the terminology...</h5>
                    <h3 className='uppercase my-3'>{cohetes.name}</h3>
                    <p className='w-full md:w-2/3'>
                      {cohetes.description}
                    </p>
                  </div>
                </div>
                <img src={cohetes.images.landscape} alt={`Imagen de cohete ${cohetes.name}`} className="cohetes-img h-42 mt-10 md:mt-0" />
              </div>
                
              </>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Technology