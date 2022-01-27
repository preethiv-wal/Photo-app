import {ListGroup} from 'reactstrap';
import ListGroup1 from "./ListGroup1";
import './photo-app.css';
import useFetch from "./useFetch";

const Home = () => {
    const [albums] = useFetch("https://jsonplaceholder.typicode.com/users/1/albums");
    
    return ( 
        <ListGroup className="list-group">
            {albums.map(({title,id}) => {
                return (
                    <ListGroup1 
                        title ={title}
                        id = {id}
                    ></ListGroup1>
                );
            })}
        </ListGroup>
    );
}
export default Home;
