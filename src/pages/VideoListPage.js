import './scss/App.css';
import NavBar from '../views/components/NavBar2';
import VideoList from '../views/screens/VideoList';

function VideoListPage() {
    return (
        <div className="frame">
            <div className='navbar'>
                <NavBar></NavBar>
            </div>
            <div className='content'>
                <VideoList></VideoList>
            </div>
        </div>
    )
}

export default VideoListPage