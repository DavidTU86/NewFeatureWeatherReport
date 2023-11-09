import React from 'react';
import ReactDOM from 'react-dom/client';
import Activities from './NPSAPI.js';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Activities />
);*/

const activities = ReactDOM.createRoot(document.getElementById('activitiesDropdown'));
activities.render(
    <Activities />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
