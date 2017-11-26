import UserClient from 'api/userClient'
const userClient = new UserClient()

export const get_user_portfolio = () => {
    return {
        type: 'GET_USER_PORTFOLIO'
    }
}

export const receive_user_portfolio = (portfolio) => {
    return {
        type: 'RECEIVE_USER_PORTFOLIO',
        portfolio
    }
}

export const getUserPortfolio = (id) => {
    return dispatch => {
        dispatch(get_user_portfolio())
        return userClient.getUserPortfolio(id).then(
            response => dispatch(receive_user_portfolio(response.json))
        )
    }
}