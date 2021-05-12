import logo from '../images/favicon.png'

const Header = () => {
    return (
        <div>
            <img id="headerLogo" src={logo}></img>
            <h1 id="header">Weather Potato</h1>
        </div>
    )
}

export default Header
