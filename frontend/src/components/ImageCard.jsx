import { Card } from "react-bootstrap";


function ImageCard({image, name}) {
    return (
        <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: '20px' } }>
            <Card.Img variant="top" src={image} alt={`${name} Image`} style={{ width: '100%' }} />
        <Card.Body>
                <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    );
    }
    
    export default ImageCard;