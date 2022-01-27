import { useState, useEffect } from 'react';
import {Container, Row, Spinner} from 'reactstrap';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import Photo from './Photo';
import ImagePreview from './ImagePreview';
import FormModal from './FormModal';
import { useParams } from 'react-router';
import './photo-app.css';
const Photos = ({id1}) => {
    const [posters, setPosters] = useState([]);
    const [pages, setPages] = useState(1);
    const [isPending, setIsPending] = useState(true);
    const [isModalOpen, setIsModalOpen]=useState(false);
    const [currentImagePreview, setCurrentImagePreview]=useState(null);
    const [isFormOpenModal, setIsFormOpenModal] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        setIsPending(true);
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        .then((response) => response.json())
        .then((posters) => {
            setPosters(posters)
            setIsPending(false);
        });
    },[id]);

    const showImagePreview = (image) => {
        setIsModalOpen(true);
        setCurrentImagePreview(image);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImagePreview(null);
    }

    const handleFormModal = (p) => {
        setIsFormOpenModal(p);
    }

    return(
        <>
        <Container>
            <div className="new-photo-parent">
                <button className="new-photo" onClick={()=> handleFormModal(true)}>New Photo </button>
            </div>
            {isFormOpenModal && (
                <FormModal
                    onClosingModal={()=>handleFormModal(false)}
                />
            )}
            {isModalOpen && (
                <ImagePreview
                    url={currentImagePreview.url}
                    onClosingModal={closeModal}
                />
            )}
            <Row xs="3">
                {isPending ?
                    (<Spinner>
                        Loading...
                    </Spinner>
                    ):
                    posters.map(({thumbnailUrl, title, onImageClick, url}) => {
                        return (
                            <Photo 
                                title = {title} 
                                thumbnailUrl={thumbnailUrl}
                                url={url}
                                onImageClick={()=>{
                                    showImagePreview({url})
                                }}
                            ></Photo>
                        );
                    })
                }
            </Row>
        </Container> 
        <div className="pagination">
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink
                        onClick={() => setPages(pages-1)}
                        href="#"
                    >Previous</PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink
                        href="#"
                    >
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink
                        href="#"
                        onClick = {() => setPages(2)}>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink
                        href="#"
                        onClick = {() => setPages(3)}>
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink
                        href="#"
                        onClick = {() => setPages(4)}>
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink
                        href="#"
                        onClick = {() => setPages(5)}>
                        5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink
                        href="#"
                        onClick = {() => {
                            setPages(pages+1)
                        }}>
                        next
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        </div>
    </>
    )
}
export default Photos;

