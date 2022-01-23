import React, {Component} from 'react';
import Switch from "../switch/Switch";
import ThemeSettings from "./ThemeSettings";
import {BsFillMoonFill} from "react-icons/bs";
import {HiLightBulb} from "react-icons/hi";

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
            <Switch
                id={ThemeSettings.SWITCHER_ID}
                checked={this.state.darkMode}
                onChange={this.onThemeChanged}
                //text={'Dark mode'}
                checkedIcon={<BsFillMoonFill size={12} />}
                uncheckedIcon={<HiLightBulb size={18} />}
            />
        );
    }
}

export default ThemeSwitcher;
