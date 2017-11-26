import CryptoClient from 'api/cryptoClient'
const cryptoClient = new CryptoClient()

export const get_cryptos = () => {
    return {
        type: 'GET_CRYPTOS'
    }
}

export const receive_cryptos = (cryptos) => {
    return {
        type: 'RECEIVE_CRYPTOS',
        cryptos
    }
}

export const getCryptos = (start, limit, convert) => {
    return dispatch => {
        dispatch(get_cryptos())
        return cryptoClient.getCryptos(start, limit, convert).then(
            response => dispatch(receive_cryptos(response.json))
        )
    }
}

export const receive_all_cryptos = (allCryptos) => {
    return {
        type: 'RECEIVE_ALL_CRYPTOS',
        allCryptos
    }
}

export const receive_price_by_crypto_list = (priceByCryptoList) => {
    return {
        type: 'RECEIVE_PRICE_BY_CRYPTO_LIST',
        priceByCryptoList
    }
}

export const getAllCryptos = () => {
    return dispatch => {
        dispatch(get_cryptos())
        return cryptoClient.getAllCryptos().then(
            response => dispatch(receive_all_cryptos(response.json))
        )
    }
}

export const getPriceByCryptoList = (fromSymbols, toSymbols) => {
    return dispatch => {
        dispatch(get_cryptos())
        return cryptoClient.getPriceByCryptoList(fromSymbols, toSymbols).then(
            response => dispatch(receive_price_by_crypto_list(response.json))
        )
    }
}
