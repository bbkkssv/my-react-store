import { useState } from "react";

// Quantity selector with +/- buttons
function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1);

    // Increases quantity and notifies parent
    function handleIncrease() {
        let nextVal = quantity + 1;
        setQuantity(nextVal);
        props.onChange(nextVal);
    }

    // Decreases quantity (min 1) and notifies parent
    function handleDecrease() {
        let nextVal = quantity - 1;
        if (nextVal > 0) {
            setQuantity(nextVal);
            props.onChange(nextVal);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center gap-3">
            <button 
                className={`btn rounded-circle qty-btn ${quantity === 1 ? 'btn-secondary' : 'btn-wa-green'}`}
                onClick={handleDecrease} 
                disabled={quantity === 1}
            >
                −
            </button>
            <span className="fw-bold fs-4 qty-display text-wa-brown">{quantity}</span>
            <button 
                className="btn rounded-circle qty-btn btn-wa-orange"
                onClick={handleIncrease}
            >
                +
            </button>
        </div>
    );
}

export default QuantityPicker;
