import React from 'react'
import ReactDOM from 'react-dom'

// Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(<h1> Hi There !</h1>, el);
}

// If we are in dev mode and running this in isolation
// call mount immediately
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');

    if(devRoot) {
        mount(devRoot);
    }
}

// If we are running this from container 
// Then export mount function so that container app can call this mount fn
export { mount };