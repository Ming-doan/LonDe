import Logo from '../../assets/images/LOD.png'
import './scss/Navbar.scss'
import { AiOutlineHome, AiOutlineCompass, AiOutlineUser, AiOutlineGift } from 'react-icons/ai';

function NavBar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt=""></img>
            </div>
            <div className="actions">
                <AiOutlineHome className='action'></AiOutlineHome>
                <AiOutlineCompass className='action'></AiOutlineCompass>
                <AiOutlineUser className='action'></AiOutlineUser>
                <AiOutlineGift className='action'></AiOutlineGift>
            </div>
        </div>
    )
}

export default NavBar