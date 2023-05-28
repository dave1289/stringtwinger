import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Chord from "./Chord";
import './Jam.css'
import Metronome from "./Metronome";



const Jam = () => {
   return (
      <div className="Jam">
         <h1>
            Jamming
         </h1>
         <div className="Jam-Chords">
            <Container>
               <Row>
                  <Col><Chord /></Col>
                  <Col><Chord /></Col>
                  <Col><Chord /></Col>
               </Row>
            </Container>
         </div>
         <Metronome />
         <Button href="/" id="Jam-Home">
            Home!
         </Button>
      </div >)
}

export default Jam;