import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./Cart.css";

const CartContainer = () => {
  const {
    cart,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
  } = useContext(CartContext);

  let totalPrice = getTotalPrice();
  let totalQuantity = getTotalQuantity();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Estas seguro que deseas vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Eliminado ", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "error");
      }
    });
  };
  return (
    <div className="cartContainer">
      <h1>Carrito de compras</h1>
      <div>
        {cart.map((product) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              margin: "1rem auto",
            }}
          >
            <div className="cartContainerProduct">
              <div>
                <h3>{product.title}</h3>
                <img src={product.img} alt="" />
              </div>

              <div>
                <h3>Descripción: {product.description}</h3>
                <h3>Precio: {product.price}</h3>
                <h3>Cantidad:{product.quantity}</h3>
              </div>
            </div>
            <div>
              <IconButton onClick={() => deleteProductById(product.id)}>
                <DeleteOutlineIcon fontSize="medium" />
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3>Total a pagar: ${totalPrice}</h3>
        <h3>Total productos: {totalQuantity}</h3>
        <Link to="/checkout">
          <Button variant="outlined">Finalizar compra</Button>
        </Link>
        <Button variant="outlined" onClick={clearCartWithAlert}>
          Vaciar Carrito
        </Button>
      </div>
    </div>
  );
};

export default CartContainer;
