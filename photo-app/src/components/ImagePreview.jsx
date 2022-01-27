import {Modal, ModalBody, ModalFooter, Button} from 'reactstrap';
const ImagePreview = ({url, onClosingModal}) => {
    return(
        <Modal isOpen size="lg" fullscreen="lg">
                <ModalBody>
                    <img 
                        src={url}
                        alt="clicked-img"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"
                            onClick={onClosingModal}
                    >
                        Close
                    </Button>
                </ModalFooter>
        </Modal>
    );
}
export default ImagePreview;
