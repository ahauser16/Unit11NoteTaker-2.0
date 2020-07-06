} else if (req.method === 'POST' && pathname === 'Notes') {

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    var body = '';
    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {

        fs.readFile('Notes.json', function (err, notesJSON) {
            if (err) {
                console.log(err);
            }

            var notes = JSON.parse([notesJSON]);
            var newNote = JSON.parse(body);
            newNote.id = latestID;
            notes.note.push(newNote);
            notesJSON = JSON.stringify(notes);

            // The problem is how do you get to know the new id? You could just say newId = notes.note.length + 1 - but if you delete one later on, you will have duplicate ids. You also need to think about how to handle unique ids for the future.  I wouldn't loop through the entries to find out the highest Id # but rather it would be better to save the last used ID (for when it's added or deleted) in a seperate field and always use that one and increment it.
  
            fs.writeFile('Notes.json', notesJSON, function (err) {
                if (err) {
                    console.log(err);
                }
            });
        });
    });
}

