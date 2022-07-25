import { NavLink} from "react-router-dom";

import React from "react";

const Navbar = () => {
    return (
        <>
           
           
            

            
                <NavLink 
                  to="/"
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/about"
                  activeStyle={{ color: 'black' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Contact
                </NavLink>
                <NavLink
                  to="/login"
                  activeStyle={{ color: 'black' }}
                >
                    Login
                </NavLink>
                
            
           
        </>
    );
};
export default Navbar