import * as request from '~/utils/request'

const search = async (query, type = 'less') => {
    try {
        const responseResultApi = await request.get(`users/search`, {
            params: {
                q: query,
                type,
            },
        })
        return responseResultApi.data
    } catch (err) {
        console.log(err)
        // throw new Error(`${err.message}`)
    }
}

export { search }
