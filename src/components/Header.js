import logo from '../images/favicon.png';
import sun from '../images/shortDesc01.png';
import calendar from '../images/calendar.png';
import Main from './Main'
import About from './About';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Header = () => {
    return (
        <Router>
        <div className="navDiv">
            <nav>
                <div className="navDiv" id="headerDiv">
                    <nav id="navLogo">
                        <img id="headerLogo" src={logo} alt="Hold on..."></img>
                        <h1 id="header">Weather Potato</h1>
                    </nav>
                </div>
                <hr id="headerLine"></hr>
                <Link to="/"><img id="headerIcon" src={sun} alt="..."></img>Weather</Link>
                <Link to="/about"><img id="headerIcon" src={calendar} alt="..."></img>About</Link>
            </nav>
        </div>
            <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            </Switch>
        </Router>
    )
}

export default Header
