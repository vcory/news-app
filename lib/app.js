const {getNews} = require('./getNews')


const main = async (newsQuery)=>{
    const newsData = await getNews(newsQuery)
    console.log(`newsQuery from main in app.js is ${newsQuery}`)
    console.log(`newsData from main in app.js is ${newsData.title}`)
    return newsData.title
}

module.exports = {
    main
}