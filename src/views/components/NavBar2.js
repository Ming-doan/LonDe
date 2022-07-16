import Logo from '../../assets/images/LOD.png'
import './scss/Navbar.scss'
import { MdArrowBack } from 'react-icons/md';

function NavBar() {
    return (
        <div className="navbar">
            <div className="actions" style={{ paddingTop: '0' }}>
                <MdArrowBack style={{ color: '#333' }} className='action' onClick={() => { }}></MdArrowBack>
            </div>
        </div>
    )
}

export default NavBar