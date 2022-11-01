import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./productsStyles";

const products = [
  {
    id: 1,
    name: "Jersey",
    description: "football jersey",
    price: "2.00",
    image:
      "https://static.mitchellandness.com/media/catalog/product/cache/faecf306f19cfddfc0fac775879e801e/l/g/lgjyac18030-dbrnavy98jel_1_1.jpg",
  },
  {
    id: 2,
    name: "Hat",
    description: "baseball hat",
    price: "1.00",
    image: "https://static-01.daraz.pk/p/062b437b606a3e8ef0f8fded16d0c4e5.jpg",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
