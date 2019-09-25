const title = document.getElementById("title")
const button = document.getElementById('button')
const inputQuery = document.getElementById('inputQuery')
const summary = document.getElementById('summary')
const newsTitle = document.getElementById('News-Title')

button.addEventListener('click', async ()=>{

    summary.textContent = "loading ..."
    console.log("loading")
    let response = await fetch(`http://localhost:3003/news?newsQuery=${inputQuery.value}`)
    console.log("entered query")
    console.log(`inputQuery.value in index is ${inputQuery.value}`)
    let data = await response.text()
    console.log("set data")
    console.log(data)
    newsTitle.textContent = data
})