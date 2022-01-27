import { useState } from 'react';
import {Modal, ModalHeader, ModalBody, Button} from 'reactstrap';
import './photo-app.css';
const FormModal = ({onClosingModal}) => {
    const [inputs, setInputs] = useState({});
    const [enable, setEnable] = useState(true);

    const handleChange = (e) => {
        const prop_name = e.target.name;
        const prop_value = e.target.value;
        setInputs( values => ({...values, [prop_name] : prop_value}));
        if(inputs.yourTitle && inputs.url && inputs.thumbnailUrl){
            setEnable(false);
        }
        else {
            setEnable(true);
        }
    }

    const postData = (e) => {
        e.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`, {
            method: 'POST',
            body: JSON.stringify({
                title: inputs.yourTitle,
                url: inputs.url,
                thumbnailUrl:inputs.thumbnailUrl,
                albumId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',   
            }
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
        onClosingModal();
    }

    return(
        <Modal isOpen>
            <ModalHeader className="form-heading">Form</ModalHeader>
            <ModalBody>
                <form onSubmit={postData}>
                    <div className="inputs">
                        <label>Enter a title
                            <input type="text" name="yourTitle" value={inputs.yourTitle || ""} onChange={handleChange}/>
                        </label>
                        <label>Enter a url
                            <input type="text" name="url" value={inputs.url || ""} onChange={handleChange} />
                        </label>
                        <label>Enter a thumbnailUrl
                            <input type="text" name="thumbnailUrl" value={inputs.thumbnailUrl || ""} onChange={handleChange}/>
                        </label>
                    </div>
                    <div className="new-photo-parent">
                        <Button disabled={enable} className="new-photo">Save</Button>
                    </div>
                </form>
            </ModalBody>
        </Modal>
    );
}
export default FormModal;
