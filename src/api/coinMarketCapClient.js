import BaseFetcher from './baseFetcher'

const COIN_MARKET_CAP_BASE = 'https://api.coinmarketcap.com'
const COIN_MARKET_CAP_ENDPOINT = '/v1/ticker'

class CoinMarketCapClient extends BaseFetcher {
    constructor (config = { base : COIN_MARKET_CAP_BASE }) {
        super('CryptoClient', config)
    }
    
    async getCrypto (id) {
        const url = `${COIN_MARKET_CAP_ENDPOINT}/id`
        return await this.execute(url, 'GET')
    }

    async getcryptos (start = 0, limit = 100, convert) {
        let url = `${COIN_MARKET_CAP_ENDPOINT}/?start=${start}&limit=${limit}`
        url = convert ? `${url}&convert=${convert}` : url
        return await this.execute(url, 'GET')
    }
}

export default CoinMarketCapClient