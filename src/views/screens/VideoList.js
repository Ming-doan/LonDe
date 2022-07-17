import Banner from '../components/Banner'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import Video from '../components/Video'
import './scss/Frame.scss'
import { useNavigate } from 'react-router-dom'
import { setCurrentVideo } from '../../controls/CurrentVideo'

function VideoList({ list }) {

    const navigator = useNavigate()
    return (
        <div className="container">

            <Banner title={"Custom Roadmap"} subtitle={"Micropaymeny ⚫ 12 Coins"}>
                <Button press={() => { }}>Learn</Button>
            </Banner>

            <Spacer space={80}></Spacer>

            <div className='video-container'>
                {
                    list.map((item, index) => {
                        return <Video title={`Course ${index}`} des={"Description"} tag={"Tag"} link={item} press={() => {
                            setCurrentVideo(item)
                            navigator('/video')
                        }}></Video>
                    })
                }
            </div>

        </div>
    )
}

export default VideoList