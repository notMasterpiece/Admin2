const fs = require('fs');
const path = require('path');
const format = require('date-fns/format');
const AppError = require('../utils/appError');

const catchMongoErrors = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data: ${errors.join('! ')}`;
  return new AppError(message, 400);
};

const catchJwtErrors = () => {
  return new AppError('Invalid token. Please log in again', 401);
};

const catchJwtExpiredErrors = () => {
  return new AppError('Token expired. Please log in again', 401);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    NODE_ENV: process.env.NODE_ENV,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  res.status(500).json({
    status: 'error',
    message: 'Something went wrong',
  });
};

module.exports = (err, req, res) => {
  console.log(err.statusCode);

  const newError = {
    date: format(Date.now(), 'dd.MM.yyyy HH:mm:ss'),
    message: err.message,
    status: err.statusCode,
  };

  const file = path.join(__dirname, '..', 'log', 'dev_loging.json');
  let bugs = {};

  fs.readFile(file, 'utf8', function readFileCallback(error, data) {
    if (error) {
      // console.log(err);
    } else {
      // console.log(data);
      bugs = JSON.parse(data); //now it an object
      // console.log(bugs);
      bugs.errors.unshift(newError); //add some data
      fs.writeFile(file, JSON.stringify(bugs), 'utf8', () => {});
    }
  });

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    if (err.name === 'ValidationError') err = catchMongoErrors(err);
    if (err.name === 'JsonWebTokenError') err = catchJwtErrors(err);
    if (err.name === 'TokenExpiredError') err = catchJwtExpiredErrors(err);

    sendErrorProd(err, res);
  }
};
