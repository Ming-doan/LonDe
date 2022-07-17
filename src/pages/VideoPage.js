import { useEffect, useState } from 'react';
import Button from '../views/components/Button';
import Coin from '../views/components/Coin';
import NavBar from '../views/components/NavBar2';
import Spacer from '../views/components/Spacer';
import VideoTask from '../views/components/VideoTask';
import Video from '../views/screens/Video';
import './scss/App.css';

function VideoPage() {
    const [isplaying, setPlaying] = useState(false)

    function handleUpdate() {
        setPlaying(!isplaying)
    }

    return (
        <div className='frame'>
            <div className='navbar'>
                <NavBar></NavBar>
            </div>
            <div className='content' style={{ marginRight: '300px' }}>
                <Video detectPlaying={handleUpdate} detectPause={handleUpdate}></Video>
            </div>
            <div className='sidebar'>
                <Coin isplaying={isplaying}></Coin>
                <Spacer space={20}></Spacer>
                <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                    <VideoTask name={"Video 1"} isCompleted></VideoTask>
                    <VideoTask name={"Video 2"} isCompleted></VideoTask>
                    <VideoTask name={"Video 3"} ></VideoTask>
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