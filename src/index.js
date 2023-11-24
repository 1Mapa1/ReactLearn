import Store from "./Store.js";
import App from "./app.js";
import React from 'react';
import {createRoot} from 'react-dom/client';

const store = new Store({
    list: [
        {code: 1, title: "Название"},
        {code: 2, title: "Название"},
        {code: 3, title: "Название"},
        {code: 4, title: "Название"},
        {code: 5, title: "Название"},
        {code: 6, title: "Название"},
        {code: 7, title: "Название"},
    ]
});
const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
    root.render(<App store={store}/>);
});


root.render(<App store={store}/>);