import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch man']);
    
    const onAddCategory = (value) => {
        if(categories.includes(value)) return;
        setCategories([value, ...categories])
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory onNewCategory = {value => onAddCategory(value)} />
            { 
                categories.map( c => (
                        <GifGrid key={c} category={c} />
                    )
                )
            }
        </>
    );
}