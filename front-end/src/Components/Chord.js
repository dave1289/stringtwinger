import { React } from "react";
import { Card } from "react-bootstrap";
import './Chord.css'

// the chord component will be rendered for each instance of a chord pulled from external API
const Chord = ({ idx, chordName, chordFingering }) => {

   return (
      <Card className="Chord" id="Chord">
         <Card.Body className="Chord-Body">
            <Card.Title>
               Chord Name
            </Card.Title>
            <Card.Text>
                           {/* Displaying chord name as title for chord pattern */}
               <span className="display-6" id="Chord-Name">{chordName.replaceAll(',', '')}</span>
               {/* Displaying the chord pattern by chord-name */}
               <span className="fingering">{chordFingering}</span>
            </Card.Text>
         </Card.Body>
      </Card >
   );
};

export default Chord;