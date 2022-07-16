import './scss/Frame.scss'
import AskBox from '../components/AskBox'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import Banner from '../components/Banner'
import { FiSearch } from 'react-icons/fi';
import Video from '../components/Video'

function HomePage() {
    return (
        <div className="container">

            <Banner pretitle={"Hello user 👋"} title={"LonDe"} subtitle={"From Zero to Hero"}>
                <FiSearch></FiSearch>
            </Banner>

            <Spacer space={40}></Spacer>

            <AskBox heading={"Take the survey now!"} subheading={"Take this survey to enhance your experiment"}>
                <Button press={() => { }}> Take now</Button>
            </AskBox>

            <Spacer space={40}></Spacer>

            <div className='category'>Recommend for you</div>
            <div className='video-container'>
                <Video title={"Video name"} des={"Description"} tag={"Tag"}></Video>
            </div>
        </div>
    )
}

export default HomePage