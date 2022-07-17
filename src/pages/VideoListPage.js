import './scss/App.css';
import NavBar from '../views/components/NavBar2';
import VideoList from '../views/screens/VideoList';
import { getCurrentList } from '../controls/CurrentList';

function VideoListPage() {

    const list = getCurrentList()
    return (
        <div className="frame">
            <div className='navbar'>
                <NavBar></NavBar>
            </div>
            <div className='content'>
                <VideoList list={list}></VideoList>
            </div>
        </div>
    )
}

export default VideoListPage