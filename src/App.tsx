//import react from 'react'
import { useInView } from 'react-intersection-observer';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Three from './Pages/Three';
//import CSharp from './Pages/CSharp';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css?ver=1.0.0';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useState} from 'react';
import ContactModal from './Components/ContactModal';

import '@xyflow/react/dist/style.css';
import ColorSelectorNode from './Components/ColorSelectorNode';

const initBgColor = '#c9f1dd';
const snapGrid = [20, 20];
const nodeTypes = {
  selectorNode: ColorSelectorNode,
};
 
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowModal(true);
  };
  interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
  }
  const LazyImage: React.FC<LazyImageProps> = ({ src, alt, ...props }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [loaded, setLoaded] = useState(false);

    return (
      <div ref={ref} className={`fade-in ${inView && loaded ? 'loaded' : ''}`}>
        {inView && <img src={src} alt={alt} onLoad={() => setLoaded(true)} {...props} />}
      </div>
    );
  };

return (
    <div className="App">
    <header>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#"><img className="App-logo" width="200" alt="Cklingdesigns Logo" src={process.env.PUBLIC_URL + '/images/ckling-logo.png'} data-holder-rendered="true" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarHeader" />
        <Navbar.Collapse id="navbarHeader">
          <div className="w-100 d-flex flex-column ">
            {/* First row of links */}
            <Nav className="me-auto">
              <Nav.Link href="https://x.com/CoreyKling95639" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i> Twitter</Nav.Link>
              <Nav.Link href="https://www.facebook.com/corey.kling.9" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i> Facebook</Nav.Link>
              <Nav.Link href="https://www.instagram.com/klincl01/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i> Instagram</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/corey-kling-97468546/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> Linkedin</Nav.Link>
              <Nav.Link href="https://github.com/cklingdesigns" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> GitHub</Nav.Link>
              <Nav.Link href="#" onClick={handleShow}><i className="fas fa-envelope"></i> Contact</Nav.Link>
            </Nav>
            {/* Second row of links */}
            <Nav className="justify-content-left m-0">
              <Nav.Link className="LowerNav" as={Link} to="/">Home</Nav.Link>
              <Nav.Link className="LowerNav" as={Link} to="/Three">Three.js</Nav.Link>
               {/*<Nav.Link className="LowerNav" as={Link} to="/CSharp">C#</Nav.Link>*/}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Three" element={<Three />} />
        {/*<Route path="/cklingdesigns-app/CSharp" element={<CSharp />} />*/}
      </Routes>
    <ContactModal show={showModal} handleClose={() => setShowModal(false)} />

    <footer className="text-muted">
      <div className="Wave">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="FooterContent row">

        <div className="col-sm-6 TextRight">
          <a href={process.env.PUBLIC_URL + '/images/ckling-logo.png'} className="NoArrow"><LazyImage alt="Cklingdesigns Logo" src={process.env.PUBLIC_URL + '/images/ckling-logo.png'} data-holder-rendered="true" /></a>
        </div>
        <div className="col-sm-6 TextLeft">
          <div className="col-sm-12 FooterLinks">
            <p>
              <a href="https://x.com/CoreyKling95639" target="_blank"><i className="fab fa-twitter"></i> Twitter</a>
              <a href="https://www.facebook.com/corey.kling.9" target="_blank"><i className="fab fa-facebook"></i> Facebook</a>
              <a href="https://www.instagram.com/klincl01/" target="_blank"><i className="fab fa-instagram"></i> Instagram</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/corey-kling-97468546/" target="_blank"><i className="fab fa-linkedin"></i> Linkedin</a>
              <a href="https://github.com/cklingdesigns" target="_blank"><i className="fab fa-github"></i> GitHub</a>
              <a href="#" onClick={handleShow}><i className="fas fa-envelope"></i> Contact</a>
            </p>
          </div>
          <p className="Copyright">Copyright © 2025 Cklingdesigns</p>
          <p className="BackToTop">
            <a href="#">Back to top</a>
          </p>
        </div>
      </div>
    </footer>
    </div>

  );
}

export default App;
