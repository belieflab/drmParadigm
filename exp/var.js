// starts counting of trials at 1 to display in output file as trial
let trialIterator = 1;

// define all language for experiment

// define all variables in listNumber1 : Anger
const anger = 'anger';
const hate = 'hate';
const temper = 'temper';
const ire = 'ire';
const happy = 'happy';
const hatred = 'hatred';
const calm ='calm';
const rage = 'rage';
const fury = 'fury';
const wrath = 'wrath';
const fight = 'fight';
const mean = 'mean';
const emotion  = 'emotion';
const mad = 'mad';
const fear = 'fear';
const enrage = 'enrage';

let Anger = {
    listNumber: 1,
    listA: [hate, temper, ire, happy, hatred, calm],
    listB: [rage, fury, wrath, fight, mean, emotion],
    prototype: anger,
    highestAssociates: [mad, fear],
    lowestAssociate: enrage,
};

// define all variables in listNumber2 : Army
const unitedStates = 'United States';
const airForce = 'Air Force';
const military = "military";
const march = 'march';
const captain = 'captain';
const uniform = 'uniform';
const rifle = 'rifle';
const draft = 'draft';
const marines = 'Mmrines';
const infantry = 'infantry';
const war = 'war';
const pilot = 'pilot';
const army = 'army';
const navy = 'navy';
const soldier = 'soldier';
const combat = 'combat';

let Army = {
    listNumber: 2,
    listA: [unitedStates, airForce, military, march, captain, uniform],
    listB: [rifle, draft, marines, infantry, war, pilot],
    prototype: army,
    highestAssociates: [navy, soldier],
    lowestAssociate: combat,
};

// define all variables in listNumber3 : Black
const black = 'black';
const cat = 'cat';
const night = 'night';
const color = 'color';
const blue = 'blue';
const ink = 'ink';
const coal = 'coal';
const charred = 'charred';
const funeral = 'funeral';
const grief = 'grief';
const death = 'death';
const bottom = 'bottom';
const brown = 'brown'; 
const white = 'white';
const dark = 'dark';
const gray = 'gray'; 

let Black = {
    listNumber: 3,
    listA: [cat, night, color, blue, ink, coal],
    listB: [charred, funeral, grief, death, bottom, brown],
    prototype: black,
    highestAssociates: [white, dark],
    lowestAssociate: gray,
};

//Define variables for list 4:Bread
const bread = 'bread';
const eat = 'eat';
const rye = 'rye';
const milk = 'milk';
const jelly = 'jelly';
const crust = 'crust';
const wine = 'wine';
const  sandwich = 'sandwich';
const jam = 'jam';
const flour = 'flour';
const dough = 'dough';
const slice = 'slice';
const loaf = 'loaf';
const  butter = 'butter';
const  food = 'food';
const  toast = 'toast'; 

let  Bread = {
    listNumber: 4,
    listA: [eat, rye, milk, jelly, crust, wine],
    listB: [sandwich, jam, flour, dough, slice, loaf],
    prototype: bread,
    highestAssociates: [butter, food],
    lowestAssociate: toast,
};

//Define all variables for list 5: Car
const car  = 'car';
const train = 'train';
const  vehicle = 'vehicle';
const jeep = 'jeep';
const race = 'race';
const garage = 'garage';
const sedan = 'sedan';
const  automobile = 'automobile';
const drive = 'drive';
const ford = 'ford';
const keys = 'keys';
const highway = 'highway';
const van = 'van'; 
const truck = 'truck';
const bus = 'bus';
const taxi = 'taxi'; 

let Car = {
    listNumber: 5,
    listA: [train, vehicle, jeep, race, garage, sedan],
    listB: [automobile, drive, ford, keys, highway, van],
    prototype: car,
    highestAssociates: [truck, bus],
    lowestAssociate: taxi ,
};

//Define all variables for list 6: Chair
const chair = 'chair';
const legs = 'legs';
const couch = 'couch';
const recliner = 'recliner';
const wood = 'wood';
const swivel = 'swivel';
const sitting = 'sitting';
const seat = 'seat';
const desk = 'desk';
const sofa = 'sofa';
const cushion = 'cushion';
const stool = 'stool';
const rocking = 'rocking'; 
const table = 'table';
const sit = 'sit';
const bench = 'bench'; 

let Chair = {
    listNumber: 6,
    listA: [legs, couch, recliner, wood, swivel, sitting],
    listB: [seat, desk, sofa, cushion, stool, rocking],
    prototype: chair,
    highestAssociates: [table, sit],
    lowestAssociate: bench,
};

//Define all variables for list 7: City
const city = 'city';
const state = 'state';
const streets = 'streets';
const country = 'country';
const village = 'village';
const big = 'big';
const suburb = 'suburb';
const capital = 'capital';
const subway = 'subway';
const newYork = "New York";
const metropolis = 'metropolis';
const chicago = 'chicago';
const county = 'county'; 
const town = 'town';
const crowded = 'crowded';
const urban = 'urban'; 

let City = {
    listNumber: 7,
    listA: [state, streets, country, village, big, suburb],
    listB: [capital, subway, newYork, metropolis, chicago, county],
    prototype: city,
    highestAssociates: [town, crowded],
    lowestAssociate: urban,
};



// ... after you have defined all of your lists

let allLists = [Anger, Army, Black, Bread, Car, Chair, City]; // need to ad all other lists to this array
// and randomize
let randomizedLists = jsPsych.randomization.repeat(allLists, 1);

// let listA = [];
//pause
//tone
// some prototype or a list1A higher associate

// congruent items
let congruentPrototype = Anger.prototype;
let congruentHighestAssociate1 = Anger.highestAssociates[0];
let congruentHighestAssociate2 = Anger.highestAssociates[1];

// incongruent items

// keep looping through the randmoized list until there is no match between prototypes, leading to a truly incongruent prototype
// i=0;
// while (i < randomizedLists.length) {

    // i++;
// }
let incongruentPrototype = randomizedLists[0].prototype;


// // keep looping through the randmoized list until there is no match between prototypes, leading to a truly incongruent prototype 
// while (randomizedLists[0].prototype === Anger.highestAssociates[0]) {
//     randomizedLists.push(randomizedLists[0].shift)
// }
// let incongruentHighestAssociate2 = randomizedLists[0].highestAssociates[0];

// // keep looping through the randmoized list until there is no match between prototypes, leading to a truly incongruent prototype 
// while (randomizedLists[0].prototype === Anger.highestAssociates[1]) {
//     randomizedLists.push(randomizedLists[0].shift)
// }
// let incongruentHighestAssociate5 = randomizedLists[0].highestAssociates[1];



// re-randomize list to keep things as random as possible
randomizedLists = jsPsych.randomization.repeat(randomizedLists, 1);

let testTrial = [];
// pushes 6 items from listA
for (let i=0; i<Anger.listA.length; i++) {
    testTrial.push({stimulus: Anger.listA[i], data: {test_part:"test", stim: Anger.listA[i]}}); //creating csv file "baseline_ratings" with liking ratings data saved
    //use underscores for data fields and headers and camel case for script
}
testTrial.push({stimulus: "TONE1"}); // pushes 7th item
testTrial.push("prototypeDummy"); // pushes 8th item placeholder for prototype
testTrial.push("placeholder"); // pushes 9th item placeholder for TONE2



