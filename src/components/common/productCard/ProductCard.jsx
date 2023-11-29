import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({ item }) => {
  return (
    <Card className="cardList">
      <CardMedia image={item.img} title={`imagen ${item.title}`} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {Number(item.price).toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          })}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {item.stock > 0 ? (
          <Link to={`/itemDetail/${item.id}`}>
            <Button size="small" variant="outlined">
              Ver Detalle
            </Button>
          </Link>
        ) : (
          <Button variant="contained" disabled>
            {" "}
            Sin Stock
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
