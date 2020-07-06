## Title: Unit 11 homework - Note Taker


### Table of Contents

* [Project Summary](#summary)
* [Installation [n/a]](#installation)
* [Usage [n/a]](#usage)
* [Credits [n/a]](#credits)
* [License [n/a]](#license)
* [Acceptance Criteria & Assignment Objectives](#checklist)
* [Badges [n/a]](#badges)
* [Contributing](cContributing)
* [Tests [n/a]](#tests)
----
#### Project Summary

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.   

The application frontend has already been created, it's your job to build the backend and connect the two.



----
#### Installation

n/a


#### Usage 

n/a

----

#### Credits

1. Solo project

2. Tools/resources used: 
  - [Axios][1]
  - [Dotenv][2]
  - [Inquirer][3]
  - [File System][4]
  - [Markdown-Editor][5]
  - [Shields.io][6]
  - [Github Mastering Markdown/][7]
  - [Axios Cheatsheet][8]


3.	Tutorials used: 
  - [Tutorialspoint Nodejs][9]




#### License

n/a

----
#### Homework Acceptance Criteria Assignment Objectives
###### feature description
###### checklist status
###### issues (if applicable)

* [1. HTML Routes](#heading)
* [2. Store and Retrieve Notes](#heading-1)
* [3. API Routes](#heading-2)
* [4. User Story Requirements](#heading-3)
* [5. Acceptance Criteria](#heading-4)

##### 1. HTML Routes

###### feature description: the following HTML routes should be created:

- [x] complete GET `/notes` - Should return the `notes.html` file.

- [x] complete GET `*` - Should return the `index.html` file

##### 2. Store and Retrieve Notes


###### feature description: The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.
- [ ] incomplete

##### 3. API Routes

###### feature description: The following API routes should be created:

GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
- [ ] incomplete 

POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
- [ ] incomplete 

DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.when a user views the current weather conditions for a city then they are presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
- [ ] incomplete

##### 4. User Story Requirements:

###### AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete
- [ ] incomplete

##### 5. Acceptance Criteria:

###### feature descriptions: 

- Application should allow users to create and save notes.
- [ ] incomplete
- Application should allow users to view previously saved notes.
- [ ] incomplete
- Application should allow users to delete previously saved notes.
- [ ] incomplete

----

#### Badges

n/a

#### Contributing

[Contributor Covenant](https://www.contributor-covenant.org/)

#### Tests

n/a
###### [link references]

[1]: https://www.npmjs.com/package/axios
[2]: https://www.npmjs.com/package/dotenv
[3]: https://api.jquery.com/
[4]: https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
[5]: https://www.tutorialspoint.com/ajax/index.htm
[6]: https://www.tutorialspoint.com/jquery/jquery-events.htm
[7]: https://www.tutorialspoint.com/jquery/jquery-dom.htm
[8]: https://www.tutorialspoint.com/ajax/ajax_in_action.htm
[9]: https://www.contributor-covenant.org/