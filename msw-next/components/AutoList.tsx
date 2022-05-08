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

  const postDataHandler = async () => {
    const currentInputValue = dataInputRef.current!.value;

    try {
      await axios
        .post("https://my.backend/post-something", {
          id: nanoid(),
          content: currentInputValue,
        })
        .then((res) => {
          const newData = res.data.body;

          setData((prevData) => [newData, ...prevData]);
        });
    } catch (err) {
      console.error(err);
    }

    dataInputRef.current!.value = "";
  };

  const getDataHandler = async () => {
    try {
      const { data } = await axios.get("https://my.backend/post-something");
      setData((prevData) => [...data, ...prevData]);
    } catch (err) {
      console.error(err);
    }
  };

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
        <form>
          <label>추가하기</label>
          <input ref={dataInputRef} />
          <button type="button" onClick={getDataHandler}>
            가져오기
          </button>
          <button type="button" onClick={postDataHandler}>
            추가하기
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
