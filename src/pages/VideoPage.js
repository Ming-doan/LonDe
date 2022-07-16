import Button from '../views/components/Button';
import NavBar from '../views/components/NavBar2';
import Spacer from '../views/components/Spacer';
import VideoTask from '../views/components/VideoTask';
import Video from '../views/screens/Video';
import './scss/App.css';

function VideoPage() {
    return (
        <div className='frame'>
            <div className='navbar'>
                <NavBar></NavBar>
            </div>
            <div className='content' style={{ marginRight: '300px' }}>
                <Video></Video>
            </div>
            <div className='sidebar'>
                <p>You just spend <b>0.12</b> Coins</p>
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