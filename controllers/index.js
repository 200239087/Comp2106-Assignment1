let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => res.render('index', { 
  title: 'Ryan Quigley | Portfolio',
  content: 'Home Page' 
}));

router.get('/about', (req, res, next) => res.render('about', {
  title: 'About',
  content: 'About Page'
}));

router.get('/projects', (req, res, next) => res.render('projects', {
  title: 'Projects',
  content: 'Projects Page'
}));

router.get('/contact', (req, res, next) => res.render('contact', {
  title: 'Contact',
  content: 'Contact Page'
}));

module.exports = router;
