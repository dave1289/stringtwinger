import React from "react";
import { Button, Card, Container } from "react-bootstrap"
import './Home.css'


const Home = () => {
   return (
      <Container className="Home">
         <div className="Home-Title">
            <h1 className="display-3">Welcome to String Twing'R</h1>
         </div>
         <Container className="Home-Card">
            <Card>
               <Card.Body>
                  Are you stuck in your same old practice routine?  Playing the same songs continously and not exposing yourself to new chords?  Well you've found the place to be!  At String Twing'R we will generate you a random chord progression in a random natural key, display the chords and provide you with a settable metronome for timing!
               </Card.Body>
               <span className="display-5">Click below to get started!</span>
            </Card>
            <Button href="/jam">Jam!</Button>
         </Container>
      </Container>
   )
}

export default Home;