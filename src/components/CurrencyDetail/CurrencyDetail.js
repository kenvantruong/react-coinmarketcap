import React, { Component } from 'react'
import { renderPercentChange } from '../../helperFunctions'
import Loader from '../Loader'

import './CurrencyDetail.css'

class CurrencyDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currency: {},
            loading: false
        }
    }
    fetchDetails(currencyId) {
        fetch(`https://api.udilia.com/coins/v1/cryptocurrencies/${currencyId}`)
        .then(resp => resp.json())
        .then(currency => {
            // console.log(currency)
            this.setState({
                currency: currency,
                loading: false
            })
        })
        .catch(error => {
            this.setState({loading: true})
        })
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.location.pathname !== nextProps.location.pathname) {
            const newCurrencyId = nextProps.match.params.id
            this.fetchDetails(newCurrencyId)
        }
    }
    componentDidMount() {
        const currencyId = this.props.match.params.id
        this.setState({
            loading: true
        })
        this.fetchDetails(currencyId)
    }
    render() {
        const { currency: {name,symbol, rank, marketCap, price, totalSupply, volume24h, percentChange24h}, loading } = this.state
        if(loading) {
            return <Loader />
        }
        return (
            <div id='currency-detail'>
                <p className='currency-name'>{name} <span>({symbol})</span></p>
                <p className='currency-rank'>Rank: <span>{rank}</span></p>
                <p>MarketCap: <span>$</span>{marketCap}</p>
                <p>Price: <span>$</span>{price}</p>
                <p>Total Supply: <span>$</span>{totalSupply}</p>
                <p>Volume24h: <span>$</span>{volume24h}</p>
                <p>Percent Change: {renderPercentChange(percentChange24h)}</p>
            </div>
        )
    }
}

export default CurrencyDetail