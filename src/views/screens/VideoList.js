import Banner from '../components/Banner'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import Video from '../components/Video'
import './scss/Frame.scss'

function VideoList() {
    return (
        <div className="container">

            <Banner title={"Custom Roadmap"} subtitle={"Micropaymeny ⚫ 12 Coins"}>
                <Button press={() => { }}>Learn</Button>
            </Banner>

            <Spacer space={80}></Spacer>

            <div className='video-container'>
                <Video title={"Video 1"} des={"Description"} tag={"Tag"} press={() => { }}></Video>
                <Video title={"Video 1"} des={"Description"} tag={"Tag"} press={() => { }}></Video>
                <Video title={"Video 1"} des={"Description"} tag={"Tag"} press={() => { }}></Video>
                <Video title={"Video 1"} des={"Description"} tag={"Tag"} press={() => { }}></Video>
            </div>

        </div>
    )
}

export default VideoList