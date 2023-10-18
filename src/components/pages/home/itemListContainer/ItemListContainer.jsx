import { useEffect, useState } from "react";
import { products } from "../../../../productsMock";
import ItemList from "./ItemList";

const itemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      // reject("algo salio mal")
    });

    tarea
      .then((resolve) => setItems(resolve))
      .catch((error) => console.log(error));
  }, []);

  return <ItemList items={items} />;
};

export default itemListContainer;
