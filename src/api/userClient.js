import BaseFetcher from './baseFetcher'

const USER_ENDPOINT = '/users'

class UserClient extends BaseFetcher {
    constructor (config = { base : '' }) {
        super('UserClient', config)
    }
    
    async getUserPortfolio (id) {
        const url = `${USER_ENDPOINT}/${id}/portfolio`
        return await this.execute(url, 'GET')
    }
}

export default UserClient