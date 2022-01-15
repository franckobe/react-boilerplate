class ThemeSettings {

    static FROM_USER = 'FROM_USER';
    static FROM_SYSTEM = 'FROM_SYSTEM';
    static FROM_LOCAL_STORAGE = 'FROM_LOCAL_STORAGE';

    static KEY_DARK = 'dark';
    static KEY_LIGHT = 'light';
    static KEY_THEME = 'theme';

    static SWITCHER_ID = 'theme-switcher';

    /**
     * Check if user has already chosen a theme, then apply it, or start listening for system theme
     */
    static initThemeListener = () => {
        const localStorageTheme = localStorage.getItem(this.KEY_THEME);
        // If no user preference, get from system
        if (localStorageTheme === null) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',
                    e => this.changeTheme(e.matches, this.FROM_SYSTEM)
            );
            this.changeTheme(window.matchMedia('(prefers-color-scheme: dark)').matches, this.FROM_SYSTEM);
        }
        // Else get from user preference
        else this.changeTheme(localStorageTheme === this.KEY_DARK, this.FROM_LOCAL_STORAGE)
    }

    /**
     * Check if system theme is dark
     * @returns {boolean}
     */
    static isSystemThemeDark = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    /**
     * Check if user theme is dark in local storage, else if dark in system theme
     * @returns {boolean}
     */
    static isDarkTheme = () => {
        const localStorageTheme = localStorage.getItem(this.KEY_THEME);
        // If no user preference, get from system
        if (localStorageTheme === null) return this.isSystemThemeDark();
        // Else get from user preference
        return localStorageTheme === this.KEY_DARK;
    }

    /**
     * Toggle body class, switcher input, and write in local storage if needed
     * @param {boolean} darkMode
     * @param {string} from
     */
    static changeTheme = (darkMode, from) => {
        // Toggle body class
        if (darkMode) document.body.classList.add(this.KEY_DARK);
        else document.body.classList.remove(this.KEY_DARK);
        // Toggle the theme switcher input
        const themeSwitcher = document.getElementById(this.SWITCHER_ID);
        if (themeSwitcher) themeSwitcher.checked = darkMode;
        // Write user preference in localstorage
        if (from === this.FROM_USER) localStorage.setItem(this.KEY_THEME, darkMode ? this.KEY_DARK : this.KEY_LIGHT);
    }
}

export default ThemeSettings;
