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

module.exports = {
    validateProjectId
}
