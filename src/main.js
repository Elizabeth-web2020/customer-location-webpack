import './assets/main.css';
// import fetch from './scripts/fetch.js';

    
    const latitudeInput = document.querySelector('.latitude-input');
    const longitudeInput = document.querySelector('.longitude-input');
    const outputContent = document.querySelector('.output-content');

    const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: 'fsq3O66etPL8QuQ9YACs2MiQlM+PRaF1MyvD4PVHLVWRD9U='
    }
    };

    const getPlacesInfo = async function () {
        const response = await fetch('https://api.foursquare.com/v3/places/nearby?ll=48.46%2C35.04&limit=10', options);
        const res = await response.json();
        // console.log(res)
        return res;
        // .then(response => console.log(response))
        // .catch(err => console.error(`Error: ${err.message}`));
    }

    // getPlacesInfo();

    const outputLocations = async function () {


        let data = await getPlacesInfo();
        let id = 0;

        console.log(`data: ${data}`);

        outputContent.textContent = '';

        const places = data.results.map((obj) => {
            
            const place = document.createElement('div');

            const {name} = obj;

            place.innerHTML = `
                <div class="content-item" data-id="${++id}">${name}</div>
            `;
            return place;
        });

        outputContent.append(...places);
    }

    // fetch();

    console.log('Hello Webpack from main.js!');
    outputLocations();
    


