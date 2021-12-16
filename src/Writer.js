import React from 'react'

export default function Writer(props) {
    return (
        <div className="writer">
            <h4>{props.author}</h4>
            <p>{props.genre}</p>
        </div>
    )
}