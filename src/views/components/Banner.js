import './scss/Banner.scss'

function Banner({ pretitle, title, subtitle, children }) {
    return (
        <div className="banner">
            <div className="banner-left">
                <div className="pretitle">{pretitle}</div>
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle}</div>
            </div>
            <div className="banner-right">
                {children}
            </div>
        </div>
    )
}

export default Banner