import React ,{useState}from 'react';
import {Toast} from "react-bootstrap";
const ProjectToastComponent = (props) => {
    const [showToast, setShowToast] = useState(true);

    const toggleToast = () => setShowToast(!showToast);

    return (
        <div >
            <Toast show={showToast} onClose={toggleToast}>

                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" onClick={toggleToast} className="rounded mr-2" alt="" />
                    <strong className="mr-auto">{props.user}</strong>
                    <small></small>
                </Toast.Header>
                <Toast.Body>{props.title}</Toast.Body>
            </Toast>
        </div>
    );
};

export default ProjectToastComponent;