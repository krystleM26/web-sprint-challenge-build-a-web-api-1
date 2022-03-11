// Write your "projects" router here!
const express = require('express')
const { validateProjectId, projectBody } = require('./projects-middleware')
const Projects = require('./projects-model')
const router = express.Router()

router.get('/', (req, res) => {
  Projects.get()
    .then(project => {
      res.status(200).json(project)
    })
    .catch((err) => {
      res.status(500).json({ message: 'Cannot get Projects' })
    })
})

router.get('/:id', validateProjectId, async (req, res) => {
  try {
    const project = await Projects.get(req.params.id)
    res.json(project)
  } catch (err) {
    res.status(500).json({ message: 'Cannot get Projects with that ID' })
  }
})


router.post('/', projectBody, (req, res) => {
    console.log('hey im request', req.body)
  Projects.insert(req.body)
    .then(content => {
      res.status(201).json(content)
    })
    .catch((err) => {
      res.status(500).json({
        message: ' body content not found',
      })
    })
    res.send('hello');
})

router.put('/:id', validateProjectId, projectBody, (req, res) => {
  const update = req.body
  Projects.update(req.params.id, update)
    .then((project) => {
      if (!project) {
        res.status(404).json(project)
      } else {
        res.json(project)
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: ' body content not found',
      })
    })
})

router.delete('/:id',validateProjectId, (req, rest) => {
    Projects.remove(req.params.id)
        .then(content => {
            if(!content) {
                res.json(content)
            }
            else {
                res.status(404).json()
            }

        })
        .catch(err => {
            res.status(500).json()
        })
  console.log('delete project')
})

router.get('/:id/actions', (req, res) => {
  console.log('get project actions')
})

module.exports = router
