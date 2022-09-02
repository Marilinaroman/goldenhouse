import BeatLoader  from 'react-spinners/BeatLoader';
import './Loading.css'
const Loading = () => {

    return (
        <div className="container">
            <div className="loader-container">
                <BeatLoader   />
            </div>
        </div>
    )
}

export default Loading