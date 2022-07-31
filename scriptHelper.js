// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML =
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`

}

function validateInput(testInput) {
    String(testInput);
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(testInput) === true) {
    return "Not a Number";
   } else if (isNaN(testInput) === false) {
    return "Is a Number";
   };
};
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    myFetch();
    if (validateInput(pilot.value) === "Not a Number") {
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
    } else {
        alert("Invalid information");
    }
    if (validateInput(copilot.value) === "Not a Number") {
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    } else {
        alert("Invalid information");
    }
    if (validateInput(fuelLevel.value) === "Is a Number" && Number(fuelLevel.value) < 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
    } else if (validateInput(fuelLevel.value) === "Is a Number" && Number(fuelLevel.value) >= 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    } else {
        alert("Invalid information");
    }
    if (validateInput(cargoLevel.value) === "Is a Number" && Number(cargoLevel.value) > 10000) {
        list.style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
    } else if (validateInput(cargoLevel.value) === "Is a Number" && Number(cargoLevel.value) <= 10000) {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    } else {
        alert("Invalid information");
    }
    if (validateInput(fuelLevel.value) === "Is a Number" && Number(fuelLevel.value) >= 10000 && validateInput(cargoLevel.value) === 'Is a Number' && Number(cargoLevel.value) <= 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green";
    }
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) { 
        return response.json()
        }).then(function(planets){
            return planets;
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * (planets.length - 1));
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
