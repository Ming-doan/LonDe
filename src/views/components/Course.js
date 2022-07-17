import './scss/Course.scss'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { setCurrentList } from '../../controls/CurrentList'

function Course({ title, courses }) {

    const navigator = useNavigate()

    return (
        <div className="course">
            <iframe className='course-thumb' width="560" height="315" src={`https://www.youtube.com/embed/${courses[0]}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className='course-thumb' width="560" height="315" src={`https://www.youtube.com/embed/${courses[1]}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className='course-thumb' width="560" height="315" src={`https://www.youtube.com/embed/${courses[2]}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className='course-thumb' width="560" height="315" src={`https://www.youtube.com/embed/${courses[3]}`} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="course-title">{title}</div>
            <div className="course-nav">
                <Button press={() => {
                    setCurrentList(courses)
                    navigator('/list')
                }}>View more</Button>
            </div>
        </div>
    )
}

export default Course