import React from 'react'

export default function Counter({innerText,onCounterChange}) {
    return (
        <div>
            <button onClick={onCounterChange} className='button btn-primary'>{innerText}</button>
        </div>
    )
}
