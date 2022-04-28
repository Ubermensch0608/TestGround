import React, { FC, useState } from "react";

const AutoList: FC<{ products: { plus_name: string }[] }> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState<
    { plus_name: string }[]
  >([]);
  const [inputChar, setInputChar] = useState("");

  const getInputCharHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setInputChar(searchWord);

    const newFilter = products.filter(
      (value) =>
        value.plus_name.toLowerCase().includes(searchWord.toLowerCase()) &&
        value.plus_name !== ""
    );

    setFilteredProducts(newFilter);
    if (searchWord.length === 0) {
      setFilteredProducts([]);
    }
  };

  return (
    <div>
      <input onChange={getInputCharHandler} value={inputChar} />

      {filteredProducts.length > 0 && (
        <ul>
          {filteredProducts.slice(0, 10).map((product, idx) => (
            <li key={idx}>{product.plus_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoList;
