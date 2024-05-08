const express = require('express')
const app = express()
const router = express.Router()
const db = require('../models/index.js')


router.get('/', async (req, res) => {

    const users = await db.users.findAll()

    res.send(users)


    
})

router.get('/:id', async (req, res) => {
    try{

    
    const user = await db.users.findOne({
        where: {id: req.params.id}
    })
    res.send(user)
} catch(err){
    res.send(err)
}
})

router.post('/', async (req, res) => {
    
    
    try{

        await db.users.create(req.body)

        res.send('User created'  + req.body)
    } catch(err){
        res.send(err)
    }
    
})

router.put('/:id', async (req, res) => {

    try {
        await db.users.update(req.body)
        res.send(`User updated`)
    } catch(err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    

    try {
        await db.users.destroy({
        where: {id: req.params.id}
    })
    res.send('User deleted')

    } catch(err) {
        res.send(err)
    }
})


module.exports = router