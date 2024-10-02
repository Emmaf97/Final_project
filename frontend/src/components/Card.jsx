import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import reactLogo from '../assets/react.svg';
import '../styles/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function CardLayout() {
  return (
    <Row xs={1} md={2} className="g-1">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx} className='card-col'>
          <Card className='bg-dark text-light'>
            <Card.Img variant="top" src={reactLogo} className='imageresize' />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardLayout;