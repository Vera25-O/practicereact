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
                  to="/posts"
                  
                >
                    <button className="btn">Posts</button>
                </NavLink>
                
                <NavLink 
                  to="/new"
                  
                >
                    <button className="btn">Add Shoe</button>
                </NavLink>
           
        </div>
    );
};
export default Navbar;