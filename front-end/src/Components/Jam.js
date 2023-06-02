import React, { useState } from "react";
import { Button, Col, Container, Card, Row } from "react-bootstrap";
import Chord from "./Chord";
import './Jam.css'
import Metronome from "./Metronome";
import axios from "axios";



const Jam = () => {

   // Chords and loading states setup for awaiting API calls and to save each render's chord information for mapping
   const [chords, setChords] = useState([]);
   const [loading, setLoading] = useState(false);

   // Fetching data from backend API through to api.uberchord.com
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

   // Handle refresh is for our generate button which allows you to generate a new or first chord progression.  Access to metronome is standard before generation to make this a more versatile tool.
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
         {/* Loading state checked to see if we should display our loading div or our container with chord components */}
         {loading ? <div className="Loading">Loading...</div> :
            <div className="Jam-Chords">
               <Container>
                  <Row>
                     {/* Mapping over the individual entries within our chords state to create chord components with names and fingering patterns */}
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