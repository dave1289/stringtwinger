"use strict";

/** Express app for jobly. */

const express = require("express");
const helpers = require("./helpers")

process.env.NODE_ENV = 'production';

const { NotFoundError } = require("./expressError");

const app = express();

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.use(express.json());

app.get("/chords", async (req, res) => {
   const chords = await helpers.pullChords()
   const data = chords.map(chord => [chord.chordName, chord.strings])
   res.json({Chorddata : `${JSON.stringify(data)}`})
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