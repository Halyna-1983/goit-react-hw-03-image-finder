import axios from 'axios';

const API_KEY = '21313289-b7c06230d54dda1d4d871d681';

const fetchPictures = ({
    searchQuery = '',
    currentPage = 1,
    pageSize = 12

    }) => {

    return axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&pretty=true&page=${currentPage}&per_page=${pageSize}`,)
        .then(response => response.data.hits);        
};

export default {fetchPictures};