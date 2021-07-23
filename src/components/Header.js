import React from 'react'
import PropTypes from 'prop-types'
import logo from '../logo.png'

export default function Header(props){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand font-weight-bold m-auto" href="/"><img src={logo} height="35px" width="35px" />{props.title}</a>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    title:"Default Title",
    searchbar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchbar: PropTypes.bool.isRequired
}