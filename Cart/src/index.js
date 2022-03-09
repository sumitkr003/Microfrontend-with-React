import faker from 'faker';

const cartMessage = `<div> You have ${faker.random.number()} items in the cart.</div>`

document.querySelector('#dev-cart').innerHTML = cartMessage;