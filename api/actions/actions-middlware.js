const Actions = require('./actions-model')

async function validateActionId(req, res, next) {
  try {
    const action = await Actions.get(req.params.id)
    if (!action) {
      res.status(404).json()
    } else {
      req.actions
      next();
    }
  } catch (err) {
    res.status(500).json()
  }
}

async function validateAction(req, res, next) {
  try {
    const { notes, description, completed,  project_id } = req.body
    if (!notes || !description || !project_id || completed == null ) {
      res.status(400).json('Missing actions')
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json()
  }
}

module.exports = {
  validateActionId,
  validateAction
}
