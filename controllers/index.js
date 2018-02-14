let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => res.render('index', { 
  title: 'COMP2106 - Assignment 1',
  content: '' 
}));

router.get('/about', (req, res, next) => res.render('about', {
  title: 'About',
  content: ''
}));

router.get('/projects', (req, res, next) => res.render('projects', {
  title: 'Projects',
  content: ''
}));

router.get('/services', (req, res, next) => res.render('services', {
  title: 'Services',
  content: ''
}));

router.get('/contact', (req, res, next) => res.render('contact', {
  title: 'Contact',
  content: ''
}));

module.exports = router;
