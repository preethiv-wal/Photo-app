import { ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';
import './photo-app.css';

const ListGroup1 = ({title,id}) => {

    return(

        <ListGroupItem 
            action
            href="#"
            tag="a"
        >
            <Link to = {`/album/${id}`} className="link" style={{color:"black"}}>{title}</Link>
        </ListGroupItem>
    )
}
export default ListGroup1;
