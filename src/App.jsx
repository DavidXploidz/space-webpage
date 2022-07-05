import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

function App() {
  

  return (
   
        <Routes>
            <Route path='/' element={<Layout />}> {/**indica cuando se visita el sitio principal se muestra dicho componente */}
                <Route index element={<Home />} />
              
            </Route>{/**Fin Route "Grupo de Rutas" */}
 
            <Route path='/destination' element={<Layout />}> {/**pagina 2 de contenido*/}
                <Route index element={<Destination />} />
              
            </Route>{/**Fin Route destination "Grupo de Rutas" */}

            
            <Route path='/crew' element={<Layout />}> {/**pagina 3 de contenido*/}
                <Route index element={<Crew />} />
              
            </Route>{/**Fin Route crew "Grupo de Rutas" */}

            <Route path='/technology' element={<Layout />}> {/**pagina 3 de contenido*/}
                <Route index element={<Technology />} />
              
            </Route>{/**Fin Route crew "Grupo de Rutas" */}
        </Routes>
    
  )
}

export default App
