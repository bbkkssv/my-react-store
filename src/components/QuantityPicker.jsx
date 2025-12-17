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
                className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center" 
                onClick={handleDecrease} 
                disabled={quantity === 1}
                style={{width: '44px', height: '44px', fontSize: '1.5rem', fontWeight: 'bold'}}
            >
                −
            </button>
            <span className="text-light fw-bold fs-4" style={{minWidth: '50px', textAlign: 'center'}}>{quantity}</span>
            <button 
                className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center" 
                onClick={handleIncrease}
                style={{width: '44px', height: '44px', fontSize: '1.5rem', fontWeight: 'bold'}}
            >
                +
            </button>
        </div>
    );
}

export default QuantityPicker;
