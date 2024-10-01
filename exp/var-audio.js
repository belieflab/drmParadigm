"use strict";

let trialIterator = 1;

var responseOptions =
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<br><br>";

let feedbackGenerator = '<p id="feedbackGenerator" style="color:black;"></p>';

// tracks total taps per trial
let totalConfidence = 0; // must be 0 to compensate for participant should they miss first trial

let responseKey;

let progressBar =
    '<div id="counter" class="w3-container" style="color:black"><div class="w3-light-grey"><div class="w3-grey" id="keyBar" style="height:24px;width:0%;"></div></div><br><div>';
let fillUp = '<p id="fillUp" style="color:white;"></p>';

// set the time remaining notification for participant
let timeRemaining =
    '<p id="timeRemaining" style="text-align:center; color:white;"></p>';

const trialStartTone = "stim/audio_tones/tone_2.mp3";
const responsePromptTone = "stim/audio_tones/tone_1.mp3";
const silence = "stim/audio_instructions/silence.mp3";

// words to be used in practice trials
const atom = "stim/audio_practice/atom.wav";
const molecule = "stim/audio_practice/molecule.wav";
const bond = "stim/audio_practice/bond.wav";
const gas = "stim/audio_practice/gas.wav";
const electron = "stim/audio_practice/electron.wav";
const oxygen = "stim/audio_practice/oxygen.wav";
const chemistry = "stim/audio_practice/chemistry.wav";

const shark = "stim/audio_practice/shark.wav";
const island = "stim/audio_practice/island.wav";
const waves = "stim/audio_practice/waves.wav";
const shrimp = "stim/audio_practice/shrimp.wav";
const whale = "stim/audio_practice/whale.wav";
const ocean = "stim/audio_practice/ocean.wav";

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

// Create practice trials
let practiceTrials = [];
[practiceTrial1, practiceTrial2].forEach((trial) => {
    practiceTrials = practiceTrials.concat(
        createTrialSet(trial, "practice", true)
    );
});

// all variables in listNumber1 : Anger
const anger = "stim/audio_stimuli/anger.wav";
const hate = "stim/audio_stimuli/hate.wav";
const temper = "stim/audio_stimuli/temper.wav";
const ire = "stim/audio_stimuli/ire.wav";
const happy = "stim/audio_stimuli/happy.wav";
const hatred = "stim/audio_stimuli/hatred.wav";
const calm = "stim/audio_stimuli/calm.wav";
const rage = "stim/audio_stimuli/rage.wav";
const fury = "stim/audio_stimuli/fury.wav";
const wrath = "stim/audio_stimuli/wrath.wav";
const fight = "stim/audio_stimuli/fight.wav";
const mean = "stim/audio_stimuli/mean.wav";
const emotion = "stim/audio_stimuli/emotion.wav";
const mad = "stim/audio_stimuli/mad.wav";
const fear = "stim/audio_stimuli/fear.wav";
const enrage = "stim/audio_stimuli/enrage.wav";

let Anger = {
    listNumber: 1,
    listA: [hate, temper, ire, happy, hatred, calm],
    listB: [rage, fury, wrath, fight, mean, emotion],
    prototype: anger,
    highestAssociates: [mad, fear],
    lowestAssociate: enrage,
};

// all variables in listNumber2 : Army
const unitedStates = "stim/audio_stimuli/unitedStates.wav";
const airForce = "stim/audio_stimuli/airForce.wav";
const military = "stim/audio_stimuli/military.wav";
const march = "stim/audio_stimuli/march.wav";
const captain = "stim/audio_stimuli/captain.wav";
const uniform = "stim/audio_stimuli/uniform.wav";
const rifle = "stim/audio_stimuli/rifle.wav";
const draft = "stim/audio_stimuli/draft.wav";
const marines = "stim/audio_stimuli/marines.wav";
const infantry = "stim/audio_stimuli/infantry.wav";
const war = "stim/audio_stimuli/war.wav";
const pilot = "stim/audio_stimuli/pilot.wav";
const army = "stim/audio_stimuli/army.wav";
const navy = "stim/audio_stimuli/navy.wav";
const soldier = "stim/audio_stimuli/soldier.wav";
const combat = "stim/audio_stimuli/combat.wav";

let Army = {
    listNumber: 2,
    listA: [unitedStates, airForce, military, march, captain, uniform],
    listB: [rifle, draft, marines, infantry, war, pilot],
    prototype: army,
    highestAssociates: [navy, soldier],
    lowestAssociate: combat,
};

// all variables in listNumber3 : Black
const black = "stim/audio_stimuli/black.wav";
const cat = "stim/audio_stimuli/cat.wav";
const night = "stim/audio_stimuli/night.wav";
const color = "stim/audio_stimuli/color.wav";
const blue = "stim/audio_stimuli/blue.wav";
const ink = "stim/audio_stimuli/ink.wav";
const coal = "stim/audio_stimuli/coal.wav";
const charred = "stim/audio_stimuli/charred.wav";
const funeral = "stim/audio_stimuli/funeral.wav";
const grief = "stim/audio_stimuli/grief.wav";
const death = "stim/audio_stimuli/death.wav";
const bottom = "stim/audio_stimuli/bottom.wav";
const brown = "stim/audio_stimuli/brown.wav";
const white = "stim/audio_stimuli/white.wav";
const dark = "stim/audio_stimuli/dark.wav";
const gray = "stim/audio_stimuli/gray.wav";

let Black = {
    listNumber: 3,
    listA: [cat, night, color, blue, ink, coal],
    listB: [charred, funeral, grief, death, bottom, brown],
    prototype: black,
    highestAssociates: [white, dark],
    lowestAssociate: gray,
};

// all variables for list 4:Bread
const bread = "stim/audio_stimuli/bread.wav";
const eat = "stim/audio_stimuli/eat.wav";
const rye = "stim/audio_stimuli/rye.wav";
const milk = "stim/audio_stimuli/milk.wav";
const jelly = "stim/audio_stimuli/jelly.wav";
const crust = "stim/audio_stimuli/crust.wav";
const wine = "stim/audio_stimuli/wine.wav";
const sandwich = "stim/audio_stimuli/sandwich.wav";
const jam = "stim/audio_stimuli/jam.wav";
const flour = "stim/audio_stimuli/flour.wav";
const dough = "stim/audio_stimuli/dough.wav";
const slice = "stim/audio_stimuli/slice.wav";
const loaf = "stim/audio_stimuli/loaf.wav";
const butter = "stim/audio_stimuli/butter.wav";
const food = "stim/audio_stimuli/food.wav";
const toast = "stim/audio_stimuli/toast.wav";

let Bread = {
    listNumber: 4,
    listA: [eat, rye, milk, jelly, crust, wine],
    listB: [sandwich, jam, flour, dough, slice, loaf],
    prototype: bread,
    highestAssociates: [butter, food],
    lowestAssociate: toast,
};

// all variables for list 5: Car
const car = "stim/audio_stimuli/car.wav";
const train = "stim/audio_stimuli/train.wav";
const vehicle = "stim/audio_stimuli/vehicle.wav";
const jeep = "stim/audio_stimuli/jeep.wav";
const race = "stim/audio_stimuli/race.wav";
const garage = "stim/audio_stimuli/garage.wav";
const sedan = "stim/audio_stimuli/sedan.wav";
const automobile = "stim/audio_stimuli/automobile.wav";
const drive = "stim/audio_stimuli/drive.wav";
const ford = "stim/audio_stimuli/ford.wav";
const keys = "stim/audio_stimuli/keys.wav";
const highway = "stim/audio_stimuli/highway.wav";
const van = "stim/audio_stimuli/van.wav";
const truck = "stim/audio_stimuli/truck.wav";
const bus = "stim/audio_stimuli/bus.wav";
const taxi = "stim/audio_stimuli/taxi.wav";

let Car = {
    listNumber: 5,
    listA: [train, vehicle, jeep, race, garage, sedan],
    listB: [automobile, drive, ford, keys, highway, van],
    prototype: car,
    highestAssociates: [truck, bus],
    lowestAssociate: taxi,
};

// all variables for list 6: Chair
const chair = "stim/audio_stimuli/chair.wav";
const legs = "stim/audio_stimuli/legs.wav";
const couch = "stim/audio_stimuli/couch.wav";
const recliner = "stim/audio_stimuli/recliner.wav";
const wood = "stim/audio_stimuli/wood.wav";
const swivel = "stim/audio_stimuli/swivel.wav";
const sitting = "stim/audio_stimuli/sitting.wav";
const seat = "stim/audio_stimuli/seat.wav";
const desk = "stim/audio_stimuli/desk.wav";
const sofa = "stim/audio_stimuli/sofa.wav";
const cushion = "stim/audio_stimuli/cushion.wav";
const stool = "stim/audio_stimuli/stool.wav";
const rocking = "stim/audio_stimuli/rocking.wav";
const table = "stim/audio_stimuli/table.wav";
const sit = "stim/audio_stimuli/sit.wav";
const bench = "stim/audio_stimuli/bench.wav";

let Chair = {
    listNumber: 6,
    listA: [legs, couch, recliner, wood, swivel, sitting],
    listB: [seat, desk, sofa, cushion, stool, rocking],
    prototype: chair,
    highestAssociates: [table, sit],
    lowestAssociate: bench,
};

// all variables for list 7: City
const city = "stim/audio_stimuli/city.wav";
const state = "stim/audio_stimuli/state.wav";
const streets = "stim/audio_stimuli/streets.wav";
const country = "stim/audio_stimuli/country.wav";
const village = "stim/audio_stimuli/village.wav";
const big = "stim/audio_stimuli/big.wav";
const suburb = "stim/audio_stimuli/suburb.wav";
const capital = "stim/audio_stimuli/capital.wav";
const subway = "stim/audio_stimuli/subway.wav";
const newYork = "stim/audio_stimuli/newYork.wav";
const metropolis = "stim/audio_stimuli/metropolis.wav";
const chicago = "stim/audio_stimuli/chicago.wav";
const county = "stim/audio_stimuli/county.wav";
const town = "stim/audio_stimuli/town.wav";
const crowded = "stim/audio_stimuli/crowded.wav";
const urban = "stim/audio_stimuli/urban.wav";

let City = {
    listNumber: 7,
    listA: [state, streets, country, village, big, suburb],
    listB: [capital, subway, newYork, metropolis, chicago, county],
    prototype: city,
    highestAssociates: [town, crowded],
    lowestAssociate: urban,
};

// all variables for list 7: Cold
const cold = "stim/audio_stimuli/cold.wav";
const warm = "stim/audio_stimuli/warm.wav";
const ice = "stim/audio_stimuli/ice.wav";
const frigid = "stim/audio_stimuli/frigid.wav";
const heat = "stim/audio_stimuli/heat.wav";
const freeze = "stim/audio_stimuli/freeze.wav";
const shiver = "stim/audio_stimuli/shiver.wav";
const winter = "stim/audio_stimuli/winter.wav";
const wet = "stim/audio_stimuli/wet.wav";
const chilly = "stim/audio_stimuli/chilly.wav";
const weather = "stim/audio_stimuli/weather.wav";
const air = "stim/audio_stimuli/air.wav";
const arctic = "stim/audio_stimuli/arctic.wav";
const hot = "stim/audio_stimuli/hot.wav";
const snow = "stim/audio_stimuli/snow.wav";
const frost = "stim/audio_stimuli/frost.wav";

let Cold = {
    listNumber: 8,
    listA: [warm, ice, frigid, heat, freeze, shiver],
    listB: [winter, wet, chilly, weather, air, arctic],
    prototype: cold,
    highestAssociates: [hot, snow],
    lowestAssociate: frost,
};

// all variables for list 9: Cup
const cup = "stim/audio_stimuli/cup.wav";
const tea = "stim/audio_stimuli/tea.wav";
const coaster = "stim/audio_stimuli/coaster.wav";
const handle = "stim/audio_stimuli/handle.wav";
const straw = "stim/audio_stimuli/straw.wav";
const soup = "stim/audio_stimuli/soup.wav";
const drink = "stim/audio_stimuli/drink.wav";
const measuring = "stim/audio_stimuli/measuring.wav";
const lid = "stim/audio_stimuli/lid.wav";
const coffee = "stim/audio_stimuli/coffee.wav";
const goblet = "stim/audio_stimuli/goblet.wav";
const stein = "stim/audio_stimuli/stein.wav";
const plastic = "stim/audio_stimuli/plastic.wav";
const mug = "stim/audio_stimuli/mug.wav";
const saucer = "stim/audio_stimuli/saucer.wav";
const sip = "stim/audio_stimuli/sip.wav";

let Cup = {
    listNumber: 9,
    listA: [tea, coaster, handle, straw, soup, drink],
    listB: [measuring, lid, coffee, goblet, stein, plastic],
    prototype: cup,
    highestAssociates: [mug, saucer],
    lowestAssociate: sip,
};

// all variables for list 10: Doctor
const doctor = "stim/audio_stimuli/doctor.wav";
const lawyer = "stim/audio_stimuli/lawyer.wav";
const health = "stim/audio_stimuli/health.wav";
const dentist = "stim/audio_stimuli/dentist.wav";
const ill = "stim/audio_stimuli/ill.wav";
const office = "stim/audio_stimuli/office.wav";
const surgeon = "stim/audio_stimuli/surgeon.wav";
const medicine = "stim/audio_stimuli/medicine.wav";
const hospital = "stim/audio_stimuli/hospital.wav";
const physician = "stim/audio_stimuli/physician.wav";
const patient = "stim/audio_stimuli/patient.wav";
const stethoscope = "stim/audio_stimuli/stethoscope.wav";
const clinic = "stim/audio_stimuli/clinic.wav";
const nurse = "stim/audio_stimuli/nurse.wav";
const sick = "stim/audio_stimuli/sick.wav";
const cure = "stim/audio_stimuli/cure.wav";

let Doctor = {
    listNumber: 10,
    listA: [lawyer, health, dentist, ill, office, surgeon],
    listB: [medicine, hospital, physician, patient, stethoscope, clinic],
    prototype: doctor,
    highestAssociates: [nurse, sick],
    lowestAssociate: cure,
};

// all variables for list 11: Flag
const flag = "stim/audio_stimuli/flag.wav";
const symbol = "stim/audio_stimuli/symbol.wav";
const anthem = "stim/audio_stimuli/anthem.wav";
const pole = "stim/audio_stimuli/pole.wav";
const raised = "stim/audio_stimuli/raised.wav";
const checkered = "stim/audio_stimuli/checkered.wav";
const sign = "stim/audio_stimuli/sign.wav";
const stars = "stim/audio_stimuli/stars.wav";
const stripes = "stim/audio_stimuli/stripes.wav";
const wave = "stim/audio_stimuli/wave.wav";
const national = "stim/audio_stimuli/national.wav";
const emblem = "stim/audio_stimuli/emblem.wav";
const freedom = "stim/audio_stimuli/freedom.wav";
const banner = "stim/audio_stimuli/banner.wav";
const american = "stim/audio_stimuli/american.wav";
const pendant = "stim/audio_stimuli/pendant.wav";

let Flag = {
    listNumber: 11,
    listA: [symbol, anthem, pole, raised, checkered, sign],
    listB: [stars, stripes, wave, national, emblem, freedom],
    prototype: flag,
    highestAssociates: [banner, american],
    lowestAssociate: pendant,
};

// all variables for list 12: Foot
const foot = "stim/audio_stimuli/foot.wav";
const toe = "stim/audio_stimuli/toe.wav";
const sandals = "stim/audio_stimuli/sandals.wav";
const yard = "stim/audio_stimuli/yard.wav";
const ankle = "stim/audio_stimuli/ankle.wav";
const boot = "stim/audio_stimuli/boot.wav";
const sock = "stim/audio_stimuli/sock.wav";
const kick = "stim/audio_stimuli/kick.wav";
const soccer = "stim/audio_stimuli/soccer.wav";
const walk = "stim/audio_stimuli/walk.wav";
const arm = "stim/audio_stimuli/arm.wav";
const inch = "stim/audio_stimuli/inch.wav";
const knee = "stim/audio_stimuli/knee.wav";
const shoe = "stim/audio_stimuli/shoe.wav";
const hand = "stim/audio_stimuli/hand.wav";
const mouth = "stim/audio_stimuli/mouth.wav";

let Foot = {
    listNumber: 12,
    listA: [toe, sandals, yard, ankle, boot, sock],
    listB: [kick, soccer, walk, arm, inch, knee],
    prototype: foot,
    highestAssociates: [shoe, hand],
    lowestAssociate: mouth,
};

// all variables for list 13: Fruit
const fruit = "stim/audio_stimuli/fruit.wav";
const orange = "stim/audio_stimuli/orange.wav";
const citrus = "stim/audio_stimuli/citrus.wav";
const pear = "stim/audio_stimuli/pear.wav";
const berry = "stim/audio_stimuli/berry.wav";
const basket = "stim/audio_stimuli/basket.wav";
const salad = "stim/audio_stimuli/salad.wav";
const kiwi = "stim/audio_stimuli/kiwi.wav";
const ripe = "stim/audio_stimuli/ripe.wav";
const banana = "stim/audio_stimuli/banana.wav";
const cherry = "stim/audio_stimuli/cherry.wav";
const juice = "stim/audio_stimuli/juice.wav";
const bowl = "stim/audio_stimuli/bowl.wav";
const apple = "stim/audio_stimuli/apple.wav";
const vegetable = "stim/audio_stimuli/vegetable.wav";
const cocktail = "stim/audio_stimuli/cocktail.wav";

let Fruit = {
    listNumber: 13,
    listA: [orange, citrus, pear, berry, basket, salad],
    listB: [kiwi, ripe, banana, cherry, juice, bowl],
    prototype: fruit,
    highestAssociates: [apple, vegetable],
    lowestAssociate: cocktail,
};

// all variables for list 14: Girl
const girl = "stim/audio_stimuli/girl.wav";
const female = "stim/audio_stimuli/female.wav";
const dress = "stim/audio_stimuli/dress.wav";
const hair = "stim/audio_stimuli/hair.wav";
const dance = "stim/audio_stimuli/dance.wav";
const cute = "stim/audio_stimuli/cute.wav";
const aunt = "stim/audio_stimuli/aunt.wav";
const young = "stim/audio_stimuli/young.wav";
const pretty = "stim/audio_stimuli/pretty.wav";
const niece = "stim/audio_stimuli/niece.wav";
const beautiful = "stim/audio_stimuli/beautiful.wav";
const outing = "stim/audio_stimuli/date.wav";
const daughter = "stim/audio_stimuli/daughter.wav";
const boy = "stim/audio_stimuli/boy.wav";
const dolls = "stim/audio_stimuli/dolls.wav";
const sister = "stim/audio_stimuli/sister.wav";

let Girl = {
    listNumber: 14,
    listA: [female, dress, hair, dance, cute, aunt],
    listB: [young, pretty, niece, beautiful, outing, daughter],
    prototype: girl,
    highestAssociates: [boy, dolls],
    lowestAssociate: sister,
};

// all variables for list 15: High
const high = "stim/audio_stimuli/high.wav";
const up = "stim/audio_stimuli/up.wav";
const tower = "stim/audio_stimuli/tower.wav";
const above = "stim/audio_stimuli/above.wav";
const noon = "stim/audio_stimuli/noon.wav";
const sky = "stim/audio_stimuli/sky.wav";
const airplane = "stim/audio_stimuli/airplane.wav";
const tall = "stim/audio_stimuli/tall.wav";
const jump = "stim/audio_stimuli/jump.wav";
const building = "stim/audio_stimuli/building.wav";
const cliff = "stim/audio_stimuli/cliff.wav";
const over = "stim/audio_stimuli/over.wav";
const dive = "stim/audio_stimuli/dive.wav";
const low = "stim/audio_stimuli/low.wav";
const clouds = "stim/audio_stimuli/clouds.wav";
const elevate = "stim/audio_stimuli/elevate.wav";

let High = {
    listNumber: 15,
    listA: [up, tower, above, noon, sky, airplane],
    listB: [tall, jump, building, cliff, over, dive],
    prototype: high,
    highestAssociates: [low, clouds],
    lowestAssociate: elevate,
};

// all variables for list 16: King
const king = "stim/audio_stimuli/king.wav";
const crown = "stim/audio_stimuli/crown.wav";
const george = "stim/audio_stimuli/george.wav";
const palace = "stim/audio_stimuli/palace.wav";
const chess = "stim/audio_stimuli/chess.wav";
const subjects = "stim/audio_stimuli/subjects.wav";
const royal = "stim/audio_stimuli/royal.wav";
const prince = "stim/audio_stimuli/prince.wav";
const dictator = "stim/audio_stimuli/dictator.wav";
const throne = "stim/audio_stimuli/throne.wav";
const rule = "stim/audio_stimuli/rule.wav";
const monarch = "stim/audio_stimuli/monarch.wav";
const leader = "stim/audio_stimuli/leader.wav";
const queen = "stim/audio_stimuli/queen.wav";
const england = "stim/audio_stimuli/england.wav";
const reign = "stim/audio_stimuli/reign.wav";

let King = {
    listNumber: 16,
    listA: [crown, george, palace, chess, subjects, royal],
    listB: [prince, dictator, throne, rule, monarch, leader],
    prototype: king,
    highestAssociates: [queen, england],
    lowestAssociate: reign,
};

// all variables for list 17: Lion
const lion = "stim/audio_stimuli/lion.wav";
const jungle = "stim/audio_stimuli/jungle.wav";
const den = "stim/audio_stimuli/den.wav";
const africa = "stim/audio_stimuli/africa.wav";
const cage = "stim/audio_stimuli/cage.wav";
const roar = "stim/audio_stimuli/roar.wav";
const bears = "stim/audio_stimuli/bears.wav";
const tamer = "stim/audio_stimuli/tamer.wav";
const cub = "stim/audio_stimuli/cub.wav";
const mane = "stim/audio_stimuli/mane.wav";
const feline = "stim/audio_stimuli/feline.wav";
const fierce = "stim/audio_stimuli/fierce.wav";
const hunt = "stim/audio_stimuli/hunt.wav";
const tiger = "stim/audio_stimuli/tiger.wav";
const circus = "stim/audio_stimuli/circus.wav";
const pride = "stim/audio_stimuli/pride.wav";

let Lion = {
    listNumber: 17,
    listA: [jungle, den, africa, cage, roar, bears],
    listB: [tamer, cub, mane, feline, fierce, hunt],
    prototype: lion,
    highestAssociates: [tiger, circus],
    lowestAssociate: pride,
};

// all variables for list 18: Man
const man = "stim/audio_stimuli/man.wav";
const uncle = "stim/audio_stimuli/uncle.wav";
const mouse = "stim/audio_stimuli/mouse.wav";
const father = "stim/audio_stimuli/father.wav";
const friend = "stim/audio_stimuli/friend.wav";
const person = "stim/audio_stimuli/person.wav";
const muscle = "stim/audio_stimuli/muscle.wav";
const lady = "stim/audio_stimuli/lady.wav";
const male = "stim/audio_stimuli/male.wav";
const strong = "stim/audio_stimuli/strong.wav";
const beard = "stim/audio_stimuli/beard.wav";
const handsome = "stim/audio_stimuli/handsome.wav";
const suit = "stim/audio_stimuli/suit.wav";
const woman = "stim/audio_stimuli/woman.wav";
const husband = "stim/audio_stimuli/husband.wav";
const old = "stim/audio_stimuli/old.wav";

let Man = {
    listNumber: 18,
    listA: [uncle, mouse, father, friend, person, muscle],
    listB: [lady, male, strong, beard, handsome, suit],
    prototype: man,
    highestAssociates: [woman, husband],
    lowestAssociate: old,
};

// all variables for list 19: Mountain
const mountain = "stim/audio_stimuli/mountain.wav";
const climb = "stim/audio_stimuli/climb.wav";
const top2 = "stim/audio_stimuli/top2.wav";
const peak = "stim/audio_stimuli/peak.wav";
const glacier = "stim/audio_stimuli/glacier.wav";
const bike = "stim/audio_stimuli/bike.wav";
const range = "stim/audio_stimuli/range.wav";
const summit = "stim/audio_stimuli/summit.wav";
const molehill = "stim/audio_stimuli/molehill.wav";
const plain = "stim/audio_stimuli/plain.wav";
const goat = "stim/audio_stimuli/goat.wav";
const climber = "stim/audio_stimuli/climber.wav";
const steep = "stim/audio_stimuli/steep.wav";
const hill = "stim/audio_stimuli/hill.wav";
const valley = "stim/audio_stimuli/valley.wav";
const ski = "stim/audio_stimuli/ski.wav";

let Mountain = {
    listNumber: 19,
    listA: [climb, top2, peak, glacier, bike, range],
    listB: [summit, molehill, plain, goat, climber, steep],
    prototype: mountain,
    highestAssociates: [hill, valley],
    lowestAssociate: ski,
};

// all variables for list 20: Music
const music = "stim/audio_stimuli/music.wav";
const piano = "stim/audio_stimuli/piano.wav";
const radio = "stim/audio_stimuli/radio.wav";
const melody = "stim/audio_stimuli/melody.wav";
const concert = "stim/audio_stimuli/concert.wav";
const symphony = "stim/audio_stimuli/symphony.wav";
const orchestra = "stim/audio_stimuli/orchestra.wav";
const sing = "stim/audio_stimuli/sing.wav";
const band = "stim/audio_stimuli/band.wav";
const horn = "stim/audio_stimuli/horn.wav";
const instrument = "stim/audio_stimuli/instrument.wav";
const jazz = "stim/audio_stimuli/jazz.wav";
const art = "stim/audio_stimuli/art.wav";
const note = "stim/audio_stimuli/note.wav";
const sound = "stim/audio_stimuli/sound.wav";
const rhythm = "stim/audio_stimuli/rhythm.wav";

let Music = {
    listNumber: 20,
    listA: [piano, radio, melody, concert, symphony, orchestra],
    listB: [sing, band, horn, instrument, jazz, art],
    prototype: music,
    highestAssociates: [note, sound],
    lowestAssociate: rhythm,
};

// all variables for list 21: Needle
const needle = "stim/audio_stimuli/needle.wav";
const eye = "stim/audio_stimuli/eye.wav";
const sharp = "stim/audio_stimuli/sharp.wav";
const prick = "stim/audio_stimuli/prick.wav";
const haystack = "stim/audio_stimuli/haystack.wav";
const hurt = "stim/audio_stimuli/hurt.wav";
const syringe = "stim/audio_stimuli/syringe.wav";
const sewing = "stim/audio_stimuli/sewing.wav";
const point = "stim/audio_stimuli/point.wav";
const thimble = "stim/audio_stimuli/thimble.wav";
const thorn = "stim/audio_stimuli/thorn.wav";
const injection = "stim/audio_stimuli/injection.wav";
const cloth = "stim/audio_stimuli/cloth.wav";
const thread = "stim/audio_stimuli/thread.wav";
const pin = "stim/audio_stimuli/pin.wav";
const knitting = "stim/audio_stimuli/knitting.wav";

let Needle = {
    listNumber: 21,
    listA: [eye, sharp, prick, haystack, hurt, syringe],
    listB: [sewing, point, thimble, thorn, injection, cloth],
    prototype: needle,
    highestAssociates: [thread, pin],
    lowestAssociate: knitting,
};

// all variables for list 22: Pen
const pen = "stim/audio_stimuli/pen.wav";
const fountain = "stim/audio_stimuli/fountain.wav";
const quill = "stim/audio_stimuli/quill.wav";
const bic = "stim/audio_stimuli/bic.wav";
const crayon = "stim/audio_stimuli/crayon.wav";
const tip = "stim/audio_stimuli/tip.wav";
const red = "stim/audio_stimuli/red.wav";
const leak = "stim/audio_stimuli/leak.wav";
const felt = "stim/audio_stimuli/felt.wav";
const scribble = "stim/audio_stimuli/scribble.wav";
const cross = "stim/audio_stimuli/cross.wav";
const marker = "stim/audio_stimuli/marker.wav";
const cap = "stim/audio_stimuli/cap.wav";
const pencil = "stim/audio_stimuli/pencil.wav";
const write = "stim/audio_stimuli/write.wav";
const letter = "stim/audio_stimuli/letter.wav";

let Pen = {
    listNumber: 22,
    listA: [fountain, quill, bic, crayon, tip, red],
    listB: [leak, felt, scribble, cross, marker, cap],
    prototype: pen,
    highestAssociates: [pencil, write],
    lowestAssociate: letter,
};

// all variables for list 23: River
const river = "stim/audio_stimuli/river.wav";
const lake = "stim/audio_stimuli/lake.wav";
const boat = "stim/audio_stimuli/boat.wav";
const swim = "stim/audio_stimuli/swim.wav";
const run = "stim/audio_stimuli/run.wav";
const creek = "stim/audio_stimuli/creek.wav";
const fish = "stim/audio_stimuli/fish.wav";
const mississippi = "stim/audio_stimuli/mississippi.wav";
const tide = "stim/audio_stimuli/tide.wav";
const flow = "stim/audio_stimuli/flow.wav";
const barge = "stim/audio_stimuli/barge.wav";
const brook = "stim/audio_stimuli/brook.wav";
const bridge = "stim/audio_stimuli/bridge.wav";
const water = "stim/audio_stimuli/water.wav";
const stream = "stim/audio_stimuli/stream.wav";
const winding = "stim/audio_stimuli/winding.wav";

let River = {
    listNumber: 23,
    listA: [lake, boat, swim, run, creek, fish],
    listB: [mississippi, tide, flow, barge, brook, bridge],
    prototype: river,
    highestAssociates: [water, stream],
    lowestAssociate: winding,
};

// all variables for list 24: Rough
const rough = "stim/audio_stimuli/rough.wav";
const road = "stim/audio_stimuli/road.wav";
const sandpaper = "stim/audio_stimuli/sandpaper.wav";
const ready = "stim/audio_stimuli/ready.wav";
const uneven = "stim/audio_stimuli/uneven.wav";
const rugged = "stim/audio_stimuli/rugged.wav";
const boards = "stim/audio_stimuli/boards.wav";
const tough = "stim/audio_stimuli/tough.wav";
const jagged = "stim/audio_stimuli/jagged.wav";
const coarse = "stim/audio_stimuli/coarse.wav";
const riders = "stim/audio_stimuli/riders.wav";
const sand = "stim/audio_stimuli/sand.wav";
const ground = "stim/audio_stimuli/ground.wav";
const smooth = "stim/audio_stimuli/smooth.wav";
const bumpy = "stim/audio_stimuli/bumpy.wav";
const gravel = "stim/audio_stimuli/gravel.wav";

let Rough = {
    listNumber: 24,
    listA: [road, sandpaper, ready, uneven, rugged, boards],
    listB: [tough, jagged, coarse, riders, sand, ground],
    prototype: rough,
    highestAssociates: [smooth, bumpy],
    lowestAssociate: gravel,
};

// all variables for list 25: Rubber
const rubber = "stim/audio_stimuli/rubber.wav";
const gloves = "stim/audio_stimuli/gloves.wav";
const ball = "stim/audio_stimuli/ball.wav";
const springy = "stim/audio_stimuli/springy.wav";
const galoshes = "stim/audio_stimuli/galoshes.wav";
const latex = "stim/audio_stimuli/latex.wav";
const flexible = "stim/audio_stimuli/flexible.wav";
const tire = "stim/audio_stimuli/tire.wav";
const eraser = "stim/audio_stimuli/eraser.wav";
const foam = "stim/audio_stimuli/foam.wav";
const soles = "stim/audio_stimuli/soles.wav";
const glue = "stim/audio_stimuli/glue.wav";
const resilient = "stim/audio_stimuli/resilient.wav";
const elastic = "stim/audio_stimuli/elastic.wav";
const bounce = "stim/audio_stimuli/bounce.wav";
const stretch = "stim/audio_stimuli/stretch.wav";

let Rubber = {
    listNumber: 25,
    listA: [gloves, ball, springy, galoshes, latex, flexible],
    listB: [tire, eraser, foam, soles, glue, resilient],
    prototype: rubber,
    highestAssociates: [elastic, bounce],
    lowestAssociate: stretch,
};

// all variables for list 26: Shirt
const shirt = "stim/audio_stimuli/shirt.wav";
const pants = "stim/audio_stimuli/pants.wav";
const button = "stim/audio_stimuli/button.wav";
const iron = "stim/audio_stimuli/iron.wav";
const collar = "stim/audio_stimuli/collar.wav";
const pocket = "stim/audio_stimuli/pocket.wav";
const belt = "stim/audio_stimuli/belt.wav";
const tie = "stim/audio_stimuli/tie.wav";
const shorts = "stim/audio_stimuli/shorts.wav";
const polo = "stim/audio_stimuli/polo.wav";
const vest = "stim/audio_stimuli/vest.wav";
const jersey = "stim/audio_stimuli/jersey.wav";
const linen = "stim/audio_stimuli/linen.wav";
const blouse = "stim/audio_stimuli/blouse.wav";
const sleeves = "stim/audio_stimuli/sleeves.wav";
const cuffs = "stim/audio_stimuli/cuffs.wav";

let Shirt = {
    listNumber: 26,
    listA: [pants, button, iron, collar, pocket, belt],
    listB: [tie, shorts, polo, vest, jersey, linen],
    prototype: shirt,
    highestAssociates: [blouse, sleeves],
    lowestAssociate: cuffs,
};

// all variables for list 27: Sleep
const sleep = "stim/audio_stimuli/sleep.wav";
const awake = "stim/audio_stimuli/awake.wav";
const dream = "stim/audio_stimuli/dream.wav";
const snooze = "stim/audio_stimuli/snooze.wav";
const doze = "stim/audio_stimuli/doze.wav";
const snore = "stim/audio_stimuli/snore.wav";
const peace = "stim/audio_stimuli/peace.wav";
const tired = "stim/audio_stimuli/tired.wav";
const wake = "stim/audio_stimuli/wake.wav";
const blanket = "stim/audio_stimuli/blanket.wav";
const slumber = "stim/audio_stimuli/slumber.wav";
const nap = "stim/audio_stimuli/nap.wav";
const yawn = "stim/audio_stimuli/yawn.wav";
const bed = "stim/audio_stimuli/bed.wav";
const rest = "stim/audio_stimuli/rest.wav";
const drowsy = "stim/audio_stimuli/drowsy.wav";

let Sleep = {
    listNumber: 27,
    listA: [awake, dream, snooze, doze, snore, peace],
    listB: [tired, wake, blanket, slumber, nap, yawn],
    prototype: sleep,
    highestAssociates: [bed, rest],
    lowestAssociate: drowsy,
};

// all variables for list 28: Slow
const slow = "stim/audio_stimuli/slow.wav";
const stops = "stim/audio_stimuli/stop.wav";
const snail = "stim/audio_stimuli/snail.wav";
const delay = "stim/audio_stimuli/delay.wav";
const turtle = "stim/audio_stimuli/turtle.wav";
const speed = "stim/audio_stimuli/speed.wav";
const sluggish = "stim/audio_stimuli/sluggish.wav";
const listless = "stim/audio_stimuli/listless.wav";
const cautious = "stim/audio_stimuli/cautious.wav";
const traffic = "stim/audio_stimuli/traffic.wav";
const hesitant = "stim/audio_stimuli/hesitant.wav";
const quick = "stim/audio_stimuli/quick.wav";
const wait = "stim/audio_stimuli/wait.wav";
const fast = "stim/audio_stimuli/fast.wav";
const lethargic = "stim/audio_stimuli/lethargic.wav";
const molasses = "stim/audio_stimuli/molasses.wav";

let Slow = {
    listNumber: 28,
    listA: [stops, snail, delay, turtle, speed, sluggish],
    listB: [listless, cautious, traffic, hesitant, quick, wait],
    prototype: slow,
    highestAssociates: [fast, lethargic],
    lowestAssociate: molasses,
};

// all variables for list 29: Smell
const smell = "stim/audio_stimuli/smell.wav";
const sniff = "stim/audio_stimuli/sniff.wav";
const hear = "stim/audio_stimuli/hear.wav";
const nostril = "stim/audio_stimuli/nostril.wav";
const scent = "stim/audio_stimuli/scent.wav";
const stench = "stim/audio_stimuli/stench.wav";
const perfume = "stim/audio_stimuli/perfume.wav";
const aroma = "stim/audio_stimuli/aroma.wav";
const see = "stim/audio_stimuli/see.wav";
const whiff = "stim/audio_stimuli/whiff.wav";
const reek = "stim/audio_stimuli/reek.wav";
const fragrance = "stim/audio_stimuli/fragrance.wav";
const salts = "stim/audio_stimuli/salts.wav";
const nose = "stim/audio_stimuli/nose.wav";
const breathe = "stim/audio_stimuli/breathe.wav";
const rose = "stim/audio_stimuli/rose.wav";

let Smell = {
    listNumber: 29,
    listA: [sniff, hear, nostril, scent, stench, perfume],
    listB: [aroma, see, whiff, reek, fragrance, salts],
    prototype: smell,
    highestAssociates: [nose, breathe],
    lowestAssociate: rose,
};

// all variables for list 30: Smoke
const smoke = "stim/audio_stimuli/smoke.wav";
const blaze = "stim/audio_stimuli/blaze.wav";
const pollution = "stim/audio_stimuli/pollution.wav";
const cigar = "stim/audio_stimuli/cigar.wav";
const fire = "stim/audio_stimuli/fire.wav";
const stink = "stim/audio_stimuli/stink.wav";
const lungs = "stim/audio_stimuli/lungs.wav";
const billows = "stim/audio_stimuli/billows.wav";
const ashes = "stim/audio_stimuli/ashes.wav";
const chimney = "stim/audio_stimuli/chimney.wav";
const tobacco = "stim/audio_stimuli/tobacco.wav";
const pipe = "stim/audio_stimuli/pipe.wav";
const flames = "stim/audio_stimuli/flames.wav";
const cigarette = "stim/audio_stimuli/cigarette.wav";
const puff = "stim/audio_stimuli/puff.wav";
const stain = "stim/audio_stimuli/stain.wav";

let Smoke = {
    listNumber: 30,
    listA: [blaze, pollution, cigar, fire, stink, lungs],
    listB: [billows, ashes, chimney, tobacco, pipe, flames],
    prototype: smoke,
    highestAssociates: [cigarette, puff],
    lowestAssociate: stain,
};

// all variables for list 31: Soft
const soft = "stim/audio_stimuli/soft.wav";
const pillow = "stim/audio_stimuli/pillow.wav";
const loud = "stim/audio_stimuli/loud.wav";
const fur = "stim/audio_stimuli/fur.wav";
const fluffy = "stim/audio_stimuli/fluffy.wav";
const furry = "stim/audio_stimuli/furry.wav";
const kitten = "stim/audio_stimuli/kitten.wav";
const plush = "stim/audio_stimuli/plush.wav";
const cotton = "stim/audio_stimuli/cotton.wav";
const touch = "stim/audio_stimuli/touch.wav";
const feather = "stim/audio_stimuli/feather.wav";
const downy = "stim/audio_stimuli/downy.wav";
const skin = "stim/audio_stimuli/skin.wav";
const hard = "stim/audio_stimuli/hard.wav";
const light = "stim/audio_stimuli/light.wav";
const tender = "stim/audio_stimuli/tender.wav";

let Soft = {
    listNumber: 31,
    listA: [pillow, loud, fur, fluffy, furry, kitten],
    listB: [plush, cotton, touch, feather, downy, skin],
    prototype: soft,
    highestAssociates: [hard, light],
    lowestAssociate: tender,
};

// all variables for list 32: Spider
const spider = "stim/audio_stimuli/spider.wav";
const big2 = "stim/audio_stimuli/big2.wav";
const fly = "stim/audio_stimuli/fly.wav ";
const crawl = "stim/audio_stimuli/crawl.wav";
const poison = "stim/audio_stimuli/poison.wav";
const creepy = "stim/audio_stimuli/creepy.wav";
const ugly = "stim/audio_stimuli/ugly.wav";
const fright = "stim/audio_stimuli/fright.wav";
const arachnid = "stim/audio_stimuli/arachnid.wav";
const tarantula = "stim/audio_stimuli/tarantula.wav";
const bite = "stim/audio_stimuli/bite.wav";
const animal = "stim/audio_stimuli/animal.wav";
const feelers = "stim/audio_stimuli/feelers.wav";
const web = "stim/audio_stimuli/web.wav";
const insect = "stim/audio_stimuli/insect.wav";
const small = "stim/audio_stimuli/small.wav";

let Spider = {
    listNumber: 32,
    listA: [big2, fly, crawl, poison, creepy, ugly],
    listB: [fright, arachnid, tarantula, bite, animal, feelers],
    prototype: spider,
    highestAssociates: [web, insect],
    lowestAssociate: small,
};

// all variables for list 33: Sweet
const sweet = "stim/audio_stimuli/sweet.wav";
const sugar = "stim/audio_stimuli/sugar.wav";
const good = "stim/audio_stimuli/good.wav";
const tooth = "stim/audio_stimuli/tooth.wav";
const honey = "stim/audio_stimuli/honey.wav";
const chocolate = "stim/audio_stimuli/chocolate.wav";
const cake = "stim/audio_stimuli/cake.wav";
const bitter = "stim/audio_stimuli/bitter.wav";
const taste = "stim/audio_stimuli/taste.wav";
const nice = "stim/audio_stimuli/nice.wav";
const soda = "stim/audio_stimuli/soda.wav";
const heart = "stim/audio_stimuli/heart.wav";
const tart = "stim/audio_stimuli/tart.wav";
const sour = "stim/audio_stimuli/sour.wav";
const candy = "stim/audio_stimuli/candy.wav";
const pie = "stim/audio_stimuli/pie.wav";

let Sweet = {
    listNumber: 33,
    listA: [sugar, good, tooth, honey, chocolate, cake],
    listB: [bitter, taste, nice, soda, heart, tart],
    prototype: sweet,
    highestAssociates: [sour, candy],
    lowestAssociate: pie,
};

// all variables for list 34: Thief
const thief = "stim/audio_stimuli/thief.wav";
const crook = "stim/audio_stimuli/crook.wav";
const money = "stim/audio_stimuli/money.wav";
const bad = "stim/audio_stimuli/bad.wav";
const jail = "stim/audio_stimuli/jail.wav";
const villain = "stim/audio_stimuli/villain.wav";
const bank = "stim/audio_stimuli/bank.wav";
const burglar = "stim/audio_stimuli/burglar.wav";
const cop = "stim/audio_stimuli/cop.wav";
const rob = "stim/audio_stimuli/rob.wav";
const gun = "stim/audio_stimuli/gun.wav";
const crime = "stim/audio_stimuli/crime.wav";
const bandit = "stim/audio_stimuli/bandit.wav";
const steal = "stim/audio_stimuli/steal.wav";
const robber = "stim/audio_stimuli/robber.wav";
const criminal = "stim/audio_stimuli/criminal.wav";

let Thief = {
    listNumber: 34,
    listA: [crook, money, bad, jail, villain, bank],
    listB: [burglar, cop, rob, gun, crime, bandit],
    prototype: thief,
    highestAssociates: [steal, robber],
    lowestAssociate: criminal,
};

// all variables for list 35: Trash
const trash = "stim/audio_stimuli/trash.wav";
const can = "stim/audio_stimuli/can.wav";
const sewage = "stim/audio_stimuli/sewage.wav";
const junk = "stim/audio_stimuli/junk.wav";
const sweep = "stim/audio_stimuli/sweep.wav";
const pile = "stim/audio_stimuli/pile.wav";
const landfill = "stim/audio_stimuli/landfill.wav";
const refuse = "stim/audio_stimuli/refuse.wav";
const bag = "stim/audio_stimuli/bag.wav";
const rubbish = "stim/audio_stimuli/rubbish.wav";
const scraps = "stim/audio_stimuli/scraps.wav";
const dump = "stim/audio_stimuli/dump.wav";
const debris = "stim/audio_stimuli/debris.wav";
const garbage = "stim/audio_stimuli/garbage.wav";
const waster = "stim/audio_stimuli/waster.wav";
const litter = "stim/audio_stimuli/litter.wav";

let Trash = {
    listNumber: 35,
    listA: [can, sewage, junk, sweep, pile, landfill],
    listB: [refuse, bag, rubbish, scraps, dump, debris],
    prototype: trash,
    highestAssociates: [garbage, waster],
    lowestAssociate: litter,
};

// all variables for list 36: Window
const windows = "stim/audio_stimuli/window.wav";
const pane = "stim/audio_stimuli/pane.wav";
const ledge = "stim/audio_stimuli/ledge.wav";
const house = "stim/audio_stimuli/house.wav";
const curtain = "stim/audio_stimuli/curtain.wav";
const view = "stim/audio_stimuli/view.wav";
const sash = "stim/audio_stimuli/sash.wav";
const shade = "stim/audio_stimuli/shade.wav";
const sill = "stim/audio_stimuli/sill.wav";
const opens = "stim/audio_stimuli/open.wav";
const frame = "stim/audio_stimuli/frame.wav";
const breeze = "stim/audio_stimuli/breeze.wav";
const screens = "stim/audio_stimuli/screen.wav";
const door = "stim/audio_stimuli/door.wav";
const glass = "stim/audio_stimuli/glass.wav";
const shutter = "stim/audio_stimuli/shutter.wav";

let Windows = {
    listNumber: 36,
    listA: [pane, ledge, house, curtain, view, sash],
    listB: [shade, sill, opens, frame, breeze, screens],
    prototype: windows,
    highestAssociates: [door, glass],
    lowestAssociate: shutter,
};

// all lists 
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
];

// randomize all lists
let randomizedLists = shuffleArray(allLists);

let bucket1 = randomizedLists.slice(0, 18); // takes first 18 lists of randomized lists and places them into "bucket"
let bucket2 = randomizedLists.slice(0, 18);
let bucket3 = randomizedLists.slice(18, 36);
let bucket4 = randomizedLists.slice(18, 36);

let congruentPrototype = bucket1;
let incongruentPrototype = bucket2;
let congruentHighestAssociate = bucket3; // since bucket 3 and bucket4 contain the same objects, when we make congruent highest associate trials, be sure to use the objects' B lists
let incongruentHighestAssociate = [bucket4, bucket1];

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


randomizedLists = shuffleArray(randomizedLists);
let incongruentPrototypeTrials = [];

for (let i = 0; i < incongruentPrototypeTrial1.listA.length; i++) {
incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial1.listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial1.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); 
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial18.prototype,
   trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial2.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial2.listA[i],
        trial_duration: durationForListWords,
      response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial2.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial17.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial3.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial3.listA[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial3.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial16.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial4.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial4.listA[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial4.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial15.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial5.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial5.listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial5.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial14.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial6.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial6.listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial6.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial13.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial7.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial7.listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial7.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial12.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial8.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial8.listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial8.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial11.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial9.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial9.listA[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial9.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial10.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial10.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial10.listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial10.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial9.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial11.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial11.listA[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial11.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial8.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial12.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial12.listA[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial12.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial7.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial13.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial13.listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial13.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial6.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); 

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial14.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial14.listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial14.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); 
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial5.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); 

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial15.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial15.listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial15.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial4.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); 

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial16.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial16.listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial16.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
}); 
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial3.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial17.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial17.listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial17.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial2.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentPrototypeTrial18.listA.length; i++) {
    incongruentPrototypeTrials.push({
        stimulus: incongruentPrototypeTrial18.listA[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentPrototypeTrial18.listA[i],
            drmTrial_type: "incongruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});
incongruentPrototypeTrials.push({
    stimulus: incongruentPrototypeTrial1.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

incongruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentPrototype",
    },
    confidence: "x",
});

// Here starts replicating structure of incongruent protype tirals to create trials for congruent prototype
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

for (let i = 0; i < congruentPrototypeTrial1.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial1.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial1.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial1.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial2.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial2.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial2.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial2.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial3.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial3.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial3.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial3.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial4.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial4.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial4.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial4.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial5.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial5.listB[i],
        trial_duration: durationForListWords,
      response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial5.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial5.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial6.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial6.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial6.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial6.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial7.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial7.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial7.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial7.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial8.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial8.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial8.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial8.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial9.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial9.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial9.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial9.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial10.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial10.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial10.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial10.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial11.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial11.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial11.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial11.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial12.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial12.listB[i],
        trial_duration: durationForListWords,
      response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial12.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial12.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial13.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial13.listB[i],
        trial_duration: durationForListWords,
     response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial13.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial13.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial14.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial14.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial14.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial14.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial15.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial15.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial15.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial15.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial16.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial16.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial16.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial16.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
}); 

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial17.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial17.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial17.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial17.prototype,
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

for (let i = 0; i < congruentPrototypeTrial18.listB.length; i++) {
    congruentPrototypeTrials.push({
        stimulus: congruentPrototypeTrial18.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentPrototypeTrial18.listB[i],
            drmTrial_type: "congruentPrototype",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentPrototypeTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});
congruentPrototypeTrials.push({
    stimulus: congruentPrototypeTrial18.prototype,
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

congruentPrototypeTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentPrototype",
    },
    confidence: "x",
});

let incongruentHighestAssociateTrial1 = [
    incongruentHighestAssociate[0][0],
    incongruentHighestAssociate[1][0],
];
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

for (let i = 0; i < incongruentHighestAssociateTrial1[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial1[0].listA[i],
        trial_duration: durationForListWords,
      response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial1[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial1[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial2[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial2[0].listA[i],
        trial_duration: durationForListWords,
     response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial2[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial2[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
});

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial3[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial3[0].listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial3[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial3[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial4[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial4[0].listA[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial4[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial4[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial5[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial5[0].listA[i],
        trial_duration: durationForListWords,
      response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial5[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial5[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial6[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial6[0].listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial6[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial6[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial7[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial7[0].listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial7[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial7[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial8[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial8[0].listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial8[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial8[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial9[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial9[0].listA[i],
        trial_duration: durationForListWords,
      response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial9[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial9[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial10[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial10[0].listA[i],
        trial_duration: durationForListWords,
     response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial10[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial10[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial11[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial11[0].listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial11[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial11[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial12[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial12[0].listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial12[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial12[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial13[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial13[0].listA[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial13[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial13[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial14[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial14[0].listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial14[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial14[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial15[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial15[0].listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial15[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial15[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial16[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial16[0].listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial16[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial16[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial17[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial17[0].listA[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial17[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial17[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
});

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

for (let i = 0; i < incongruentHighestAssociateTrial18[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({
        stimulus: incongruentHighestAssociateTrial18[0].listA[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: incongruentHighestAssociateTrial18[0].listA[i],
            drmTrial_type: "incongruentHighestAssociate",
            word_position: "list",
        },
        confidence: "x",
    });
}
incongruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});
incongruentHighestAssociateTrials.push({
    stimulus: incongruentHighestAssociateTrial18[1].highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});

incongruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
}); 

incongruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "incongruentHighestAssociate",
    },
    confidence: "x",
});


// creating structure for congruent highest associate trials
// use for 2nd position trials
let congruentHighestAssociateTrial1 = congruentHighestAssociate[0];
let congruentHighestAssociateTrial2 = congruentHighestAssociate[1];
let congruentHighestAssociateTrial3 = congruentHighestAssociate[2];
let congruentHighestAssociateTrial4 = congruentHighestAssociate[3];
let congruentHighestAssociateTrial5 = congruentHighestAssociate[4];

// use for 3rd position trials
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

// for congruent Highest associate trials, the number of "i"s that are pushed will differ
// highest associate will be palced in the 2-5 position. Since there are a total of 18 trials, create:
// 5 with highest associate in 2nd word position
// 4 trials with highest associate in 3rd word position
// 4 with highest associate in 4th word positiion
// 5 with highest associate in 5th word position

let congruentHighestAssociateTrials = [];

for (let i = 0; i < 1; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial1.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial1.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial1.highestAssociates[0],
    trial_duration: durationForListWords,
    response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial1.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "list",
    },
    confidence: "x",
});
for (let i = 2; i < congruentHighestAssociateTrial1.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial1.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial1.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial1.highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

for (let i = 0; i < 1; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial2.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
            data: {
                test_part: "test",
                stim: congruentHighestAssociateTrial2.listB[i],
                drmTrial_type: "congruentHighestAssociate_2",
                word_position: "list",
            },
            confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial2.highestAssociates[0],
    trial_duration: durationForListWords,
    response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial2.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); 
for (let i = 2; i < congruentHighestAssociateTrial2.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial2.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial2.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial2.highestAssociates[0],
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

for (let i = 0; i < 1; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial3.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial3.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial3.highestAssociates[0],
    trial_duration: durationForListWords,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial3.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); 
for (let i = 2; i < congruentHighestAssociateTrial3.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial3.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial3.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial3.highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

for (let i = 0; i < 1; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial4.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial4.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial4.highestAssociates[0],
    trial_duration: durationForListWords,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial4.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
});
for (let i = 2; i < congruentHighestAssociateTrial4.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial4.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial4.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial4.highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
})

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

for (let i = 0; i < 1; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial5.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial5.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial5.highestAssociates[0],
    trial_duration: durationForListWords,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial5.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_2",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
});
for (let i = 2; i < congruentHighestAssociateTrial5.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial5.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial5.listB[i],
            drmTrial_type: "congruentHighestAssociate_2",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial5.highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_2",
    },
    confidence: "x",
});

for (let i = 0; i < 2; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial6.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial6.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial6.highestAssociates[0],
    trial_duration: durationForListWords,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial6.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_3",
        word_position: "list",
    },
    confidence: "x",
}); 
for (let i = 3; i < congruentHighestAssociateTrial6.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial6.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial6.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial6.highestAssociates[0],
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});

for (let i = 0; i < 2; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial7.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
            data: {
                test_part: "test",
                stim: congruentHighestAssociateTrial7.listB[i],
                drmTrial_type: "congruentHighestAssociate_3",
                word_position: "list",
            },
            confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial7.highestAssociates[0],
    trial_duration: durationForListWords,
    response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial7.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_3",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); 
for (let i = 3; i < congruentHighestAssociateTrial7.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial7.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial7.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
}); 
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial7.highestAssociates[0],
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});

for (let i = 0; i < 2; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial8.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial8.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial8.highestAssociates[0],
    trial_duration: durationForListWords,
    response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial8.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_3",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
});
for (let i = 3; i < congruentHighestAssociateTrial8.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial8.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial8.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial8.highestAssociates[0],
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});

for (let i = 0; i < 2; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial9.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
            data: {
                test_part: "test",
                stim: congruentHighestAssociateTrial9.listB[i],
                drmTrial_type: "congruentHighestAssociate_3",
                word_position: "list",
            },
            confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial9.highestAssociates[0],
    trial_duration: durationForListWords,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial9.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_3",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); 
for (let i = 3; i < congruentHighestAssociateTrial9.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial9.listB[i],
        trial_duration: durationForListWords,
      response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial9.listB[i],
            drmTrial_type: "congruentHighestAssociate_3",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial9.highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_3",
    },
    confidence: "x",
});

for (let i = 0; i < 3; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial10.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial10.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial10.highestAssociates[0],
    trial_duration: durationForListWords,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial10.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_4",
        word_position: "list",
    },
    confidence: "x",
}); 
for (let i = 4; i < congruentHighestAssociateTrial10.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial10.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial10.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial10.highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});

for (let i = 0; i < 3; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial11.listB[i],
        trial_duration: durationForListWords,
      response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial11.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial11.highestAssociates[0],
    trial_duration: durationForListWords,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial11.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_4",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); 
for (let i = 4; i < congruentHighestAssociateTrial11.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial11.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial11.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial11.highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});

for (let i = 0; i < 3; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial12.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
            data: {
                test_part: "test",
                stim: congruentHighestAssociateTrial12.listB[i],
                drmTrial_type: "congruentHighestAssociate_4",
                word_position: "list",
            },
            confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial12.highestAssociates[0],
    trial_duration: durationForListWords,
    response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial12.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_4",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); 
for (let i = 4; i < congruentHighestAssociateTrial12.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial12.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial12.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
}); 
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial12.highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});

for (let i = 0; i < 3; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial13.listB[i],
        trial_duration: durationForListWords,
      response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial13.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial13.highestAssociates[0],
    trial_duration: durationForListWords,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial13.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_4",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
});
for (let i = 4; i < congruentHighestAssociateTrial13.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial13.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial13.listB[i],
            drmTrial_type: "congruentHighestAssociate_4",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial13.highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_4",
    },
    confidence: "x",
});

for (let i = 0; i < 4; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial14.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
            data: {
                test_part: "test",
                stim: congruentHighestAssociateTrial14.listB[i],
                drmTrial_type: "congruentHighestAssociate_5",
                word_position: "list",
            },
            confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial14.highestAssociates[0],
    trial_duration: durationForListWords,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial14.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "list",
    },
    confidence: "x",
}); 
for (let i = 5; i < congruentHighestAssociateTrial14.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial14.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial14.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial14.highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});

for (let i = 0; i < 4; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial15.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial15.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial15.highestAssociates[0],
    trial_duration: durationForListWords,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial15.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); 
for (let i = 5; i < congruentHighestAssociateTrial15.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial15.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial15.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial15.highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});

for (let i = 0; i < 4; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial16.listB[i],
        trial_duration: durationForListWords,
      response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial16.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial16.highestAssociates[0],
    trial_duration: durationForListWords,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial15.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
});
for (let i = 5; i < congruentHighestAssociateTrial16.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial16.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial16.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    });
};
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial16.highestAssociates[0],
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});

for (let i = 0; i < 4; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial17.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial17.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial17.highestAssociates[0],
    trial_duration: durationForListWords,
   response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial17.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
});
for (let i = 5; i < congruentHighestAssociateTrial17.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial17.listB[i],
        trial_duration: durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial17.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial17.highestAssociates[0],
    trial_duration: durationForTargetWords,
   response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});

for (let i = 0; i < 4; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial18.listB[i],
        trial_duration:durationForListWords,
       response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial18.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    });
}
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial18.highestAssociates[0],
    trial_duration: durationForListWords,
    response_ends_trial: false, 
    data: {
        test_part: "test",
        stim: congruentHighestAssociateTrial18.highestAssociates[0],
        drmTrial_type: "congruentHighestAssociate_5",
        word_position: "target",
        correct_response: "74",
    },
    confidence: "x",
}); 
for (let i = 5; i < congruentHighestAssociateTrial18.listB.length; i++) {
    congruentHighestAssociateTrials.push({
        stimulus: congruentHighestAssociateTrial18.listB[i],
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: congruentHighestAssociateTrial18.listB[i],
            drmTrial_type: "congruentHighestAssociate_5",
            word_position: "list",
        },
        confidence: "x",
    }); 
}
congruentHighestAssociateTrials.push({
    stimulus: responsePromptTone,
    trial_duration: durationForTone1,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: responsePromptTone,
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});
congruentHighestAssociateTrials.push({
    stimulus: congruentHighestAssociateTrial18.highestAssociates[0],
    trial_duration: durationForTargetWords,
    response_ends_trial: false, 
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
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});

congruentHighestAssociateTrials.push({
    stimulus: trialStartTone,
    trial_duration: fixationDuration,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: trialStartTone,
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
}); 

congruentHighestAssociateTrials.push({
    stimulus: "stim/audio_instructions/silence.mp3",
    trial_duration: 1000,
    response_ends_trial: false,
    data: {
        test_part: "test",
        stim: "stim/audio_instructions/silence.mp3",
        drmTrial_type: "congruentHighestAssociate_5",
    },
    confidence: "x",
});


let interleavedFinalStim = [];

for (let i = 0; i <= 629; i++) {
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

// randomizationFinal = randomizationScheme; //shuffled array no repeats
let randomizationFinal = shuffleArray(randomizationScheme); 
while (interleavedFinalStim.length > 0) {
    interleavedFinalStim.pop();
}

for (let i = 0; i <= randomizationFinal.length; i++) {
    if (randomizationFinal[i] === 0) {
            // first add 9 incongruent prototype items
            for (let i = 0; i <= 10; i++) {
                interleavedFinalStim.push(incongruentPrototypeTrials[i]);
        }
            // then remove 9 incongruent prototype items
            for (let i = 0; i <= 10; i++) {
                incongruentPrototypeTrials.shift();
            }
    } else if (randomizationFinal[i] === 1) {
            // ADD 9 congruent prototype items
            for (let i = 0; i <= 10; i++) {
                interleavedFinalStim.push(congruentPrototypeTrials[i]);
            }
            // Remove 9 congruent prototype items
            for (let i = 0; i <= 10; i++) {
                congruentPrototypeTrials.shift();
            }
    } else if (randomizationFinal[i] === 2) {
            // ADD 9 items from incongruent highest associates trials
            for (let i = 0; i <= 10; i++) {
                interleavedFinalStim.push(incongruentHighestAssociateTrials[i]);
            }
            // Remove 9 incongruent highest associates items
            for (let i = 0; i <= 10; i++) {
                incongruentHighestAssociateTrials.shift();
            }
    } else if (randomizationFinal[i] === 3) {
            // ADD 9 congruent highest associate items
            for (let i = 0; i <= 10; i++) {
                interleavedFinalStim.push(congruentHighestAssociateTrials[i]);
            }
            // Remove 9 congruent highest associate items
            for (let i = 0; i <= 10; i++) {
                congruentHighestAssociateTrials.shift();
            }
    }
}

// For preload - Extract all audio file paths from the lists
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

