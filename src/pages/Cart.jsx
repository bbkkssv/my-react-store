import { useContext } from 'react';
import GlobalContext from '../state/globalContext';
import { IconTrash, IconShoppingCartX } from '@tabler/icons-react';

// Cart component - displays shopping cart
function Cart() {
    const { cart, removeProductFromCart, clearCart } = useContext(GlobalContext);

    // Calculate total price of all items in cart
    // Used reduce instead of loops to itterate through cart items
    const getTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    // Calculate total number of items in cart
    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div className="container py-5">
            <h1 className="text-center fw-bold mb-5 display-4 text-wa-brown">Ready to Check Out?</h1>

            {/* Show empty state if no items, otherwise show cart contents */}
            {cart.length === 0 ? (
                <div className="text-center py-5">
                    <IconShoppingCartX stroke={2} size={80} className="text-muted mb-3" />
                    <p className="fs-4 text-muted">Your cart is empty</p>
                </div>
            ) : (
                <>
                    {/* Cart items */}
                    <div className="row mb-4">
                        <div className="col-12">
                            {cart.map((item, index) => (
                                <div key={`${item._id}-${index}`} className="card mb-3 shadow-sm border-0">
                                    <div className="card-body p-4">
                                        <div className="row align-items-center g-3">
                                            <div className="col-md-2">
                                                <img 
                                                    src={"/images/" + item.image}
                                                    className="img-fluid rounded shadow-sm"
                                                />
                                            </div>
                                            <div className="col-md-3">
                                                <h5 className="mb-1 fw-bold">{item.title}</h5>
                                                <span className="badge bg-secondary text-uppercase small">{item.category}</span>
                                            </div>
                                            <div className="col-md-2 text-center">
                                                <p className="mb-1 small text-muted text-uppercase fw-semibold">Price</p>
                                                <span className="fs-6 fw-bold text-dark">${item.price.toFixed(2)}</span>
                                            </div>
                                            <div className="col-md-1 text-center">
                                                <p className="mb-1 small text-muted text-uppercase fw-semibold">Qty</p>
                                                <span className="badge bg-wa-green fs-6">{item.quantity}</span>
                                            </div>
                                            <div className="col-md-2 text-center">
                                                <p className="mb-1 small text-muted text-uppercase fw-semibold">Total</p>
                                                <span className="fs-5 fw-bold text-wa-green">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                            <div className="col-md-2 text-end">
                                                <button 
                                                    className="btn btn-outline-danger btn-sm d-flex align-items-center gap-2 ms-auto"
                                                    onClick={() => removeProductFromCart(item._id)}
                                                >
                                                    <IconTrash size={18} stroke={2} />
                                                    <span>Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order summary */}
                    <div className="row">
                        <div className="col-lg-5 col-md-6 ms-auto">
                            <div className="card shadow-lg border-0">
                                <div className="card-body p-4">
                                    <h5 className="card-title mb-4 fw-bold text-wa-brown">Order Summary</h5>
                                    <div className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                                        <span className="text-muted">Subtotal ({getTotalItems()} items)</span>
                                        <span className="fw-bold">${getTotal()}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-4">
                                        <span className="fs-5 fw-bold">Total</span>
                                        <span className="fs-4 fw-bold text-wa-green">${getTotal()}</span>
                                    </div>
                                    <div className="d-grid gap-3">
                                        <button className="btn btn-wa-green btn-lg fw-bold py-3 shadow">
                                            Proceed to Checkout
                                        </button>
                                        <button 
                                            className="btn btn-outline-danger"
                                            onClick={clearCart}
                                        >
                                            Clear Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
