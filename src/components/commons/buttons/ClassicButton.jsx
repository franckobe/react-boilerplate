import React from 'react';
import IconPlacement from "../enums";
import PropTypes from "prop-types";

const ClassicButton = props => {
    let defaultIconPlacement = IconPlacement.RIGHT;
    let btnClass = 'btn-icon-' + (props.iconPlacement ?? defaultIconPlacement).toLowerCase();
    return (
        <button type={'button'} className={(props.buttonClass ?? '') + ' ' + btnClass}>
            {props.icon ?? null}
            {props.text ?? ''}
        </button>
    );
};

ClassicButton.propTypes = {
    iconPlacement: PropTypes.instanceOf(IconPlacement),
    icon: PropTypes.element,
    text: PropTypes.string,
    buttonClass: PropTypes.string
};

export default ClassicButton;
