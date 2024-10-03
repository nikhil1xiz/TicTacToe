import React from "react";
import PropTypes from "prop-types";
const Block =(props)=>{
    return <div onClick={props.onClick} className="block">{props.value}</div>
};
Block.propTypes = {
    value : PropTypes.string,
    onClick: PropTypes.func
}
export default Block