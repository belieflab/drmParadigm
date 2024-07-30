"use strict";

// starts counting of trials at 1 to display in output file as trial
let trialIterator = 1;

const responseOptions =
    "f&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspj <br><br> Hold response key to indicate confidence level.";

// feedback contrainer
let feedbackGenerator = '<p id="feedbackGenerator" style="color:black;"></p>';

// tracks total taps per trial
let totalConfidence = [0]; // must be 0 to compensate for participant should they miss first trial

// // user selection of allergy or no-allergy
let responseKey;

// progress bar container
let progressBar =
    '<div id="counter" class="w3-container" style="color:black"><div class="w3-light-grey"><div class="w3-grey" id="keyBar" style="height:24px;width:0%;"></div></div><br><div>';
let fillUp = '<p id="fillUp" style="color:white;"></p>';

// set the time remaining notification for participant
let timeRemaining =
    '<p id="timeRemaining" style="text-align:center; color:black;"></p>';

// define all language for experiment

//define tones that are used between list and target presentation and at ITI
const trialStartTone = "stim/audio_tones/tone_1.mp3";
const responsePromptTone = "stim/audio_tones/tone_2.mp3";

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

// Function to generate practice trial
function generatePracticeTrial(trial, correctResponse) {
    addToneTrial(practiceTrials, "start");
    addListWords(practiceTrials, trial, "listA", "practice");
    addToneTrial(practiceTrials, "response");
    addTargetTrial(practiceTrials, trial, correctResponse);
}

// Generate practice trials
generatePracticeTrial(practiceTrial1, "70");
generatePracticeTrial(practiceTrial2, "74");

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
const hand = "stim/audio_stimuli/hand.mp3";
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
const cub = "stim/audio_stimuli/cub.mp3";
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
const man = "stim/audio_stimuli/man.mp3";
const uncle = "stim/audio_stimuli/uncle.mp3";
const mouse = "stim/audio_stimuli/mouse.mp3";
const father = "stim/audio_stimuli/father.mp3";
const friend = "stim/audio_stimuli/friend.mp3";
const person = "stim/audio_stimuli/person.mp3";
const muscle = "stim/audio_stimuli/muscle.mp3";
const lady = "stim/audio_stimuli/lady.mp3";
const male = "stim/audio_stimuli/male.mp3";
const strong = "stim/audio_stimuli/strong.mp3";
const beard = "stim/audio_stimuli/beard.mp3";
const handsome = "stim/audio_stimuli/handsome.mp3";
const suit = "stim/audio_stimuli/suit.mp3";
const woman = "stim/audio_stimuli/woman.mp3";
const husband = "stim/audio_stimuli/husband.mp3";
const old = "stim/audio_stimuli/old.mp3";

let Man = {
    listNumber: 18,
    listA: [uncle, mouse, father, friend, person, muscle],
    listB: [lady, male, strong, beard, handsome, suit],
    prototype: man,
    highestAssociates: [woman, husband],
    lowestAssociate: old,
};

//Define all variables for list 19: Mountain
const mountain = "stim/audio_stimuli/mountain.mp3";
const climb = "stim/audio_stimuli/climb.mp3";
const top2 = "stim/audio_stimuli/top2.mp3";
const peak = "stim/audio_stimuli/peak.mp3";
const glacier = "stim/audio_stimuli/glacier.mp3";
const bike = "stim/audio_stimuli/bike.mp3";
const range = "stim/audio_stimuli/range.mp3";
const summit = "stim/audio_stimuli/summit.mp3";
const molehill = "stim/audio_stimuli/molehill.mp3";
const plain = "stim/audio_stimuli/plain.mp3";
const goat = "stim/audio_stimuli/goat.mp3";
const climber = "stim/audio_stimuli/climber.mp3";
const steep = "stim/audio_stimuli/steep.mp3";
const hill = "stim/audio_stimuli/hill.mp3";
const valley = "stim/audio_stimuli/valley.mp3";
const ski = "stim/audio_stimuli/ski.mp3";

let Mountain = {
    listNumber: 19,
    listA: [climb, top2, peak, glacier, bike, range],
    listB: [summit, molehill, plain, goat, climber, steep],
    prototype: mountain,
    highestAssociates: [hill, valley],
    lowestAssociate: ski,
};

//Define all variables for list 20: Music
const music = "stim/audio_stimuli/music.mp3";
const piano = "stim/audio_stimuli/piano.mp3";
const radio = "stim/audio_stimuli/radio.mp3";
const melody = "stim/audio_stimuli/melody.mp3";
const concert = "stim/audio_stimuli/concert.mp3";
const symphony = "stim/audio_stimuli/symphony.mp3";
const orchestra = "stim/audio_stimuli/orchestra.mp3";
const sing = "stim/audio_stimuli/sing.mp3";
const band = "stim/audio_stimuli/band.mp3";
const horn = "stim/audio_stimuli/horn.mp3";
const instrument = "stim/audio_stimuli/instrument.mp3";
const jazz = "stim/audio_stimuli/jazz.mp3";
const art = "stim/audio_stimuli/art.mp3";
const note = "stim/audio_stimuli/note.mp3";
const sound = "stim/audio_stimuli/sound.mp3";
const rhythm = "stim/audio_stimuli/rhythm.mp3";

let Music = {
    listNumber: 20,
    listA: [piano, radio, melody, concert, symphony, orchestra],
    listB: [sing, band, horn, instrument, jazz, art],
    prototype: music,
    highestAssociates: [note, sound],
    lowestAssociate: rhythm,
};

//Define all variables for list 21: Needle
const needle = "stim/audio_stimuli/needle.mp3";
const eye = "stim/audio_stimuli/eye.mp3";
const sharp = "stim/audio_stimuli/sharp.mp3";
const prick = "stim/audio_stimuli/prick.mp3";
const haystack = "stim/audio_stimuli/haystack.mp3";
const hurt = "stim/audio_stimuli/hurt.mp3";
const syringe = "stim/audio_stimuli/syringe.mp3";
const sewing = "stim/audio_stimuli/sewing.mp3";
const point = "stim/audio_stimuli/point.mp3";
const thimble = "stim/audio_stimuli/thimble.mp3";
const thorn = "stim/audio_stimuli/thorn.mp3";
const injection = "stim/audio_stimuli/injection.mp3";
const cloth = "stim/audio_stimuli/cloth.mp3";
const thread = "stim/audio_stimuli/thread.mp3";
const pin = "stim/audio_stimuli/pin.mp3";
const knitting = "stim/audio_stimuli/knitting.mp3";

let Needle = {
    listNumber: 21,
    listA: [eye, sharp, prick, haystack, hurt, syringe],
    listB: [sewing, point, thimble, thorn, injection, cloth],
    prototype: needle,
    highestAssociates: [thread, pin],
    lowestAssociate: knitting,
};

//Define all variables for list 22: Pen
const pen = "stim/audio_stimuli/pen.mp3";
const fountain = "stim/audio_stimuli/fountain.mp3";
const quill = "stim/audio_stimuli/quill.mp3";
// const bic = "stim/audio_stimuli/bic.mp3";
const crayon = "stim/audio_stimuli/crayon.mp3";
const tip = "stim/audio_stimuli/tip.mp3";
const red = "stim/audio_stimuli/red.mp3";
const leak = "stim/audio_stimuli/leak.mp3";
const felt = "stim/audio_stimuli/felt.mp3";
const scribble = "stim/audio_stimuli/scribble.mp3";
const cross = "stim/audio_stimuli/cross.mp3";
const marker = "stim/audio_stimuli/marker.mp3";
const cap = "stim/audio_stimuli/cap.mp3";
const pencil = "stim/audio_stimuli/pencil.mp3";
const write = "stim/audio_stimuli/write.mp3";
const letter = "stim/audio_stimuli/letter.mp3";

let Pen = {
    listNumber: 22,
    // listA: [fountain, quill, bic, crayon, tip, red],
    listA: [fountain, quill, crayon, tip, red],

    listB: [leak, felt, scribble, cross, marker, cap],
    prototype: pen,
    highestAssociates: [pencil, write],
    lowestAssociate: letter,
};

//Define all variables for list 23: River
const river = "stim/audio_stimuli/river.mp3";
const lake = "stim/audio_stimuli/lake.mp3";
const boat = "stim/audio_stimuli/boat.mp3";
const swim = "stim/audio_stimuli/swim.mp3";
const run = "stim/audio_stimuli/run.mp3";
const creek = "stim/audio_stimuli/creek.mp3";
const fish = "stim/audio_stimuli/fish.mp3";
const mississippi = "stim/audio_stimuli/mississippi.mp3";
const tide = "stim/audio_stimuli/tide.mp3";
const flow = "stim/audio_stimuli/flow.mp3";
const barge = "stim/audio_stimuli/barge.mp3";
const brook = "stim/audio_stimuli/brook.mp3";
const bridge = "stim/audio_stimuli/bridge.mp3";
const water = "stim/audio_stimuli/water.mp3";
const stream = "stim/audio_stimuli/stream.mp3";
const winding = "stim/audio_stimuli/winding.mp3";

let River = {
    listNumber: 23,
    listA: [lake, boat, swim, run, creek, fish],
    listB: [mississippi, tide, flow, barge, brook, bridge],
    prototype: river,
    highestAssociates: [water, stream],
    lowestAssociate: winding,
};

//Define all variables for list 24: Rough
const rough = "stim/audio_stimuli/rough.mp3";
const road = "stim/audio_stimuli/road.mp3";
const sandpaper = "stim/audio_stimuli/sandpaper.mp3";
const ready = "stim/audio_stimuli/ready.mp3";
const uneven = "stim/audio_stimuli/uneven.mp3";
const rugged = "stim/audio_stimuli/rugged.mp3";
const boards = "stim/audio_stimuli/boards.mp3";
const tough = "stim/audio_stimuli/tough.mp3";
const jagged = "stim/audio_stimuli/jagged.mp3";
const coarse = "stim/audio_stimuli/coarse.mp3";
const riders = "stim/audio_stimuli/riders.mp3";
const sand = "stim/audio_stimuli/sand.mp3";
const ground = "stim/audio_stimuli/ground.mp3";
const smooth = "stim/audio_stimuli/smooth.mp3";
const bumpy = "stim/audio_stimuli/bumpy.mp3";
const gravel = "stim/audio_stimuli/gravel.mp3";

let Rough = {
    listNumber: 24,
    listA: [road, sandpaper, ready, uneven, rugged, boards],
    listB: [tough, jagged, coarse, riders, sand, ground],
    prototype: rough,
    highestAssociates: [smooth, bumpy],
    lowestAssociate: gravel,
};

//Define all variables for list 25: Rubber
const rubber = "stim/audio_stimuli/rubber.mp3";
const gloves = "stim/audio_stimuli/gloves.mp3";
const ball = "stim/audio_stimuli/ball.mp3";
const springy = "stim/audio_stimuli/springy.mp3";
const galoshes = "stim/audio_stimuli/galoshes.mp3";
const latex = "stim/audio_stimuli/latex.mp3";
const flexible = "stim/audio_stimuli/flexible.mp3";
const tire = "stim/audio_stimuli/tire.mp3";
const eraser = "stim/audio_stimuli/eraser.mp3";
// const foam = "stim/audio_stimuli/foam.mp3";
const soles = "stim/audio_stimuli/soles.mp3";
const glue = "stim/audio_stimuli/glue.mp3";
const resilient = "stim/audio_stimuli/resilient.mp3";
const elastic = "stim/audio_stimuli/elastic.mp3";
const bounce = "stim/audio_stimuli/bounce.mp3";
const stretch = "stim/audio_stimuli/stretch.mp3";

let Rubber = {
    listNumber: 25,
    listA: [gloves, ball, springy, galoshes, latex, flexible],
    // listB: [tire, eraser, foam, soles, glue, resilient],
    listB: [tire, eraser, soles, glue, resilient],

    prototype: rubber,
    highestAssociates: [elastic, bounce],
    lowestAssociate: stretch,
};

//Define all variables for list 26: Shirt
const shirt = "stim/audio_stimuli/shirt.mp3";
const pants = "stim/audio_stimuli/pants.mp3";
const button = "stim/audio_stimuli/button.mp3";
const iron = "stim/audio_stimuli/iron.mp3";
const collar = "stim/audio_stimuli/collar.mp3";
const pocket = "stim/audio_stimuli/pocket.mp3";
const belt = "stim/audio_stimuli/belt.mp3";
const tie = "stim/audio_stimuli/tie.mp3";
const shorts = "stim/audio_stimuli/shorts.mp3";
const polo = "stim/audio_stimuli/polo.mp3";
const vest = "stim/audio_stimuli/vest.mp3";
const jersey = "stim/audio_stimuli/jersey.mp3";
const linen = "stim/audio_stimuli/linen.mp3";
const blouse = "stim/audio_stimuli/blouse.mp3";
const sleeves = "stim/audio_stimuli/sleeves.mp3";
const cuffs = "stim/audio_stimuli/cuffs.mp3";

let Shirt = {
    listNumber: 26,
    listA: [pants, button, iron, collar, pocket, belt],
    listB: [tie, shorts, polo, vest, jersey, linen],
    prototype: shirt,
    highestAssociates: [blouse, sleeves],
    lowestAssociate: cuffs,
};

//Define all variables for list 27: Sleep
const sleep = "stim/audio_stimuli/sleep.mp3";
const awake = "stim/audio_stimuli/awake.mp3";
const dream = "stim/audio_stimuli/dream.mp3";
const snooze = "stim/audio_stimuli/snooze.mp3";
const doze = "stim/audio_stimuli/doze.mp3";
const snore = "stim/audio_stimuli/snore.mp3";
const peace = "stim/audio_stimuli/peace.mp3";
const tired = "stim/audio_stimuli/tired.mp3";
const wake = "stim/audio_stimuli/wake.mp3";
const blanket = "stim/audio_stimuli/blanket.mp3";
const slumber = "stim/audio_stimuli/slumber.mp3";
const nap = "stim/audio_stimuli/nap.mp3";
const yawn = "stim/audio_stimuli/yawn.mp3";
const bed = "stim/audio_stimuli/bed.mp3";
const rest = "stim/audio_stimuli/rest.mp3";
const drowsy = "stim/audio_stimuli/drowsy.mp3";

let Sleep = {
    listNumber: 27,
    listA: [awake, dream, snooze, doze, snore, peace],
    listB: [tired, wake, blanket, slumber, nap, yawn],
    prototype: sleep,
    highestAssociates: [bed, rest],
    lowestAssociate: drowsy,
};

//Define all variables for list 28: Slow
const slow = "stim/audio_stimuli/slow.mp3";
const stops = "stim/audio_stimuli/stop.mp3";
const snail = "stim/audio_stimuli/snail.mp3";
const delay = "stim/audio_stimuli/delay.mp3";
const turtle = "stim/audio_stimuli/turtle.mp3";
const speed = "stim/audio_stimuli/speed.mp3";
const sluggish = "stim/audio_stimuli/sluggish.mp3";
const listless = "stim/audio_stimuli/listless.mp3";
// const cautious = "stim/audio_stimuli/cautious.mp3";
const traffic = "stim/audio_stimuli/traffic.mp3";
const hesitant = "stim/audio_stimuli/hesitant.mp3";
const quick = "stim/audio_stimuli/quick.mp3";
const wait = "stim/audio_stimuli/wait.mp3";
const fast = "stim/audio_stimuli/fast.mp3";
const lethargic = "stim/audio_stimuli/lethargic.mp3";
const molasses = "stim/audio_stimuli/molasses.mp3";

let Slow = {
    listNumber: 28,
    listA: [stops, snail, delay, turtle, speed, sluggish],
    // listB: [listless, cautious, traffic, hesitant, quick, wait],
    listB: [listless, traffic, hesitant, quick, wait],

    prototype: slow,
    highestAssociates: [fast, lethargic],
    lowestAssociate: molasses,
};

//Define all variables for list 29: Smell
const smell = "stim/audio_stimuli/smell.mp3";
const sniff = "stim/audio_stimuli/sniff.mp3";
const hear = "stim/audio_stimuli/hear.mp3";
const nostril = "stim/audio_stimuli/nostril.mp3";
const scent = "stim/audio_stimuli/scent.mp3";
const stench = "stim/audio_stimuli/stench.mp3";
const perfume = "stim/audio_stimuli/perfume.mp3";
const aroma = "stim/audio_stimuli/aroma.mp3";
const see = "stim/audio_stimuli/see.mp3";
const whiff = "stim/audio_stimuli/whiff.mp3";
const reek = "stim/audio_stimuli/reek.mp3";
const fragrance = "stim/audio_stimuli/fragrance.mp3";
const salts = "stim/audio_stimuli/salts.mp3";
const nose = "stim/audio_stimuli/nose.mp3";
const breathe = "stim/audio_stimuli/breathe.mp3";
const rose = "stim/audio_stimuli/rose.mp3";

let Smell = {
    listNumber: 29,
    listA: [sniff, hear, nostril, scent, stench, perfume],
    listB: [aroma, see, whiff, reek, fragrance, salts],
    prototype: smell,
    highestAssociates: [nose, breathe],
    lowestAssociate: rose,
};

//Define all variables for list 30: Smoke
const smoke = "stim/audio_stimuli/smoke.mp3";
const blaze = "stim/audio_stimuli/blaze.mp3";
const pollution = "stim/audio_stimuli/pollution.mp3";
const cigar = "stim/audio_stimuli/cigar.mp3";
const fire = "stim/audio_stimuli/fire.mp3";
const stink = "stim/audio_stimuli/stink.mp3";
const lungs = "stim/audio_stimuli/lungs.mp3";
const billows = "stim/audio_stimuli/billows.mp3";
const ashes = "stim/audio_stimuli/ashes.mp3";
const chimney = "stim/audio_stimuli/chimney.mp3";
const tobacco = "stim/audio_stimuli/tobacco.mp3";
const pipe = "stim/audio_stimuli/pipe.mp3";
const flames = "stim/audio_stimuli/flames.mp3";
const cigarette = "stim/audio_stimuli/cigarette.mp3";
const puff = "stim/audio_stimuli/puff.mp3";
const stain = "stim/audio_stimuli/stain.mp3";

let Smoke = {
    listNumber: 30,
    listA: [blaze, pollution, cigar, fire, stink, lungs],
    listB: [billows, ashes, chimney, tobacco, pipe, flames],
    prototype: smoke,
    highestAssociates: [cigarette, puff],
    lowestAssociate: stain,
};

//Define all variables for list 31: Soft
const soft = "stim/audio_stimuli/soft.mp3";
const pillow = "stim/audio_stimuli/pillow.mp3";
const loud = "stim/audio_stimuli/loud.mp3";
const fur = "stim/audio_stimuli/fur.mp3";
const fluffy = "stim/audio_stimuli/fluffy.mp3";
const furry = "stim/audio_stimuli/furry.mp3";
const kitten = "stim/audio_stimuli/kitten.mp3";
const plush = "stim/audio_stimuli/plush.mp3";
const cotton = "stim/audio_stimuli/cotton.mp3";
const touch = "stim/audio_stimuli/touch.mp3";
const feather = "stim/audio_stimuli/feather.mp3";
const downy = "stim/audio_stimuli/downy.mp3";
const skin = "stim/audio_stimuli/skin.mp3";
const hard = "stim/audio_stimuli/hard.mp3";
const light = "stim/audio_stimuli/light.mp3";
const tender = "stim/audio_stimuli/tender.mp3";

let Soft = {
    listNumber: 31,
    listA: [pillow, loud, fur, fluffy, furry, kitten],
    listB: [plush, cotton, touch, feather, downy, skin],
    prototype: soft,
    highestAssociates: [hard, light],
    lowestAssociate: tender,
};

//Define all variables for list 32: Spider
const spider = "stim/audio_stimuli/spider.mp3";
const big2 = "stim/audio_stimuli/big2.mp3";
const fly = "stim/audio_stimuli/fly.mp3 ";
const crawl = "stim/audio_stimuli/crawl.mp3";
const poison = "stim/audio_stimuli/poison.mp3";
const creepy = "stim/audio_stimuli/creepy.mp3";
const ugly = "stim/audio_stimuli/ugly.mp3";
const fright = "stim/audio_stimuli/fright.mp3";
const arachnid = "stim/audio_stimuli/arachnid.mp3";
const tarantula = "stim/audio_stimuli/tarantula.mp3";
const bite = "stim/audio_stimuli/bite.mp3";
const animal = "stim/audio_stimuli/animal.mp3";
const feelers = "stim/audio_stimuli/feelers.mp3";
const web = "stim/audio_stimuli/web.mp3";
const insect = "stim/audio_stimuli/insect.mp3";
const small = "stim/audio_stimuli/small.mp3";

let Spider = {
    listNumber: 32,
    listA: [big2, fly, crawl, poison, creepy, ugly],
    listB: [fright, arachnid, tarantula, bite, animal, feelers],
    prototype: spider,
    highestAssociates: [web, insect],
    lowestAssociate: small,
};

//Define all variables for list 33: Sweet
const sweet = "stim/audio_stimuli/sweet.mp3";
const sugar = "stim/audio_stimuli/sugar.mp3";
const good = "stim/audio_stimuli/good.mp3";
const tooth = "stim/audio_stimuli/tooth.mp3";
const honey = "stim/audio_stimuli/honey.mp3";
const chocolate = "stim/audio_stimuli/chocolate.mp3";
const cake = "stim/audio_stimuli/cake.mp3";
const bitter = "stim/audio_stimuli/bitter.mp3";
const taste = "stim/audio_stimuli/taste.mp3";
const nice = "stim/audio_stimuli/nice.mp3";
const soda = "stim/audio_stimuli/soda.mp3";
const heart = "stim/audio_stimuli/heart.mp3";
const tart = "stim/audio_stimuli/tart.mp3";
const sour = "stim/audio_stimuli/sour.mp3";
const candy = "stim/audio_stimuli/candy.mp3";
const pie = "stim/audio_stimuli/pie.mp3";

let Sweet = {
    listNumber: 33,
    listA: [sugar, good, tooth, honey, chocolate, cake],
    listB: [bitter, taste, nice, soda, heart, tart],
    prototype: sweet,
    highestAssociates: [sour, candy],
    lowestAssociate: pie,
};

//Define all variables for list 34: Thief
const thief = "stim/audio_stimuli/thief.mp3";
const crook = "stim/audio_stimuli/crook.mp3";
const money = "stim/audio_stimuli/money.mp3";
const bad = "stim/audio_stimuli/bad.mp3";
const jail = "stim/audio_stimuli/jail.mp3";
const villain = "stim/audio_stimuli/villain.mp3";
const bank = "stim/audio_stimuli/bank.mp3";
const burglar = "stim/audio_stimuli/burglar.mp3";
const cop = "stim/audio_stimuli/cop.mp3";
const rob = "stim/audio_stimuli/rob.mp3";
const gun = "stim/audio_stimuli/gun.mp3";
const crime = "stim/audio_stimuli/crime.mp3";
const bandit = "stim/audio_stimuli/bandit.mp3";
const steal = "stim/audio_stimuli/steal.mp3";
const robber = "stim/audio_stimuli/robber.mp3";
const criminal = "stim/audio_stimuli/criminal.mp3";

let Thief = {
    listNumber: 34,
    listA: [crook, money, bad, jail, villain, bank],
    listB: [burglar, cop, rob, gun, crime, bandit],
    prototype: thief,
    highestAssociates: [steal, robber],
    lowestAssociate: criminal,
};

//Define all variables for list 35: Trash
const trash = "stim/audio_stimuli/trash.mp3";
const can = "stim/audio_stimuli/can.mp3";
const sewage = "stim/audio_stimuli/sewage.mp3";
const junk = "stim/audio_stimuli/junk.mp3";
const sweep = "stim/audio_stimuli/sweep.mp3";
const pile = "stim/audio_stimuli/pile.mp3";
const landfill = "stim/audio_stimuli/landfill.mp3";
const refuse = "stim/audio_stimuli/refuse.mp3";
const bag = "stim/audio_stimuli/bag.mp3";
const rubbish = "stim/audio_stimuli/rubbish.mp3";
const scraps = "stim/audio_stimuli/scraps.mp3";
const dump = "stim/audio_stimuli/dump.mp3";
const debris = "stim/audio_stimuli/debris.mp3";
const garbage = "stim/audio_stimuli/garbage.mp3";
const waster = "stim/audio_stimuli/waster.mp3";
const litter = "stim/audio_stimuli/litter.mp3";

let Trash = {
    listNumber: 35,
    listA: [can, sewage, junk, sweep, pile, landfill],
    listB: [refuse, bag, rubbish, scraps, dump, debris],
    prototype: trash,
    highestAssociates: [garbage, waster],
    lowestAssociate: litter,
};

//Define all variables for list 36: Window
const windows = "stim/audio_stimuli/window.mp3";
const pane = "stim/audio_stimuli/pane.mp3";
const ledge = "stim/audio_stimuli/ledge.mp3";
const house = "stim/audio_stimuli/house.mp3";
const curtain = "stim/audio_stimuli/curtain.mp3";
const view = "stim/audio_stimuli/view.mp3";
const sash = "stim/audio_stimuli/sash.mp3";
const shade = "stim/audio_stimuli/shade.mp3";
const sill = "stim/audio_stimuli/sill.mp3";
const opens = "stim/audio_stimuli/open.mp3";
const frame = "stim/audio_stimuli/frame.mp3";
const breeze = "stim/audio_stimuli/breeze.mp3";
const screens = "stim/audio_stimuli/screen.mp3";
const door = "stim/audio_stimuli/door.mp3";
const glass = "stim/audio_stimuli/glass.mp3";
const shutter = "stim/audio_stimuli/shutter.mp3";

let Windows = {
    listNumber: 36,
    listA: [pane, ledge, house, curtain, view, sash],
    listB: [shade, sill, opens, frame, breeze, screens],
    prototype: windows,
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
    Windows,
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

for (let i = 0; i < 18; i++) {
    window[`incongruentPrototypeTrial${i + 1}`] = incongruentPrototype[i];
    window[`congruentPrototypeTrial${i + 1}`] = congruentPrototype[i];
}

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
let congruentPrototypeTrials = [];
let incongruentHighestAssociateTrials = [];
let congruentHighestAssociateTrials = [];

// Generate trials
for (let trialNum = 1; trialNum <= 18; trialNum++) {
    // Incongruent prototype trials
    const incongruentTrial = window[`incongruentPrototypeTrial${trialNum}`];
    if (incongruentTrial) {
        addListWords(
            incongruentPrototypeTrials,
            incongruentTrial,
            "listA",
            "incongruentPrototype"
        );
        addToneTrial(incongruentPrototypeTrials, "incongruentPrototype");
        addTargetTrial(
            incongruentPrototypeTrials,
            incongruentTrial,
            "incongruentPrototype",
            incongruentTrial.prototype
        );
        addFixationTrial(incongruentPrototypeTrials, "incongruentPrototype");
    } else {
        console.error(`incongruentPrototypeTrial${trialNum} is undefined`);
    }

    // Congruent prototype trials
    const congruentTrial = window[`congruentPrototypeTrial${trialNum}`];
    if (congruentTrial) {
        addListWords(
            congruentPrototypeTrials,
            congruentTrial,
            "listB",
            "congruentPrototype"
        );
        addToneTrial(congruentPrototypeTrials, "congruentPrototype");
        addTargetTrial(
            congruentPrototypeTrials,
            congruentTrial,
            "congruentPrototype",
            congruentTrial.prototype
        );
        addFixationTrial(congruentPrototypeTrials, "congruentPrototype");
    } else {
        console.error(`congruentPrototypeTrial${trialNum} is undefined`);
    }

    // Incongruent highest associate trials
    if (
        incongruentHighestAssociate &&
        incongruentHighestAssociate[0] &&
        incongruentHighestAssociate[0][trialNum - 1]
    ) {
        const incongruentHATrial = incongruentHighestAssociate[0][trialNum - 1];
        addListWords(
            incongruentHighestAssociateTrials,
            incongruentHATrial,
            "listA",
            "incongruentHighestAssociate"
        );
        addToneTrial(
            incongruentHighestAssociateTrials,
            "incongruentHighestAssociate"
        );
        addTargetTrial(
            incongruentHighestAssociateTrials,
            incongruentHATrial,
            "incongruentHighestAssociate",
            incongruentHATrial.highestAssociates[0]
        );
        addFixationTrial(
            incongruentHighestAssociateTrials,
            "incongruentHighestAssociate"
        );
    } else {
        console.error(
            `incongruentHighestAssociate trial ${trialNum} is undefined`
        );
    }

    // Congruent highest associate trials
    if (congruentHighestAssociate && congruentHighestAssociate[trialNum - 1]) {
        const congruentHATrial = congruentHighestAssociate[trialNum - 1];
        const position =
            trialNum <= 5 ? 2 : trialNum <= 9 ? 3 : trialNum <= 13 ? 4 : 5;
        const trialType = `congruentHighestAssociate_${position}`;

        if (congruentHATrial.listB && congruentHATrial.highestAssociates) {
            let listBCopy = [...congruentHATrial.listB];
            listBCopy.splice(
                position - 1,
                0,
                congruentHATrial.highestAssociates[0]
            );
            listBCopy = listBCopy.slice(0, 6); // Keep only 6 items

            for (let i = 0; i < listBCopy.length; i++) {
                congruentHighestAssociateTrials.push({
                    stimulus: listBCopy[i],
                    response_ends_trial: false,
                    trial_duration: durationForListWords,
                    data: {
                        test_part: "test",
                        stim: listBCopy[i],
                        drmTrial_type: trialType,
                        word_position: i === position - 1 ? "target" : "list",
                    },
                    confidence: "x",
                });
            }
            addToneTrial(congruentHighestAssociateTrials, trialType);
            addTargetTrial(
                congruentHighestAssociateTrials,
                congruentHATrial,
                trialType,
                congruentHATrial.highestAssociates[0]
            );
            addFixationTrial(congruentHighestAssociateTrials, trialType);
        } else {
            console.error(
                `congruentHighestAssociate trial ${trialNum} is missing listB or highestAssociates`
            );
        }
    } else {
        console.error(
            `congruentHighestAssociate trial ${trialNum} is undefined`
        );
    }
}

// Randomization and interleaving process
let interleavedFinalStim = [];

let randomizationScheme = [
    ...Array(18).fill(0), // incongruent prototype
    ...Array(18).fill(1), // congruent prototype
    ...Array(18).fill(2), // incongruent highest associate
    ...Array(18).fill(3), // congruent highest associate
];

let randomizationFinal = shuffleArray(randomizationScheme);

for (let i = 0; i < randomizationFinal.length; i++) {
    switch (randomizationFinal[i]) {
        case 0:
            interleavedFinalStim.push(
                ...incongruentPrototypeTrials.splice(0, 9)
            );
            break;
        case 1:
            interleavedFinalStim.push(...congruentPrototypeTrials.splice(0, 9));
            break;
        case 2:
            interleavedFinalStim.push(
                ...incongruentHighestAssociateTrials.splice(0, 9)
            );
            break;
        case 3:
            interleavedFinalStim.push(
                ...congruentHighestAssociateTrials.splice(0, 9)
            );
            break;
    }
}

// for preload
// Extract all audio file paths from the lists
let audioFiles = [];

allLists.forEach((list) => {
    audioFiles.push(
        ...list.listA,
        ...list.listB,
        list.prototype,
        ...list.highestAssociates,
        list.lowestAssociate
    );
});

// Remove duplicates (if any)
audioFiles = [...new Set(audioFiles)];
