const express = require('express');
const {addProject , getProjects, deleteProject}= require ("../controller/project");
const router = express.Router();

router.post('/product', addProject);
router.get('/product', getProjects);
router.delete('/product/:id', deleteProject);


module.exports = router;