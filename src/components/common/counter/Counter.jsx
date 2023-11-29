import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Counter = ({ sumar, restar, contador, onAdd }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div
        style={{
          display: "flex",
          paddingTop: "1rem",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <IconButton onClick={restar}>
          <RemoveIcon />
        </IconButton>

        <h4>{contador}</h4>
        <IconButton onClick={sumar}>
          <AddIcon />
        </IconButton>
      </div>

      <Button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
