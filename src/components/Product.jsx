import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(){
    return(
        <div className="product">
            <img src="https://picsum.photos/200/300"></img>
            <h5>Product Title Goes Here</h5>
            <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            <div className="prices">
                <label>Price:</label>
                <label>Total</label>
            </div>
            <QuantityPicker />
        </div>
    );
}

export default Product;
