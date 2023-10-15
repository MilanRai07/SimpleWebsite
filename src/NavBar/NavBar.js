import { useState } from 'react';
import { BiFootball } from 'react-icons/bi'
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet, NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import '../Main.css';
const NavBar = () => {
    const [show, setShow] = useState(false);
    const showMenu = () => {
        setShow(!show);
    }
    return (
        <>
            <nav> 
                <ul className='MainNavCont'>
                        <li className="NavItem NavItem1">
                            <NavLink to='/' style={{textDecoration:'none'}}>
                                <div className='logo'>
                                    <BiFootball className='logoimg rotate' />
                                    <h1>FUBSport</h1>

                                </div>
                            </NavLink>
                        </li>
                        <li className=' NavItem'>
                            <NavLink to='/' className="NavLink">Home</NavLink>
                        </li>
                        <li className='NavItem'>
                            <NavLink to='/football' className="NavLink">Football</NavLink>
                        </li>
                        <li className='NavItem'>
                            <NavLink to='/ufc' className="NavLink">UFC</NavLink>
                        </li>
                        <li className='NavItem'>
                            <NavLink to='/basketball' className="NavLink">Basketball</NavLink>
                        </li>
                        <li className='NavItem'>
                            <NavLink to='/login' className="NavLink">Be a Member</NavLink>
                        </li>
                        <li className='NavItem'>
                            <NavLink to='/contact' className="NavLink">Contact</NavLink>
                        </li>
                        <li className='NavItem'>
                            <NavLink to='/aboutus' className="NavLink">About us</NavLink>
                        </li>
                        <li className='NavItem'>
                            <NavLink to='/othernews' className="NavLink">Other News</NavLink>
                        </li>
                        <li>
                            <GiHamburgerMenu onClick={showMenu} className='HamburgerMenu' />
                        </li>
                         </ul>
</nav>
                
                {
                    show ?

                        <div className='OtherMenu'>
                            <NavLink to='/' className="HamMenu">
                                <div>
                                    Home
                                </div>
                            </NavLink>
                            <NavLink to='/football' className="HamMenu">

                                <div>
                                    Football
                                </div>
                            </NavLink>
                            <NavLink to='/ufc' className="HamMenu">
                                <div>
                                    UFC
                                </div>
                            </NavLink>

                            <NavLink to='/basketball' className="HamMenu">
                                <div>
                                    Basketball
                                </div>
                            </NavLink>

                            <NavLink to='/login' className="HamMenu">
                                <div>
                                    Be a Memeber
                                </div>
                            </NavLink>
                            <NavLink to='/aboutus' className="HamMenu">
                                <div>
                                    About Us
                                </div>
                            </NavLink>
                            <NavLink to='/contact' className="HamMenu">
                                <div>
                                    Contact
                                </div>
                            </NavLink>
                        </div>
                        : ""
                }
                <Outlet />
                <Footer/>
            
            
        </>
    )
}
export default NavBar;