import React, { useContext, useState } from 'react';
import Title from '../Title/Title';
import CartColumns from './CartColumns/CartColumns';
import { ProductContext } from '../../context';
import { firestore} from '../../Firebase/config';

const Cart = () => {
  const { cart, cartSubTotal, cartTax, cartTotal, clearCart, decrement, increment, removeItem } = useContext(ProductContext);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handlePlaceOrder = () => {
    // Gather order details, including user information
    const orderDetails = {
      nombre,
      apellido,
      telefono,
      cart, // Assuming 'cart' contains the items in the cart
      total: cartTotal, // Assuming 'cartTotal' is the total cost of the order
    };
    // Send order details to Firebase or perform any other required action
    firestore.collection('orders').add(orderDetails)
      .then((docRef) => {
        console.log('Order placed with ID:', docRef.id);
        // Optionally, clear the cart after placing the order
        clearCart();
      })
      .catch((error) => {
        console.error('Error placing order:', error);
      });
  };
  const handleClearCart = () => {
    clearCart();
  };
  const renderCartItems = () => {
    return cart.map(item => (
      <div className="row my-2 text-capitalize text-center" key={item.id}>
        <div className="col-10 mx-auto col-lg-2">
          <img src={item.img} style={{ width: '5rem', height: '5rem' }} className="img-fluid" alt="" />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product :</span> {item.title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong>
            <span className="d-lg-none">price :</span> ${item.price}
          </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span className="btn btn-black mx-1" onClick={() => decrement(item.id)}>
                -
              </span>
              <span className="btn btn-black mx-1">{item.count}</span>
              <span className="btn btn-black mx-1" onClick={() => increment(item.id)}>
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={() => removeItem(item.id)}>
            <i className="fas fa-trash" />
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <strong>item total : ${item.total} </strong>
        </div>
      </div>
    ));
  };

  return (
    <section>
      {cart.length > 0 ? (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <div className="container-fluid">{renderCartItems()}</div>
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                {/* Form fields for user information */}
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    value={nombre}
                    onChange={handleNombreChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellido">Apellido:</label>
                  <input
                    type="text"
                    id="apellido"
                    className="form-control"
                    value={apellido}
                    onChange={handleApellidoChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Telefono:</label>
                  <input
                    type="text"
                    id="telefono"
                    className="form-control"
                    value={telefono}
                    onChange={handleTelefonoChange}
                  />
                </div>

                {/* Button to place the order */}
                <button
                  className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  type="button"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
                
                <button
                  className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  type="button"
                  onClick={handleClearCart}
                >
                  clear cart
                </button>
                {["subtotal", "tax", "total"].map((label, index) => (
                  <h5 key={index}>
                    <span className="text-title">{label}:</span>{' '}
                    <strong>
                      ${label === 'subtotal' ? cartSubTotal : label === 'tax' ? cartTax : cartTotal}
                    </strong>
                  </h5>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col-10 mx-auto text-center">
              <h1 className="text-title text-capitalize">Your cart is currently empty</h1>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;

