import CounterContainer from "../../common/counter/CounterContainer";
import "./itemDetail.css";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div className="itemDetail">
      {/* cuerpo detalle producto */}
      <h2>{productSelected.title}</h2>
      <img src={productSelected.img} alt="" />
      {/* contador */}
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};
