const fullname = document.getElementById('fullname');
console.log('CONTENT NOT YET LOADED!', fullname); // what will fullname evaluate to?

document.addEventListener('DOMContentLoaded', () => {
  console.log('CONTENT LOADED!');
});

let button = document.querySelector('button');
button.addEventListener('click', () => fetchData());

function fetchData () {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => addPerson(json.results[0]));
}

function addPerson (person) {
  console.log(person);
  let fullname = document.querySelector('#fullname');
  fullname.innerText = `${person.name.first} ${person.name.last}`;
  let email = document.querySelector('#email');
  email.innerText = person.email;
  let street = document.querySelector('#street');
  street.innerText = person.location.street;
  let city = document.querySelector('#city');
  city.innerText = person.location.city;
  let state = document.querySelector('#state');
  state.innerText = person.location.state;
  let postcode = document.querySelector('#postcode');
  postcode.innerText = person.location.postcode;
  let phone = document.querySelector('#phone');
  phone.innerText = person.phone;
  let cell = document.querySelector('#cell');
  cell.innerText = person.cell;
  let dob = document.querySelector('#date_of_birth');
  dob.innerText = `${person.dob.date.slice(5, 7)}/${person.dob.date.slice(8, 10)}/${person.dob.date.slice(0, 4)}`;
}
