import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  // FUNCIÓN PARA RELLENAR BASE DE DATOS

  // const rellenarDB = () => {
  //   const prodCollection = collection(db, "products");

  //   products.forEach((elemento) => {
  //     addDoc(prodCollection, elemento);
  //   });
  // };

  // DATOS SIN USAR BASE DE FIREBASE
  // useEffect(() => {
  //   const productosFiltrados = products.filter(
  //     (product) => product.category === categoryName
  //   );

  //   const tarea = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(categoryName ? productosFiltrados : products);
  //     }, 1000);
  //   });

  //   tarea
  //     .then((resolve) => setItems(resolve))
  //     .catch((error) => console.log(error));
  // }, [categoryName]);

  // DATOS USANDO BASE DE FIREBASE
  useEffect(() => {
    if (!categoryName) {
      let productsCollection = collection(db, "products");
      getDocs(productsCollection).then((res) => {
        let newArr = res.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setItems(newArr);
      });
    } else {
      let productsCollection = collection(db, "products");
      let consultaCategory = query(
        productsCollection,
        where("category", "==", categoryName)
      );
      getDocs(consultaCategory).then((res) => {
        let newArr = res.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        let arrayFiltrado = newArr.filter((e) => e.stock > 0);

        setItems(arrayFiltrado);
      });
    }
  }, [categoryName]);

  // IF CON RETURN TEMPRANO
  // if (items.length === 0) {
  //   return <h1>Cargando ...</h1>;
  // }

  return (
    <>
      {/* TECNICA CON TERNARIO */}
      {/* {items.length === 0 ? (
        <HashLoader
          size={140}
          color="#36d7b7"
          cssOverride={{ display: "block", margin: "20% auto" }}
        />
      ) : (
        <ItemList items={items} />
      )} */}
      {/* <Button
        variant="outlined"
        style={{ margin: "1rem" }}
        onClick={rellenarDB}
      >
        Rellenar
      </Button> */}
      {items.length === 0 ? (
        <div className="">
          <div
            className=""
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
            <div>
              <Stack spacing={1}>
                <Skeleton
                  variant="rounded"
                  width={345}
                  height={300}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
              </Stack>
            </div>
            <div>
              <Stack spacing={1}>
                <Skeleton
                  variant="rounded"
                  width={345}
                  height={300}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
              </Stack>
            </div>
            <div>
              <Stack spacing={1}>
                <Skeleton
                  variant="rounded"
                  width={345}
                  height={300}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
              </Stack>
            </div>
          </div>
          <div
            className=""
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <div>
              <Stack spacing={1}>
                <Skeleton
                  variant="rounded"
                  width={345}
                  height={300}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
              </Stack>
            </div>
            <div>
              <Stack spacing={1}>
                <Skeleton
                  variant="rounded"
                  width={345}
                  height={300}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
              </Stack>
            </div>
            <div>
              <Stack spacing={1}>
                <Skeleton
                  variant="rounded"
                  width={345}
                  height={300}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem" }}
                  width={345}
                  animation="wave"
                />
              </Stack>
            </div>
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
      {/* TECNICA CON OPERADOR AND && */}
      {/* {items.length > 0 && <h3>Ya termino de cargar</h3>} */}
    </>
  );
};

export default ItemListContainer;
