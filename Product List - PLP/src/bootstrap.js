import faker from 'faker';

const mount = (el) => {
    let products = '';

    for(let i=0;i<10;i++){
        const name = faker.commerce.productName();
        products += `<div> ${name} </div>`
    }

    el.innerHTML = products
}

// Case - 1 : When we are running our products microfrontend in isolation
// Then, we are sure that document.querySelector("#dev-products") will always give us an element
// In this case, we can simply attach our content to that div

// If our environment is development
if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products');

    // and we have an element with id dev-products
    if(el) mount(el);
}

// Case - 2: When our products are running in container app.
// Then we are not sure that we'll always find an element with id dev-products
// In that case, we probably want the container app as how it can show our products app.. Maybe on a user action..

export { mount };