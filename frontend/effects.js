const queryParams = new URLSearchParams(window.location.search)

const effectFilter = queryParams.get('search')
const effectName = queryParams.get('name')
const savedStrains = document.getElementById('strains-list')

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
      const li = document.createElement('li')
      

      li.innerHTML = `<a style='align-content: center;' 
      href='http://localhost:3001/strain.html?name=${strain.name}&effect=${effectName}'> Name: ${strain.name} || Race: ${strain.race}</a>`

      savedStrains.append(li)
      }else if(effectFilter === strain.race){
        const li = document.createElement('li')
        
      
        li.innerHTML = `<a style='align-content: center;' 
        href='http://localhost:3001/strain.html?name=${strain.name}&effect=${effectName}'> Name: ${strain.name} || Race: ${strain.race}</a>`
        
        savedStrains.append(li)
      }
    })
  })


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("strains-list");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

