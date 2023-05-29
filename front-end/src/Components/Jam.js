import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Chord from "./Chord";
import './Jam.css'
import Metronome from "./Metronome";
import axios from "axios";



const Jam = () => {

   const [chords, setChords] = useState([]);
   const [loading, setLoading] = useState(true);

   const fetchData = () => {
      setLoading(true);
      axios
         .get("http://localhost:3001/chords")
         .then((response) => {
            console.log(response.data);
            setChords(JSON.parse(response.data.Chorddata));
            setLoading(false);
         })
         .catch((error) => {
            console.error("Error fetching chords:", error);
            setLoading(false);
         });
   };

   useEffect(() => {
      fetchData();
   }, []);

   const handleRefresh = () => {
      fetchData();
   };

   if (loading) {
      return <div className="Loading">Loading...</div>;
   }

   if (chords.length === 0) {
      return <div>No chords available.</div>;
   }

   return (
      <div className="Jam">
         <h1 className="display-2">Let's get to jammin'</h1>
         <p className="display-6">Set your tempo below, hit start and get creative!</p>
         <div className="Jam-Chords">
            <Container>
               <Row>
                  {chords.map((chord, index) => {
                     return (
                        <Col>
                           <Chord idx={index} chordData={chord} />
                        </Col>)
                  })}
               </Row>
            </Container>
         </div>
         <Metronome />
         <Button onClick={handleRefresh} id="Jam-Home">
            Refresh!
         </Button>
         <Button href="/" id="Jam-Home">
            Home!
         </Button>
      </div>
   );
}

export default Jam;