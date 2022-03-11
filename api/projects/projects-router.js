// Write your "projects" router here!
const express = require('express')
const router = express.Router()

const Projects = require('./projects-model')

router.get('/', (req,res,) => {
    
    Projects.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({message: 'Cannot get Projects'})
    })
})


router.get('/:id', (req,res,)=> {
    Projects.insert()
    console.log('get projects by id')
})

router.post('/', (req,res) => {
console.log('get new project')
})

router.put('/:id', (req, res) => {
    console.log('get updated project')
})

router.delete('/:id', (req,rest) => {
    console.log('delete project')
})

router.get('/:id/actions', (req,res) => {
    console.log('get project actions')
})

module.exports= router