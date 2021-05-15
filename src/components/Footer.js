import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';

const Footer = () => {
    return (
        <div className="navDiv" id="Footer">
            <nav>
                <a href="twitter.com"><img id="twitter" className="social" src={twitter} alt="Gimme a sec..."></img></a>
                <a href="facebook.com"><img id="facebook" className="social" src={facebook} alt="Hold onnnn..."></img></a>
                <a href="youtube.com"><img id="youtube" className="social" src={youtube} alt="Just a minute..."></img></a>
                <div>
                    <ul>
                        <h3>Contact:</h3>
                        <p>1+ (623) 262-3300</p>
                        <p>3139 W Cavedale Drive</p>
                        <p>TruPotatoes@outlook.com</p>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>Other Pages:</h3>
                        <p><a rel="noreferrer" target="_blank" href="https://schoolpotato.github.io/Pokedex/">Pokedex</a></p>
                        <p><a rel="noreferrer" target="_blank" href="https://schoolpotato.github.io/TicTacToe">Tic Tac Toe</a></p>
                    </ul>
                </div>
            </nav>
            <hr id="footerLine"></hr>
            <h4 id="copyright">&copy; School Potato 2021<br></br>National Weather Service API found at <a href="https://www.weather.gov/documentation/services-web-api">weather.gov</a></h4>
        </div>
    )
}

export default Footer
