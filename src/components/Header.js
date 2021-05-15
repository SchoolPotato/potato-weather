import logo from '../images/favicon.png';
import sun from '../images/shortDesc01.png';
import calendar from '../images/calendar.png';

const Header = () => {
    return (
        <div className="navDiv">
            <nav>
                <div className="navDiv" id="headerDiv">
                    <nav id="navLogo">
                        <img id="headerLogo" src={logo} alt="Hold on..."></img>
                        <h1 id="header">Weather Potato</h1>
                    </nav>
                </div>
                <hr id="headerLine"></hr>
                <a href="/"><img id="headerIcon" src={sun} alt="..."></img>Weather</a>
                <a href="/"><img id="headerIcon" src={calendar} alt="..."></img>About</a>
            </nav>
        </div>
    )
}

export default Header
