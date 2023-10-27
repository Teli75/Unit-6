const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

//index route
router.get('/', (req, res, next) => {
    res.render('index', { projects });
});

/*Project Page */
router.get('/project/:id', function(req, res, next) {
    const projectId = req.params.id;
    
    const project = projects.find( ({ id }) => id === projectId );
    if (project) {
      res.render('project', { project });
    } else {
        next();
    }
  });
  
  module.exports = router;
