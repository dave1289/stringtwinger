import React from "react";
import { Card } from "react-bootstrap";
import './Chord.css'

const Chord = () => {
   return (
      <Card className="Chord">
         <Card.Body>
            <Card.Title>
               This is a chord.
            </Card.Title>
            <Card.Text>
               Jam Chords Jamming
            </Card.Text>
            <div className="Chord-Diagram"></div>
         </Card.Body>
      </Card>
   )
}

export default Chord;