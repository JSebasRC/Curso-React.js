import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>Estoy en el carrito</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h3>{product.quantity}</h3>
        </div>
      ))}

      <Link to="/checkout">
        <Button variant="outlined">Finalizar compra</Button>
      </Link>
    </div>
  );
};

export default CartContainer;
