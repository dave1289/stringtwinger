import React, { useState } from "react";
import { Button, Col, Container, Card, Row } from "react-bootstrap";
import Chord from "./Chord";
import './Jam.css'
import Metronome from "./Metronome";
import axios from "axios";



const Jam = () => {

   const [chords, setChords] = useState([]);
   const [loading, setLoading] = useState(false);

   const fetchData = () => {
      setLoading(true);
      axios
         .get("https://stringback.onrender.com/chords")
         .then((response) => {
            setChords(JSON.parse(response.data.Chorddata));
            setLoading(false);
         })
         .catch((error) => {
            console.error("Error fetching chords:", error);
            setLoading(false);
         });
   };

   const handleRefresh = () => {
      setChords([])
      fetchData();
   };

   return (
      <div className="Jam">
         <div className="Jam-Title">
            <h1 className="display-3">Let's get to jammin'</h1>
         </div>
         <p className="display-6">Set your tempo below, hit start and get creative!</p>
         {loading ? <div className="Loading">Loading...</div> :
            <div className="Jam-Chords">
               <Container>
                  <Row>
                     {chords.map((chord) => {
                        return (
                           <Col key={chord[0]}>
                              <Chord chordName={chord[0]} chordFingering={chord[1]} />
                           </Col>)
                     })}
                  </Row>
               </Container>
               <Metronome />
               <Button onClick={handleRefresh} className="Jam-Btn">
                  Generate!
               </Button>
               <Button href="/" className="Jam-Btn">
                  Home!
               </Button>
            </div>}
            <Card className="Jam-P">
               <Card.Body>
                  Review your chords, set your metronome and don't forget to get creative with strumming patterns, arpeggions, your flourishes and solos!  You could be starting your next song right now and not even know it yet!
               </Card.Body>
            </Card>
      </div>
   );
}

export default React.memo(Jam);