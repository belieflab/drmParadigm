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

let Anger = {
    listNumber: 1,
    listA: [hate, temper, ire, happy, hatred, calm],
    listB: [rage, fury, wrath, fight, mean, emotion],
    lure: anger,
    highestAssociates1a: [temper, hatred],
    highestAssociates1b: [fury, mean]
};


// ... after you have defined all of your lists

let allLists = [Anger]; // need to ad all other lists to this array
// and randomize
let randomizedLists = jsPsych.randomization.repeat(allLists, 1);

let listA = [];
//pause
//tone
// some lure or a list1A higher associate

// congruent items
let congurentLure = Anger.lure;
let congruentHighestAssociate2 = Anger.highestAssociates1a[0];
let congruentHighestAssociate5 = Anger.highestAssociates1a[1];

// incongruent items

// keep looping through the randmoized list until there is no match between lures, leading to a truly incongruent lure 
while (randomizedLists[0].lure === Anger.lure) {
    randomizedLists.push(randomizedLists[0].shift)
}
let incongruentLuare = randomizedLists[0].lure;


// keep looping through the randmoized list until there is no match between lures, leading to a truly incongruent lure 
while (randomizedLists[0].lure === Anger.highestAssociates1a[0]) {
    randomizedLists.push(randomizedLists[0].shift)
}
let incongruentHighestAssociate2 = randomizedLists[0].highestAssociates1a[0];

// keep looping through the randmoized list until there is no match between lures, leading to a truly incongruent lure 
while (randomizedLists[0].lure === Anger.highestAssociates1a[1]) {
    randomizedLists.push(randomizedLists[0].shift)
}
let incongruentHighestAssociate5 = randomizedLists[0].highestAssociates1a[1];



// re-randomize list to keep things as random as possible
let randomizedLists = jsPsych.randomization.repeat(randomizedLists, 1);

let listB = [];
// pushed stimulus objects into expStim  
for (let i=0; i<51; i++) {
    listA.push({stimulus: shuffleStimForPrelikingPhase[i], data: {test_part:"initial_rating", stim:shuffleStimForPrelikingPhase[i].slice(8,12)}}); //creating csv file "baseline_ratings" with liking ratings data saved
    //use underscores for data fields and headers and camel case for script
  }


