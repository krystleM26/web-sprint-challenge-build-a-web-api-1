const Projects = require('./projects-model')

async function validateProjectId(req, res, next) {
  try {
    const project = await Projects.get(req.params.id)
    if (!project) {
      res.status(404).json({msg: 'Nothing found'});
    } else {
      req.project;
      next()
    }
  } catch (err) {
    res.status(500).json({msg: 'error'})
  }
}

async function projectBody(req, res, next) {
  try {
    const {name, description, completed } = req.body
    if ( !name || !description || completed == null  ){
      res.status(400).json({msg: 'Missing items'})
    }else {
      req.body;
      next()
    }
  
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  validateProjectId,
  projectBody,
}
