import { React } from "react";
import { Card } from "react-bootstrap";
import './Chord.css'

const Chord = ({ idx, chordData }) => {

   return (
      <Card className="Chord" key={idx}>
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