import './scss/Frame.scss'
import './scss/Userpage.scss'
import UnitCard from '../components/UnitCard'
import { BsCoin } from 'react-icons/bs';
import { GiElectric } from 'react-icons/gi';
import Spacer from '../components/Spacer';
import AskBox from '../components/AskBox';
import Switch from '../components/Switch';
import Course from '../components/Course';

function UserPage() {
    return (
        <div className="container">

            <div className='container-flex'>
                <div className='userinfo'>
                    <img src='https://cdn.baogiaothong.vn/upload/images/2020-4/article_img/2020-10-26/tranducbo03-88ff3fc1-1603704911-width720height960-auto-crop.jpg' className='userinfo-avatar' alt=''></img>
                    <div className='userinfo-content'>
                        <div className='userinfo-content-name'>Tên người dùng</div>
                        <div className='userinfo-content-email'>email người dùng</div>
                    </div>
                </div>
                <UnitCard icon={<BsCoin></BsCoin>} title={"Coin"} amount={"100"}></UnitCard>
                <Spacer space={20}></Spacer>
                <UnitCard icon={<GiElectric></GiElectric>} title={"Energy"} amount={"50"}></UnitCard>
            </div>

            <Spacer space={40}></Spacer>

            <AskBox heading={"Try dark mode now"}>
                <Switch></Switch>
            </AskBox>

            <Spacer space={40}></Spacer>

            <div className='category'>Your courses</div>

            <div className='video-container'>
                <Course title={"Custom 1"}></Course>
                <Course title={"Custom 2"}></Course>
                <Course title={"Custom 3"}></Course>
            </div>

        </div>
    )
}

export default UserPage