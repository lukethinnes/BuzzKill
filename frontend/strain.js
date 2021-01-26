console.log("js Loaded")
const strainElement = document.getElementById('strain-element')
const queryParams = new URLSearchParams(window.location.search)
const strainName = queryParams.get('name')

const baseURL = 'strainapi.evanbusse.com/TEkvrIZ/strains/search/name/NAME'
let strainURL = baseURL

if (strainName) {
  strainURL = `http://strainapi.evanbusse.com/TEkvrIZ/strains/search/name/${strainName}`
}

fetch(strainURL)
  .then(response => response.json())
  .then(strain => {
    const h1 = document.createElement('h1')
    const p = document.createElement('p')

    h1.innerHTML = `Name: ${strain[0].name}`
    p.innerHTML = `Description: ${strain[0].desc}`
    

    strainElement.append(h1, p)
  })

fetch(strainURL)
.then(response => response.json())
.then(strain => {
  console.log(strain)
  fetch(`http://strainapi.evanbusse.com/TEkvrIZ/strains/data/effects/${strain[0].id}`)
  .then(response => response.json())
  .then(effects => {
    const h2 = document.createElement('h2')
    h2.innerText = 'Other Negative Effects:'
    strainElement.append(h2)
    effects.negative.forEach(effect => {
      const h2 = document.createElement('h2')
      h2.innerText = effect
      strainElement.append(h2)
    })
    
  })
})