import React, { Component, Fragment } from 'react'
import TableCurrencies from './Table'
import Pagination from './Pagination'
import Loader from '../Loader'

class List extends Component {
    constructor() {
        super()
        this.state = {
            currencies: [],
            error: null,
            loading: true,
            page: 1,
            totalPages: 0
        }
        this.handlePagination = this.handlePagination.bind(this)
    }
    componentDidMount() {
        this.fetchCurrencies()
    }
    fetchCurrencies() {
        this.setState({loading: true})
        const { page } = this.state
        fetch(`https://api.udilia.com/coins/v1/cryptocurrencies?page=${page}&perPage=20`)
        .then(resp => resp.json())
        .then(currencies => {
            this.setState({
                currencies: currencies.currencies,
                loading: false,
                totalPages: currencies.totalPages
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    handlePagination(direction) {
        let nextPage = this.state.page
        nextPage = direction === 'next' ? nextPage +1 : nextPage -1
        this.setState({
            page: nextPage
        }, () => this.fetchCurrencies())
    }
    render() {
        const { currencies, loading, error, page, totalPages } = this.state
        if(loading) {
            return <Loader />
        }
        if(error) {
            return <span>{error}</span>
        }
        return (
            <Fragment>
                <TableCurrencies
                currencies={currencies} 
                />
                <Pagination 
                page={page}
                totalPages={totalPages}
                handlePagination={this.handlePagination}
                />
            </Fragment>
        )
    }
}

export default List