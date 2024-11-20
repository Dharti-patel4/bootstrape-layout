import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Layout = () => {
  return (
    <Container  style={{width:"100%"}}>
   
      <Row className="mb-4">
        <Col>
          <div style={{ background: "#ccc", height: "50px",marginTop:"3%"}}>Header</div>
        </Col>
      </Row>

      <Row>
      
        <Col md={8} className="mb-3">
          <Card style={{ height: "300px" }}>
            <Card.Body>
              <div
                style={{
                  background: "#999",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span> Video</span>
              </div>
            </Card.Body>
          </Card>
          
          <Row className="mt-4">
            <Col>
              <Button variant="dark" className="w-90">
                Button 1
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" className="w-90">
                Button 2
              </Button>
            </Col> 
            <Col>
              <Button variant="dark" className="w-90">
                Button 3
              </Button>
            </Col>
          </Row>
        </Col>

    
        <Col md={4} className="mb-3">
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <div
                style={{
                  background: "#aaa",
                  height: "100%",
                }}
              >
                Sidebar Content
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Body>
              <div style={{ background: "#eee", height: "100px" }}>
                Footer Content
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;

