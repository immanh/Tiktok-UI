import axios from 'axios'
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
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
    const response = await httpRequest.get(path, option)
    return response.data
}

export { get }
export default httpRequest
