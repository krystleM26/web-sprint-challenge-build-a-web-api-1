const Projects = require('./projects-model')

async function validateProjectId(req,res,next) {
    try {
        const project = await Projects.get(req.params.id)
        if(!project) {
            res.status(404).json()
        } else {
            req.project
        }
    }
    catch(err) {
        res.status(500).json()
    }
    next()
}

async function projectBody(req,res,next) {
    console.log('project body')
    try{
        const body = await Projects.insert(req.body)
        if(!body){
            res.status(400).json()
            next()
        } else {
           req.body
    }
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    validateProjectId,
    projectBody,
}
