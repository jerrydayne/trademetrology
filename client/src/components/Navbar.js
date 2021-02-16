import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { SidebarData } from '../data/sidebarData';
import Logo from '../dist/icons/logo.png';

const Navbar = ({ logout }) => {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="navbar-header">
                <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                >
                {" "}
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                </button>
                <div className="navbar-brand page-scroll ancho">
                <img src={Logo} alt="Trade Metrology logo" className="site-logo" component={Link} to="/" />
                </div>{" "}
            </div>
            </nav>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                    <ul className="nav-menu-items">
                        <li className="navbar-logo">
                            <Link to="/" className="menu-bars">
                            </Link>
                        </li>
                        {SidebarData.map(( item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} logout={item.logout}>
                                        <span className="menu-icons">{item.icon}</span>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
        </>
    )
}

export default Navbar
