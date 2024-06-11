// https://fakestoreapi.com/products
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import Product from "../components/Product";
// import {products} from "../data"

function Home() {
    const [dataa, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const API_KEY = "https://fakestoreapi.com/products";

    async function fetchDataFromApi() {
        setLoading(true);
        try {
            const res = await fetch(API_KEY);
            const data = await res.json();
            // setData(products);
            setData(data)
            setLoading(false)
        } catch {
            console.error("error C=ocure");
        }

    }
    //  console.log(dataa);
    useEffect(() => {
        fetchDataFromApi();
    }, [])
    return (
        <div>
            {
                loading ? (<Spinner />) :
                    dataa.length > 0 ? (
                        <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl p-2 mx-auto  space-y-10 space-x-5 min-h-[80vh]">
                            {
                                dataa.map((data) => {
                                    return <Product key={data.id} data={data} />
                                })
                            }
                        </div>
                    ) : (
                        <div className="flex justify-center items-center">
                            No Record Found
                        </div>
                    )
            }




        </div>
    )
}
export default Home;