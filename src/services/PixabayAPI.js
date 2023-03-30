import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
const API_KEY = '33900155-ddf1dfbe75f3fcb3b163d9a71';

export const getSearchedPicturesApi = (q, page = 1) => {
  return axios
    .get('api/', {
      params: {
        key: API_KEY,
        q,
        page,
        per_page: 12,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(res => res.data);
};
