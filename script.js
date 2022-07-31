// Write your JavaScript code here!


window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
       let pilot = document.querySelector("input[name=pilotName]");
       let copilot = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoLevel = document.querySelector("input[name=cargoMass]");
       if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
          alert("All fields are required!");
       } else {
       formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
       };
    });
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (planets) {
       listedPlanets = planets;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
      const planet = pickPlanet(listedPlanets)
      addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image); // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

});