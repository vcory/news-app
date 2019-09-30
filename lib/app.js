const {getNews} = require('./getNews')


const main = async (newsQuery)=>{
    //calls getNews inputting user query and returning the first article
    const newsData = await getNews(newsQuery)
    console.log(`newsQuery from main in app.js is ${newsQuery}`)
    console.log(`newsData from main in app.js is ${newsData.title}`)
    //returns just the title of the article to the server
    return ({
        title: newsData.title,
        author: newsData.author,
        published: newsData.publishedAt,
        descr: newsData.description,
        imageURL: newsData.urlToImage,
        articleURL: newsData.url
    })
}

module.exports = {
    main
}

//testing git from personal mac
//pls work