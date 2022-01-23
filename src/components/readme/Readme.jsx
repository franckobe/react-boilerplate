import React from 'react';
import './readme.css';
import ThemeSwitcher from "../commons/theme/ThemeSwitcher";
import {
    ButtonGroup,
    CircleButton,
    ClassicButton,
    IconButton,
    IconCircleButton,
    IconRoundedButton,
    RoundedButton
} from "../commons/buttons/Buttons";
import {FaSearch} from "react-icons/fa";
import IconPlacement from "../commons/enums";

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
                <div className="container">
                    <h1>Headline 1</h1>
                    <h2>Headline 2</h2>
                    <h3>Headline 3</h3>
                    <h4>Headline 4</h4>
                    <h5>Headline 5</h5>
                    <h6>Headline 6</h6>
                    <br/>
                    <p>Paragraphe : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid atque deserunt eius enim,
                        error eveniet facilis fugiat illo incidunt libero mollitia nisi nulla omnis placeat ratione
                        reprehenderit ullam?</p>
                    <br/>

                    <ButtonGroup>
                        <ClassicButton text={'ClassicButton'} />
                        <ClassicButton text={'ClassicButton'} icon={<FaSearch />} />
                        <ClassicButton text={'ClassicButton'} icon={<FaSearch />} iconPlacement={IconPlacement.TOP}/>
                        <ClassicButton text={'ClassicButton'} icon={<FaSearch />} iconPlacement={IconPlacement.BOTTOM}/>
                    </ButtonGroup>

                    <ButtonGroup>
                        <RoundedButton text={'RoundedButton'} />
                        <RoundedButton text={'RoundedButton'} icon={<FaSearch />} />
                    </ButtonGroup>

                    <ButtonGroup>
                        <CircleButton text={'CircleButton'} />
                        <CircleButton text={'CircleButton'} icon={<FaSearch />} />
                    </ButtonGroup>

                    <ButtonGroup>
                        <IconButton icon={<FaSearch />} />
                        <IconRoundedButton icon={<FaSearch />} />
                        <IconCircleButton icon={<FaSearch />} />
                    </ButtonGroup>

                </div>
            </div>
        );
    }
}

export default Readme;
