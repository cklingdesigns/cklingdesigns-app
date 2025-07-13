//import react from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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
        <Navbar.Brand href="#"><img className="App-logo" width="200" alt="cklingdesigns Logo" src="/images/ckling-logo.png" data-holder-rendered="true" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarHeader" />
        <Navbar.Collapse id="navbarHeader">
          <Nav className="me-auto">
            <Nav.Link href="https://x.com/CoreyKling95639"><i className="fab fa-twitter"></i> Twitter</Nav.Link>
            <Nav.Link href="https://www.facebook.com/corey.kling.9"><i className="fab fa-facebook"></i> Facebook</Nav.Link>
            <Nav.Link href="https://www.instagram.com/klincl01/"><i className="fab fa-instagram"></i> Instagram</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/corey-kling-97468546/"><i className="fab fa-linkedin"></i> Linkedin</Nav.Link>
            <Nav.Link href="https://github.com/cklingdesigns"><i className="fab fa-github"></i> GitHub</Nav.Link>
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
        </div>
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                  <ImageSlideshowCoding />
                  <div className="card-body">
                  <p className="card-text">Programming/Web Development</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 vertical-line"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowMarketing />
                <div className="card-body">
                  <p className="card-text">Marketing/Design</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 vertical-line"></div>
          </div>



          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowHobbies />
                <div className="card-body">
                  <p className="card-text">Hobbies/Interests</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowWildSide />
                <div className="card-body">
                  <p className="card-text">Wild Side</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowFunDesigns />
                <div className="card-body">
                  <p className="card-text">Fun Designs</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 vertical-line"></div>
            <div className="col-md-4 vertical-line"></div>
            <div className="col-md-4 vertical-line"></div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowHolidayFun />
                <div className="card-body">
                  <p className="card-text">Holiday Fun</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowSilly />
                <div className="card-body">
                  <p className="card-text">My Silly Side</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowWoodworking />
                <div className="card-body">
                  <p className="card-text">Woodworking Projects</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>


    <footer className="text-muted">
      <div className="wave">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="content">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>Copyright © 2025 Cklingdesigns</p>
      </div>
    </footer>
    <ContactModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;