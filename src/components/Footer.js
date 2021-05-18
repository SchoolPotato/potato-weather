import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';

const Footer = () => {
    return (
        <div className="navDiv" id="Footer">
            <nav>
                <a rel="noreferrer" target="_blank" href="twitter.com"><img id="twitter" className="social" src={twitter} alt="Gimme a sec..."></img></a>
                <a rel="noreferrer" target="_blank" href="facebook.com"><img id="facebook" className="social" src={facebook} alt="Hold onnnn..."></img></a>
                <a rel="noreferrer" target="_blank" href="youtube.com"><img id="youtube" className="social" src={youtube} alt="Just a minute..."></img></a>
                <div>
                    <ul>
                        <h3>Contact:</h3>
                        <p>1+ (623) 262-3300</p>
                        <p>3139 W Cavedale Drive</p>
                        <p><a href="mailto:trupotatoes@outlook.com">TruPotatoes@outlook.com</a></p>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>My Stuff:</h3>
                        <p><a rel="noreferrer" target="_blank" href="https://schoolpotato.github.io/Pokedex/">Pokedex</a></p>
                        <p><a rel="noreferrer" target="_blank" href="https://schoolpotato.github.io/TicTacToe">Tic Tac Toe</a></p>
                        <p><a rel="noreferrer" target="_blank" href="https://schoolpotato.github.io/CommissionsSheet/">Commissions</a></p>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>Other:</h3>
                        <p><a rel="noreferrer" target="_blank" href="https://www.weather.gov/documentation/services-web-api">Weather API</a></p>
                        <p><a rel="noreferrer" target="_blank" href="https://www.alyonascooking.com/molochne-european-semi-sweet-milk-soup-%D0%BC%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B9/">Milk Soup</a></p>
                        <p><a rel="noreferrer" target="_blank" href="https://www.howmanypeopleareinspacerightnow.com/">People in Space</a></p>
                    </ul>
                </div>
            </nav>
            <hr id="footerLine"></hr>
            <h4 id="copyright">&copy; School Potato 2021<br></br>National Weather Service API found at <a href="https://www.weather.gov/documentation/services-web-api">weather.gov</a></h4>
        </div>
    )
}

export default Footer
