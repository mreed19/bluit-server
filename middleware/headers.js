module.exports = (req, res, next) => {
  // Allow CORS
  res.header('Access-Control-Allow-Origin', '*');
  next();
}
