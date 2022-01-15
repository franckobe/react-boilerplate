import React from 'react';
import './readme.css';
import ThemeSwitcher from "../commons/theme/ThemeSwitcher";

class Readme extends React.Component {

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>Headlines</li>
                        <li>Others</li>
                    </ul>
                    <ThemeSwitcher />
                </nav>
                <h1>Headline 1</h1>
                <h2>Headline 2</h2>
                <h3>Headline 3</h3>
                <h4>Headline 4</h4>
                <h5>Headline 5</h5>
                <h6>Headline 6</h6>
                <br/>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid atque deserunt eius enim,
                    error eveniet facilis fugiat illo incidunt libero mollitia nisi nulla omnis placeat ratione
                    reprehenderit ullam?</p>
            </div>
        );
    }
}

export default Readme;
