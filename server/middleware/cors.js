const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With,  x-auth, Content-Type, Accept'
  );
  res.header('Access-Control-Expose-Headers', 'x-auth');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
};

module.exports = { cors };
