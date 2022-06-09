// MODEL

const fillLights = (selector, color, time) => {
    if (typeof selector === 'string' && typeof color === 'string' && typeof time === 'number') {
        let lights = document.querySelector(selector);
        return new Promise( (resolve, reject) => {
            if (lights) {
                setTimeout(() => {lights.style.backgroundColor = color}, time);
                resolve();
            }else {
                reject('Not A Valid DATA!');
            }
        })
    }
}














// CONTROLLER
const xmasLights = () => {
    fillLights('.lights-red','red',1000)
    .then(() => fillLights('.lights-green','green',2000))
    .then(() => fillLights('.lights-blue','blue',3000))
    .then(() => fillLights('.lights-blue','white',4000))
    .then(() => fillLights('.lights-green','white',5000))
    .then(() => fillLights('.lights-red','white',6000))
    .catch((err) => console.log(err));
}

setInterval(() => { 
    xmasLights();
}, 6000);

xmasLights();













// VIEW