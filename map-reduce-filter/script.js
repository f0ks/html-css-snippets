(function () {
  'use strict';

  // map
  // we need id's
  // What you need [20, 24, 56, 88]
  const officersIds = [
    {id: 20, name: 'Captain Piett'},
    {id: 24, name: 'General Veers'},
    {id: 56, name: 'Admiral Ozzel'},
    {id: 88, name: 'Commander Jerjerrod'}
  ].map(officer => officer.id);
  console.log('officersIds', officersIds);


  // reduce
  const population = [
    {
      city: "Chongqing",
      population: 30165500
    },
    {
      city: "Shanghai",
      population: 24183300
    },
    {
      city: "Beijing",
      population: 21707000
    },
    {
      city: "Lagos",
      population: 16060303
    },
    // ...etc
  ].reduce((accumulator, city) => {
    return accumulator + city.population;
  }, 0); // 0 is initial value
  console.log('Population', population);

  // filter

  let rebels = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ].filter((pilot) => pilot.faction === 'Rebels');
  console.log('rebels', rebels);


})();


