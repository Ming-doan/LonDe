import UnitCard from '../components/UnitCard'
import Banner from '../components/Banner'
import './scss/Frame.scss'
import { GiElectric } from 'react-icons/gi';

function VoucherPage() {
    return (
        <div className="container">
            <Banner title={"Get your rewards"}>
                <UnitCard icon={<GiElectric></GiElectric>} title={"Energy"} amount={"50"}></UnitCard>
            </Banner>
        </div>
    )
}

export default VoucherPage