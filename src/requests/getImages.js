import axios from 'axios';

const getImages = (query) => {
    if (!query) {
        return Promise.resolve([]) //returns an empty promise if function runs without a query entered by user
    }
    else {
        return axios
            .get(`https://images-api.nasa.gov/search?q=${query}`)
            .then((response) => {
                const imageResults = response.data.collection.items;
                const parsedImages = imageResults.filter(result => result.data[0].media_type === "image")
                const images = parsedImages.map(image => image.links[0].href)
                return images;
            })
            .catch((err) => {
                console.log(err);
            });// get request to the endpoint with axios. Log response to see data. Catch block triggers at bad request
    }
};

export default getImages;