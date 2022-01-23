import React from 'react';
import './switch.css';

class Switch extends React.Component {

    renderIcon() {
        if (this.props.checked && this.props.checkedIcon) {
            return this.props.checkedIcon;
        }
        else if (!this.props.checked && this.props.uncheckedIcon) {
            return this.props.uncheckedIcon;
        }
        else return null;
    }

    render() {
        return (
            <div className="switch">
                {this.props.text ?? ''}
                <label>
                    <input
                        type="checkbox"
                        id={this.props.id}
                        checked={this.props.checked}
                        onChange={(e) => this.props.onChange(e.target.checked)}
                    />
                    <span>{this.renderIcon()}</span>
                </label>
            </div>
        );
    }
}

export default Switch;
