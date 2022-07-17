import { useState } from 'react'
import Button from '../components/Button'
import Course from '../components/Course'
import Spacer from '../components/Spacer'
import './scss/Frame.scss'

function DiscoverPage() {
    const [show, setSohow] = useState(false)

    return (
        <div className="container">
            <div className='container-flex'>
                <input className='input' placeholder='Type what you want to learn'></input>
                <Button press={() => { setSohow(!show) }}>Build</Button>
            </div>

            <Spacer space={20}></Spacer>

            {show ? <div className='video-container'>
                <Course title={"Flutter"} courses={['1ukSR1GRtMU', 'bKueYVtV0eA', 'FLQ-Vhw1NYQ', 'TSIhiZ5jRB0']}></Course>
                <Course title={"Flutter"} courses={['duvldqNOcTk', 'iLBYhZcLPrI', 'FLNsVWkeE', 'O_HyaCSL-I8']}></Course>

            </div> : null}
        </div>
    )
}

export default DiscoverPage