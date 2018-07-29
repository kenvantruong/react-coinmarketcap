import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: '',
            results: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this)
    }
    handleChange(e) {
        const searchQuery = e.target.value
        this.setState({searchQuery})
        if(!searchQuery) {
            return ''
        }
        fetch(`https://api.udilia.com/coins/v1/autocomplete?searchQuery=${searchQuery}`)
        .then(resp => resp.json())
        .then(results => {
            this.setState({results})
        })
    }
    handleRedirect(currencyId) {
        this.setState({
            searchQuery: '',
            results: []
        })
        this.props.history.push(`/currency/${currencyId}`)
    }
    render() {
        const { searchQuery, results } = this.state
        return (
            <div id='search-input'>
                <i className='fa fa-search'></i>
                <input 
                    onChange={this.handleChange}
                    value={searchQuery}
                    placeholder='Find Currency'
                    />
                {!searchQuery ?
                    '' :
                    <div id='search-results'>
                        {
                            results.map(result => 
                            <p 
                            onClick={() => this.handleRedirect(result.id)}
                            key={result.id}
                            
                            >{result.name} <span>{result.symbol}</span></p>
                            )
                        }
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(Search)