import { ProductsInterface } from "pages";
import React, { FC, Fragment } from "react";

const AutoList: FC<{ products: { plus_name: string }[] }> = ({ products }) => {
  return (
    <Fragment>
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>{product.plus_name}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default AutoList;
