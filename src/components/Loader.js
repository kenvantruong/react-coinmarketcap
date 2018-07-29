import React from 'react'

const Loader = () => <i style={loaderStyle} className='fa fa-circle-o-notch fa-2x fa-spin'></i>

const loaderStyle = {
    color: '#23527c',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
}

export default Loader;