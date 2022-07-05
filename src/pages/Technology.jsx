import {useState} from 'react'
import datos from '../../data.json'

const Technology = () => {

  const [valor, setValor] = useState('Launch vehicle')
  const [value, setValue] = useState(0)


  return (
    <div className='header-technology'>
      <div>
        <div className='contenedor flex items-center gap-x-5 text-4xl text-left '>
            <p className='font-bold text-gray-600 mt-96'>03</p>
          <span className='text-white uppercase tracking-widest mt-96'>space launch 101</span>
        </div>
        {datos.technology.map((cohetes, index) => {
          if(cohetes.name === valor){
            return (
              <>
              <div className='flex justify-between items-center gap-x-10'>
                <div className='flex gap-x-20 '>
                  <div className='ml-40 flex flex-col gap-5'>
                    {datos.technology.map((boton, index) => (
                      <button 
                      value={boton.name}
                      onClick={e => {setValor(e.target.value), setValue(index)}} 
                      className={`p-4 rounded-full w-20 h-20 flex ${index === value ? 'bg-white' : 'border rounded-full p-5'}`}>
                      <p className={`mx-auto cursor-not-allowed ${index === value ? 'text-Azul' : 'text-white'}`}>{index + 1}</p>
                      </button>
                    ))}
                    
                 
                  
                  </div>
                  <div>
                    <h5 className='text-base'>the terminology...</h5>
                    <h3 className='uppercase'>{cohetes.name}</h3>
                    <p className='w-2/3'>
                      {cohetes.description}
                    </p>
                  </div>
                </div>
                <img src={cohetes.images.landscape} alt={`Imagen de cohete ${cohetes.images.portrait}`} className="cohetes-img" />
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