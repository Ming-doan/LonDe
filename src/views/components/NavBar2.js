import Logo from '../../assets/images/LOD.png'
import './scss/Navbar.scss'
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigator = useNavigate()
    return (
        <div className="navbar">
            <div className="actions" style={{ paddingTop: '0' }}>
                <MdArrowBack style={{ color: '#333' }} className='action' onClick={() => { navigator(-1) }}></MdArrowBack>
            </div>
        </div>
    )
}

export default NavBar