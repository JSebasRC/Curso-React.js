import "./itemList.css"; // Importa el archivo de estilo CSS
import { ProductCard } from "../../common/productCard/ProductCard.jsx";

const ItemList = ({ items }) => {
  return (
    <section className="containerCardsProducts">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ItemList;
