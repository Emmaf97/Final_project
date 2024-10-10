import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/Card.css'

{/* Creating function that will take in cardData(image, title, text and button if provided. 
    It will only render the amount of cards created on the other pages. E.g. home has 6 cards with links to other pages. ) */ }
function CardLayout({ cardData }) {
  return (
    <Row xs={1} md={2} className="g-1">
      {cardData.map((card, idx) => (
        <Col key={idx} className='card-col'>
          <Card className='bg-dark text-light'>
            <Card.Img variant="top" src={card.image} className='imageresize' />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      {/* Render the button if it's provided */}
                      {card.button && card.button}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardLayout;