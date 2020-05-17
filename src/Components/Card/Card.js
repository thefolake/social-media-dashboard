import React from "react";
import './_Card.scss';
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div
            className={`card ${props.classes == null ? "" : props.classes}`}
        >
            <div className="card__body">
                <ul>
                    <li className='li-text'> {props.infoText} </li>
                    <li className='li-social'> {props.social} </li>
                    <li className='li-following'> {props.following} </li>
                    {props.brightRed ? <li className='li-stat-bright-red'> {props.icon} {props.stat} </li> : <li className='li-stat'> {props.icon} {props.stat}</li>}
                </ul>
            </div>
        </div>
    )
};

Card.propTypes = {
    classes: PropTypes.string,
    infoText: PropTypes.string,
    social: PropTypes.object,
    following: PropTypes.string,
    stat: PropTypes.string,
    brightRed: PropTypes.bool,
    icon: PropTypes.object,
};

export default Card;