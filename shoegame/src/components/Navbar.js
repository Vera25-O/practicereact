import { NavLink} from "react-router-dom";

import React from "react";

const Navbar = () => {
    return (
        <div className="nav">
           
           
            

            
                <NavLink 
                  to="/"
                  
                >
                    <button className="btn">Home</button>
                </NavLink>
                <NavLink 
                  to="/about"
                  
                >
                    <button className="btn">About</button>
                </NavLink>
                
               
                <NavLink 
                  to="/posts"
                  
                >
                    <button className="btn">Posts</button>
                </NavLink>
                
            
           
        </div>
    );
};
export default Navbar;