const Crypto = (state = {}, action) => {

    switch (action.type) {
        case 'GET_CRYPTOS':
            return {
                ...state,
                showLoader: true
            }
        case 'RECEIVE_CRYPTOS':
            return {
                ...state,
                cryptos: action.cryptos,
                showLoader: false
            }   
        case 'RECEIVE_ALL_CRYPTOS':
            return {
                ...state,
                allCryptos: action.allCryptos,
                showLoader: false
            }
        case 'RECEIVE_PRICE_BY_CRYPTO_LIST':
            return {
                ...state,
                priceByCryptoList: action.priceByCryptoList,
                showLoader: false
            }

        default:
            return state
    }
}

export default Crypto