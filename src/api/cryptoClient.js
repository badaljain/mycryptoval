import BaseFetcher from './baseFetcher'

const CRYPTO_ENDPOINT = '/cryptos'

class CryptoClient extends BaseFetcher {
    constructor (config = { base : '' }) {
        super('CryptoClient', config)
    }
    
    async getCrypto (id) {
        const url = `${CRYPTO_ENDPOINT}/${id}`
        return await this.execute(url, 'GET')
    }

    async getCryptos (start = 0, limit = 100, convert) {
        let url = `${CRYPTO_ENDPOINT}/?start=${start}&limit=${limit}`
        url = convert ? `${url}&convert=${convert}` : url
        return await this.execute(url, 'GET')
    }

    async getAllCryptos () {
        let url = `${CRYPTO_ENDPOINT}/all`
        return await this.execute(url, 'GET')
    }

    async getPriceByCryptoList (fromSymbols, toSymbols='USD') {
        const url = `${CRYPTO_ENDPOINT}/getpricebylist/?fromSymbols=${fromSymbols}&toSymbols=${toSymbols}`
        return await this.execute(url, 'GET')
    }
}

export default CryptoClient