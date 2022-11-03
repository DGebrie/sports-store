import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  // MenuItem,
  // Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/sports-shop-logo.jpeg";
import useStyles from "./styles";

function NavBar({ totalItems }) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography>
            <img
              src={logo}
              alt="Sports Shop"
              height="25px"
              className={classes.image}
            />
            Dejen's Sporting Goods
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge
                badgeContent={totalItems}
                color="secondary"
                overlap="rectangular"
              >
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
