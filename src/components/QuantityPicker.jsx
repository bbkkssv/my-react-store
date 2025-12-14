import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(){

    const [quantity, setQuantity] = useState(1);

    function handleIncrease() {
        let temporalValue = quantity + 1;
        setQuantity(temporalValue);
    }

    function handleDecrease() {
        if (quantity > 1) {
            let temporalValue = quantity - 1;
            setQuantity(temporalValue);
        }
    }

    return (
        <div className="quantity-picker">
            <button onClick={handleDecrease} disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;
