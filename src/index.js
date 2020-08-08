const Start_Route = require('./Route/start.route');
const Auth_Route = require('./Route/auth.route');

const connectServer = (app) => {
  app.use('/', Start_Route);
  app.use('/api', Auth_Route);

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server start: ${PORT}`);
  });
};

module.exports = connectServer;
