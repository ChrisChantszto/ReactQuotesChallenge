import React from 'react'

export default function Quotes(props) {
    return (
        <div>
            <table className="quotes">
            <tr>
                <th>{props.quotes}</th>
            </tr>
            </table>
        </div>
    )
}