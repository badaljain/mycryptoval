import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCryptos, getAllCryptos } from '../crypto/cryptoActions'
import CryptoTable from './cryptoTable'
import MiniSwitch from 'components/common/miniSwitch'
import styles from './style.css'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cryptoList: [],
            autoRefresh: true
        }
    }

    componentDidMount () {
        this.props.getCryptos()
        this.props.getAllCryptos()
    }

    componentWillReceiveProps (nextProps) {
        clearTimeout(this.timeout)

        const cryptoList = []
        const { cryptoMap, showLoader } = nextProps
        for(let key in cryptoMap) {
            cryptoList.push(cryptoMap[key])
        }

        this.setState({ cryptoMap, cryptoList })

        if (!showLoader) {
            this.startPoll()
        }
    }

    startPoll() {
        if (this.state.autoRefresh) {
            this.timeout = setTimeout(() => this.props.getCryptos(), 5000)
        }
    }
    
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    handleSwitch = (el, autoRefresh) => {
        this.setState({ autoRefresh })
        this.startPoll()
    }

    render () {
        const { cryptoList } = this.state
        return (
            <div className='container'>
                <MiniSwitch handleSwitch={this.handleSwitch} />
                <CryptoTable cryptoList={ cryptoList }/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cryptoMap: state.Crypto.cryptos,
        showLoader: state.Crypto.showLoader
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCryptos: () => dispatch(getCryptos()),
        getAllCryptos: () => dispatch(getAllCryptos())
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Home )