const response = `{
    "title": "A New Hope", 
    "episode_id": 4, 
    "species": [
      "https://swapi.co/api/species/5/", 
      "https://swapi.co/api/species/3/", 
      "https://swapi.co/api/species/2/", 
      "https://swapi.co/api/species/1/", 
      "https://swapi.co/api/species/4/"
    ]
  }`;
const responseJs = JSON.parse(response);
const jsonresponse = document.querySelector("#jsonresponse");
const h1 = document.createElement('h1');
h1.innerText = responseJs.title;
jsonresponse.appendChild(h1);
const p = document.createElement('p');
p.innerText = `Episode ID: ${responseJs.episode_id}`;
jsonresponse.appendChild(p);
console.log(Object.getOwnPropertyNames(responseJs));
console.log(Object.keys(responseJs))
let index = 1;
responseJs.species.forEach(element => {
    let a = document.createElement('a');
    a.setAttribute('href',`${element}`);
    a.innerText = `link ${index}`;
    jsonresponse.appendChild(a);
    index++;    
});