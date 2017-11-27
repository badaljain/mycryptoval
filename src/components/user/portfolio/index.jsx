import React, { Component } from 'react'
import { getUserPortfolio } from '../userActions'
import { getPriceByCryptoList } from 'components/crypto/cryptoActions'
import { connect } from 'react-redux'
import MiniSwitch from 'components/common/miniSwitch'
import CryptoTable from './cryptoTable'
import ActionBar from 'components/common/ActionBar'

class Portfolio extends Component {
    constructor (props) {
        super (props)
        this.state = {
            autoRefresh: true,
            loadRetry : 3,
            totalUsd: 0,
            totalBTC: 0,
            title: 'Breakdown'
        }
    }

    componentDidMount () {
        this.props.getUserPortfolio('badaljain77')
        this.props.getPriceByCryptoList('', 'USD')
    }

    componentWillReceiveProps (nextProps) {
        clearTimeout(this.timeout)

        const { portfolio, showLoader, priceByCryptoList } = nextProps
        const { loadRetry } = this.state
        if (portfolio) {
            const fromSymbol = Object.keys(portfolio).join(',')
            const toSymbol = 'USD,BTC'
            if (!priceByCryptoList || priceByCryptoList.error && loadRetry > 0) {
                this.props.getPriceByCryptoList(fromSymbol, toSymbol)
                this.setState({loadRetry: loadRetry - 1})
            }
            
            if (priceByCryptoList) {
                this.createUserData(portfolio, priceByCryptoList)
            }

            if (!showLoader) {
                this.startPoll(fromSymbol, toSymbol)
            } 
        } 
    }
    
    createUserData = (portfolio, priceByCryptoList) => {
        const cryptoList = []
        let totalUSD = 0, totalBTC = 0
        try {
            for (let crypto in portfolio) {
                if(priceByCryptoList && priceByCryptoList[crypto]) {
                    portfolio[crypto].price = priceByCryptoList[crypto]['USD'].PRICE * portfolio[crypto]['qty']
                    portfolio[crypto].priceBTC = priceByCryptoList[crypto]['BTC'].PRICE * portfolio[crypto]['qty']
                }
                cryptoList.push(portfolio[crypto])
                totalUSD = cryptoList.map(item => item.price).reduce((prev, next) => prev + next)
                totalBTC = cryptoList.map(item => item.priceBTC).reduce((prev, next) => prev + next)
            }
            this.setState({ portfolio, cryptoList, totalUSD, totalBTC })
        } catch (ex) {
            console.log('Cannot createUserData with exception : ', ex)
        }
        
    }
    
    startPoll(fromSymbol, toSymbol) {
        if (this.state.autoRefresh) {
            this.timeout = setTimeout(() => this.props.getPriceByCryptoList(fromSymbol, toSymbol), 5000)
        }
    }
    
    handleSwitch = (el, autoRefresh) => {
        this.setState({ autoRefresh })
        this.startPoll()
    }

    render () {
        const { totalUSD, cryptoList, totalBTC, title } = this.state
        return (
            <div className='container'>
                <ActionBar title={title}>
                    <MiniSwitch handleSwitch={this.handleSwitch} />
                </ActionBar>
                <p> ${totalUSD}/ {totalBTC} (BTC) </p>
                <CryptoTable portfolio={cryptoList} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        portfolio: state.User.portfolio,
        showLoader: state.Crypto.showLoader,
        priceByCryptoList: state.Crypto.priceByCryptoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserPortfolio: (id) => dispatch(getUserPortfolio(id)),
        getPriceByCryptoList: (fromSymbol, toSymbol) => dispatch(getPriceByCryptoList(fromSymbol, toSymbol))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Portfolio )