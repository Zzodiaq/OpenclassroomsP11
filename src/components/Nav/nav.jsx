import logo from '../../images/argentBankLogo.png';
import userIcon from '../../images/user.png';
import '../../styles/nav-style/nav.css';
import { NavLink } from 'react-router-dom'
function navBar () {

    return (
        <header className='head'>
            <NavLink className='link' to={'/'}>
                <img className='header__logo' src={logo} alt='error'/>
            </NavLink>
            <nav className='nav'>
                <img className='header__logo' src={userIcon} alt='error'/>
                <NavLink className='link' to={'/signIn'}>Sign In</NavLink>
            </nav>
        </header>
    ) 
}

export default navBar