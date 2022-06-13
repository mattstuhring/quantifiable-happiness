const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const snapshotRoutes = require('./routes/snapshotRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();

const PORT = process.env.NODE_PORT || 5000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); // Accept json data in the body of request

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/snapshots', snapshotRoutes);

// Error handling
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
