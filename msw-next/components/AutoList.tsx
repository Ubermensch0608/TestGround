import axios from "axios";
import React, { FC, useRef, useState } from "react";
import { nanoid } from "nanoid";

export interface DataTypes {
  id: string;
  content: string;
}

const AutoList: FC<{ products: { plus_name: string }[] }> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState<
    { plus_name: string }[]
  >([]);
  const [inputChar, setInputChar] = useState("");
  const [data, setData] = useState<DataTypes[]>([]);
  const dataInputRef = useRef<HTMLInputElement>(null);

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

  const addDataHanlder = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentInputValue = dataInputRef.current!.value;

    try {
      const response = await fetch("https://my.backend/post-something", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(currentInputValue),
      });

      console.log(response);
      return response.json();
    } catch (error) {
      console.error(error);
    }

    dataInputRef.current!.value = "";
  };

  const updateDataHandler = async () => {
    const { data } = await axios.get("https://my.backend/post-something");

    setData(data);
  };

  console.log(data);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "300px",
          minHeight: "300px",
          border: "2px solid black",
          padding: "10px",
          borderRadius: "12px",
        }}>
        <label>검색하기</label>
        <input onChange={getInputCharHandler} value={inputChar} />
        {filteredProducts.length > 0 && (
          <ul>
            {filteredProducts.slice(0, 10).map((product, idx) => (
              <li key={idx}>{product.plus_name}</li>
            ))}
          </ul>
        )}
      </div>
      <div
        style={{
          width: "300px",
          minHeight: "300px",
          border: "2px solid black",
          padding: "10px",
          borderRadius: "12px",
          marginLeft: "30px",
        }}>
        <form onSubmit={addDataHanlder}>
          <label>추가하기</label>
          <input ref={dataInputRef} />
          <button type="submit" onClick={updateDataHandler}>
            업데이트
          </button>
        </form>
        <ul>
          {data.map((value) => (
            <li key={value.id}>{value.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoList;
