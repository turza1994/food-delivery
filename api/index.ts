import axios from 'axios'

const url = 'https://munchies-api.up.railway.app'

export const getProducts = () => axios.get(`${url}/products`)
export const loadMoreProducts = () => axios.get(`${url}/products`)
// export const addPost = (newPost: any) => axios.post(`${url}/posts`, newPost)
