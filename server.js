const {main} = require('./lib/app')
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, "public")))

console.log(__dirname)


app.get('/news', async (req,res)=>{
    let data = await main(req.query.newsQuery)
    // console.log(`newsQuery in app.get in server.js is ${newsQuery}`)
    res.send(data)
})

app.listen(3003, ()=>{
    console.log('listening on port 3003')
})