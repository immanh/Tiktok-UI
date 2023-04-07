import * as httpRequest from '~/utils/httpRequest'

const search = async (query, type = 'less') => {
    try {
        const responseResultApi = await httpRequest.get(`users/search`, {
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
