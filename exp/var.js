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


// class List {
//     constructor(listNumber, listA, listB, prototype, highestAssociates, lowestAssociate) {
//         this.listNumber = listNumber;
//         this.listA = listA;
//         this.listB = listB;
//         this.prototype = prototype;
//         this.highestAssociates = highestAssociates;
//         this.lowestAssociate = lowestAssociate;
//     }
// }

// let Anger = new List(1,
//                     [hate, temper, ire, happy, hatred, calm],
//                     [rage, fury, wrath, fight, mean, emotion],
//                     anger,
//                     [mad, fear],
//                     enrage
//                     );

let Anger = {
    listNumber: 1,
    listA: [hate, temper, ire, happy, hatred, calm],
    listB: [rage, fury, wrath, fight, mean, emotion],
    prototype: anger,
    highestAssociates: [mad, fear],
    lowestAssociate: enrage,
};

let Army = {
    listNumber: 2,
    listA: [unitedStates, airForce, military, march, captain, uniform],
    listB: [rifle, draft, marines, infantry, war, pilot],
    prototype: army,
    highestAssociates: [navy, soldier],
    lowestAssociate: combat,
};


// ... after you have defined all of your lists

let allLists = [Anger, Army]; // need to ad all other lists to this array
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
    if (randomizedLists[0].prototype === Anger.prototype) {
        randomizedLists[0].shift;
    } else {
        //;
    }
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

// let listB = [];
// // pushed stimulus objects into expStim  
// for (let i=0; i<51; i++) {
//     listA.push({stimulus: shuffleStimForPrelikingPhase[i], data: {test_part:"initial_rating", stim:shuffleStimForPrelikingPhase[i].slice(8,12)}}); //creating csv file "baseline_ratings" with liking ratings data saved
//     //use underscores for data fields and headers and camel case for script
//   }


