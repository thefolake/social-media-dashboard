import React from 'react';
import PropTypes from 'prop-types';
import './_Border.scss';

const BorderCard = (props) => {
    return (
        <div
            className={`border_card ${props.classes == null ? "" : props.classes}`}
        >
            <div className="border_card__title">
                <ul>
                    <li className='li-social-media'> {props.icon} {props.socialMedia} </li>
                    <li className='li-followers'> {props.followers} </li>
                    <li className='li-followers-txt'> {props.followersTxt} </li>
                    {props.brightRed ? <li className='li-today-bright-red'> {props.icon2} {props.today} </li> : <li className='li-today'> {props.icon2} {props.today} </li>}
                </ul>
            </div>
        </div>
    )
};

BorderCard.propTypes = {
    classes: PropTypes.string,
    socialMedia: PropTypes.string,
    followers: PropTypes.string,
    followersTxt: PropTypes.string,
    today: PropTypes.string,
    brightRed: PropTypes.bool,
    icon: PropTypes.object,
    icon2: PropTypes.object,
};

export default BorderCard;