import './scss/Frame.scss'
import UnitCard from '../components/UnitCard'
import { BsCoin } from 'react-icons/bs';
import { GiElectric } from 'react-icons/gi';

function UserPage() {
    return (
        <div className="container">

            <div className='container-flex'>
                <UnitCard icon={<BsCoin></BsCoin>} title={"Coin"} amount={"100"}></UnitCard>
                <UnitCard icon={<GiElectric></GiElectric>} title={"Energy"} amount={"50"}></UnitCard>
            </div>

        </div>
    )
}

export default UserPage