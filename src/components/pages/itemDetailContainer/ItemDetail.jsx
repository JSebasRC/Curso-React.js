import CounterContainer from "../../common/counter/CounterContainer";
import "./itemDetail.css";

export const ItemDetail = ({ productSelected, onAdd, initial }) => {
  return (
    <div className="itemDetailContainer">
      {/* cuerpo detalle producto */}
      <div className="itemDetailContainerCol">
        <img src={productSelected.img} alt="" />
      </div>
      <div className="itemDetailContainerCol">
        <h2>{productSelected.title}</h2>

        <h4>ya tienes {initial} unidades en el carrito</h4>
        {/* contador */}
        <CounterContainer
          stock={productSelected.stock}
          onAdd={onAdd}
          initial={initial}
        />
      </div>
    </div>
  );
};
