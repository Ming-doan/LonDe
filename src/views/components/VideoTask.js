import './scss/Videotask.scss'

function VideoTask({ name, isCompleted }) {
    return (
        <div className="videotask" style={isCompleted ? { backgroundColor: '#333', color: 'white' } : null}>
            <div className="videotask-text">{name}</div>
        </div>
    )
}

export default VideoTask