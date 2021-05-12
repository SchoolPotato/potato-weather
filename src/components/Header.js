import logo from '../images/favicon.png'

const Header = () => {
    return (
        <div className="navDiv">
            <nav>
                <div className="navDiv" id="headerDiv">
                    <nav>
                        <img id="headerLogo" src={logo} alt="Hold on..."></img>
                        <h1 id="header">Weather Potato</h1>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default Header
