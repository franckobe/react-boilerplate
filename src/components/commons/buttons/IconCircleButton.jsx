import React from 'react';
import RoundedButton from "./RoundedButton";

const IconCircleButton = props => {
    return (
        <RoundedButton
            icon={props.icon}
            buttonClass={'btn-icon btn-icon-circle'}
        />
    );
};

IconCircleButton.propTypes = {
    // icon: PropTypes.element.required,
};

export default IconCircleButton;
