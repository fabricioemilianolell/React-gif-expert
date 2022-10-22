import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

  //hooks personalizado - imagenes te llegan al hooks
  const { images, isLoading } = useFetchGifs( category ); 
  

    return (
    <>
        <h3>{ category }</h3>
        <h2>
          {
            (isLoading)
            ? (<h2>cargando...</h2>)
            : null
            // isLoading && (<h2>cargando...</h2>)
          }
        </h2>

        <div className="card-grid">
            {
              images.map( ( image ) => (
                <GifItem 
                key={image.id}
                { ...image } //spread
                  //title={image.title}
                  //url={image.url}  
                
                />
              ))
            }
        </div>  
    </>


  )
}
