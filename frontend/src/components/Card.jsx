import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/Card.css'

{/* CardLayout component:

  - This component accepts an array of card data (cardData) as a prop, where each item contains properties like image, title, text, and an optional button.
  - The cardData array is mapped to dynamically render a set of Bootstrap Cards.
  - Each card will display the provided image, title, text, and button (if the button exists).
  - The component adapts to the number of cards passed from the parent component. For example, the Home page passes 6 cards, each linking to different pages.
  - The layout adjusts responsively, displaying 1 card per row on smaller screens (xs), and 2 cards per row on medium screens (md).
   */ }
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