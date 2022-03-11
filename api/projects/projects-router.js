// Write your "projects" router here!
const express = require('express')
const res = require('express/lib/response')
const {validateProjectId} = require('./projects-middleware')
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
    try {
        const project = await Projects.get(req.params.id)
        res.json(project)

    } catch(err) {
        res.status(500).json({ message: 'Cannot get Projects with that ID' })
    }
})

router.post('/', (req, res) => {
  console.log('get new project')
})

router.put('/:id', (req, res) => {
  console.log('get updated project')
})

router.delete('/:id', (req, rest) => {
  console.log('delete project')
})

router.get('/:id/actions', (req, res) => {
  console.log('get project actions')
})

module.exports = router
