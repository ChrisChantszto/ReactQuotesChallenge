import React from 'react'
import { FiRefreshCw } from "react-icons/fi";

export default function Navbar(props) {
    return (
        <div className="navbar" onClick={props.handleClick}>
            <h5 className="random">Random</h5>
            <h5><FiRefreshCw size={30} /></h5>
        </div>
    )
}