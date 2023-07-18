import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Ul } from './style';



const Sidebar = () => {

    
    return ( 
        <Nav className="sidebar">
          <Ul>
            <li>
                <Link to={`register`}>Register</Link>
            </li>
            <li>
                <Link to={`home`}>Home</Link>
            </li>
            <li>
                <Link to={`dashboard`}>Dashboard</Link>
            </li>
            <li>
                <Link to={`login`}>Login</Link>
            </li>
            <li>
                <a onClick={() => localStorage.removeItem('@token')}>Logout</a>
            </li>
          </Ul>
        </Nav>
    );
}

export default Sidebar;