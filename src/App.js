import './App.css';
import Readme from "./components/readme/Readme";
import ThemeSettings from "./components/commons/theme/ThemeSettings";

const App = () => {

    ThemeSettings.initThemeListener();

    return (
        <Readme />
    );
}

export default App;
