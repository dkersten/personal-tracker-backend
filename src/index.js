// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const {startDatabase} = require('./database/mongo');
const {insertActivity, getActivities, deleteActivity, updateActivity} = require('./database/activities');

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to retuen all activities
app.get('/activities', async (req, res) => {
    res.send(await getActivities());
})

app.post('/activities', async (req, res) => {
    const newActivity = req.body;
    await insertActivity(newActivity);
    res.send({ message: 'New activity inserted.' });
});

app.delete('/activities:id', async (req, res) => {
    await deleteActivity(req.params.id);
    res.send({ message: 'Activity removed.' });
});

app.patch('/activities:id', async (req, res) => {
    const updatedActivity = req.body;
    await updateActivity(req.params.id, updatedActivity);
    res.send({ message: 'Activity updated.' });
});

// start the in-memory MongoDB instance
startDatabase().then(async () => {
    await insertActivity(
        {
            name: 'Cardio',
            category: 'exercise',
            description: "Went for a 1.75 mile outdoor run"
        }
    );
  
    // start the server
    app.listen(3001, async () => {
      console.log('listening on port 3001');
    });
  });