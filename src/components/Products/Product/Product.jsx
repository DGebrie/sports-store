import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CardMedia,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./productStyles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        title={product.name}
        image={product.image.url}
      >
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label="Add to cart"
            onClick={() => {
              onAddToCart(product.id, 1);
            }}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </CardMedia>
    </Card>
  );
};

export default Product;
