import Logo from "./images/logo.svg"

function Header () {
    return(
        <header>
            <img src={Logo} alt="logo" />
        </header>
    )
}

export default Header;