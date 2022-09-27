import logo from '../../Images/airbnb-logo.png';
import './Navbar.css'

function Navbar() {
    return (
        <div className='nav-container'>
            <img className='logo-img' src={logo} alt="airbnb-logo"></img>
        </div>
        
    )
}

export default Navbar;