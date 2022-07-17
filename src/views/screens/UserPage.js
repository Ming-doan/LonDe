import './scss/Frame.scss'
import './scss/Userpage.scss'
import UnitCard from '../components/UnitCard'
import { BsCoin } from 'react-icons/bs';
import { GiElectric } from 'react-icons/gi';
import Spacer from '../components/Spacer';
import AskBox from '../components/AskBox';
import Switch from '../components/Switch';
import Course from '../components/Course';
import { getUser } from '../../models/User'
import Button from '../components/Button';
import { useNavigate } from "react-router-dom"
import { logOut } from '../../controls/Authenticate'

function UserPage() {

    const user = getUser()
    const navigator = useNavigate()

    return (
        <div className="container">

            <div className='container-flex'>
                <div className='userinfo'>
                    <img src={user.photoUrl} className='userinfo-avatar' alt=''></img>
                    <div className='userinfo-content'>
                        <div className='userinfo-content-name'>{user.name}</div>
                        <div className='userinfo-content-email'>{user.email}</div>
                    </div>
                </div>
                <UnitCard icon={<BsCoin></BsCoin>} title={"Coin"} amount={user.coin}></UnitCard>
                <Spacer space={20}></Spacer>
                <UnitCard icon={<GiElectric></GiElectric>} title={"Energy"} amount={user.energy}></UnitCard>
            </div>

            <Spacer space={40}></Spacer>

            <AskBox heading={"Try dark mode now"}>
                <Switch></Switch>
            </AskBox>

            <Spacer space={40}></Spacer>

            <div className='category'>Your courses</div>

            <div className='video-container'>
                <Course title={"Illustrtor"} courses={['aQMopS2idcc', 'SFh7OvTT8ZM', 'bKD2m33LqXs', 'lnmpiWPaS8U']}></Course>
                <Course title={"Flutter"} courses={['1ukSR1GRtMU', 'bKueYVtV0eA', 'FLQ-Vhw1NYQ', 'TSIhiZ5jRB0']}></Course>
            </div>

            <Spacer space={80}></Spacer>

            <AskBox heading={"Sign out"}>
                <Button press={async () => {
                    await logOut()
                    navigator('/')
                }}>Sign out</Button>
            </AskBox>


        </div>
    )
}

export default UserPage