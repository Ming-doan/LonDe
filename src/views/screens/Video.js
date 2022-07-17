import AskBox from '../components/AskBox'
import Banner from '../components/Banner'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import './scss/Frame.scss'
import './scss/Video.scss'
import { useRef, memo } from 'react'
import YouTube from 'react-youtube'

function Video({ detectPlaying, detectPause, url }) {
    const iframeRef = useRef()

    return (
        <div className="container">

            <Banner subtitle={"Video title"}></Banner>

            <Spacer space={20}></Spacer>

            <div className='embed-video'>

                <YouTube
                    className='embed-video-youtube'
                    videoId={`${url}`}
                    onPlay={() => detectPlaying()}
                    onPause={() => detectPause()}
                ></YouTube>
            </div>

            <Spacer space={20}></Spacer>

            <AskBox heading={"Take note at"}>
                <Button press={() => {
                    console.log(iframeRef.current)
                }}>Add note</Button>
            </AskBox>

        </div>
    )
}

export default memo(Video)