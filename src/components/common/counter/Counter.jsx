const Counter = ({ sumar, restar, contador }) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h4>{contador}</h4>
      <button onClick={restar}>restar</button>
    </div>
  );
};

export default Counter;
