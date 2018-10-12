const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});


let button = document.querySelector('button');
button.addEventListener('click', () => fetchData())

function fetchData() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
      .then(json => addPerson(json.results[0]))
}

function addPerson (person) {
  let fullname = document.querySelector('#fullname')
  fullname.innerText = `${person.name.first} ${person.name.last}`
}
