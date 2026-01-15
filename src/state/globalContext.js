import { createContext } from "react";

const GlobalContext = createContext({
    cart: [], //default cart is an empty array that will hold product objects later
    user: {}, //default user is an empty object that will hold user info later
    addProductToCart: () => {}, //default is an empty function
    removeProductFromCart: () => {}, //remove a specific item from cart
    clearCart: () => {}, //remove all items from cart

});

export default GlobalContext;