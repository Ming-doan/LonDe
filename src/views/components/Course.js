import './scss/Course.scss'
import Button from './Button'

function Course({ title }) {
    return (
        <div className="course">
            <div className="course-thumb"></div>
            <div className="course-thumb"></div>
            <div className="course-thumb"></div>
            <div className="course-thumb"></div>
            <div className="course-title">{title}</div>
            <div className="course-nav">
                <Button press={() => { }}>View more</Button>
            </div>
        </div>
    )
}

export default Course