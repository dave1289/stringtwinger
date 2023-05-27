"use strict";

/** Express app for jobly. */

const express = require("express");
const helpers = require("./helpers")

const { NotFoundError } = require("./expressError");

const app = express();

app.use(express.json());

app.get("/chords", async (req, res) => {
   const chords = await helpers.pullChords()
   console.log(chords)
   const data = chords.map(chord => [chord.strings, chord.chordName])
   res.json({Chorddata : `${JSON.stringify(data)}`, BPM:`${helpers.generateBpm()}`})
})


/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
