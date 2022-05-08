import axios from "axios";
import React, { useState } from "react";

const Fetch = () => {
  const [photoList, setPhotoList] = useState([]);
  const fetchImagesHandler = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    console.log(data);
    setPhotoList(data);
  };

  return (
    <div>
      <button onClick={fetchImagesHandler}>fetch Images</button>
      <ul>
        {photoList.map((photo) => (
          <li key={photo.id}>
            <h3>{photo.title}</h3>
            <img src={photo.thumbnailUrl} alt={`image_${photo.id}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
