import React from "react";
import logo from "../img/ee.png"
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux";


function Navbar() {
    const { cart } = useSelector((state) => state);
    return (
        <div>
            <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

                <NavLink to="/">
                    <div className="ml-5">
                        <img src={logo} height={50} width={100} alt="hiii" />
                    </div>
                </NavLink>
                <div className=" text-slate-100 flex items-center mr-5 gap-10">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/men'sClothing">
                        men's clothing
                    </NavLink>
                    <NavLink to="/jewelery">
                        jewelery
                    </NavLink>
                    <NavLink to="/electronics">
                        electronics
                    </NavLink>
                    <NavLink to="/women'Cslothing">
                        women's clothing
                    </NavLink>
                </div>
                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                    {/* <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/">
                        Home
                    </NavLink> */}
                    <NavLink to="/cart">
                        <div className="relative">
                            <FaShoppingCart className="text-2xl" />
                            {
                                cart.length > 0 &&
                                <span
                                    className="absolute -top-1 -right-2 bg-red-600 text-xs w-5 h-5 flex 
                                             justify-center items-center animate-bounce rounded-full text-white"
                                >{cart.length}</span>
                            }
                        </div>
                    </NavLink>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;