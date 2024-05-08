const express = require('express')
const app = express()
const router = express.Router()
const db = require('../models/index.js')

router.get('/', async (req, res) => {

    const rentals = await db.rentals.findAll()

    res.send(rentals)


    
})

router.get('/:id', async (req, res) => {
    try{

    
    const rental = await db.rentals.findOne({
        where: {id: req.params.id}
    })
    res.send(rental)
} catch(err){
    res.send(err)
}
})

router.post('/', async (req, res) => {
    try{
        await db.rentals.create(req.body)
        res.send('Movie created')

    } catch(err){
        res.send(err)
    }
    
})

router.put('/:id', async (req, res) => {

    try {
        await db.rentals.update(req.body)
        res.send('Movie updated')
    } catch(err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    

    try {
        await db.rentals.destroy({
        where: {id: req.params.id}
    })
    res.send('Movie deleted')

    } catch(err) {
        res.send(err)
    }
})



module.exports = router