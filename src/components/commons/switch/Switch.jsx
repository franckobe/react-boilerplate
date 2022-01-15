import React from 'react';
import './switch.css';

class Switch extends React.Component {

    render() {
        return (
            <div className="switch">
                {this.props.text}
                <label>
                    <input
                        type="checkbox"
                        id={this.props.id}
                        checked={this.props.checked}
                        onChange={(e) => this.props.onChange(e.target.checked)}
                    />
                    <span/>
                </label>
            </div>
        );
    }
}

export default Switch;
