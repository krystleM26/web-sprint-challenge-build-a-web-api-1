// Write your "projects" router here!
const express = require('express')
const router = express.Router()

const Projects = require('./projects-model')

router.get('/', (req,res, next) => {
    console.log('get all posts')
})


router.get('/:id', (req,res,next)=> {
    console.log('get projects by id')
})

router.post('/', (req,res,next) => {
    console.log('get new project')
})

router.put('/:id', (req, res, next) => {
    console.log('get updated project')
})

router.delete('/:id', (req,res,next) => {
    console.log('delete project')
})

router.get('/:id/actions', (req,res,next) => {
    console.log('get project actions')
})

module.exports= router