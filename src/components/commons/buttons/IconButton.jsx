import React from 'react';
import ClassicButton from "./ClassicButton";
import PropTypes from "prop-types";

const IconButton = props => {
    return (
        <ClassicButton
            icon={props.icon}
            buttonClass={(props.buttonClass ?? '') + ' btn-icon'}
        />
    );
};

IconButton.propTypes = {
    icon: PropTypes.element,
    buttonClass: PropTypes.string
};

export default IconButton;
