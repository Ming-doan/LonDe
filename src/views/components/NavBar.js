import Logo from '../../assets/images/LOD.png'
import './scss/Navbar.scss'
import { AiOutlineHome, AiOutlineCompass, AiOutlineUser, AiOutlineGift } from 'react-icons/ai';

function NavBar({ navigator, index }) {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt=""></img>
            </div>
            <div className="actions">
                <AiOutlineHome style={index == 0 ? { color: '#333' } : null} className='action' onClick={() => navigator(0)}></AiOutlineHome>
                <AiOutlineCompass style={index == 1 ? { color: '#333' } : null} className='action' onClick={() => navigator(1)}></AiOutlineCompass>
                <AiOutlineUser style={index == 2 ? { color: '#333' } : null} className='action' onClick={() => navigator(2)}></AiOutlineUser>
                <AiOutlineGift style={index == 3 ? { color: '#333' } : null} className='action' onClick={() => navigator(3)}></AiOutlineGift>
            </div>
        </div>
    )
}

export default NavBar