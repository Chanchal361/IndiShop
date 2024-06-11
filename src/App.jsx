import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

export function App() {
    return (
        <div>
            <div className=" bg-black">
                <Navbar />
            </div>
            <Routes basename="/IndiShop">
              <Route path="/" element={<Home/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
    )
}