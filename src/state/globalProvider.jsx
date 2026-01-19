import { useState } from "react";
import GlobalContext from "./globalContext";

// Global state provider component
function GlobalProvider(props){
    const [cart, setCart] = useState([]); // Cart state
    const [user, _setUser] = useState({name: "Bob", id: 63}); // User state

    function addProductToCart(product) {
        setCart(prevCart => [...prevCart, product]); // Had some issues with quantities not updating in cart. This should fix it.
    }

    function clearCart() {
        setCart([]);  
    }
    function removeProductFromCart(productId) {
        console.log("Removing ", productId);
        
        const updatedCart = cart.filter(item => item._id !== productId)
        setCart(updatedCart)
    }

    return (
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider;