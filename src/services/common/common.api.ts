import axios from 'axios'

export const baseURL = 'https://andri-flashcards-api.onrender.com/v1/'

export const instance = axios.create({
  baseURL,
  withCredentials: true,
})
