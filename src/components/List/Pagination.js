import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Pager } from 'react-bootstrap'

const Pagination = ({page, totalPages, handlePagination}) => (
    <Fragment>
        <Pager>
            <Pager.Item 
            disabled={page <= 1}
            onClick={() => handlePagination('prev')}>
            &larr;
            </Pager.Item>
            {' '}
            <span>page {page} of {totalPages}</span>
            {' '}
            <Pager.Item
            disabled={page >= totalPages}
            onClick={() => handlePagination('next')}>
            &rarr;
            </Pager.Item>
        </Pager>
    </Fragment>
)

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handlePagination: PropTypes.func.isRequired
}

export default Pagination