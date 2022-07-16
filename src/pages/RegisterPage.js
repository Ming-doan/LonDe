import Button from "../views/components/Button"
import './scss/Register.scss'
import Logo from '../assets/images/LOD.png'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from "react";
import { signIn, authChecker } from '../controls/Authenticate'
import { useNavigate } from "react-router-dom"
import { getUser } from '../models/User'

let emailInput = ""
let passwordInput = ""

function RegisterPage() {

    const navigator = useNavigate()

    const [isPassShow, setPassShow] = useState(false)

    function handleShowPassword(state) {
        setPassShow(!state)
    }

    function handleSetEmailInput(newInput) {
        emailInput = newInput
    }

    function handleSetPasswordInput(newInput) {
        passwordInput = newInput
    }

    return (
        <div className="register">
            <div className="register-container">
                <img src={Logo}></img>
                <div className="register-container-input">
                    <input placeholder="Enter your email" className="register-container-input" onChange={(e) => handleSetEmailInput(e.target.value)}></input>
                </div>
                <div className="register-container-input">
                    <input placeholder="Enter your password" className="register-container-input" type={isPassShow ? null : "password"} onChange={(e) => handleSetPasswordInput(e.target.value)}></input>
                    <div className="register-container-input-icon" onClick={() => handleShowPassword(isPassShow)}>
                        {isPassShow ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                    </div>
                </div>

                <Button press={async () => {
                    await signIn(emailInput, passwordInput)
                    navigator('/app')
                }}>Sign In</Button>
            </div>
        </div>
    )
}

export default RegisterPage