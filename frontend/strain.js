console.log("js Loaded")

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
    console.log(strain)
  })
