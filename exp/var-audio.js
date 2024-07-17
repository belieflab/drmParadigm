"use strict";

// starts counting of trials at 1 to display in output file as trial
let trialIterator = 1;

var responseOptions =
    "1 Allergy&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp0 No Reaction <br><br> Hold response key to indicate confidence level.";

// feedback contrainer
let feedbackGenerator = '<p id="feedbackGenerator" style="color:black;"></p>';

// tracks total taps per trial
let totalConfidence = [0]; // must be 0 to compensate for participant should they miss first trial

// // user selection of allergy or no-allergy
let responseKey;

// progress bar container
let progressBar =
    '<div id="counter" class="w3-container" style="color:black"><div class="w3-light-grey"><div class="w3-grey" id="keyBar" style="height:24px;width:0%;"></div></div><br><div>';
let fillUp = '<p id="fillUp" style="color:black;"></p>';

// set the time remaining notification for participant
let timeRemaining =
    '<p id="timeRemaining" style="text-align:center; color:black;"></p>';

// define all language for experiment

//define tones that are used between list and target presentation and at ITI
const tone_1 = "stim/audio_tones/tone_1.mp3"; 
const tone_2 = "stim/audio_tones/tone_2.mp3"; 



//First, create words to be used in practice trials

const atom = "stim/audio_practice/atom.mp3"; //stimDecInstructions1.push("stim/audio_stimuli/africa.mp3");
const molecule = "stim/audio_practice/molecule.mp3";
const bond = "stim/audio_practice/bond.mp3";
const gas = "stim/audio_practice/gas.mp3";
const electron = "stim/audio_practice/electron.mp3";
const oxygen = "stim/audio_practice/oxygen.mp3";
const chemistry = "stim/audio_practice/chemistry.mp3";

const shark = "stim/audio_practice/shark.mp3";
const island = "stim/audio_practice/island.mp3";
const waves = "stim/audio_practice/waves.mp3";
const shrimp = "stim/audio_practice/shrimp.mp3";
const whale = "stim/audio_practice/whale.mp3";
const ocean = "stim/audio_practice/ocean.mp3";

let practiceOne = {
    listA: [atom, molecule, bond, gas, electron, oxygen],
    prototype: chemistry,
};

let practiceTwo = {
    listA: [shark, island, waves, shrimp, ocean, whale],
    prototype: ocean,
};

let practiceLists = [practiceOne, practiceTwo];

let practiceTrial1 = practiceLists[0];
let practiceTrial2 = practiceLists[1];

let practiceTrials = [];
// pushes 6 items from listA
for (let i = 0; i < practiceTrial1.listA.length; i++) {
    practiceTrials.push({
        stimulus: practiceTrial1.listA[i],
        duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "practice",
            stim: practiceTrial1.listA[i],
            drmTrial_type: "practice",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

//pushes tone 1
practiceTrials.push({stimulus: tone_1, duration: durationForListWords, data: {test_part:"practice", stim: "tone1", drmTrial_type:"practice"}, confidence: 'x'}); // pushes 7th item

//pushes target word 
practiceTrials.push({
    prompt: "Did you see the word ",
    stimulus: practiceTrial1.prototype,
    prompt_end: "?",
    duration: durationForTargetWords,
    response_ends_trial: false,
    data: {
        test_part: "practice",
        stim: practiceTrial1.prototype,
        drmTrial_type: "practice",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
});
//pushes tone 2 which is played at the end of a trial. 
practiceTrials.push({stimulus: tone_2, duration: fixationDuration, data: {test_part:"practice", stim: "tone2", drmTrial_type:"practice"}, confidence: 'x'}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < practiceTrial2.listA.length; i++) {
    practiceTrials.push({
        stimulus: practiceTrial2.listA[i],
        duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "practice",
            stim: practiceTrial2.listA[i],
            drmTrial_type: "practice",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

//pushes tone 1
practiceTrials.push({stimulus: tone_1, duration: durationForListWords, data: {test_part:"practice", stim: "tone1", drmTrial_type:"practice"}, confidence: 'x'}); // pushes 7th item

practiceTrials.push({
    prompt: "Did you see the word ",
    stimulus: practiceTrial2.prototype,
    prompt_end: "?",
    duration: durationForTargetWords,
    response_ends_trial: false,
    data: {
        test_part: "practice",
        stim: practiceTrial2.prototype,
        duration: durationForTargetWords,
        response_ends_trial: false,
        drmTrial_type: "practice",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype

//pushes tone 2 which is played at the end of a trial.. 
practiceTrials.push({stimulus: tone_2, duration: fixationDuration, data: {test_part:"practice", stim: "tone2", drmTrial_type:"practice"}, confidence: 'x'}); // pushes 9th item placeholder for TONE2



// define all variables in listNumber1 : Anger
const anger = "stim/audio_stimuli/anger.mp3";
const hate = "stim/audio_stimuli/hate.mp3";
const temper = "stim/audio_stimuli/temper.mp3";
const ire = "stim/audio_stimuli/ire.mp3";
const happy = "stim/audio_stimuli/happy.mp3";
const hatred = "stim/audio_stimuli/hatred.mp3";
const calm = "stim/audio_stimuli/calm.mp3";
const rage = "stim/audio_stimuli/rage.mp3";
const fury = "stim/audio_stimuli/fury.mp3";
const wrath = "stim/audio_stimuli/wrath.mp3";
const fight = "stim/audio_stimuli/fight.mp3";
const mean = "stim/audio_stimuli/mean.mp3";
const emotion = "stim/audio_stimuli/emotion.mp3";
const mad = "stim/audio_stimuli/mad.mp3";
const fear = "stim/audio_stimuli/fear.mp3";
const enrage = "stim/audio_stimuli/enrage.mp3";

let Anger = {
    listNumber: 1,
    listA: [hate, temper, ire, happy, hatred, calm],
    listB: [rage, fury, wrath, fight, mean, emotion],
    prototype: anger,
    highestAssociates: [mad, fear],
    lowestAssociate: enrage,
};

// define all variables in listNumber2 : Army
const unitedStates = "stim/audio_stimuli/unitedStates.mp3";
const airForce = "stim/audio_stimuli/airForce.mp3";
const military = "stim/audio_stimuli/military.mp3";
const march = "stim/audio_stimuli/march.mp3";
const captain = "stim/audio_stimuli/captain.mp3";
const uniform = "stim/audio_stimuli/uniform.mp3";
const rifle = "stim/audio_stimuli/rifle.mp3";
const draft = "stim/audio_stimuli/draft.mp3";
const marines = "stim/audio_stimuli/marines.mp3";
const infantry = "stim/audio_stimuli/infantry.mp3";
const war = "stim/audio_stimuli/war.mp3";
const pilot = "stim/audio_stimuli/pilot.mp3";
const army = "stim/audio_stimuli/army.mp3";
const navy = "stim/audio_stimuli/navy.mp3";
const soldier = "stim/audio_stimuli/soldier.mp3";
const combat = "stim/audio_stimuli/combat.mp3";

let Army = {
    listNumber: 2,
    listA: [unitedStates, airForce, military, march, captain, uniform],
    listB: [rifle, draft, marines, infantry, war, pilot],
    prototype: army,
    highestAssociates: [navy, soldier],
    lowestAssociate: combat,
};

// define all variables in listNumber3 : Black
const black = "stim/audio_stimuli/black.mp3";
const cat = "stim/audio_stimuli/cat.mp3";
const night = "stim/audio_stimuli/night.mp3";
const color = "stim/audio_stimuli/color.mp3";
const blue = "stim/audio_stimuli/blue.mp3";
const ink = "stim/audio_stimuli/ink.mp3";
const coal = "stim/audio_stimuli/coal.mp3";
const charred = "stim/audio_stimuli/charred.mp3";
const funeral = "stim/audio_stimuli/funeral.mp3";
const grief = "stim/audio_stimuli/grief.mp3";
const death = "stim/audio_stimuli/death.mp3";
const bottom = "stim/audio_stimuli/bottom.mp3";
const brown = "stim/audio_stimuli/brown.mp3";
const white = "stim/audio_stimuli/white.mp3";
const dark = "stim/audio_stimuli/dark.mp3";
const gray = "stim/audio_stimuli/gray.mp3";

let Black = {
    listNumber: 3,
    listA: [cat, night, color, blue, ink, coal],
    listB: [charred, funeral, grief, death, bottom, brown],
    prototype: black,
    highestAssociates: [white, dark],
    lowestAssociate: gray,
};

//Define variables for list 4:Bread
const bread = "stim/audio_stimuli/bread.mp3";
const eat = "stim/audio_stimuli/eat.mp3";
const rye = "stim/audio_stimuli/rye.mp3";
const milk = "stim/audio_stimuli/milk.mp3";
const jelly = "stim/audio_stimuli/jelly.mp3";
const crust = "stim/audio_stimuli/crust.mp3";
const wine = "stim/audio_stimuli/wine.mp3";
const sandwich = "stim/audio_stimuli/sandwich.mp3";
const jam = "stim/audio_stimuli/jam.mp3";
const flour = "stim/audio_stimuli/flour.mp3";
const dough = "stim/audio_stimuli/dough.mp3";
const slice = "stim/audio_stimuli/slice.mp3";
const loaf = "stim/audio_stimuli/loaf.mp3";
const butter = "stim/audio_stimuli/butter.mp3";
const food = "stim/audio_stimuli/food.mp3";
const toast = "stim/audio_stimuli/toast.mp3";

let Bread = {
    listNumber: 4,
    listA: [eat, rye, milk, jelly, crust, wine],
    listB: [sandwich, jam, flour, dough, slice, loaf],
    prototype: bread,
    highestAssociates: [butter, food],
    lowestAssociate: toast,
};

//Define all variables for list 5: Car
const car = "stim/audio_stimuli/car.mp3";
const train = "stim/audio_stimuli/train.mp3";
const vehicle = "stim/audio_stimuli/vehicle.mp3";
const jeep = "stim/audio_stimuli/jeep.mp3";
const race = "stim/audio_stimuli/race.mp3";
const garage = "stim/audio_stimuli/garage.mp3";
const sedan = "stim/audio_stimuli/sedan.mp3";
const automobile = "stim/audio_stimuli/automobile.mp3";
const drive = "stim/audio_stimuli/drive.mp3";
const ford = "stim/audio_stimuli/ford.mp3";
const keys = "stim/audio_stimuli/keys.mp3";
const highway = "stim/audio_stimuli/highway.mp3";
const van = "stim/audio_stimuli/van.mp3";
const truck = "stim/audio_stimuli/truck.mp3";
const bus = "stim/audio_stimuli/bus.mp3";
const taxi = "stim/audio_stimuli/taxi.mp3";

let Car = {
    listNumber: 5,
    listA: [train, vehicle, jeep, race, garage, sedan],
    listB: [automobile, drive, ford, keys, highway, van],
    prototype: car,
    highestAssociates: [truck, bus],
    lowestAssociate: taxi,
};

//Define all variables for list 6: Chair
const chair = "stim/audio_stimuli/chair.mp3";
const legs = "stim/audio_stimuli/legs.mp3";
const couch = "stim/audio_stimuli/couch.mp3";
const recliner = "stim/audio_stimuli/recliner.mp3";
const wood = "stim/audio_stimuli/wood.mp3";
const swivel = "stim/audio_stimuli/swivel.mp3";
const sitting = "stim/audio_stimuli/sitting.mp3";
const seat = "stim/audio_stimuli/seat.mp3";
const desk = "stim/audio_stimuli/desk.mp3";
const sofa = "stim/audio_stimuli/sofa.mp3";
const cushion = "stim/audio_stimuli/cushion.mp3";
const stool = "stim/audio_stimuli/stool.mp3";
const rocking = "stim/audio_stimuli/rocking.mp3";
const table = "stim/audio_stimuli/table.mp3";
const sit = "stim/audio_stimuli/sit.mp3";
const bench = "stim/audio_stimuli/bench.mp3";

let Chair = {
    listNumber: 6,
    listA: [legs, couch, recliner, wood, swivel, sitting],
    listB: [seat, desk, sofa, cushion, stool, rocking],
    prototype: chair,
    highestAssociates: [table, sit],
    lowestAssociate: bench,
};

//Define all variables for list 7: City
const city = "stim/audio_stimuli/city.mp3";
const state = "stim/audio_stimuli/state.mp3";
const streets = "stim/audio_stimuli/streets.mp3";
const country = "stim/audio_stimuli/country.mp3";
const village = "stim/audio_stimuli/village.mp3";
const big = "stim/audio_stimuli/big.mp3";
const suburb = "stim/audio_stimuli/suburb.mp3";
const capital = "stim/audio_stimuli/capital.mp3";
const subway = "stim/audio_stimuli/subway.mp3";
const newYork = "stim/audio_stimuli/newYork.mp3";
const metropolis = "stim/audio_stimuli/metropolis.mp3";
const chicago = "stim/audio_stimuli/chicago.mp3";
const county = "stim/audio_stimuli/county.mp3";
const town = "stim/audio_stimuli/town.mp3";
const crowded = "stim/audio_stimuli/crowded.mp3";
const urban = "stim/audio_stimuli/urban.mp3";

let City = {
    listNumber: 7,
    listA: [state, streets, country, village, big, suburb],
    listB: [capital, subway, newYork, metropolis, chicago, county],
    prototype: city,
    highestAssociates: [town, crowded],
    lowestAssociate: urban,
};

const cold = "stim/audio_stimuli/cold.mp3";
const warm = "stim/audio_stimuli/warm.mp3";
const ice = "stim/audio_stimuli/ice.mp3";
const frigid = "stim/audio_stimuli/frigid.mp3";
const heat = "stim/audio_stimuli/heat.mp3";
const freeze = "stim/audio_stimuli/freeze.mp3";
const shiver = "stim/audio_stimuli/shiver.mp3";
const winter = "stim/audio_stimuli/winter.mp3";
const wet = "stim/audio_stimuli/wet.mp3";
const chilly = "stim/audio_stimuli/chilly.mp3";
const weather = "stim/audio_stimuli/weather.mp3";
const air = "stim/audio_stimuli/air.mp3";
const arctic = "stim/audio_stimuli/arctic.mp3";
const hot = "stim/audio_stimuli/hot.mp3";
const snow = "stim/audio_stimuli/snow.mp3";
const frost = "stim/audio_stimuli/frost.mp3";

let Cold = {
    listNumber: 8,
    listA: [warm, ice, frigid, heat, freeze, shiver],
    listB: [winter, wet, chilly, weather, air, arctic],
    prototype: cold,
    highestAssociates: [hot, snow],
    lowestAssociate: frost,
};
//Define all variables for list 9: Cup
const cup = "stim/audio_stimuli/cup.mp3";
const tea = "stim/audio_stimuli/tea.mp3";
const coaster = "stim/audio_stimuli/coaster.mp3";
const handle = "stim/audio_stimuli/handle.mp3";
const straw = "stim/audio_stimuli/straw.mp3";
const soup = "stim/audio_stimuli/soup.mp3";
const drink = "stim/audio_stimuli/drink.mp3";
const measuring = "stim/audio_stimuli/measuring.mp3";
const lid = "stim/audio_stimuli/lid.mp3";
const coffee = "stim/audio_stimuli/coffee.mp3";
const goblet = "stim/audio_stimuli/goblet.mp3";
const stein = "stim/audio_stimuli/stein.mp3";
const plastic = "stim/audio_stimuli/plastic.mp3";
const mug = "stim/audio_stimuli/mug.mp3";
const saucer = "stim/audio_stimuli/saucer.mp3";
const sip = "stim/audio_stimuli/sip.mp3";

let Cup = {
    listNumber: 9,
    listA: [tea, coaster, handle, straw, soup, drink],
    listB: [measuring, lid, coffee, goblet, stein, plastic],
    prototype: cup,
    highestAssociates: [mug, saucer],
    lowestAssociate: sip,
};

//Define all variables for list 10: Doctor
const doctor = "stim/audio_stimuli/doctor.mp3";
const lawyer = "stim/audio_stimuli/lawyer.mp3";
const health = "stim/audio_stimuli/health.mp3";
const dentist = "stim/audio_stimuli/dentist.mp3";
const ill = "stim/audio_stimuli/ill.mp3";
const office = "stim/audio_stimuli/office.mp3";
const surgeon = "stim/audio_stimuli/surgeon.mp3";
const medicine = "stim/audio_stimuli/medicine.mp3";
const hospital = "stim/audio_stimuli/hospital.mp3";
const physician = "stim/audio_stimuli/physician.mp3";
const patient = "stim/audio_stimuli/patient.mp3";
const stethoscope = "stim/audio_stimuli/stethoscope.mp3";
const clinic = "stim/audio_stimuli/clinic.mp3";
const nurse = "stim/audio_stimuli/nurse.mp3";
const sick = "stim/audio_stimuli/sick.mp3";
const cure = "stim/audio_stimuli/cure.mp3";

let Doctor = {
    listNumber: 10,
    listA: [lawyer, health, dentist, ill, office, surgeon],
    listB: [medicine, hospital, physician, patient, stethoscope, clinic],
    prototype: doctor,
    highestAssociates: [nurse, sick],
    lowestAssociate: cure,
};

//Define all variables for list 11: Flag
const flag = "stim/audio_stimuli/flag.mp3";
const symbol = "stim/audio_stimuli/symbol.mp3";
const anthem = "stim/audio_stimuli/anthem.mp3";
const pole = "stim/audio_stimuli/pole.mp3";
const raised = "stim/audio_stimuli/raised.mp3";
const checkered = "stim/audio_stimuli/checkered.mp3";
const sign = "stim/audio_stimuli/sign.mp3";
const stars = "stim/audio_stimuli/stars.mp3";
const stripes = "stim/audio_stimuli/stripes.mp3";
const wave = "stim/audio_stimuli/wave.mp3";
const national = "stim/audio_stimuli/national.mp3";
const emblem = "stim/audio_stimuli/emblem.mp3";
const freedom = "stim/audio_stimuli/freedom.mp3";
const banner = "stim/audio_stimuli/banner.mp3";
const american = "stim/audio_stimuli/american.mp3";
const pendant = "stim/audio_stimuli/pendant.mp3";

let Flag = {
    listNumber: 11,
    listA: [symbol, anthem, pole, raised, checkered, sign],
    listB: [stars, stripes, wave, national, emblem, freedom],
    prototype: flag,
    highestAssociates: [banner, american],
    lowestAssociate: pendant,
};

//Define all variables for list 12: Foot
const foot = "stim/audio_stimuli/foot.mp3";
const toe = "stim/audio_stimuli/toe.mp3";
const sandals = "stim/audio_stimuli/sandals.mp3";
const yard = "stim/audio_stimuli/yard.mp3";
const ankle = "stim/audio_stimuli/ankle.mp3";
const boot = "stim/audio_stimuli/boot.mp3";
const sock = "stim/audio_stimuli/sock.mp3";
const kick = "stim/audio_stimuli/kick.mp3";
const soccer = "stim/audio_stimuli/soccer.mp3";
const walk = "stim/audio_stimuli/walk.mp3";
const arm = "stim/audio_stimuli/arm.mp3";
const inch = "stim/audio_stimuli/inch.mp3";
const knee = "stim/audio_stimuli/knee.mp3";
const shoe = "stim/audio_stimuli/shoe.mp3";
const hand =  "stim/audio_stimuli/hand.mp3";
const mouth = "stim/audio_stimuli/mouth.mp3";

let Foot = {
    listNumber: 12,
    listA: [toe, sandals, yard, ankle, boot, sock],
    listB: [kick, soccer, walk, arm, inch, knee],
    prototype: foot,
    highestAssociates: [shoe, hand],
    lowestAssociate: mouth,
};

//Define all variables for list 13: Fruit
const fruit = "stim/audio_stimuli/fruit.mp3";
const orange = "stim/audio_stimuli/orange.mp3";
const citrus = "stim/audio_stimuli/citrus.mp3";
const pear = "stim/audio_stimuli/pear.mp3";
const berry = "stim/audio_stimuli/berry.mp3";
const basket = "stim/audio_stimuli/basket.mp3";
const salad = "stim/audio_stimuli/salad.mp3";
const kiwi = "stim/audio_stimuli/kiwi.mp3";
const ripe = "stim/audio_stimuli/ripe.mp3";
const banana = "stim/audio_stimuli/banana.mp3";
const cherry = "stim/audio_stimuli/cherry.mp3";
const juice = "stim/audio_stimuli/juice.mp3";
const bowl = "stim/audio_stimuli/bowl.mp3";
const apple = "stim/audio_stimuli/apple.mp3";
const vegetable = "stim/audio_stimuli/vegetable.mp3";
const cocktail = "stim/audio_stimuli/cocktail.mp3";

let Fruit = {
    listNumber: 13,
    listA: [orange, citrus, pear, berry, basket, salad],
    listB: [kiwi, ripe, banana, cherry, juice, bowl],
    prototype: fruit,
    highestAssociates: [apple, vegetable],
    lowestAssociate: cocktail,
};

//Define all variables for list 14: Girl
const girl = "stim/audio_stimuli/girl.mp3";
const female = "stim/audio_stimuli/female.mp3";
const dress = "stim/audio_stimuli/dress.mp3";
const hair = "stim/audio_stimuli/hair.mp3";
const dance = "stim/audio_stimuli/dance.mp3";
const cute = "stim/audio_stimuli/cute.mp3";
const aunt = "stim/audio_stimuli/aunt.mp3";
const young = "stim/audio_stimuli/young.mp3";
const pretty = "stim/audio_stimuli/pretty.mp3";
const niece = "stim/audio_stimuli/niece.mp3";
const beautiful = "stim/audio_stimuli/beautiful.mp3";
const outing = "stim/audio_stimuli/date.mp3";
const daughter = "stim/audio_stimuli/daughter.mp3";
const boy = "stim/audio_stimuli/boy.mp3";
const dolls = "stim/audio_stimuli/dolls.mp3";
const sister = "stim/audio_stimuli/sister.mp3";

let Girl = {
    listNumber: 14,
    listA: [female, dress, hair, dance, cute, aunt],
    listB: [young, pretty, niece, beautiful, outing, daughter],
    prototype: girl,
    highestAssociates: [boy, dolls],
    lowestAssociate: sister,
};

//Define all variables for list 15: High
const high = "stim/audio_stimuli/high.mp3";
const up = "stim/audio_stimuli/up.mp3";
const tower = "stim/audio_stimuli/tower.mp3";
const above = "stim/audio_stimuli/above.mp3";
const noon = "stim/audio_stimuli/noon.mp3";
const sky = "stim/audio_stimuli/sky.mp3";
const airplane = "stim/audio_stimuli/airplane.mp3";
const tall = "stim/audio_stimuli/tall.mp3";
const jump = "stim/audio_stimuli/jump.mp3";
const building = "stim/audio_stimuli/building.mp3";
const cliff = "stim/audio_stimuli/cliff.mp3";
const over = "stim/audio_stimuli/over.mp3";
const dive = "stim/audio_stimuli/dive.mp3";
const low = "stim/audio_stimuli/low.mp3";
const clouds = "stim/audio_stimuli/clouds.mp3";
const elevate = "stim/audio_stimuli/elevate.mp3";

let High = {
    listNumber: 15,
    listA: [up, tower, above, noon, sky, airplane],
    listB: [tall, jump, building, cliff, over, dive],
    prototype: high,
    highestAssociates: [low, clouds],
    lowestAssociate: elevate,
};

//Define all variables for list 16: King
const king = "stim/audio_stimuli/king.mp3";
const crown = "stim/audio_stimuli/crown.mp3";
const george = "stim/audio_stimuli/george.mp3";
const palace = "stim/audio_stimuli/palace.mp3";
const chess = "stim/audio_stimuli/chess.mp3";
const subjects = "stim/audio_stimuli/subjects.mp3";
const royal = "stim/audio_stimuli/royal.mp3";
const prince = "stim/audio_stimuli/prince.mp3";
const dictator = "stim/audio_stimuli/dictator.mp3";
const throne = "stim/audio_stimuli/throne.mp3";
const rule = "stim/audio_stimuli/rule.mp3";
const monarch = "stim/audio_stimuli/monarch.mp3";
const leader = "stim/audio_stimuli/leader.mp3";
const queen = "stim/audio_stimuli/queen.mp3";
const england = "stim/audio_stimuli/england.mp3";
const reign = "stim/audio_stimuli/reign.mp3";

let King = {
    listNumber: 16,
    listA: [crown, george, palace, chess, subjects, royal],
    listB: [prince, dictator, throne, rule, monarch, leader],
    prototype: king,
    highestAssociates: [queen, england],
    lowestAssociate: reign,
};

//Define all variables for list 17: Lion
const lion = "stim/audio_stimuli/lion.mp3";
const jungle = "stim/audio_stimuli/jungle.mp3";
const den = "stim/audio_stimuli/den.mp3";
const africa = "stim/audio_stimuli/africa.mp3";
const cage = "stim/audio_stimuli/cage.mp3";
const roar = "stim/audio_stimuli/roar.mp3";
const bears = "stim/audio_stimuli/bears.mp3";
const tamer = "stim/audio_stimuli/tamer.mp3";
const cub =  "stim/audio_stimuli/cub.mp3";
const mane = "stim/audio_stimuli/mane.mp3";
const feline = "stim/audio_stimuli/feline.mp3";
const fierce = "stim/audio_stimuli/fierce.mp3";
const hunt = "stim/audio_stimuli/hunt.mp3";
const tiger = "stim/audio_stimuli/tiger.mp3";
const circus = "stim/audio_stimuli/circus.mp3";
const pride = "stim/audio_stimuli/pride.mp3";

let Lion = {
    listNumber: 17,
    listA: [jungle, den, africa, cage, roar, bears],
    listB: [tamer, cub, mane, feline, fierce, hunt],
    prototype: lion,
    highestAssociates: [tiger, circus],
    lowestAssociate: pride,
};

//Define all variables for list 18: Man
const man = "man";
const uncle = "uncle";
const mouse = "mouse";
const father = "father";
const friend = "friend";
const person = "person";
const muscle = "muscle";
const lady = "lady";
const male = "male";
const strong = "strong";
const beard = "beard";
const handsome = "handsome";
const suit = "suit";
const woman = "woman";
const husband = "husband";
const old = "old";

let Man = {
    listNumber: 18,
    listA: [uncle, mouse, father, friend, person, muscle],
    listB: [lady, male, strong, beard, handsome, suit],
    prototype: man,
    highestAssociates: [woman, husband],
    lowestAssociate: old,
};

//Define all variables for list 19: Mountain
const mountain = "mountain";
const climb = "climb";
const top2 = "top2";
const peak = "peak";
const glacier = "glacier";
const bike = "bike";
const range = "range";
const summit = "summit";
const molehill = "molehill";
const plain = "plain";
const goat = "goat";
const climber = "climber";
const steep = "steep";
const hill = "hill";
const valley = "valley";
const ski = "ski";

let Mountain = {
    listNumber: 19,
    listA: [climb, top2, peak, glacier, bike, range],
    listB: [summit, molehill, plain, goat, climber, steep],
    prototype: mountain,
    highestAssociates: [hill, valley],
    lowestAssociate: ski,
};

//Define all variables for list 20: Music
const music = "music";
const piano = "piano";
const radio = "radio";
const melody = "melody";
const concert = "concert";
const symphony = "symphony";
const orchestra = "orchestra";
const sing = "sing";
const band = "band";
const horn = "horn";
const instrument = "instrument";
const jazz = "jazz";
const art = "art";
const note = "note";
const sound = "sound";
const rhythm = "rhythm";

let Music = {
    listNumber: 20,
    listA: [piano, radio, melody, concert, symphony, orchestra],
    listB: [sing, band, horn, instrument, jazz, art],
    prototype: music,
    highestAssociates: [note, sound],
    lowestAssociate: rhythm,
};

//Define all variables for list 21: Needle
const needle = "needle";
const eye = "eye";
const sharp = "sharp";
const prick = "prick";
const haystack = "haystack";
const hurt = "hurt";
const syringe = "syringe";
const sewing = "sewing";
const point = "point";
const thimble = "thimble";
const thorn = "thorn";
const injection = "injection";
const cloth = "cloth";
const thread = "thread";
const pin = "pin";
const knitting = "knitting";

let Needle = {
    listNumber: 21,
    listA: [eye, sharp, prick, haystack, hurt, syringe],
    listB: [sewing, point, thimble, thorn, injection, cloth],
    prototype: needle,
    highestAssociates: [thread, pin],
    lowestAssociate: knitting,
};

//Define all variables for list 22: Pen
const pen = "pen";
const fountain = "fountain";
const quill = "quill";
const bic = "bic";
const crayon = "crayon";
const tip = "tip";
const red = "red";
const leak = "leak";
const felt = "felt";
const scribble = "scribble";
const cross = "cross";
const marker = "marker";
const cap = "cap";
const pencil = "pencil";
const write = "write";
const letter = "letter";

let Pen = {
    listNumber: 22,
    listA: [fountain, quill, bic, crayon, tip, red],
    listB: [leak, felt, scribble, cross, marker, cap],
    prototype: pen,
    highestAssociates: [pencil, write],
    lowestAssociate: letter,
};

//Define all variables for list 23: River
const river = "river";
const lake = "lake";
const boat = "boat";
const swim = "swim";
const run = "run";
const creek = "creek";
const fish = "fish";
const mississippi = "mississippi";
const tide = "tide";
const flow = "flow";
const barge = "barge";
const brook = "brook";
const bridge = "bridge";
const water = "water";
const stream = "stream";
const winding = "winding";

let River = {
    listNumber: 23,
    listA: [lake, boat, swim, run, creek, fish],
    listB: [mississippi, tide, flow, barge, brook, bridge],
    prototype: river,
    highestAssociates: [water, stream],
    lowestAssociate: winding,
};

//Define all variables for list 24: Rough
const rough = "rough";
const road = "road";
const sandpaper = "sandpaper";
const ready = "ready";
const uneven = "uneven";
const rugged = "rugged";
const boards = "boards";
const tough = "tough";
const jagged = "jagged";
const coarse = "coarse";
const riders = "riders";
const sand = "sand";
const ground = "ground";
const smooth = "smooth";
const bumpy = "bumpy";
const gravel = "gravel";

let Rough = {
    listNumber: 24,
    listA: [road, sandpaper, ready, uneven, rugged, boards],
    listB: [tough, jagged, coarse, riders, sand, ground],
    prototype: rough,
    highestAssociates: [smooth, bumpy],
    lowestAssociate: gravel,
};

//Define all variables for list 25: Rubber
const rubber = "rubber";
const gloves = "gloves";
const ball = "ball";
const springy = "springy";
const galoshes = "galoshes";
const latex = "latex";
const flexible = "flexible";
const tire = "tire";
const eraser = "eraser";
const foam = "foam";
const soles = "soles";
const glue = "glue";
const resilient = "resilient";
const elastic = "elastic";
const bounce = "bounce";
const stretch = "stretch";

let Rubber = {
    listNumber: 25,
    listA: [gloves, ball, springy, galoshes, latex, flexible],
    listB: [tire, eraser, foam, soles, glue, resilient],
    prototype: rubber,
    highestAssociates: [elastic, bounce],
    lowestAssociate: stretch,
};

//Define all variables for list 26: Shirt
const shirt = "shirt";
const pants = "pants";
const button = "button";
const iron = "iron";
const collar = "collar";
const pocket = "pocket";
const belt = "belt";
const tie = "tie";
const shorts = "shorts";
const polo = "polo";
const vest = "vest";
const jersey = "jersey";
const linen = "linen";
const blouse = "blouse";
const sleeves = "sleeves";
const cuffs = "cuffs";

let Shirt = {
    listNumber: 26,
    listA: [pants, button, iron, collar, pocket, belt],
    listB: [tie, shorts, polo, vest, jersey, linen],
    prototype: shirt,
    highestAssociates: [blouse, sleeves],
    lowestAssociate: cuffs,
};

//Define all variables for list 27: Sleep
const sleep = "sleep";
const awake = "awake";
const dream = "dream";
const snooze = "snooze";
const doze = "doze";
const snore = "snore";
const peace = "peace";
const tired = "tired";
const wake = "wake";
const blanket = "blanket";
const slumber = "slumber";
const nap = "nap";
const yawn = "yawn";
const bed = "bed";
const rest = "rest";
const drowsy = "drowsy";

let Sleep = {
    listNumber: 27,
    listA: [awake, dream, snooze, doze, snore, peace],
    listB: [tired, wake, blanket, slumber, nap, yawn],
    prototype: sleep,
    highestAssociates: [bed, rest],
    lowestAssociate: drowsy,
};

//Define all variables for list 28: Slow
const slow = "slow";
const stop = "stop";
const snail = "snail";
const delay = "delay";
const turtle = "turtle";
const speed = "speed";
const sluggish = "sluggish";
const listless = "listless";
const cautious = "cautious";
const traffic = "traffic";
const hesitant = "hesitant";
const quick = "quick";
const wait = "wait";
const fast = "fast";
const lethargic = "lethargic";
const molasses = "molasses";

let Slow = {
    listNumber: 28,
    listA: [stop, snail, delay, turtle, speed, sluggish],
    listB: [listless, cautious, traffic, hesitant, quick, wait],
    prototype: slow,
    highestAssociates: [fast, lethargic],
    lowestAssociate: molasses,
};

//Define all variables for list 29: Smell
const smell = "smell";
const sniff = "sniff";
const hear = "hear";
const nostril = "nostril";
const scent = "scent";
const stench = "stench";
const perfume = "perfume";
const aroma = "aroma";
const see = "see";
const whiff = "whiff";
const reek = "reek";
const fragrance = "fragrance";
const salts = "salts";
const nose = "nose";
const breathe = "breathe";
const rose = "rose";

let Smell = {
    listNumber: 29,
    listA: [sniff, hear, nostril, scent, stench, perfume],
    listB: [aroma, see, whiff, reek, fragrance, salts],
    prototype: smell,
    highestAssociates: [nose, breathe],
    lowestAssociate: rose,
};

//Define all variables for list 30: Smoke
const smoke = "smoke";
const blaze = "blaze";
const pollution = "pollution";
const cigar = "cigar";
const fire = "fire";
const stink = "stink";
const lungs = "lungs";
const billows = "billows";
const ashes = "ashes";
const chimney = "chimney";
const tobacco = "tobacco";
const pipe = "pipe";
const flames = "flames";
const cigarette = "cigarette";
const puff = "puff";
const stain = "stain";

let Smoke = {
    listNumber: 30,
    listA: [blaze, pollution, cigar, fire, stink, lungs],
    listB: [billows, ashes, chimney, tobacco, pipe, flames],
    prototype: smoke,
    highestAssociates: [cigarette, puff],
    lowestAssociate: stain,
};

//Define all variables for list 31: Soft
const soft = "soft";
const pillow = "pillow";
const loud = "loud";
const fur = "fur";
const fluffy = "fluffy";
const furry = "furry";
const kitten = "kitten";
const plush = "plush";
const cotton = "cotton";
const touch = "touch";
const feather = "feather";
const downy = "downy";
const skin = "skin";
const hard = "hard";
const light = "light";
const tender = "tender";

let Soft = {
    listNumber: 31,
    listA: [pillow, loud, fur, fluffy, furry, kitten],
    listB: [plush, cotton, touch, feather, downy, skin],
    prototype: soft,
    highestAssociates: [hard, light],
    lowestAssociate: tender,
};

//Define all variables for list 32: Spider
const spider = "spider";
const big2 = "big2";
const fly = "fly";
const crawl = "crawl";
const poison = "poison";
const creepy = "creepy";
const ugly = "ugly";
const fright = "fright";
const arachnid = "arachnid";
const tarantula = "tarantula";
const bite = "bite";
const animal = "animal";
const feelers = "feelers";
const web = "web";
const insect = "insect";
const small = "small";

let Spider = {
    listNumber: 32,
    listA: [big2, fly, crawl, poison, creepy, ugly],
    listB: [fright, arachnid, tarantula, bite, animal, feelers],
    prototype: spider,
    highestAssociates: [web, insect],
    lowestAssociate: small,
};

//Define all variables for list 33: Sweet
const sweet = "sweet";
const sugar = "sugar";
const good = "good";
const tooth = "tooth";
const honey = "honey";
const chocolate = "chocolate";
const cake = "cake";
const bitter = "bitter";
const taste = "taste";
const nice = "nice";
const soda = "soda";
const heart = "heart";
const tart = "tart";
const sour = "sour";
const candy = "candy";
const pie = "pie";

let Sweet = {
    listNumber: 33,
    listA: [sugar, good, tooth, honey, chocolate, cake],
    listB: [bitter, taste, nice, soda, heart, tart],
    prototype: sweet,
    highestAssociates: [sour, candy],
    lowestAssociate: pie,
};

//Define all variables for list 34: Thief
const thief = "thief";
const crook = "crook";
const money = "money";
const bad = "bad";
const jail = "jail";
const villain = "villain";
const bank = "bank";
const burglar = "burglar";
const cop = "cop";
const rob = "rob";
const gun = "gun";
const crime = "crime";
const bandit = "bandit";
const steal = "steal";
const robber = "robber";
const criminal = "criminal";

let Thief = {
    listNumber: 34,
    listA: [crook, money, bad, jail, villain, bank],
    listB: [burglar, cop, rob, gun, crime, bandit],
    prototype: thief,
    highestAssociates: [steal, robber],
    lowestAssociate: criminal,
};

//Define all variables for list 35: Trash
const trash = "trash";
const can = "can";
const sewage = "sewage";
const junk = "junk";
const sweep = "sweep";
const pile = "pile";
const landfill = "landfill";
const refuse = "refuse";
const bag = "bag";
const rubbish = "rubbish";
const scraps = "scraps";
const dump = "dump";
const debris = "debris";
const garbage = "garbage";
const waster = "waster";
const litter = "litter";

let Trash = {
    listNumber: 35,
    listA: [can, sewage, junk, sweep, pile, landfill],
    listB: [refuse, bag, rubbish, scraps, dump, debris],
    prototype: trash,
    highestAssociates: [garbage, waster],
    lowestAssociate: litter,
};

//Define all variables for list 36: Window
const window2 = "window2";
const pane = "pane";
const ledge = "ledge";
const house = "house";
const curtain = "curtain";
const view = "view";
const sash = "sash";
const shade = "shade";
const sill = "sill";
const open = "open";
const frame = "frame";
const breeze = "breeze";
const screen = "screen";
const door = "door";
const glass = "glass";
const shutter = "shutter";

let Window = {
    listNumber: 36,
    listA: [pane, ledge, house, curtain, view, sash],
    listB: [shade, sill, open, frame, breeze, screen],
    prototype: window2,
    highestAssociates: [door, glass],
    lowestAssociate: shutter,
};
// ... after you have defined all of your lists

let allLists = [
    Anger,
    Army,
    Black,
    Bread,
    Car,
    Chair,
    City,
    Cold,
    Cup,
    Doctor,
    Flag,
    Foot,
    Fruit,
    Girl,
    High,
    King,
    Lion,
    Man,
    Mountain,
    Music,
    Needle,
    Pen,
    River,
    Rough,
    Rubber,
    Shirt,
    Sleep,
    Slow,
    Smell,
    Smoke,
    Soft,
    Spider,
    Sweet,
    Thief,
    Trash,
    Window,
]; // need to add all other lists to

// and randomize
let randomizedLists = shuffleArray(allLists);

let bucket1 = randomizedLists.slice(0, 18); // takes first 18 lists of randomize dlists and places them into "bucket"
let bucket2 = randomizedLists.slice(0, 18);
let bucket3 = randomizedLists.slice(18, 36);
let bucket4 = randomizedLists.slice(18, 36);

let congruentPrototype = bucket1;
let incongruentPrototype = bucket2;
let congruentHighestAssociate = bucket3; // since bucket 3 and bucket4 contain the same objects, when we make congruent highest associate trials, be sure to use the objects' B lists
let incongruentHighestAssociate = [bucket4, bucket1];

//trial types
// Each trial type will be presented 18 times
//type 1 = congruent prototype
// type 2 = incongruent prototype
// type 3 = congruent highest associate
// type 4 = incongruent highest associate

// let listA = [];
//pause
//tone
// some prototype or a list1A higher associate

// congruent items
// let congruentPrototype = Anger.prototype;
// let congruentHighestAssociate1 = Anger.highestAssociates[0];
// let congruentHighestAssociate2 = Anger.highestAssociates[1]/;

// incongruent items

// keep looping through the randmoized list until there is no match between prototypes, leading to a truly incongruent prototype
// i=0;
// while (i < randomizedLists.length) {

// i++;
// }
let incongruentPrototypeTrial1 = incongruentPrototype[0];
let incongruentPrototypeTrial2 = incongruentPrototype[1];
let incongruentPrototypeTrial3 = incongruentPrototype[2];
let incongruentPrototypeTrial4 = incongruentPrototype[3];
let incongruentPrototypeTrial5 = incongruentPrototype[4];
let incongruentPrototypeTrial6 = incongruentPrototype[5];
let incongruentPrototypeTrial7 = incongruentPrototype[6];
let incongruentPrototypeTrial8 = incongruentPrototype[7];
let incongruentPrototypeTrial9 = incongruentPrototype[8];
let incongruentPrototypeTrial10 = incongruentPrototype[9];
let incongruentPrototypeTrial11 = incongruentPrototype[10];
let incongruentPrototypeTrial12 = incongruentPrototype[11];
let incongruentPrototypeTrial13 = incongruentPrototype[12];
let incongruentPrototypeTrial14 = incongruentPrototype[13];
let incongruentPrototypeTrial15 = incongruentPrototype[14];
let incongruentPrototypeTrial16 = incongruentPrototype[15];
let incongruentPrototypeTrial17 = incongruentPrototype[16];
let incongruentPrototypeTrial18 = incongruentPrototype[17];

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
randomizedLists = shuffleArray(randomizedLists);

let incongruentPrototypeTrials = [];
// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial1.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial1.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial1.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial18.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial18.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial2.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial2.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial2.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial17.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial17.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial3.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial3.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial3.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial16.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial16.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial4.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial4.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial4.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial15.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial15.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial5.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial5.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial5.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial14.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial14.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial6.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial6.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial6.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial13.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial13.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial7.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial7.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial7.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial12.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial12.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial8.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial8.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial8.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial11.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial11.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial9.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial9.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial9.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial10.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial10.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial10.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial10.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial10.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial9.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial9.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial11.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial11.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial11.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial8.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial8.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial12.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial12.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial12.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial7.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial7.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial13.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial13.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial13.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial6.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial6.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial14.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial14.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial14.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial5.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial5.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial15.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial15.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial15.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial4.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial4.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial16.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial16.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial16.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial3.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial3.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial17.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial17.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial17.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial2.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial2.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i = 0; i < incongruentPrototypeTrial18.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial18.listA[i],
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial18.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial1.prototype,
    data: {
        test_part: "test",
        stim: incongruentPrototypeTrial1.prototype,
        drmTrial_type: "incongruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

////// Here starts replicating structure of incongruent protype tirals to create trials for congruent prototype
let congruentPrototypeTrial1 = congruentPrototype[0];
let congruentPrototypeTrial2 = congruentPrototype[1];
let congruentPrototypeTrial3 = congruentPrototype[2];
let congruentPrototypeTrial4 = congruentPrototype[3];
let congruentPrototypeTrial5 = congruentPrototype[4];
let congruentPrototypeTrial6 = congruentPrototype[5];
let congruentPrototypeTrial7 = congruentPrototype[6];
let congruentPrototypeTrial8 = congruentPrototype[7];
let congruentPrototypeTrial9 = congruentPrototype[8];
let congruentPrototypeTrial10 = congruentPrototype[9];
let congruentPrototypeTrial11 = congruentPrototype[10];
let congruentPrototypeTrial12 = congruentPrototype[11];
let congruentPrototypeTrial13 = congruentPrototype[12];
let congruentPrototypeTrial14 = congruentPrototype[13];
let congruentPrototypeTrial15 = congruentPrototype[14];
let congruentPrototypeTrial16 = congruentPrototype[15];
let congruentPrototypeTrial17 = congruentPrototype[16];
let congruentPrototypeTrial18 = congruentPrototype[17];

let congruentPrototypeTrials = [];
// pushes 6 items from listB
for (let i = 0; i < congruentPrototypeTrial1.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial1.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial1.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial1.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial1.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial2.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial2.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial2.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial2.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial2.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial3.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial3.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial3.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial3.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial3.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial4.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial4.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial4.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial4.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial4.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial5.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial5.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial5.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial5.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial5.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial6.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial6.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial6.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial6.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial6.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial7.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial7.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial7.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial7.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial7.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial8.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial8.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial8.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial8.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial8.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial9.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial9.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial9.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial9.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial9.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial10.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial10.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial10.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial10.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial10.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial11.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial11.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial11.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial11.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial11.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial12.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial12.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial12.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial12.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial12.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial13.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial13.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial13.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial13.prototyp,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial13.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial14.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial14.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial14.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial14.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial14.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial15.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial15.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial15.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial15.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial15.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial16.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial16.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial16.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial16.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial15.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial17.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial17.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial17.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial17.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial17.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

for (let i = 0; i < congruentPrototypeTrial18.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial18.listB[i],
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial18.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 7th item
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial18.prototype,
    data: {
        test_part: "test",
        stim: congruentPrototypeTrial18.prototype,
        drmTrial_type: "congruentPrototype",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

/// trying to replicate structure from incongruent and congruent prototype trials to create incongruent highest associates

let incongruentHighestAssociateTrial1 = [
    incongruentHighestAssociate[0][0],
    incongruentHighestAssociate[1][0],
]; // in each trial,  add 1 to the number in the second set of brackets for each item
let incongruentHighestAssociateTrial2 = [
    incongruentHighestAssociate[0][1],
    incongruentHighestAssociate[1][1],
];
let incongruentHighestAssociateTrial3 = [
    incongruentHighestAssociate[0][2],
    incongruentHighestAssociate[1][2],
];
let incongruentHighestAssociateTrial4 = [
    incongruentHighestAssociate[0][3],
    incongruentHighestAssociate[1][3],
];
let incongruentHighestAssociateTrial5 = [
    incongruentHighestAssociate[0][4],
    incongruentHighestAssociate[1][4],
];
let incongruentHighestAssociateTrial6 = [
    incongruentHighestAssociate[0][5],
    incongruentHighestAssociate[1][5],
];
let incongruentHighestAssociateTrial7 = [
    incongruentHighestAssociate[0][6],
    incongruentHighestAssociate[1][6],
];
let incongruentHighestAssociateTrial8 = [
    incongruentHighestAssociate[0][7],
    incongruentHighestAssociate[1][7],
];
let incongruentHighestAssociateTrial9 = [
    incongruentHighestAssociate[0][8],
    incongruentHighestAssociate[1][8],
];
let incongruentHighestAssociateTrial10 = [
    incongruentHighestAssociate[0][9],
    incongruentHighestAssociate[1][9],
];
let incongruentHighestAssociateTrial11 = [
    incongruentHighestAssociate[0][10],
    incongruentHighestAssociate[1][10],
];
let incongruentHighestAssociateTrial12 = [
    incongruentHighestAssociate[0][11],
    incongruentHighestAssociate[1][11],
];
let incongruentHighestAssociateTrial13 = [
    incongruentHighestAssociate[0][12],
    incongruentHighestAssociate[1][12],
];
let incongruentHighestAssociateTrial14 = [
    incongruentHighestAssociate[0][13],
    incongruentHighestAssociate[1][13],
];
let incongruentHighestAssociateTrial15 = [
    incongruentHighestAssociate[0][14],
    incongruentHighestAssociate[1][14],
];
let incongruentHighestAssociateTrial16 = [
    incongruentHighestAssociate[0][15],
    incongruentHighestAssociate[1][15],
];
let incongruentHighestAssociateTrial17 = [
    incongruentHighestAssociate[0][16],
    incongruentHighestAssociate[1][16],
];
let incongruentHighestAssociateTrial18 = [
    incongruentHighestAssociate[0][17],
    incongruentHighestAssociate[1][17],
];

let incongruentHighestAssociateTrials = [];
// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial1 array)
for (let i = 0; i < incongruentHighestAssociateTrial1[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial1[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial1[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial1[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial3[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial1's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial2 array)
for (let i = 0; i < incongruentHighestAssociateTrial2[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial2[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial2[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial2[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial2[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial2's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial3[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial3[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial3[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial3[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial3[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial4[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial4[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial4[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial4[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial4[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial5[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial5[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial5[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial5[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial5[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial6[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial6[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial6[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial6[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial6[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial7[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial7[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial7[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial7[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial7[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial8[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial8[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial8[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial8[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial8[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial9[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial9[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial9[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial9[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial9[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial10[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial10[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial10[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial10[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial10[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial11[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial11[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial11[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial11[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial11[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial12[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial12[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial12[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial12[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial12[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial13[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial13[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial13[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial13[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial13[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial14[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial14[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial14[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial14[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial14[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial15[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial15[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial15[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial15[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial15[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial16[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial16[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial16[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial16[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial16[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial17[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial17[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial17[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial17[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial17[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i = 0; i < incongruentHighestAssociateTrial18[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial18[0].listA[i],
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial18[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 7th item
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial18[1].highestAssociates[0],
    data: {
        test_part: "test",
        stim: incongruentHighestAssociateTrial18[1].highestAssociates[0],
        drmTrial_type: "incongruentHighestAssociate",
        word_position: "target",
        correct_response: "70",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// trying to create structure for congruent highest associate trials
//use for 2nd position trials
let congruentHighestAssociateTrial1 = congruentHighestAssociate[0];
let congruentHighestAssociateTrial2 = congruentHighestAssociate[1];
let congruentHighestAssociateTrial3 = congruentHighestAssociate[2];
let congruentHighestAssociateTrial4 = congruentHighestAssociate[3];
let congruentHighestAssociateTrial5 = congruentHighestAssociate[4];

//use for 3rd position trials
let congruentHighestAssociateTrial6 = congruentHighestAssociate[5];
let congruentHighestAssociateTrial7 = congruentHighestAssociate[6];
let congruentHighestAssociateTrial8 = congruentHighestAssociate[7];
let congruentHighestAssociateTrial9 = congruentHighestAssociate[8];

// use for 4th position trials
let congruentHighestAssociateTrial10 = congruentHighestAssociate[9];
let congruentHighestAssociateTrial11 = congruentHighestAssociate[10];
let congruentHighestAssociateTrial12 = congruentHighestAssociate[11];
let congruentHighestAssociateTrial13 = congruentHighestAssociate[12];

// use for 5th position trials
let congruentHighestAssociateTrial14 = congruentHighestAssociate[13];
let congruentHighestAssociateTrial15 = congruentHighestAssociate[14];
let congruentHighestAssociateTrial16 = congruentHighestAssociate[15];
let congruentHighestAssociateTrial17 = congruentHighestAssociate[16];
let congruentHighestAssociateTrial18 = congruentHighestAssociate[17];

// for congruent Highest associate tirals, the number of "i"s that are pushed will differ
// higheest associate will be palced in the 2-5 position. Since there are a total of 18 trials, create:
// 5 with highest associate in 2nd word position
// 4 trials with highest associate in 3rd word position
// 4 with highest associate in 4th word positiion
// 5 with highest associate in 5th word position

let congruentHighestAssociateTrials = [];

//this section shows how to make  trial where the highest assocaite is in the 2nd word position
for (let i = 0; i < 1; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial1.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial1.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial1.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial1.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "list",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 2; i < congruentHighestAssociateTrial1.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial1.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial1.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial1.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial1.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

//this section shows how to make  trial where the highest assocaite is in the 2nd word position
for (let i = 0; i < 1; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial2.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial2.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial2.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial2.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 2; i < congruentHighestAssociateTrial2.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial2.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial2.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial2.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial2.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

//this section shows how to make  trial where the highest assocaite is in the 2nd word position
for (let i = 0; i < 1; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial3.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial3.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial3.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial3.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 2; i < congruentHighestAssociateTrial3.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial3.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial3.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial3.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial3.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

//this section shows how to make  trial where the highest assocaite is in the 2nd word position
for (let i = 0; i < 1; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial4.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial4.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial4.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial4.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 2; i < congruentHighestAssociateTrial4.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial4.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial4.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial4.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial4.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

//this section shows how to make  trial where the highest assocaite is in the 2nd word position
for (let i = 0; i < 1; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial5.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial5.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial5.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial5.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 2; i < congruentHighestAssociateTrial5.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial5.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial5.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial5.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial5.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create trial for highest associate in 3rd position
for (let i = 0; i < 2; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial6.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial6.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial6.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial6.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_3",
        word_position: "list",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 3; i < congruentHighestAssociateTrial6.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial6.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial6.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial6.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial6.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_3",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create trial for highest associate in 3rd position
for (let i = 0; i < 2; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial7.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial7.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial7.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial7.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_3",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 3; i < congruentHighestAssociateTrial7.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial7.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial7.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial7.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial7.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_3",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create trial for highest associate in 3rd position
for (let i = 0; i < 2; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial8.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial8.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial8.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial8.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_3",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 3; i < congruentHighestAssociateTrial8.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial8.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial8.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial8.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial8.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_3",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create trial for highest associate in 3rd position
for (let i = 0; i < 2; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial9.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial9.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial9.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial9.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_3",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 3; i < congruentHighestAssociateTrial9.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial9.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial9.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial9.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial9.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_3",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create trial for highest associate in 4th position
for (let i = 0; i < 3; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial10.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial10.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial10.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial10.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_4",
        word_position: "list",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 4; i < congruentHighestAssociateTrial10.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial10.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial10.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial10.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial10.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_4",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create trial for highest associate in 4th position
for (let i = 0; i < 3; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial11.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial11.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial11.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial11.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_4",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 4; i < congruentHighestAssociateTrial11.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial11.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial11.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial11.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial11.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_4",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create trial for highest associate in 4th position
for (let i = 0; i < 3; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial12.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial12.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial12.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial12.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_4",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 4; i < congruentHighestAssociateTrial12.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial12.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial12.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial12.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial12.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_4",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create trial for highest associate in 4th position
for (let i = 0; i < 3; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial13.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial13.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial13.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial13.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_4",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 4; i < congruentHighestAssociateTrial13.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial13.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial13.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial13.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial13.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_4",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create congruent highest associate trials with highests associate in 5th position
for (let i = 0; i < 4; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial14.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial14.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial14.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial14.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "list",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 5; i < congruentHighestAssociateTrial14.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial14.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial14.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial14.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial14.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create congruent highest associate trials with highests associate in 5th position
for (let i = 0; i < 4; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial15.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial15.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial15.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial15.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 5; i < congruentHighestAssociateTrial15.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial15.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial15.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial15.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial15.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create congruent highest associate trials with highests associate in 5th position
for (let i = 0; i < 4; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial16.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial16.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial16.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial15.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 5; i < congruentHighestAssociateTrial16.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial16.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial16.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial16.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial16.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create congruent highest associate trials with highests associate in 5th position
for (let i = 0; i < 4; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial17.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial17.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial17.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial17.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 5; i < congruentHighestAssociateTrial17.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial17.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial17.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial17.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial17.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

// how to create congruent highest associate trials with highests associate in 5th position
for (let i = 0; i < 4; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial18.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial18.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial18.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial18.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.

//add in remaining list b items
for (let i = 5; i < congruentHighestAssociateTrial18.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial18.listB[i],
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial18.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    }); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({
    stimulus: "TONE1",
    data: {
        test_part: "test",
        stim: "tone1",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); // pushes 7th item
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial18.highestAssociates[0],
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial18.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists.
congruentHighestAssociateTrials.push({
    stimulus: "TONE2",
    data: {
        test_part: "test",
        stim: "tone2",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); // pushes 9th item placeholder for TONE2

let interleavedFinalStim = [];

for (let i = 0; i <= 485; i++) {
    interleavedFinalStim.push(i);
}

let randomizationScheme = [];

for (let i = 0; i <= 17; i++) {
    //zeros for incongruent prototype
    randomizationScheme.push(0);
}
for (let i = 0; i <= 17; i++) {
    //ones for congruent prototype
    randomizationScheme.push(1);
}

for (let i = 0; i <= 17; i++) {
    //2s for incongruent highest associate
    randomizationScheme.push(2);
}

for (let i = 0; i <= 17; i++) {
    //3s for congruent highest associate
    randomizationScheme.push(3);
}
//randomizationFinal = randomizationScheme; //shuffled array no repeats
let randomizationFinal = shuffleArray(randomizationScheme); //shuffled array no repeats
while (interleavedFinalStim.length > 0) {
    interleavedFinalStim.pop();
}

for (let i = 0; i <= randomizationFinal.length; i++) {
    if (randomizationFinal[i] === 0) {
        // first add 9 incongruent prototype items
        for (let i = 0; i <= 8; i++) {
            interleavedFinalStim.push(incongruentPrototypeTrials[i]);
        }
        // then remove 9 incongruent prototype items
        for (let i = 0; i <= 8; i++) {
            incongruentPrototypeTrials.shift();
        }
    } else if (randomizationFinal[i] === 1) {
        // then! ADD 9 congruent prototype items
        for (let i = 0; i <= 8; i++) {
            interleavedFinalStim.push(congruentPrototypeTrials[i]);
        }
        // then! Remove 9 congruent prototype items
        for (let i = 0; i <= 8; i++) {
            congruentPrototypeTrials.shift();
        }
    } else if (randomizationFinal[i] === 2) {
        // then! ADD 9 items from incongruent highest associates trials
        for (let i = 0; i <= 8; i++) {
            interleavedFinalStim.push(incongruentHighestAssociateTrials[i]);
        }
        // then! Remove 9 incongruent highest associates items
        for (let i = 0; i <= 8; i++) {
            incongruentHighestAssociateTrials.shift();
        }
    } else if (randomizationFinal[i] === 3) {
        // then! ADD 9 congruent highest associate items
        for (let i = 0; i <= 8; i++) {
            interleavedFinalStim.push(congruentHighestAssociateTrials[i]);
        }
        // then! Remove 9 congruent highest associate items
        for (let i = 0; i <= 8; i++) {
            congruentHighestAssociateTrials.shift();
        }
    }
}
