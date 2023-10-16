import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("cantidad maxima");
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  return <Counter sumar={sumar} restar={restar} contador={contador} />;
};

export default CounterContainer;
