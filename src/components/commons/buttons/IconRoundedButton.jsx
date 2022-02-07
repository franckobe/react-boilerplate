import React from 'react';
import RoundedButton from "./RoundedButton";

const IconRoundedButton = props => {
    return (
        <RoundedButton
            icon={props.icon}
            buttonClass={'btn-icon'}
        />
    );
};

IconRoundedButton.propTypes = {
    // icon: PropTypes.element.required,
};

export default IconRoundedButton;
