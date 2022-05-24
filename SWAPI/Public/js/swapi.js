let tableBody = document.getElementById('table-body')
let previousButton = document.getElementById('previous')
let nextButton = document.getElementById('next')
let cont = 1
let url = `https://swapi.dev/api/people/?page=${cont}`

previousButton.disabled=true
previousButton.style.backgroundColor="gray"

function buttonDisable(){
    if(cont == 1){
        previousButton.disabled=true
        previousButton.style.backgroundColor="grey"
    }else{
        previousButton.disabled=false
        previousButton.style.backgroundColor="black"
    } 
    
    if(cont == 9){
        nextButton.disabled=true
        nextButton.style.backgroundColor="grey"
    }else{
        nextButton.disabled=false
        nextButton.style.backgroundColor="black"
    }
}

previousButton.addEventListener("click", pagePrevious)
nextButton.addEventListener("click", pageNext)
pages()

function pagePrevious(){
    cont--
    url = `https://swapi.dev/api/people/?page=${cont}`
    clean()
    pages()
    buttonDisable()
}
function pageNext(){
    cont++
    url = `https://swapi.dev/api/people/?page=${cont}`
    clean()
    pages()
    buttonDisable()
}

function clean(){
    tableBody.innerHTML=""
}

function pages(){
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json)
        json.results.forEach((element) => {
            let name = element.name
            let height = element.height
            let mass = element.mass
            let gender = element.gender

            tableBody.append(createNewRow(name, height, mass, gender))
        });
    })
}

