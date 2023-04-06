import axios from 'axios'

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    // headers: { 'X-Custom-Header': 'foobar' },
})
// axios.interceptors.response.use(
//     function (response) {
//         // Any status code that lie within the range of 2xx cause this function to trigger
//         // Do something with response data
//         return response.data
//     },
//     function (error) {
//         // Any status codes that falls outside the range of 2xx cause this function to trigger
//         // Do something with response error
//         return Promise.reject(error)
//     },
// )

const get = async (path, option = {}) => {
    const response = await request.get(path, option)
    return response.data
}

export { get }
export default request
