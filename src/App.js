//import react from 'react'
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useState, useEffect, useCallback } from 'react';
import ContactModal from './ContactModal';
import {
  ImageSlideshowHobbies,
  ImageSlideshowFunDesigns,
  ImageSlideshowCoding,
  ImageSlideshowWildSide,
  ImageSlideshowMarketing,
  ImageSlideshowSilly,
  ImageSlideshowWoodworking,
  ImageSlideshowHolidayFun,
} from './ImageSlideshowOnHover';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ColorSelectorNode from './ColorSelectorNode';
import AnimatedCode from './AnimatedCode';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

const icons = [
  { type: "icon", className: "fa-brands fa-php" },
  { type: "icon", className: "fa-brands fa-js" },
  { type: "icon", className: "fa-brands fa-html5" },
  { type: "text", label: "ADA" },  
  { type: "icon", className: "fa-brands fa-css3-alt" },
  { type: "icon", className: "fa-brands fa-sass" },
  { type: "text", label: "JSON" },
  { type: "icon", className: "fa-brands fa-wordpress" },
  { type: "icon", className: "fa-brands fa-react" },
  { type: "icon", className: "fa-brands fa-bootstrap" },
  { type: "icon", className: "fa-brands fa-github" },
  { type: "text", label: "AJAX" },
  { type: "icon", className: "fa-brands fa-microsoft" },
  { type: "icon", className: "fa-brands fa-node-js" },
  { type: "icon", className: "fa-brands fa-laravel" },
  { type: "icon", className: "fa-solid fa-database" }
];
export function ImageScroll() {
  return (
    <div className="IconScrollContainer">
      {icons.map((item, index) =>
        item.type === "icon" ? (
          <i key={index} className={`Icon ${item.className}`}></i>
        ) : (
          <span key={index} className="IconText">
            {item.label}
          </span>
        )
      )}
    </div>
  );
}
const initBgColor = '#c9f1dd';

const snapGrid = [20, 20];
const nodeTypes = {
  selectorNode: ColorSelectorNode,
};
 
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };
 
const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);
 
  useEffect(() => {
    const onChange = (event) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== '2') {
            return node;
          }
 
          const color = event.target.value;
 
          setBgColor(color);
 
          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        }),
      );
    };
 
    setNodes([
      {
        id: '1',
        type: 'input',
        data: { label: 'An input node' },
        position: { x: 0, y: 50 },
        sourcePosition: 'right',
      },
      {
        id: '2',
        type: 'selectorNode',
        data: { onChange: onChange, color: initBgColor },
        position: { x: 300, y: 50 },
      },
      {
        id: '3',
        type: 'output',
        data: { label: 'Output A' },
        position: { x: 650, y: 25 },
        targetPosition: 'left',
      },
      {
        id: '4',
        type: 'output',
        data: { label: 'Output B' },
        position: { x: 650, y: 100 },
        targetPosition: 'left',
      },
    ]);
 
    setEdges([
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
      },
      {
        id: 'e2a-3',
        source: '2',
        target: '3',
        animated: true,
      },
      {
        id: 'e2b-4',
        source: '2',
        target: '4',
        animated: true,
      },
    ]);
  }, []);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [],
  );
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      style={{ background: bgColor }}
      nodeTypes={nodeTypes}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultViewport={defaultViewport}
      fitView
      attributionPosition="bottom-left"
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'selectorNode') return bgColor;
          if (n.type === 'output') return '#ff0072';
        }}
        nodeColor={(n) => {
          if (n.type === 'selectorNode') return bgColor;
          return '#fff';
        }}
      />
      <Controls />
    </ReactFlow>
  );
};

function App() {
  const LazyImage = ({ src, alt, ...props }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
      <div ref={ref} style={{ minHeight: '200px' }}>
        {inView && <img src={src} alt={alt} {...props} />}
      </div>
    );
  };
  const [showModal, setShowModal] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="App">
    <header>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#"><img className="App-logo" width="200" alt="Cklingdesigns Logo" src={process.env.PUBLIC_URL + '/images/ckling-logo.png'} data-holder-rendered="true" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarHeader" />
        <Navbar.Collapse id="navbarHeader">
          <Nav className="me-auto">
            <Nav.Link href="https://x.com/CoreyKling95639" target="_blank"><i className="fab fa-twitter"></i> Twitter</Nav.Link>
            <Nav.Link href="https://www.facebook.com/corey.kling.9" target="_blank"><i className="fab fa-facebook"></i> Facebook</Nav.Link>
            <Nav.Link href="https://www.instagram.com/klincl01/" target="_blank"><i className="fab fa-instagram"></i> Instagram</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/corey-kling-97468546/" target="_blank"><i className="fab fa-linkedin"></i> Linkedin</Nav.Link>
            <Nav.Link href="https://github.com/cklingdesigns" target="_blank"><i className="fab fa-github"></i> GitHub</Nav.Link>
            <Nav.Link href="#" onClick={handleShow}><i className="fas fa-envelope"></i> Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="loading-text">Kling's Creative Portfolio</h1>
          <p className="lead text-muted">A Fusion of Art, Design & Innovation</p>
          <hr></hr>
          <div className="row">
            <p className="col-sm-6 kling-cartoon"><img width="300" src={process.env.PUBLIC_URL + "/images/kling-cartoon.png"} alt="Corey Kling - Full Stack Developer" /></p>
            <p class="col-sm-6 intro-text">
              Results-driven Full Stack Developer with a strong foundation in web development, SEO, social media management, and multimedia integration. Adept at designing and deploying custom, responsive websites with afocus on accessibility and performance. Possesses a deep understanding of modern programming languages, database design, and digital marketing strategies. Proven ability to translate complex requirements into functional, user-friendly solutions while aligning with organizational goals.
            </p>
          </div>
        </div>

      </section>
      <ParallaxProvider>
      <div className="AnimatedCodeContainer">
          <AnimatedCode />
      </div>
      <div className="IconScrollContainer">
          <ImageScroll />
      </div>

      <div className="FortwayneschoolsContainer">
        <div>
          <h2>Fort Wayne Schools</h2>
          <p><a href="https://www.fortwayneschools.org/" target="_blank">Current Website</a></p>
          <LazyImage  src={process.env.PUBLIC_URL + "/images/coding/fortwayneschools.jpg"} loading="lazy" alt="2022 Fortwayneschools.org" />
        </div>
        <div>
          <h2>2019 Fortwayneschools.org</h2>
          <p><a href="https://web.archive.org/web/20190630114014/https://www.fortwayneschools.org/" target="_blank">2019 Wayback Machine</a></p>
          <LazyImage  src={process.env.PUBLIC_URL + "/images/coding/2019-fortwayneschools.jpg"} alt="2019 Fortwayneschools.org" />
        </div>
        <div>
          <h2>2017 Fortwayneschools.org</h2>
          <p><a href="https://web.archive.org/web/20170625210912/https://www.fortwayneschools.org/" target="_blank">2017 Wayback Machine</a></p>
          <LazyImage  src={process.env.PUBLIC_URL + "/images/coding/2017-fortwayneschools.jpg"} alt="2017 Fortwayneschools.org" />
        </div>
        <div>
          <h2>2016 Fortwayneschools.org</h2>
          <p><a href="https://web.archive.org/web/20160503211228/http://www.fortwayneschools.org/" target="_blank">2016 Wayback Machine</a></p>
          <img src={process.env.PUBLIC_URL + "/images/coding/2016-fortwayneschools.jpg"} alt="2016 Fortwayneschools.org" />
        </div>
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                  <ImageSlideshowCoding />
                  <div className="card-body">
                  <p className="card-text">Programming/Web Development</p>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 VerticalLine"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowMarketing />
                <div className="card-body">
                  <p className="card-text">Marketing/Design</p>

                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 VerticalLine"></div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowHobbies />
                <div className="card-body">
                  <p className="card-text">Hobbies/Interests</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowWildSide />
                <div className="card-body">
                  <p className="card-text">Wild Side</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowFunDesigns />
                <div className="card-body">
                  <p className="card-text">Fun Designs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 VerticalLine"></div>
            <div className="col-md-4 VerticalLine"></div>
            <div className="col-md-4 VerticalLine"></div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowHolidayFun />
                <div className="card-body">
                  <p className="card-text">Holiday Fun</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowSilly />
                <div className="card-body">
                  <p className="card-text">My Silly Side</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowWoodworking />
                <div className="card-body">
                  <p className="card-text">Woodworking Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
    </main>
    <footer className="text-muted">
      <div className="Wave">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="FooterContent row">

        <div className="col-sm-6 TextRight">
          <LazyImage  alt="Cklingdesigns Logo" src={process.env.PUBLIC_URL + '/images/ckling-logo.png'} data-holder-rendered="true" />
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
    <ContactModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>

  );
}

export default App;
