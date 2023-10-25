import CounterContainer from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div>
      {/* cuerpo detalle producto */}
      <h2>{productSelected.title}</h2>
      <img src={productSelected.img} alt="" />
      {/* contador */}
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};
