import axios from 'axios';
import type { MoviesResponse } from '../types/movie';

const API_URL = 'https://api.themoviedb.org/3/search/movie';

const token = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<MoviesResponse> => {
  const response = await axios.get<MoviesResponse>(API_URL, {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};