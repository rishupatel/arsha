import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
    return (
        <>
            <section id='Navbar'>
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-sm-4'>
                            <h2 className='Brand'>ARSHA</h2>
                        </div>
                        <div className='col-sm-8'>
                            <nav id="navbar" className='navbar'>
                                <ul className='nav_items'>
                                    <li> <NavLink exact activeClassName='active_class ' to="/" >Home</NavLink></li>
                                    <li><NavLink exact activeClassName='active_class ' to="/about" >About</NavLink></li>
                                    <li> <NavLink exact activeClassName='active_class ' to="/service" >Service</NavLink></li>
                                    <li> <NavLink exact activeClassName='active_class ' to="/portfolio" >Portfolio</NavLink></li>
                                    <li><NavLink exact activeClassName='active_class ' to="/team" >Team</NavLink></li>
                                    <li  className=" dropdown"><NavLink exact activeClassName='active_class ' to="/dropdown" >
                                        <a class="nav-link dropdown-toggle" id="dropdown" role="button"  >
                                            Dropdown
                                        </a>
                                        <ul class="dropdown-menu " for="dropdown">
                                            <li><a class="dropdown-item" href="#">Dropdown 1</a></li>
                                            <li><a class="dropdown-item" href="#">Dropdown 2</a></li>
                                            <li><a class="dropdown-item subdropdownLink dropdown-toggle" role="button" href="#">
                                                Dropdown 3
                                            <ul className='subdropdown'>
                                                <li><a href='#'>Dropdown 1</a></li>
                                                <li><a href='#'>Dropdown 2</a></li>
                                                <li><a href='#'>Dropdown 3</a></li>
                                                <li><a href='#'>Dropdown 4</a></li>
                                            </ul>
                                            
                                            </a></li>
                                            <li><a class="dropdown-item" href="#">Dropdown 4</a></li>
                                            <li><a class="dropdown-item" href="#">Dropdown 5</a></li>
                                        </ul>
                                   </NavLink></li>
                                    <li><NavLink exact activeClassName='active_class ' to="/contact" >Contact</NavLink></li>
                                    <li><NavLink exact activeClassName='active_class ' to="/get_started" className="getStartedBtn">Get Started</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
