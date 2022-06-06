import React, { useState } from "react";
import GifAdd from "../GifAdd/GifAdd";
import GifGrid from "../GifGrid/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Samurai X"]);
  return (
    <>
      <h1> GifExpertApp </h1>
      <GifAdd setCategories={setCategories} />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
export default GifExpertApp;
