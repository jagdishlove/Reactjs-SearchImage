import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [img, setImg] = useState("");

  const url = `https://source.unsplash.com/400x400?${img}`;

  const eventChange = (e) => {
    const data = e.target.value;
    console.log(data);
    setImg(data);
  };

  return (
    <>
      <div></div>
      <br />

      <div class="container">
        <div class="wrapper">
          <input type="text" onChange={eventChange} required />
          <label id="label">What are you looking for?</label>
        </div>
      </div>
      <div>
        <img src={url} alt="Love" />
      </div>
    </>
  );
};

export default Home;
