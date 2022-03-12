// Write your "projects" router here!
const express = require('express')
const { validateProjectId, projectBody } = require('./projects-middleware')
const Projects = require('./projects-model')
const router = express.Router()

router.get('/', (req, res) => {
  Projects.get()
    .then((project) => {
      res.status(200).json(project)
    })
    .catch((err) => {
      res.status(500).json({ message: 'Cannot get Projects' })
    })
})

router.get('/:id', validateProjectId, async (req, res) => {
  console.log(req.project);
  try {
    const project = await Projects.get(req.params.id)
    if ( !project ){
      res.status(404).json({msg: 'No project found'});
    }else {
      res.status(200).json(project)
    }
  } catch (err) {
    res.status(400).json({ message: 'Cannot get Projects with that ID' })
  }
})

router.post('/', projectBody, (req, res) => {
  Projects.insert(req.body)
    .then(content => {
      res.status(201).json(content)
    })
    .catch((err) => {
      res.status(500).json({
        message: ' body content not found',
      })
    })
})

router.put('/:id', validateProjectId, projectBody, (req, res) => {
  const changes = req.body
  
  Projects.update(req.params.id, changes)
    .then((project) => {
        res.status(200).json(project)
    })
    .catch((err) => {
      res.status(500).json({
        message: ' body content not found',
      })
    })
})

router.delete('/:id', validateProjectId, (req, res) => {
  Projects.remove(req.params.id)
    .then(content => {
      if (!content) {
        res.status(404).json()
      } else {
        res.json(content)
      }
    })
    .catch((err) => {
      res.status(500).json()
    })
  
})

router.get('/:id/actions', (req, res) => {
  console.log('get project actions')
})

module.exports = router
