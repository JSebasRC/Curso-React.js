import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import "./itemDetail.css";
import { Button } from "@mui/material";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <div className="itemDetailContainer">
      {/* cuerpo detalle producto */}
      <div className="itemDetailContainerCol">
        <img src={productSelected.img} alt="" />
      </div>

      <div className="itemDetailContainerCol">
        <h2>{productSelected.title}</h2>
        {initial && <h4>ya tienes {initial} unidades en el carrito</h4>}

        {showCounter ? (
          <div>
            {/* contador */}
            <CounterContainer
              stock={productSelected.stock}
              onAdd={onAdd}
              initial={initial}
            />
          </div>
        ) : (
          <Link to={"/cart"}>
            <Button variant="outlined">Terminar compra</Button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};
