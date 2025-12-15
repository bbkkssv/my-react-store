import QuantityPicker from "./QuantityPicker";

function Product(props){
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
                        <div className="col-6 text-end text-primary fw-bold fs-5">${props.data.price.toFixed(2)}</div>
                    </div>
                    <div className="border-top border-secondary pt-3">
                        <QuantityPicker />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
