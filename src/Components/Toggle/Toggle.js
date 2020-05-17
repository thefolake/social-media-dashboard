import React from "react";
import './_Toggle.scss'
import PropTypes from "prop-types";

const Toogle = (props) => {
    return (
        <div className="toggle-btn">
            <label className='switch'>
                <input type="checkbox" onClick={props.click_event}/>
                <span className="slider round"/>
            </label>
        </div>
    )
};

Toogle.propTypes = {
    classes: PropTypes.string,
    click_event: PropTypes.func,
};
export default Toogle;