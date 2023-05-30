import { React } from "react";
import { Card } from "react-bootstrap";
import './Chord.css'

const Chord = ({ idx, chordName, chordFingering }) => {

   return (
      <Card className="Chord">
         <Card.Body className="Chord-Body">
            <Card.Title>
               Chord Name
            </Card.Title>
            <Card.Text>
               <span className="display-6" id="Chord-Name">{chordName.replaceAll(',', '')}</span>
               <span className="fingering">{chordFingering}</span>
            </Card.Text>
         </Card.Body>
      </Card >
   );
};

export default Chord;