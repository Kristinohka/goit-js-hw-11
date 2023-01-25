import axios from 'axios';

const baseUrl = 'https://pixabay.com/api';
const KEY = '33106720-8b4f22caa95181c6a7118c259';

export async function fetchImages(query, page) {
  const response = await axios.get(
    `${baseUrl}/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  );
  return response;
}
