import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavigationLinkProps {
    to: string;
    children: ReactNode;
}

const NavigationLink = ({ to, children }: NavigationLinkProps) => {
    return (
        <NavLink
        to={to}
        className="text-orange-300 hover:text-orange-100 px-3 py-2 rounded-md text-sm font-medium"
        >
        {children}
        </NavLink>
    );
    };

export default NavigationLink;