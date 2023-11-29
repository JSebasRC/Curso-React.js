import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CheckoutFormik.css";

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      repeatPassword: "",
    },

    onSubmit: (data) => {
      console.log(data);
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Debe tener al menos 5 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      apellido: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Debe tener al menos 5 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      email: Yup.string()
        .required("Este campo es obligatorio")
        .email("Email no valido"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe contender al menos 8 caracteres y debe tener al menos una mayuscula, una minuscula, un numero, y un caracter especial",
        }),
      repeatPassword: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
  });
  console.log(errors);

  return (
    <div className="containerForm">
      <h2>Ingresa tus datos para continuar con la compra</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />

        <TextField
          label="Apellido"
          variant="outlined"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <TextField
          label="Verificar contraseña"
          variant="outlined"
          name="repeatPassword"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.repeatPassword}
        />
        <Button variant="contained" type="submit">
          Enviar
        </Button>
        <Button variant="outlined" type="button">
          Cancelar
        </Button>
      </form>
    </div>
  );
};

export default CheckoutFormik;
