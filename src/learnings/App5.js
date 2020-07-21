import React from "react";
import Product from "./Product";
import productsData from "./productsData";

function App() {
  const productsComponent = productsData.map(function (product) {
    return <Product key={product.id} product={product} />;
  });
  return <div>{productsComponent}</div>;
}

export default App;
