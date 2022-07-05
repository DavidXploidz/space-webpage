import {Outlet , Link, useLocation} from 'react-router-dom'
import logo from '../../public/assets/shared/logo.svg'


const Layout = () => {

  const location = useLocation()
  const urlActual = location.pathname


  return (
    <main>
        <div className='absolute z-10 flex items-center justify-between w-full mt-14'>
            <div className='ml-14'>
                <img src={logo} alt="Logo of page" />
            </div>
            <nav className='efecto-glass flex justify-center items-center gap-x-20 w-2/4 h-40'>
              <span className={`enlace font-bold ${urlActual === '/' ? 'border-b-2 ' : ''} `}>00 <Link to="/" className='font-normal'>Home </Link></span>
              <span className={`enlace font-bold ${urlActual === '/destination' ? 'border-b-2 ' : ''} `}>01 <Link to="/destination" className='font-normal'>Destination </Link></span>
              <span className={`enlace font-bold ${urlActual === '/crew' ? 'border-b-2 ' : ''} `}>02 <Link to="/crew" className='font-normal'>Crew </Link></span>
              <span className={`enlace font-bold ${urlActual === '/technology' ? 'border-b-2 ' : ''} `}>03  <Link to="/technology" className='font-normal'>Technology </Link></span>
            </nav>
        </div>
        <Outlet />
    </main>
  )
}

export default Layout