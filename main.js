const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const serviceInput = document.getElementById('service-input');
const dateInput = document.getElementById('date-input');
const bookingBtn = document.getElementById('bookings-list');
const bookinglist = document.querySelector('.bookings-list');

function getValue() {
  
  
}

function createlist() {
    let nameValue = nameInput.value;
    let dateValue = dateInput.value;
    let selectedValue = serviceInput.value;
    const li = document.createElement('li');
    li.innerHTML = `
       ${nameValue}, ${selectedValue} <br>
       ${dateValue}
    `;
    bookinglist.appendChild(li)
}
bookingBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    createlist();
    
})