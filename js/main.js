// import * as viskas from '../data/list.js'; nera6yti -viskas- geriau -allData-
//import { data } from '../data/list.js';

//import * as demo from '../data/demo.js';
//import { demoData, demoText, diff } from '../data/demo.js';

//console.log(viskas);
//console.log(data);
//console.log(text);
//console.log(sum);

//console.log(demo);


const ulDOM = document.querySelector('ul');


const data = fetch('https://dittamaz.github.io/44-grupe-fetch/data/users.json')
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        for (const users of data) {
            console.log(users);
        }
    });
/*let HTML = '';

for (const item of data) {
    HTML +=`<li>${item.id}) ${item.text}`;
}

ulDOM.innerHTML = HTML;*/