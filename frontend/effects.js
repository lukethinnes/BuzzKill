const queryParams = new URLSearchParams(window.location.search)

const effectFilter = queryParams.get('search')
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
    strains.forEach(strain => {
      if(effectFilter === 'None'){
      const h4 = document.createElement('h4')
      
      h4.innerHTML = `<a href='http://localhost:3001/strain.html?name=${strain.name}'> Name: ${strain.name} <br> Race:  ${strain.race} </a>`

      savedStrains.append(h4)
      }else if(effectFilter === strain.race){
        const h4 = document.createElement('h4')
      
      h4.innerHTML = `<a href='http://localhost:3001/strain.html?name=${strain.name}'> Name: ${strain.name} <br> Race:  ${strain.race} </a>`

      savedStrains.append(h4)
      }
    })
  })
