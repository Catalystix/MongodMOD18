const express = require('express');
const db = require('./config/connection');
// Require model
const { user } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new comment
app.post('/new-comment/:comment', (req, res) => {
  const newcomment = new comment({ name: req.params.comment });
  newcomment.save();
  if (newcomment) {
    res.status(201).json(newcomment);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Finds all comments
app.get('/all-comments', (req, res) => {
  // Using model in route to find all documents that are instances of that model
  comment.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
});

// Finds the first matching document
app.get('/find-comment', (req, res) => {
  // Using model in route to find all documents that are instances of that model
  comment.findOne({ name: '' }, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
});

// Finds first document matching parameter and deletes
// For demo, use 'Wine' as URL param
app.delete('/find-one-delete/:commentName', (req, res) => {
  comment.findOneAndDelete(
    { name: req.params.commentName },
    (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
      }
    }
  );
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
