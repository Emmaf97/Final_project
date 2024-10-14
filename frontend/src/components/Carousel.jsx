import Carousel from "react-bootstrap/Carousel";
import img1 from "/static/images/Halloween.png";
import img2 from "/static/images/Dracula.png";
import img3 from "/static/images/Dullahan.png";
import  "../styles/Carousel.css"

function CarouselHeader() {
  return (
    <Carousel fade>
      <Carousel.Item className="Carousel">
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ height: "50vh", objectFit: "contain" }}
        />

        <Carousel.Caption>
          <h3>Halloween</h3>
          <p className="font-weight-bold">
            Halloween began in ancient Ireland, celebrating,
          </p>
          <p>the thinning veil between worlds and the magic of the unseen.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carousel">
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
          style={{ height: "50vh", objectFit: "contain" }}
        />

        <Carousel.Caption>
          <h3>Dracula</h3>
          <p>
          Bram Stoker, an Irishman, wrote Dracula, drawing inspiration from Irish and international myths and legends to create the iconic creature of the night</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carousel">
        <img
          className="d-block w-100"
          src={img3}
          alt="First slide"
          style={{ height: "50vh", width: "90%", objectFit: "contain" }}
        />

        <Carousel.Caption>
          <h3>Headless Horseman (Dullahan)</h3>
          <p>
          The Dullahan, a headless rider on a black horse carrying its head under one arm, is a harbinger of death in Irish folklore, signaling that a soul has departed.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeader;
