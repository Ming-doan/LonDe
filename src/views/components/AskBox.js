import './scss/Askbox.scss'

function AskBox({ heading, subheading, children }) {
    return (
        <div className="askbox">
            <div className="ask-content">
                <div className="heading">{heading}</div>
                <div className="subheading">{subheading}</div>
            </div>
            {children}
        </div>
    )
}

export default AskBox