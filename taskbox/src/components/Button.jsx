import React  from "react";
import PropTypes from "prop-types"
import "./Button.css"


export default function Button({name, style, value, onPush}){

    return (
        <button className={style.size} onClick={onPush}>
            Sample button
        </button>
    )
}



Button.propTypes = {
    name: PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    style:PropTypes.object,
    onPush:PropTypes.func
}