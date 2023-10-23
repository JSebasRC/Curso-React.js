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
const productCard = ({ item }) => {
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
        <Link to="/itemDetail">
          <Button size="small" variant="outlined">
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default productCard;
