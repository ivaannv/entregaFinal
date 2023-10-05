import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <Link>
                <h1 className="iven">Iven Clothes</h1>
            </Link>
            <nav>


                <ul>
                    <li>
                        <NavLink to='/' className='link-navbar'>
                            Inicio
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to='/categoria/2' className='link-navbar'>
                            Remeras
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to='/categoria/3' className='link-navbar'>
                            Buzos
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to='/categoria/4' className='link-navbar'>
                            Pantalones
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header >
    )
}

export default NavBar