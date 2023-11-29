import { useEffect, useState } from "react";
import axios from "axios";
import Albums from "./Albums";

const FetchingData = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const tarea = axios.get("https://jsonplaceholder.typicode.com/albums");
    tarea.then((res) => setAlbums(res.data).catch((err) => console.log(err)));
  }, []);

  const crear = () => {
    axios.post("https://jsonplaceholder.typicode.com/albums", {
      userId: 2,
      title: "Album nuevo",
    });
  };

  return <Albums albums={albums} crear={crear} />;
};

export default FetchingData;
