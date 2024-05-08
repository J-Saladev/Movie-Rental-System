const express = require('express')
const app = express()
const router = express.Router()
const db = require('../models/index.js')

router.get('/', async (req, res) => {

    const movies = await db.movies.findAll()

    res.send(movies)


    
})

router.get('/:id', async (req, res) => {
    try{

    
    const movie = await db.movies.findOne({
        where: {id: req.params.id}
    })
    res.send(movie)
} catch(err){
    res.send(err)
}
})

router.post('/', async (req, res) => {
    try{
        await db.movies.create(req.body)
        res.send('Movie created')
    } catch(err){
        res.send(err)
    }
    
})

router.put('/:id', async (req, res) => {

    try {
        await db.movies.update(req.body)
        res.send(`Movie updated`)
    } catch(err) {
        res.send(err)
    }
})

router.delete('/:id', async (req, res) => {
    

    try {
        await db.movies.destroy({
        where: {id: req.params.id}
    })
    res.send('Movie deleted')

    } catch(err) {
        res.send(err)
    }
})









module.exports = router