import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavigationLink from "./NavigationLink";


const Navigation = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <nav className="bg-gray-800 flex justify-between px-5 ">
            <div className="flex space-x-4 justify-evenly py-2">
                <NavLink to="/" className="text-orange-300 hover:text-orange-100 px-3 py-2 rounded-md text-sm font-medium">Fancy Logo</NavLink>
            </div>
            <div className="flex space-x-4 justify-evenly py-2">
                <NavigationLink to="/products">Products</NavigationLink>
                <NavigationLink to="/about">About</NavigationLink>
                <NavigationLink to="/contact">Contact</NavigationLink>
            </div>
            <div className="flex space-x-4 justify-evenly py-2">
                {!isAuthenticated ? (
                <NavLink to="/sign-in" className="text-orange-300 hover:text-orange-100 px-3 py-2 rounded-md text-sm font-medium">Sign In</NavLink> ) : (
                <button className="text-orange-300 hover:text-orange-100 px-3 py-2 rounded-md text-sm font-medium">Logout</button>
                )}
            </div>
        </nav>
    )
}

export default Navigation