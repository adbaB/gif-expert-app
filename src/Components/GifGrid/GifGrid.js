import React  from "react";
import useFetchGifs from "../../hooks/useFetchGifs";
import GridItem from "./GridItem/GridItem";
import "./GifGrid.css";
import "animate.css"


const GifGrid = ({ category }) => {

   const {data:images,loanding} =  useFetchGifs(category)

  return (
    <>
      <h2 className="animate__animated animate__fadeIn ">{category}</h2>
      {loanding ? <p>Cargando...</p>:null}
      <div className="card-grid">
        {images.map((img) => (
          <GridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
