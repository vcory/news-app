const title = document.getElementById("title")
const button = document.getElementById('button')
const inputQuery = document.getElementById('inputQuery')
const wrapper = document.getElementById('wrapper')

//when button is clicked
button.addEventListener('click', async ()=>{

    console.log("loading")
    
    // passes the query to the server and stores what is returned as response
    let response = await fetch(`http://localhost:3003/news?newsQuery=${inputQuery.value}`)
    console.log("entered query")
    console.log(`inputQuery.value in index is ${inputQuery.value}`)
    //turning JSON to text
    let data = await response.json()
    console.log("set data")
    console.log(data)

    //let elements that have a class name "reload" be called elements
    let elements = document.getElementsByClassName("reload");

    //if there are elements within elements (have a class name "reload", delete them)
    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }

    //creating an array of images and an array of titles
    let imgArr=[]
    let titleArr=[]
    for(i=0;i<data.length;i++){
        //creates a h1 tag for the ith article
        titleArr[i] = document.createElement('h1')
        //set the text displayed
        titleArr[i].textContent = data[i].title
        //give a class name title, and reload so when it is run again it will be deleted
        titleArr[i].className='title reload'
        //puts the newly created h1 title element into the wrapper from the html
        wrapper.appendChild(titleArr[i])
        //creates a link tag
        let link = document.createElement('a')
        //gives the link tag a target of the news article url
        link.href=data[i].articleURL
        //creates an image tag for the ith article
        imgArr[i] = document.createElement('img')
        //give the image a source so it can display something
        imgArr[i].src = data[i].imageURL
        //give the image a class name of image and reload so when it is run again it will be deleted
        imgArr[i].className="image reload"
        //puts the newly created link into the wrapper from the html
        wrapper.appendChild(link)
        //puts the newly created image into to the link so that the image is clickable to the url
        link.appendChild(imgArr[i])
    }


})