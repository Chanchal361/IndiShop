import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";
function Product({ data }) {
   const { cart } = useSelector((state) => state);
   const dispatch = useDispatch();

   function addClick() {
      dispatch(add(data))
      toast.success("Item added to Cart")
   }
   const removefromcart =()=>{
      dispatch(remove(data.id));
      toast.error("Item removed from cart")
   }
   return (
      <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-[inset_-12px_-8px_40px_#46464620] hover:border-2 ">

         <div>
         <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{data.title}</p> 
         </div>
         <div>
              <p className="w-40 text-gray-400 font-normal text-[10px] text-let">{data.description.split(" ").slice(0,10).join(" ") + "..."}</p>
         </div>
         <div className="h-[180px]">
            <img src={data.image} className="h-full w-full" />
         </div>
         <div className=" flex justify-between gap-10 items-center w-full mt-5">
            <p  className="text-green-600 font-semibold">${data.price}</p>
           {
            cart.some((p) => p.id===data.id) ? (
               <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
               text-[12px] p-1 px-3 uppercase 
               hover:bg-gray-700
               hover:text-white transition duration-300 ease-in" onClick={removefromcart}>
                  Remove Item
               </button>
            ):(
                <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                text-[12px] p-1 px-3 uppercase 
                hover:bg-gray-700
                hover:text-white transition duration-300 ease-in" onClick={addClick}>
                  Add To cart
                </button>
            )
           }
         </div>
      </div>
   )
}
export default Product;