import Button from '../components/Button'
import Spacer from '../components/Spacer'
import './scss/Frame.scss'

function DiscoverPage() {
    return (
        <div className="container">
            <div className='container-flex'>
                <input className='input' placeholder='Type what you want to learn'></input>
                <Button press={() => { }}>Build</Button>
            </div>

            <Spacer space={20}></Spacer>



        </div>
    )
}

export default DiscoverPage