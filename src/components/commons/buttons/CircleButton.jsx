import React from 'react';
import ClassicButton from "./ClassicButton";
import PropTypes from "prop-types";
import IconPlacement from "../enums";

const CircleButton = props => {
    return (
        <ClassicButton
            text={props.text}
            icon={props.icon}
            buttonClass={(props.buttonClass ?? '') + ' btn-circle'}
        />
    );
};

CircleButton.propTypes = {
    iconPlacement: PropTypes.instanceOf(IconPlacement),
    icon: PropTypes.element,
    text: PropTypes.string,
    buttonClass: PropTypes.string
};

export default CircleButton;
