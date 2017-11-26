const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }
const postOptions = { method: 'POST', headers }
const getOptions = { method: 'GET', headers }
const maybeJSON = (x) => x.json().catch(e => Promise.resolve(JSON.stringify({})))
const parseResponse = (response) => maybeJSON(response).then(json => ({ rawResponse: response, json }))
const identity = (x) => x

const BASE_ENDPOINT = 'http://localhost:3001'

class BaseFetcher {

    constructor (client, config) {
        this.API_END_POINT = config.base || BASE_ENDPOINT
    }

    execute = (resourceEndpoint, method = 'GET', body = {}) => {
        const fetchUrl = `${this.API_END_POINT}${resourceEndpoint}`
        let requestParams = { ...getOptions }

        if (method !== 'GET') {
            requestParams = { ...postOptions, body: JSON.stringify(body) }
        }

        return fetch(fetchUrl, requestParams).then(parseResponse).then(identity)
    }
}

export default BaseFetcher