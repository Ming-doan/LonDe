import { useEffect, useState } from 'react';
import Button from '../views/components/Button';
import Coin from '../views/components/Coin';
import NavBar from '../views/components/NavBar2';
import Spacer from '../views/components/Spacer';
import VideoTask from '../views/components/VideoTask';
import Video from '../views/screens/Video';
import './scss/App.css';
import { getCurrentVideo } from '../controls/CurrentVideo'
import { getCurrentList } from '../controls/CurrentList'

function VideoPage() {
    const [isplaying, setPlaying] = useState(false)

    const video = getCurrentVideo()
    const videoList = getCurrentList()

    function handleUpdate() {
        setPlaying(!isplaying)
    }

    return (
        <div className='frame'>
            <div className='navbar'>
                <NavBar></NavBar>
            </div>
            <div className='content' style={{ marginRight: '300px' }}>
                <Video detectPlaying={handleUpdate} detectPause={handleUpdate} url={video}></Video>
            </div>
            <div className='sidebar'>
                <Coin isplaying={isplaying}></Coin>
                <Spacer space={20}></Spacer>
                <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                    {videoList.map((list, index) => {
                        return <VideoTask name={`Video ${index + 1}`} ></VideoTask>
                    })}
                </div>
                <div className='container-flex'>
                    <Button press={() => { }}>Previous</Button>
                    <Spacer space={10}></Spacer>
                    <Button press={() => { }}>Next</Button>
                </div>
            </div>
        </div >
    )
}

export default VideoPage