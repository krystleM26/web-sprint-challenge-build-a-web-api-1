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
}) . catch(err => {
    res.status(500)({ message: 'Cannot retrieve actions' })
  })
})

router.get('/:id', validateActionId, async (req, res) => {
  try {
    const action = await Actions.get(req.params.id)
    res.json(action)
  } catch (err) {
    res.status(500)({ message: 'Cannot retrieve actions' })
  }
})

router.post('/', validateAction, (req, res) => {
    Actions.insert(req.body)
        .then(actions=> {
            res.status(201).json(actions)
            }).catch((err) => {
            res.status(500)({ message: 'Cannot retrieve actions' })
            })
})

router.delete('/:id', (res, req) => {})

router.put('/:id', (req, res) => {
    const change =req.body
    Actions.update(req.params.id, change)
    .then(action => {
        if(!action) {
            res.status(404).json()
        } else {
            res.status(200).json(action)
        }
    }).catch (err => {
        res.status(500).json()
    })
})

module.exports = router
