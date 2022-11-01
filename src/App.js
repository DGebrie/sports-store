import React, { useEffect, useState } from "react";
import { Products, NavBar } from "./components";
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <NavBar />
      <Products />
    </div>
  );
}

export default App;
