import './scss/Frame.scss'
import AskBox from '../components/AskBox'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import Banner from '../components/Banner'
import { FiSearch } from 'react-icons/fi';
import Video from '../components/Video'
import { getUser } from '../../models/User'
import { Link } from 'react-router-dom'

function HomePage() {

    return (
        <div className="container">

            <Banner pretitle={`Welcome ${getUser().name} 👋`} title={"LonDe"} subtitle={"From Zero to Hero"}>
                <FiSearch></FiSearch>
            </Banner>

            <Spacer space={40}></Spacer>

            <AskBox heading={"Take the survey now!"} subheading={"Take this survey to enhance your experiment"}>
                <Link to='/survey'>
                    <Button press={() => { }}> Take now</Button>
                </Link>
            </AskBox>

            <Spacer space={40}></Spacer>

            <div className='category'>You may interested</div>
            <div className='video-container'>
                <Video title={"Làm quen với Adobe Illustrator 2020"} des={"THAM GIA CỘNG ĐỒNG CÙNG UYÊN NHÉ!"} tag={"Illustrator"} link={'aQMopS2idcc'} press={() => { console.log(123) }}></Video>
                <Video title={"How to Shoot CINEMATIC VIDEO with your iPhone"} des={"In this video I will show you how to shoot cinematic video with your iPhone."} tag={"Film"} link={'SPrFjbadxI4'} press={() => { console.log(123) }}></Video>
                <Video title={"Create the \Instagram Skin\" in Photoshop!"} des={"Learn to Create the Popular Instagram Style Skin Retouching with Photoshop!"} tag={"Color Grading"} link={'f2bQ3I5tnoc'} press={() => { console.log(123) }}></Video>
            </div>
        </div>
    )
}

export default HomePage