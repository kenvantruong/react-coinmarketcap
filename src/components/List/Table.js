import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Table } from 'react-bootstrap'
import { renderPercentChange } from '../../helperFunctions'

import './Table.css'

const TableCurrencies = ({currencies, history}) => (
    <Table responsive>
        <thead>
            <tr>
                <th>Cryptocurrency</th>
                <th>Price</th>
                <th>MarketCap</th>
                <th>24hr Change</th>
            </tr>
        </thead>
        <tbody>
        {
                currencies.map(currency => (
                    <tr 
                    key={currency.id} 
                    onClick={() =>history.push(`currency/${currency.id}`)}
                    style={{cursor: 'pointer'}}
                    >
                        <td><span 
                        >{currency.rank}</span> {currency.name}</td>
                        <td><span>$</span> {currency.price}</td>
                        <td><span>$</span> {currency.marketCap}</td>
                        <td>{renderPercentChange(currency.percentChange24h)}</td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
)

TableCurrencies.propTypes = {
    currencies: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
}

export default withRouter(TableCurrencies)