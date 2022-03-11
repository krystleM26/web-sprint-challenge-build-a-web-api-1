const Actions = require('./actions-model')

async function validateActionId(req,res, next) {
    try {
        const action = await Actions.get(req.params.id)
        if(!action) {
            res.status(404).json()
        } else{
            req.actions
        }
    } catch(err) {
       
     res.staus(500).json()
    }
    next()
}

module.exports = {
    validateActionId,
}
