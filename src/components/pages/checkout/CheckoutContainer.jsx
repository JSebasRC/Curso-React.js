import { useState } from "react";

const CheckoutContainer = () => {
  // const [nombre, setNombre] = useState("");
  // const [apellido, setApellido] = useState("");
  // const [email, setEmail] = useState("");

  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  // const capturarNombre = (e) => {
  //   setUserInfo({ ...userInfo, nombre: e.target.value });
  // };
  // const capturarApellido = (e) => {
  //   setUserInfo({ ...userInfo, apellido: e.target.value });
  // };
  // const capturarEmail = (e) => {
  //   setUserInfo({ ...userInfo, email: e.target.value });
  // };

  const capturarDatos = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (userInfo.nombre.length)
      if (userInfo.nombre.length < 5) {
        setErrors({
          ...errors,
          nombre: "el nombre debe tener al menos 5 caracteres",
        });
        return;
      }
    if (userInfo.apellido.length < 5) {
      setErrors({
        ...errors,
        nombre: "el apellido debe tener al menos 5 caracteres",
      });
      return;
    }
    if (!userInfo.email.includes("@")) {
      setErrors({
        ...errors,
        email: "no es un email valido",
      });
      return;
    }

    console.log("los datos capturados son: ", userInfo);
  };

  return (
    <div>
      <h1>Este es el checkout</h1>
      <form onSubmit={enviarFormulario}>
        <input type="text" name="nombre" onChange={capturarDatos} />
        <span>{errors.nombre}</span>
        <input type="text" name="apellido" onChange={capturarDatos} />
        <span>{errors.apellido}</span>
        <input type="text" name="email" onChange={capturarDatos} />
        <span>{errors.email}</span>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
