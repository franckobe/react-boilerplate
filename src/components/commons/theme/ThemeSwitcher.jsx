import React, {Component} from 'react';
import Switch from "../switch/Switch";
import ThemeSettings from "./ThemeSettings";

class ThemeSwitcher extends Component {

    state = {
        darkMode: ThemeSettings.isDarkTheme()
    }

    onThemeChanged = (value) => {
        ThemeSettings.changeTheme(value, ThemeSettings.FROM_USER);
        this.setState({
            darkMode: value
        });
    }

    render() {
        return (
            <Switch id={ThemeSettings.SWITCHER_ID} checked={this.state.darkMode} onChange={this.onThemeChanged} text={'Dark mode'} />
        );
    }
}

export default ThemeSwitcher;
