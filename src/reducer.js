import { combineReducers } from 'redux'
import Crypto from 'components/crypto/cryptoReducer'
import User from 'components/user/userReducer'


const rootReducer = combineReducers({
  Crypto,
  User
})

export default rootReducer