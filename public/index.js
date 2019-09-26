const title = document.getElementById("title")
const button = document.getElementById('button')
const inputQuery = document.getElementById('inputQuery')
const summary = document.getElementById('summary')
const newsTitle = document.getElementById('News-Title')

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
    let data = await response.text()
    console.log("set data")
    console.log(data)
    //let the newsTitle be set the data that has been returned
    newsTitle.textContent = data
})