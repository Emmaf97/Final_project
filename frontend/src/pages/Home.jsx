import { Link } from "react-router-dom";
import CardLayout from "../components/Card";
import CarouselHeader from "../components/Carousel";
import homeImage from "/static/images/Logo_v1.png";
function Home() {
    { }
    const homeCardData = [
        { title: 'Threads', text: 'Community Forum page for all your mythical needs', image:  homeImage, button: <Link to="/thread"><button>Forum page</button></Link>  },
        { title: 'Explore', text: 'Discover Locations of Irish myths here.', image: homeImage, button: <Link to="/map"><button>Explore</button></Link>  },
        { title: 'Folklore', text: 'Discover ancient Irish Folklore', image: homeImage, button: <Link to="/folklore"><button>Discover</button></Link>  },
        { title: 'Modern Ireland', text: 'Explore how myths have shaped Modern Ireland.', image: homeImage, button: <Link to="/modireland"><button>Explore More</button></Link>  },
        { title: 'Celtic Gods', text: 'Learn about the ancient pagan gods of Ireland', image: homeImage, button: <Link to="/celticgods"><button>Learn More</button></Link> },
        { title: 'Contact', text: 'Reach out to us.', image: homeImage, button: <Link to="/contact"><button>Contact us</button></Link> }
      ];
  return (
    <>
        <h1>Home Page</h1>
          <p>Testing Route Connections.</p>
          <CarouselHeader></CarouselHeader>
          <div></div>
          <CardLayout cardData={homeCardData} />
    </>
  );
}

export default Home;
