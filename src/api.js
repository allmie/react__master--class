import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '27478d6fe1f7b7499ee6d880abb9b3be',
    language: 'en-US',
  },
});

export const movieApi = {
  popular: () => api.get('/movie/popular'),
  topRated: () => api.get('/movie/top_rated'),
  nowPlaying: () => api.get('/movie/now_playing'),
  search: (term) =>
    api.get('/search/movie', {
      params: {
        query: term,
      },
    }),
};

export const tvApi = {
  popular: () => api.get('/tv/popular'),
  topRated: () => api.get('/tv/top_rated'),
  AiringToday: () => api.get('/tv/airing_today'),
  search: (term) =>
    api.get('/search/tv', {
      params: {
        query: term,
      },
    }),
};

tvApi.search('god');
tvApi.popular();

export default api;
