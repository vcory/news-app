const request=require('request')
const {promisify}=require('util')
const promisifiedRequest=promisify(request)
const apiKey="83cd3855ec3f4968aa30631d6981d640"

//function to get news title from a query input
const getNews = async (newsQuery) => {
    try{
        let data = await promisifiedRequest(
            //input query to news api
            {url : `https://newsapi.org/v2/everything?q=${newsQuery}&language=en&sortBy=publishedAt&apiKey=${apiKey}`,
            json : true})
            console.log(`newsQuery in getNews is ${newsQuery}`)
            let newsArr = data.body.articles.slice(0, 4);
            
            let result = newsArr.map(article => ({ 
                title: article.title,
                author: article.author,
                published: article.publishedAt,
                descr: article.description,
                imageURL: article.urlToImage,
                articleURL: article.url
            
            }));
            //console.log(result[0])

            //returning the first article
            return (result)
    } catch (error){
        console.log("oops")
    }
}


module.exports = {
    getNews
}