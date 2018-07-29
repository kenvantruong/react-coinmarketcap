import React from 'react'

export function renderPercentChange(percent) {
    if(percent > 0) {
        return <span style={{color: 'green'}}>{percent}% &uarr;</span>
    } else if(percent < 0) {
        return <span style={{color: 'red'}}>{percent}% &darr;</span>
    } else {
        return <span>{percent}</span>
    }
}