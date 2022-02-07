import React from 'react';
import ClassicButton from "./ClassicButton";
import PropTypes from "prop-types";
import IconPlacement from "../enums";

const RoundedButton = props => {
    return (
        <ClassicButton
            text={props.text}
            icon={props.icon}
            iconPlacement={props.iconPlacement}
            buttonClass={(props.buttonClass ?? '') + ' btn-rounded'}
        />
    );
};

RoundedButton.propTypes = {
    iconPlacement: PropTypes.instanceOf(IconPlacement),
    icon: PropTypes.element,
    text: PropTypes.string,
    buttonClass: PropTypes.string
};

export default RoundedButton;
