const Actions = require('./actions-model')

async function validateActionId(req, res, next) {
  try {
    const action = await Actions.get(req.params.id)
    if (!action) {
      res.status(404).json()
    } else {
      req.actions
    }
  } catch (err) {
    res.staus(500).json()
  }
  next()
}

async function validateAction(req, res, next) {
  try {
    const action = await Actions.insert(req.body)
    if (!body) {
      res.staus(400).json()
      next()
    } else {
      res.status(500).json(err)
    }
  } catch (err) {
    res.status(500).json()
  }
  next()
}

module.exports = {
  validateActionId,
  validateAction
}
