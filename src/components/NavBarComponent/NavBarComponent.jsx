import React from 'react'
import { BrowserRouter, Link, Routes ,Route} from 'react-router-dom'
import HomeComponent from '../routes/HomeComponent'
import AboutComponent from '../routes/AboutComponent'
import ContactComponent from '../routes/ContactComponent'



const NavBarComponent = () => {
  return (
    <BrowserRouter>
    <div className='navbar-container'>
        <ul className='nav-menu'></ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About us</Link>
        </li>
        <li>
            <Link to='/contact'>contact us</Link>
        </li>
    </div>
    <Routes>
        <Route exact path='/'element={<HomeComponent/>}></Route>
        <Route exact path='/about'element={<AboutComponent/>}></Route>
        <Route exact path='/contact'element={<ContactComponent/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default NavBarComponent