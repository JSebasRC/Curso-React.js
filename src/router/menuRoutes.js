import CartContainer from "../components/pages/cart/CartContainer";
// import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import CheckoutFormik from "../components/pages/checkoutFormik/CheckoutFormik";
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
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutFormik,
  },
];
