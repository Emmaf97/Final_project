import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import img1 from '../images/Dullahan.png';

function ProfilePic() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={3}>
          <Image src={img1} thumbnail roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePic;