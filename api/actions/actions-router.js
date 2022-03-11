// Write your "actions" router here!
const express = require('express')
const res = require('express/lib/response')
const { validateActionId, validateAction } = require('./actions-middlware')
const Actions = require('./actions-model')
const router = express.Router()

router.get('/', (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch((err) => {
      res.status(500)({ message: 'Cannot retrieve actions' })
    })
})

router.get('/:id', validateActionId, async (req, res) => {
  try {
    const action = await Actions.get(req.params.id)
    res.json(action)
  } catch (err) {
    res.status(500).json({ message: 'Cannot retrieve actions' })
  }
})

router.post('/', validateAction, (req, res) => {
  Actions.insert(req.body)
    .then(actions => {
      res.status(201).json(actions)
    })
    .catch(err => {
      res.status(500).json({ message: 'Cannot retrieve actions' })
    })
})

router.put('/:id', validateActionId, validateAction, (req, res) => {
  const change = req.body
  Actions.update(req.params.id, change)
    .then(action => {
      if (!action) {
        res.status(404).json()
      } else {
        res.status(200).json(action)
      }
    })
    .catch(err => {
      res.status(500).json()
    })
})

router.delete('/:id', validateActionId, (req, res) => {
  Actions.remove(req.params.id)
    .then(info => {
      if (!info) {
        res.status(404).json()
      } else {
        res.json(info)
      }
    })
    .catch((err) => {
      res.status(500).json()
    })
})


module.exports = router
