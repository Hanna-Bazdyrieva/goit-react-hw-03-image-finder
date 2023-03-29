import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
const API_KEY = '33900155-ddf1dfbe75f3fcb3b163d9a71';

// const getSearchedNews = async () => {
//   try {
//     const response = await axios.get("/everything", {
//       params: {
//         q: "bitcoin",
//         apiKey: API_KEY,
//       },
//     });
//     return response.data; // Promise.resolve(response.data)
//   } catch (error) {
//     console.log(error.message);
//     // return undefined; // Promise.resolve(undefined)
//     throw error; // Promise.reject(error)
//   }
// };
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
