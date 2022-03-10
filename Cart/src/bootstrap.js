import faker from 'faker';

const mount = (el) => {
    const cartMessage = `<div> You have ${faker.random.number()} items in the cart.</div>`
    el.innerHTML = cartMessage;
}

// Case - 1 : When we are running our cart microfrontend in isolation
// Then, we are sure that document.querySelector("#dev-cart") will always give us an element
// In this case, we can simply attach our content to that div

// If our environment is development
if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-cart');

    // and we have an element with id dev-cart
    if(el) mount(el);
}

// Case - 2: When our cart are running in container app.
// Then we are not sure that we'll always find an element with id dev-cart
// In that case, we probably want the container app as how it can show our cart app.. Maybe on a user action..

export { mount };