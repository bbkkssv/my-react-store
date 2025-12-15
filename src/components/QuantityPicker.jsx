import { useState } from "react";

function QuantityPicker(){
    const [quantity, setQuantity] = useState(1);

    function handleIncrease() {
        setQuantity(quantity + 1);
    }

    function handleDecrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
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
