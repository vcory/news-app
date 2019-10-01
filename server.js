const {main} = require('./lib/app')
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, "public")))

console.log(__dirname)


app.get('/news', async (req,res)=>{
    //call main passing in using query and returning the first 4 articles related to query
    let data = await main(req.query.newsQuery)
    //send data to front end
    res.send(data)
})

app.listen(3003, ()=>{
    console.log('listening on port 3003')
})