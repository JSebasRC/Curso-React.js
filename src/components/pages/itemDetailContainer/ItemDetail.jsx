import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div>
      {/* cuerpo detalle producto */}
      <h2>{productSelected.title}</h2>
      {/* contador */}
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
