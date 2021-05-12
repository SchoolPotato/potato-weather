import logo from '../images/logo.png'

const Header = () => {
    return (
        <div className="navDiv">
            <nav>
                <img id="headerLogo" src={logo} alt="Hold on..."></img>
                <h1 id="header">Weather Potato</h1>
                <hr id="headerLine"></hr>
            </nav>
        </div>
    )
}

export default Header
