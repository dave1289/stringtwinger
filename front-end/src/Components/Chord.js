import { React } from "react";
import { Card } from "react-bootstrap";
import './Chord.css'

const Chord = ({ idx, chordName, chordFingering }) => {
   
   return (
      <Card className="Chord" key={idx}>
         <Card.Body className="Chord-Body">
            <Card.Title>
               Chord Name
            </Card.Title>
            <Card.Text>
               <p className="display-6">{chordName.replaceAll(',', '')}</p>
               <div className="fingering">{chordFingering}</div>
            </Card.Text>
         </Card.Body>
      </Card >
   );
};

export default Chord;