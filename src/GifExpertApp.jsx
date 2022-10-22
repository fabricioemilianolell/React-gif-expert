import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//import React from 'react'

export const GifExpertApp = () => {

    //hooks
    const [categories, setcategories] = useState(["one punch"]) //hooks para mantener el estado
    
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {
            return categories;
        }
        //categories.push("valorant")
        setcategories([...categories, newCategory])
        //setcategories( iterador => [...iterador,"valorant"])
    }

    return (
        <>

            <h1>GifExpertApp</h1>
    
                <AddCategory 
                // setcategories= {setcategories}
                onNewCategory= {evento => onAddCategory(evento) }
                />
                
                {
                    categories.map( (category) => (
                        <GifGrid 
                        key={ category } 
                        category={category}/>
                        ))
                }
               
            </>
    )
}
