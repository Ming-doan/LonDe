import AskBox from '../components/AskBox'
import Banner from '../components/Banner'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import './scss/Frame.scss'
import './scss/Video.scss'

function Video() {
    return (
        <div className="container">

            <Banner subtitle={"Video title"}></Banner>

            <Spacer space={20}></Spacer>

            <div className='embed-video'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zRdHnseM0PE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <Spacer space={20}></Spacer>

            <AskBox heading={"Take note at"}>
                <Button press={() => { }}>Add note</Button>
            </AskBox>

        </div>
    )
}

export default Video