import './scss/Button.scss'

function Button({ children, press }) {
    return (
        <div className="button" onClick={press}>{children}</div>
    )
}

export default Button