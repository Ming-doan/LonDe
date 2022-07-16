import './scss/Unitcard.scss'

function UnitCard({ icon, title, amount }) {
    return (
        <div className="unitcard">
            <div className='unitcard-icon'>{icon}</div>
            <div className="unitcard-text">
                <div className="unitcard-title">{title}</div>
                <div className="unitcard-amount">{amount}</div>
            </div>
        </div>
    )
}

export default UnitCard