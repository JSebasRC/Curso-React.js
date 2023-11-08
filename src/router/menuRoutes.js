import CartContainer from "../components/pages/cart/CartContainer";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "category",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
];