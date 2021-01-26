console.log("js Loaded")
const strainElement = document.getElementById('strain-element')
const queryParams = new URLSearchParams(window.location.search)
const strainName = queryParams.get('name')

const baseURL = 'strainapi.evanbusse.com/TEkvrIZ/strains/search/name/NAME'
let strainURL = baseURL

if(strainName){
  strainURL = `http://strainapi.evanbusse.com/TEkvrIZ/strains/search/name/${strainName}`
}

fetch(strainURL)
  .then(response => response.json())
  .then(strain => {
    console.log(strain)
    const h1 = document.createElement('h1')
    const p = document.createElement('p')

    h1.innerHTML = `Name: ${strain[0].name}`
    p.innerHTML = `Description: ${strain[0].desc}`
    

    strainElement.append(h1, p)
  })
