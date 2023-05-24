# database.js
''const mongoose = require('mongoose');

mongoose.connect('mongodb://Admin:P9g3xv1991!@localhost:27017/CriticalView360', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));''

# server.js
''const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const dbURI = 'mongodb://Admin:P9g3xv1991!@localhost:27017/CriticalView360';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
  
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});
  
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

const app = express();
const port = process.env.PORT || 3000; // Add this line
app.use(express.json()); // To parse JSON bodies

// Use routes
app.use('/api/user', userRoutes);

// Express will serve up production assets
app.use(express.static(path.join(__dirname, '../client/build')));

// Express will serve up the front-end index.html file if it doesn't recognize the route
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// Listen for termination signals
process.on('SIGINT', () => {
  console.log('Stopping server gracefully...');

  // Perform cleanup tasks here
  // For example, closing database connections or releasing resources

  // Close the server
  server.close(() => {
    console.log('Server stopped.');
    process.exit(0);
  });
});''

# bowTieCard.js
''const mongoose = require('mongoose');

const bowTieCardSchema = new mongoose.Schema({
  hazard: { type: String, required: true },
  causes: [
    {
      text: { type: String, required: true },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
  ],
  preventativeControls: [
    {
      text: { type: String, required: true },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
  ],
  mitigatingControls: [
    {
      text: { type: String, required: true },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
  ],
  consequences: [
    {
      text: { type: String, required: true },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('BowTieCard', bowTieCardSchema);''

# user.js
''const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);''

