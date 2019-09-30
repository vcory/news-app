const {getNews} = require('./getNews')


const main = async (newsQuery)=>{
    //calls getNews inputting user query and returning the first article
    const newsData = await getNews(newsQuery)
    console.log(`newsQuery from main in app.js is ${newsQuery}`)
    //console.log(`newsData from main in app.js is ${newsData[0].title}`)
    //returns just the title of the article to the server
    return (newsData)
}

module.exports = {
    main
}