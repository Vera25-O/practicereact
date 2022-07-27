import { NavLink} from "react-router-dom";

import React from "react";

const Navbar = () => {
    return (
        <div className="nav">
           
           
            

            
                <NavLink 
                  to="/"
                  
                >
                    <button>Home</button>
                </NavLink>
                <NavLink 
                  to="/about"
                  
                >
                    <button>About</button>
                </NavLink>
                
               
                <NavLink 
                  to="/posts"
                  
                >
                    <button>Posts</button>
                </NavLink>
                
            
           
        </div>
    );
};
export default Navbar;