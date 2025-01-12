import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";


function CartButtonPage() {
    return(
        <a href="/cart" >
        <button class=" mb-6 text-white bg-violet-400 transition-all duration-1000 hover:bg-violet-700 focus:outline-none font-medium rounded-lg text-sm sm:w-auto m-auto px-5 py-2.5 text-center my-2 " alt="bouton du caddie">
        <FontAwesomeIcon icon={faBasketShopping} style={{color: "#FFD91A",}} />
        </button>
        </a>
    )
}

export default CartButtonPage;