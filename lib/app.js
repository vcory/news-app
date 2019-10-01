const {getNews} = require('./getNews')


const main = async (newsQuery)=>{
    //calls getNews inputting user query and returning the first 4 articles
    const newsData = await getNews(newsQuery)
    console.log(`newsQuery from main in app.js is ${newsQuery}`)
    //returns the first 4 articles
    return (newsData)
}

module.exports = {
    main
}