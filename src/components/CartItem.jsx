
import { AiFillDelete } from "react-icons/ai"
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

function CartItem({ item }) {
    // console.log(item )
    const dispatch = useDispatch();
    const removeClick = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed")
    }
    return (
        <div className="flex flex-col w-[550px] mt-6  justify-center items-center gap-16 h-[300px] rounded-[20px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:scale-110 transition-all duration-300  hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)">
            <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
                <div className="w-[30%]">
                    <img className="object-cover " src={item.image} />
                </div>
                <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                    <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
                    <h1 className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0, 14).join(" ") + "..."}</h1>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-lg text-green-600">${item.price}</p>
                        <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                            onClick={removeClick}>
                            <AiFillDelete />
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default CartItem;
