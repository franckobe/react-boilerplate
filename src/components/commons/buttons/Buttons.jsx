import React, {Component} from 'react';
import IconPlacement from "../enums";

export class ClassicButton extends Component {

    defaultIconPlacement = IconPlacement.RIGHT;

    buttonIconPlacementClass() {
        return 'btn-icon-' + (
            this.props.iconPlacement ?? this.defaultIconPlacement).toLowerCase()
    }

    render() {
        return (
            <button type={'button'} className={(this.props.buttonClass ?? '') + ' ' + this.buttonIconPlacementClass()}>
                {this.props.icon ?? null}
                {this.props.text ?? ''}
            </button>
        );
    }
}

export class RoundedButton extends Component {
    render() {
        return (
            <ClassicButton
                text={this.props.text}
                icon={this.props.icon}
                iconPlacement={this.props.iconPlacement}
                buttonClass={(this.props.buttonClass ?? '') + ' btn-rounded'}
            />
        );
    }
}

export class CircleButton extends Component {
    render() {
        return (
            <ClassicButton
                text={this.props.text}
                icon={this.props.icon}
                iconPlacement={this.props.iconPlacement}
                buttonClass={(this.props.buttonClass ?? '') + ' btn-circle'}
            />
        );
    }
}

export class IconButton extends Component {
    render() {
        return (
            <ClassicButton
                icon={this.props.icon}
                buttonClass={(this.props.buttonClass ?? '') + ' btn-icon'}
            />
        );
    }
}

export class IconRoundedButton extends Component {
    render() {
        return (
            <RoundedButton
                icon={this.props.icon}
                buttonClass={'btn-icon'}
            />
        );
    }
}

export class IconCircleButton extends Component {
    render() {
        return (
            <RoundedButton
                icon={this.props.icon}
                buttonClass={'btn-icon btn-icon-circle'}
            />
        );
    }
}

export class ButtonGroup extends Component {
    render() {
        return (
            <div className={'btn-group ' + (this.props.spaceClass ?? '')}>
                {this.props.children}
            </div>
        );
    }
}
