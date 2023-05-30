import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Chord from "./Chord";
import './Jam.css'
import Metronome from "./Metronome";
import axios from "axios";



const Jam = () => {

   const [chords, setChords] = useState([]);
   const [loading, setLoading] = useState(false);

   const fetchData = async () => {
      setLoading(true);
      axios
         .get("http://localhost:3001/chords")
         .then((response) => {
            setChords(JSON.parse(response.data.Chorddata));
            setLoading(false);
         })
         .catch((error) => {
            console.error("Error fetching chords:", error);
            setLoading(false);
         });
   };

   useEffect(() => {
      const fetchDataAsync = async () => {
         fetchData();
      }
      fetchDataAsync();
   })

   const handleRefresh = () => {
      setChords([])
      fetchData();
   };

   return (
      <div className="Jam">
         <h1 className="display-2">Let's get to jammin'</h1>
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
            </div>}
         <Button onClick={handleRefresh} className="Jam-Btn">
            Generate!
         </Button>
         <Button href="/" className="Jam-Btn">
            Home!
         </Button>
      </div>
   );
}

export default React.memo(Jam);