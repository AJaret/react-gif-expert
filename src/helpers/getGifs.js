export const getGifs = async (category) => {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=6veI47AsOZSZAAjCIMHTstA60sZ36pvY&q=${category}&limit=20`;
    const response = await fetch( API_URL );
    const {data = []} = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}