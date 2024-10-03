import NavBar from "./Navbar.jsx"
import FooterTemplate from "./Footer";


const Layout = ({ children }) => {
    return (
      <div>
            <NavBar />
            <main>{children}</main>
            <FooterTemplate/>
      </div>
    );
  };
  
  export default Layout;
