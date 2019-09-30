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
            //returning the first article
            return (data.body.articles[0])
    } catch (error){
        console.log("oops")
    }
}


module.exports = {
    getNews
}