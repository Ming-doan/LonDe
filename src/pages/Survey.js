import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSurveyData, appendResult, getResult } from '../models/SurveyData'
import './scss/Survey.scss'

function Survey() {
    const [index, setIndex] = useState(0)
    const navigator = useNavigate()

    const survey = getSurveyData()

    function handleAddValue(option) {
        if (index < survey.length - 1) {
            appendResult(survey[index].title, option)
            setIndex(index + 1)
        } else {
            appendResult(survey[index].title, option)
            console.log(getResult())
            navigator(-1)

        }
    }

    return (
        <div className="survey">
            <div className="survey-title">{survey[index].title}</div>
            <div className="survey-content">
                {
                    survey[index].options.map((option) => {
                        return <div className='survey-option' onClick={() => handleAddValue(option)}>{option}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Survey