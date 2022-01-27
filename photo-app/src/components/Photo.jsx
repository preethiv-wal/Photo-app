import {Card, CardBody, CardTitle, Col, CardImg} from 'reactstrap';
const Photo = ({title, thumbnailUrl, onImageClick, url}) => {

    return (
            <Col xs="3">
                    <Card className="photo-card">
                        <CardImg
                            alt="poster-img"
                            src={thumbnailUrl}
                            top 
                            onClick={() => {
                                onImageClick({url});
                            }}
                            width="30%"
                            role="button"
                        />
                        <CardBody className="body"> 
                            <CardTitle tag = "h4">{title}</CardTitle>
                        </CardBody>
                    </Card>
            </Col>
    );
}
export default Photo;
