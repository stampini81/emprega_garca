export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3333";

import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
