import CounterContainer from "../../common/counter/CounterContainer";
import "./itemDetail.css";

export const ItemDetail = ({ productSelected, onAdd, initial }) => {
  return (
    <div className="itemDetail">
      {/* cuerpo detalle producto */}
      <h2>{productSelected.title}</h2>
      <img src={productSelected.img} alt="" />
      <h4>ya tienes {initial} unidades en el carrito</h4>
      {/* contador */}
      <CounterContainer
        stock={productSelected.stock}
        onAdd={onAdd}
        initial={initial}
      />
    </div>
  );
};
