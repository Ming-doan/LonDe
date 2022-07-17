import './scss/Video.scss'
import { GrFormAdd } from 'react-icons/gr'

function Video({ title, des, tag, link, press }) {
    return (
        <div className="video" onClick={press}>
            <iframe className='video-thumb' width="560" height="315" src={`https://www.youtube.com/embed/${link}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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