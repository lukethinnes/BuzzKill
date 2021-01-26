const queryParams = new URLSearchParams(window.location.search)
const effectName = queryParams.get('name')
const savedStrains = document.getElementById('saved-strains')

console.log(effectName)


const baseURL = 'strainapi.evanbusse.com/TEkvrIZ/strains/search/effect/'
let strainURL = baseURL

if(effectName){
  strainURL =  `http://strainapi.evanbusse.com/TEkvrIZ/strains/search/effect/${effectName}`
}



fetch(strainURL)
  .then(response => response.json())
  .then(strains => {
    console.log(strains)
    strains.forEach(strain => {
      const h4 = document.createElement('h4')
      
      h4.innerHTML = `Name: ${strain.name} <br> Race:  ${strain.race}`

      savedStrains.append(h4)
    })
  })
