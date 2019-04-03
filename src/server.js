const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const hbs = require('hbs');

const app = express();

// console.log(__dirname)
// console.log(__filename)

//Define path for Express configuraation
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')
const partialsPath = path.join(__dirname, '../views/partials')

//Setup handlebars engineer and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//homePage
// app.get('', (req, res) => {
//   app.render('index')
// })
//index
app.get('', (req, res) => {
  res.render('index', {
    logo: 'Damian Cwykiel',
    offer: 'Dev Classes for Kids',
    title: 'D&D By Damian Cwykiel &copy 2019.',
    subtitle: "You're look' for WebDeveloper?"
  })
})

//blog
app.get('/blog', (req, res) => {
  res.render('blog', {
    logo: 'Damian Cwykiel',
    offer: 'Dev Classes for Kids',
    title: 'D&D By Damian Cwykiel &copy 2019.',
    subtitle: "You're look' for WebDeveloper?"
  })
})

//create Http server
// const server = http.createServer(app)


//configuration for partial
// hbs.registerPartials(__dirname + './views/partials');


//Express Middleware
// app.use((req, res, next) => {
//   const now = new Date().toString();
//   const log = `${now}: ${req.method} ${req.url}`;

  // console.log(log);
  // fs.appendFile('server.log', log + '\n');
//   fs.appendFile('server.log', log + '\n', (err) => {
//     if(err) {
//       console.log('unable to append to server.log')
//     }
//   });
//   next();
// });
//challenge
// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });


//helper
// hbs.registerHelper('getCurrentYear', () => {
//   return new Date().getFullYear()
// });

//change text to Upper Letters
// hbs.registerHelper('screamIt', (text) => {
//   return text.toUpperCase();
// });
//1st hendler
// app.get('/', (req, res) => {
//   // res.send('<h1>hello world!</h1>');
//   res.send({
//     name: 'Damian Cwykiel',
//     likes: [
//       'travelling',
//       'computers'
//     ]
//   });
// });


//server
app.listen(`${port}`, () => {
  console.log(`Server is alive on port ${port}!`);
});
