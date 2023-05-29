import { React, useEffect } from "react";
import { Card } from "react-bootstrap";
import './Chord.css'

const Chord = ({ chordData }) => {

   return (
      <Card className="Chord">
         <Card.Body>
            <Card.Title>
               Chord Name
            </Card.Title>
            <Card.Text className="Chord-Name">
               {chordData.join().replaceAll(',', '')}
            </Card.Text>
         </Card.Body>
      </Card >
   );
};

export default Chord;