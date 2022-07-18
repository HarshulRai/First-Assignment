const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Hello'; 
ul.firstElementChild.style.color = 'green';
ul.children[1].innerText = 'Brad';
ul.children[1].style.color = 'yellow';

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'Please enter all fields';
        
        setTimeout(() => msg.remove(), 10000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);

        console.log(nameInput.value);
        console.log(emailInput.value);
        

        nameInput.value = '';
        emailInput.value = '';
    }
}
