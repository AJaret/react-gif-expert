import { UseFetchGifs } from "../hooks/UseFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {
    
    const {images, isLoading} = UseFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2 >Cargando...</h2>)
            }
            <div className="card-grid">
                {images.map(gif => {
                    return(
                        <GifGridItem key = {gif.id} {...gif} />
                    )
                })}
            </div>
        </>
    )
}