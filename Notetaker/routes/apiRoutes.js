
var express = require("express");
var app = express();
var fs = require("fs");



module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    fs.readFile(__dirname + "/../data/db.json", "utf8", function (err, data) {
      if (err) {
        res.json(err);
      }
      else {
        return res.json(JSON.parse(data));
      }
    });
  });

  app.post("/api/notes", function (req, res) {
    //first we need to access the JSON file using the FS readFile method.
    //syntax: fs.readFile(path[, options], callback (err,data))
    //at this point the notes object is a string saved in the db.json file.
    fs.readFile(__dirname + "/../data/db.json", "utf8", function (err, notes) {

      //error handling
      if (err) throw err;

      //in the body of our request we want to create a new note and assign it a unique id by giving it a timestamp. 
      var newNote = req.body;
      newNote.id = Date.now();

      //notes needs to be parsed into an array before we add our new note to the array.
      notes = JSON.parse(notes);
      notes.push(newNote);

      //now that we added our note to the notes array we need to turn notes into a string so that it can be saved in the JSON object.
      //syntax: fs.writeFile(file, data[, options], callback) --> When file is a filename, writeFile asynchronously writes data to the file, replacing the file if it already exists.
      fs.writeFile(__dirname + "/../data/db.json", JSON.stringify(notes), "utf8", (err) => {

        //error handling
        if (err) throw err;
        console.log('The file has been saved!');

        //we're including the new note in the response to the client so the user can confirm that it was added and to see its id. 
        //syntax: res.json([body]) --> sends a JSON response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().
        res.json(newNote);
      });
    });
  });

  //app.delete(path, callback [, callback ...])

  app.delete("/api/notes/:id", function (req, res) {

    //LOOK UP THE NOTE
    fs.readFile(__dirname + "/../data/db.json", "utf8", function (err, data) {
      if (err) {
        res.json(err);
      }
      else {
        // notes = JSON.parse(notes);
        //first parse the JSON object: notes into an array OR you could use parseInt on data itself
        //confirm that the id of the note your looking for matches one of the ids in the array
        var notes = JSON.parse(data);

        //the req.params.id is returning the same id here 4 times.
        for (i = 0; i < notes.length; i++) { 
          if (Number(req.params.id) === notes[i].id ){
            let removed = notes.splice(i, 1)[0];
            console.log(removed);
            console.table(notes);
            break;
          }
        }
        // console.table(notes);
        res.json(notes);
      };
    });
  });
};