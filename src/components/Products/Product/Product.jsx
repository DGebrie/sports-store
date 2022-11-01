import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CardMedia,
} from "@material-ui/core";
import { Add, AddShoppingCart } from "@material-ui/icons";
import useStyles from "./productStyles";

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        classname={classes.media}
        image={product.image}
        title={product.name}
      >
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">{product.price}</Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardAcrtions}>
          <IconButton aria-label="Add to card">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </CardMedia>
    </Card>
  );
};

export default Product;
