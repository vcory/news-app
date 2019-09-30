const title = document.getElementById("title")
const button = document.getElementById('button')
const inputQuery = document.getElementById('inputQuery')
// const summary = document.getElementById('summary')
// const newsTitle = document.getElementById('News-Title')
// const newsAuthor = document.getElementById('News-Author')
// const newsPublished = document.getElementById('News-Published')
// const newsDescr = document.getElementById('News-Description')
// const newsImage = document.getElementById('News-Image')
// const newsLink = document.getElementById('News-Link')

//when button is clicked
button.addEventListener('click', async ()=>{

    //show loading
    summary.textContent = "loading ..."
    console.log("loading")
    // passes the query to the server and stores what as returned as response
    let response = await fetch(`http://localhost:3003/news?newsQuery=${inputQuery.value}`)
    console.log("entered query")
    console.log(`inputQuery.value in index is ${inputQuery.value}`)
    //turning JSON to text
    let data = await response.json()
    console.log("set data")
    console.log(data)
    //let the newsTitle be set the data that has been returned
    // newsTitle.textContent = data.title
    // newsAuthor.textContent = data.author
    // newsPublished.textContent = data.published
    // newsDescr.textContent = data.descr
    // newsImage.src = data.imageURL
    // newsLink.textContent = data.articleURL

    // for

    // let i;
    // for (i = 0; i < article.length; i++)

    // createElement div
    // createEl newsTitle = data[i].title
    // createEl newsAuthor = data[i].author
    // createEl newsPublished = data[i].published
    // createEl newsDescr = data[i].descr
    // createEl newsImage = data[i].image
    // createEl newsLink = data[i].link

    let newsArr=[]
   let titleArr=[]
   for(i=0;i<data.length;i++){
       titleArr[i] = document.createElement('h1')
       titleArr[i].textContent = data[i].title
       document.body.appendChild(titleArr[i])
       newsArr[i] = document.createElement('img')
       newsArr[i].src = data[i].imageURL
       document.body.appendChild(newsArr[i])
   }
   newsArr=[]
   titleArr=[]
})