import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  // Specify the type of the const - products
  // typeScript compiler doesn't know the type of the intial value given as '[]' :
  // Strign[] or number[] ...
  const [products, setProducts] = useState<String[]>([]);

  // call the server to fetch the products
  //   Default behavior : execute after every render
  //
  //   second argument : Effect Dependencies
  //    1. Not passed : render continuosly
  //    2. [] : render once
  //    3. [dependency] : render when the dependency changes
  useEffect(() => {
    console.log("Fetchinf the products in ", category, ".");
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>Products List</div>;
};

export default ProductList;
