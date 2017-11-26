const User = (state = {}, action) => {

    switch (action.type) {
        case 'GET_USER_PORTFOLIO':
            return {
                ...state,
                showLoader: true
            }
        case 'RECEIVE_USER_PORTFOLIO':
            return {
                ...state,
                portfolio: action.portfolio,
                showLoader: false
            }

        default:
            return state
    }
}

export default User