# stringtwinger

String Twinger is an application that uses the uberchord API.
String Twinger uses a create-react-app for the front-end with react-bootstrap for styling and Node.js with express for backend functionality.

The web app pulls chord name and playing data from the uber chord API and displays them in a random chord progression with accompanying metronome for timing.

To install locally run npm install in the root directory, cd to front-end, run npm install within the front-end directory, then run "npm run dev" in the root directory to start the application.

For local calls change the pull request in "Jam.js" to "localhost:3001" from "stringback.onrender.com" it will work from both as it is hosted but for purely local functionality that will be a useful change.

From the home page you can navigate to the "Jam" page where you have access to a metronome and a reusable generate button for new chords from a new key in a new progression.

Have fun!


-- To dos
  -- Add user functionality
  -- User Db {
      userId:
      username:
      hashed_pass:
      }
  -- Jams db {
      userId:
      JamId:
      Chords:
      Comment:
      }
 -- Style for mobile / improve design
 -- Testing
