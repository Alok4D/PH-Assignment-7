import { useEffect } from "react";
import { useState } from "react";
import SingleProducts from "./SingleProducts";
import BookMark from "../Book Mark/BookMark";
import Cooking from "../Currently cooking/Cooking";



const Recipes = () => {
    const [card, setCard] = useState([]);
    const [button, setButton] = useState([]);

    useEffect(() => {
        fetch('FoodData.json')
        .then(res => res.json())
        .then(data =>setCard(data))
    }, [])
    // 
    const [cooking, setCooking] = useState([]);

    const cookHandle = (data) =>{
        const courentCook = [...cooking, data]
        setCooking(courentCook);
    }

    const handleCart = (p) => {
        const newButton = [...button, p]
        setButton(newButton);
    }
    // console.log(button);

    

    return (
        <div className="w-[90%] mx-auto">

            <div className="recipes-details text-center mt-20">
                <h2 className="text-[40px] text-[#150B2B]">Our Recipes</h2>
                <p className="text-[16px] text-[#3f3f42] mt-4">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
                </div>

        <div className="flex justify-between gap-5">
        <div className="mt-12 md:w-2/3">
                    <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-2">
                    {
                    card.map((pd) => <SingleProducts key={pd.id} card={pd} handleCart={handleCart}></SingleProducts>)
                    }
                    </div>
                </div>

                <div>
                    <BookMark button={button} cookHandle={cookHandle}></BookMark>
                    <Cooking cooking={cooking}></Cooking>
                </div>

         
        </div>

        </div>
    );
};

export default Recipes;

   
