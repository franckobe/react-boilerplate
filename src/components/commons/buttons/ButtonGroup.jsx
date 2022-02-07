import React from 'react';

const ButtonGroup = props => {
    return <div className={'btn-group ' + (props.spaceClass ?? '')}>
        {props.children}
    </div>;
};

ButtonGroup.propTypes = {

};

export default ButtonGroup;
