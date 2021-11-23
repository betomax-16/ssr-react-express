import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './component/app';

// const render = (Comp) => {
//     const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate
//     renderMethod(
//       <AppContainer>
//         <Comp />
//       </AppContainer>,
//       document.getElementById('root')
//     )
//   }
ReactDOM.render (
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
document.getElementById('root'));