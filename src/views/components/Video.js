import './scss/Video.scss'
import { GrFormAdd } from 'react-icons/gr'

function Video({ title, des, tag }) {
    return (
        <div className="video">
            <div className="video-thumb"></div>
            <div className="video-title">{title}</div>
            <div className="video-description">{des}</div>
            <div className="video-nav">
                <div className="video-tag">{tag}</div>
                <div className="video-options">
                    <GrFormAdd></GrFormAdd>
                </div>
            </div>
        </div>
    )
}

export default Video