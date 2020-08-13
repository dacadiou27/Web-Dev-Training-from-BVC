/*

//Single element selector
// 'document' allows to select things from the document
// 'getElementById()' method to select an element

// const form = document.getElementById('my-form'); 
// console.log(form);
console.log(document.getElementById('my-form'));

console.log(document.querySelector('.container')); // select class container
console.log(document.querySelector('h1'));  // if several h1 only selct the first one


// Multiple element selector
console.log(document.querySelectorAll('.item')); // select all the item class and return a node array

//console.log(document.getElementsByClassName('item')); //old and works only with class '.' not need because it is by default a class
//console.log(document.getElementsByTagName('li')); //old and works only with tags


const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//ul.remove(); // remove the list from the DOM
//ul.lastElementChild.remove('.items');// remove the last item  from the list in the DOM
ul.firstElementChild.textContent = 'Sports'; // edit the text of the first item  from the list in the DOM
ul.lastElementChild.textContent = 'Movies'; // edit the text of the first item  from the list in the DOM
ul.firstElementChild.innerHTML = '<h1>Hobbies</h1>'; // change the style and contetn of the first elelment in the list

const btn = document.querySelector('.btn'); //select the btn class and assign to a constant
btn.style.background = 'red'; // chage the style of the button

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = 'green'; // change the color on click
    document.querySelector('body').classList.add('bg-dark'); // add the class the bg dark on the body on click
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);

        //Clear field
        nameInput.value = '';
        emailInput.value = '';
    }
}

