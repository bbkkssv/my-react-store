import QuantityPicker from "./QuantityPicker";
import { useState, useContext } from 'react';
import GlobalContext from '../state/globalContext';

// Product card component - displays product info and handles quantity/total calculation
function Product(props){
    const [quantity, setQuantity] = useState(1);
    const globalAdd = useContext(GlobalContext).addProductToCart;

    // Updates quantity when changed in QuantityPicker
    function handleQuantityChange(qty) {
        setQuantity(qty);
    }

    // Calculates total price based on quantity
    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    function onAdd() {
        console.log("Adding product...");
        console.log(props.data)
        
        let fixedProduct = {...props.data}
        fixedProduct.quantity = quantity
        
        globalAdd(fixedProduct)
    }

    return(
        <div className="card h-100 shadow-lg bg-white border-wa-green text-wa-brown">
            <img src={"/images/" + props.data.image} className="card-img-top card-img-product" alt={props.data.title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold mb-2">{props.data.title}</h5>
                <p className="card-text text-uppercase small mb-3 text-wa-green">{props.data.category}</p>
                <div className="mt-auto">
                    <div className="row mb-2">
                        <div className="col-6">Price:</div>
                        <div className="col-6 text-end fw-semibold">${props.data.price.toFixed(2)}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">Total:</div>
                        <div className="col-6 text-end fw-bold fs-5 text-wa-orange">${getTotal()}</div>
                    </div>
                    <div className="pt-3 border-top">
                        <QuantityPicker onChange={handleQuantityChange} />
                    </div>
                    <button 
                        className="btn btn-wa-green w-100 mt-3"
                        onClick={onAdd}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
