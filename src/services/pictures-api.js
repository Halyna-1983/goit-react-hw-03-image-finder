import axios from 'axios';

const API_KEY = '21313289-b7c06230d54dda1d4d871d681';

// https://pixabay.com/api/?key=21313289-b7c06230d54dda1d4d871d681&q=yellow+flowers&image_type=photo&pretty=true

const fetchPictures = (searchQuery) => {
    return axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&pretty=true&per_page=12`,)
    .then(response => response.data.hits);
}

export default {fetchPictures};