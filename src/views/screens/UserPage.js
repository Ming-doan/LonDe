import './scss/Frame.scss'
import UnitCard from '../components/UnitCard'
import { BsCoin } from 'react-icons/bs';
import { GiElectric } from 'react-icons/gi';
import Spacer from '../components/Spacer';

function UserPage() {
    return (
        <div className="container">

            <div className='container-flex'>
                <div className='userinfo'>
                    <img src='' className='userinfo-avatar' alt=''></img>
                    <img src='' className='userinfo-avatar' alt=''></img>
                </div>
                <UnitCard icon={<BsCoin></BsCoin>} title={"Coin"} amount={"100"}></UnitCard>
                <Spacer space={20}></Spacer>
                <UnitCard icon={<GiElectric></GiElectric>} title={"Energy"} amount={"50"}></UnitCard>
            </div>

        </div>
    )
}

export default UserPage