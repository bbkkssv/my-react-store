import QuantityPicker from "./QuantityPicker";
import { useState } from 'react';

// Product card component - displays product info and handles quantity/total calculation
function Product(props){
    const [quantity, setQuantity] = useState(1);

    // Updates quantity when changed in QuantityPicker
    function handleQuantityChange(qty) {
        setQuantity(qty);
    }

    // Calculates total price based on quantity
    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return(
        <div className="card bg-dark text-light border-secondary h-100 shadow-lg">
            <img src={"/images/" + props.data.image} className="card-img-top" alt={props.data.title} style={{height: '280px', objectFit: 'cover'}} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-light fw-bold mb-2">{props.data.title}</h5>
                <p className="card-text text-muted text-uppercase small mb-3">{props.data.category}</p>
                <div className="mt-auto">
                    <div className="row mb-2">
                        <div className="col-6 text-light">Price:</div>
                        <div className="col-6 text-end text-light fw-semibold">${props.data.price.toFixed(2)}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 text-light">Total:</div>
                        <div className="col-6 text-end text-primary fw-bold fs-5">${getTotal()}</div>
                    </div>
                    <div className="border-top border-secondary pt-3">
                        <QuantityPicker onChange={handleQuantityChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
