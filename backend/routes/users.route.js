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
    console.log(req.body)
    
    try{

        await db.users.create(req.body)

        res.send('Movie created'  + req.body)
    } catch(err){
        res.send(err)
    }
    
})

router.put('/:id', async (req, res) => {

    try {
        await db.users.update(req.body)
        res.send(`Movie updated`)
    } catch(err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    

    try {
        await db.users.destroy({
        where: {id: req.params.id}
    })
    res.send('Movie deleted')

    } catch(err) {
        res.send(err)
    }
})


module.exports = router