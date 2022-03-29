// starts counting of trials at 1 to display in output file as trial
let trialIterator = 1;


// feedback contrainer
let feedbackGenerator = '<p id="feedbackGenerator" style="color:black;"></p>';

// tracks total taps per trial
let totalConfidence = [0]; // must be 0 to compensate for participant should they miss first trial

// // user selection of allergy or no-allergy
let responseKey;

// progress bar container
let progressBar = '<div id="counter" class="w3-container" style="color:black"><div class="w3-light-grey"><div class="w3-grey" id="keyBar" style="height:24px;width:0%;"></div></div><br><div>';
let fillUp = '<p id="fillUp" style="color:black;"></p>';

// set the time remaining notification for participant
let timeRemaining = '<p id="timeRemaining" style="text-align:center; color:black;"></p>';

// define all language for experiment

//First, create words to be used in practice trials
const atom = 'atom';
const molecule = 'molecule';
const bond = 'bond';
const gas = 'gas';
const electron = 'electron';
const oxygen = 'oxygen';
const chemistry = 'chemistry';

const shark = 'shark';
const island = 'island';
const waves = 'waves';
const shrimp = 'shrimp';
const whale = 'whale';
const ocean = 'ocean';

let practiceOne = {
    listA: [atom, molecule, bond, gas, electron, oxygen],
    prototype: chemistry,
};

let practiceTwo = {
    listA: [shark, island, waves, shrimp, ocean, whale],
    prototype: ocean,
};


let practiceLists= [practiceOne, practiceTwo];

let practiceTrial1 = practiceLists[0];
let practiceTrial2 = practiceLists[1];

let practiceTrials = [];
// pushes 6 items from listA
for (let i=0; i<practiceTrial1.listA.length; i++) {
    practiceTrials.push({prompt:"", stimulus: practiceTrial1.listA[i], prompt_end:"", duration: durationForListWords, response_ends_trial:false, data: {test_part:"practice", stim: practiceTrial1.listA[i], drmTrial_type:"practice", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
//practiceTrials.push({stimulus: "TONE1", data: {test_part:"practice", stim: "tone1", drmTrial_type:"practice"}, confidence: ''}); // pushes 7th item
practiceTrials.push({prompt: "Did you see the word ", stimulus: practiceTrial1.prototype, prompt_end:"?", duration: durationForTargetWords, response_ends_trial:false, data: {test_part:"practice", stim: practiceTrial1.prototype, drmTrial_type:"practice", word_position:"target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
practiceTrials.push({prompt: "", stimulus: "+", prompt_end:"", duration: fixationDuration, data: {test_part:"practice", stim: "fixation", drmTrial_type:"practice"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<practiceTrial2.listA.length; i++) {
    practiceTrials.push({prompt: "", stimulus: practiceTrial2.listA[i], prompt_end: "", duration: durationForListWords, response_ends_trial:false, data: {test_part:"practice", stim: practiceTrial2.listA[i], drmTrial_type:"practice", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
//practiceTrials.push({stimulus: "TONE1", data: {test_part:"practice", stim: "tone1", drmTrial_type:"practice"}, confidence: ''}); // pushes 7th item
practiceTrials.push({prompt: "Did you see the word ", stimulus: practiceTrial2.prototype, prompt_end:"?", data: {test_part:"practice", stim: practiceTrial2.prototype, duration: durationForTargetWords, response_ends_trial:false, drmTrial_type:"practice", word_position:"target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
//practiceTrials.push({prompt:"",stimulus: "+", prompt_end: "", duration: fixationDuration, data: {test_part:"practice", stim: "fixation", drmTrial_type:"practice"}, confidence: ''}); // pushes 9th item placeholder for TONE2




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
const airForce = 'air force';
const military = "military";
const march = 'march';
const captain = 'captain';
const uniform = 'uniform';
const rifle = 'rifle';
const draft = 'draft';
const marines = 'marines';
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
const chicago = 'Chicago';
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

const cold = 'cold';
const warm = "warm";
const ice = 'ice';
const frigid = "frigid";
const heat = ' heat';
const freeze = ' freeze';
const shiver = 'shiver';
const winter = 'winter';
const wet = 'wet';
const chilly = "chilly";
const weather = 'weather';
const air = 'air';
const arctic = 'arctic'; 
const hot = "hot";
const snow = 'snow';
const frost = 'frost'; 

let Cold = {
    listNumber: 8,
    listA: [warm, ice, frigid, heat, freeze, shiver],
    listB: [winter, wet, chilly, weather, air, arctic],
    prototype: cold,
    highestAssociates: [hot, snow],
    lowestAssociate: frost,
};
//Define all variables for list 9: Cup
const cup  = 'cup';
const tea = 'tea';
const coaster = 'coaster';
const handle = 'handle';
const straw = 'straw';
const soup = 'soup';
const drink = 'drink';
const measuring = 'measuring';
const lid = 'lid';
const coffee = 'coffee';
const goblet = 'goblet';
const stein = 'stein';
const plastic = 'plastic'; 
const mug = 'mug';
const saucer = 'saucer';
const sip = 'sip'; 

let Cup = {
    listNumber: 9,
    listA: [tea, coaster, handle, straw, soup, drink],
    listB: [measuring, lid, coffee, goblet, stein, plastic],
    prototype: cup,
    highestAssociates: [mug, saucer],
    lowestAssociate: sip,
};

//Define all variables for list 10: Doctor
const doctor  = 'doctor';
const lawyer = 'lawyer';
const health = 'health';
const dentist = 'dentist';
const ill = 'ill';
const office = 'office';
const surgeon = 'surgeon';
const medicine = 'medicine';
const hospital = 'hospital';
const physician = 'physician';
const patient = 'patient';
const stethoscope = 'stethoscope';
const clinic = 'clinic'; 
const nurse = 'nurse';
const sick = 'sick';
const cure = 'cure'; 

let Doctor = {
    listNumber: 10,
    listA: [lawyer, health, dentist, ill, office, surgeon],
    listB: [medicine, hospital, physician, patient, stethoscope, clinic],
    prototype: doctor,
    highestAssociates: [nurse, sick],
    lowestAssociate: cure,
};

//Define all variables for list 11: Flag
const flag  = 'flag';
const symbol = 'symbol';
const anthem = 'anthem';
const pole = 'pole';
const raised = 'raised';
const checkered = 'checkered';
const sign = 'sign';
const stars = 'stars';
const stripes = 'stripes';
const wave = 'wave';
const national = 'national';
const emblem = 'emblem';
const freedom = 'freedom'; 
const banner = 'banner';
const american = 'American';
const pendant = 'pendant'; 

let Flag = {
    listNumber: 11,
    listA: [symbol, anthem, pole, raised, checkered, sign],
    listB: [stars, stripes, wave, national, emblem, freedom],
    prototype: flag,
    highestAssociates: [banner, american],
    lowestAssociate: pendant,
};

//Define all variables for list 12: Foot
const foot  = 'foot';
const toe = 'toe';
const sandals = 'sandals';
const yard = 'yard';
const ankle = 'ankle';
const boot = 'boot';
const sock = 'sock';
const kick = 'kick';
const soccer = 'soccer';
const walk = 'walk';
const arm = 'arm';
const inch = 'inch';
const knee = 'knee'; 
const shoe = 'shoe';
const hand = 'hand';
const mouth = 'mouth'; 

let Foot = {
    listNumber: 12,
    listA: [toe, sandals, yard, ankle, boot, sock],
    listB: [kick, soccer, walk, arm, inch, knee],
    prototype: foot,
    highestAssociates: [shoe, hand],
    lowestAssociate: mouth,
};

//Define all variables for list 13: Fruit
const fruit  = 'fruit';
const orange = 'orange';
const citrus = 'citrus';
const pear = 'pear';
const berry = 'berry';
const basket = 'basket';
const salad = 'salad';
const kiwi = 'kiwi';
const ripe = 'ripe';
const banana = 'banana';
const cherry = 'cherry';
const juice = 'juice';
const bowl = 'bowl'; 
const apple = 'apple';
const vegetable = 'vegetable';
const cocktail = 'cocktail'; 

let Fruit = {
    listNumber: 13,
    listA: [orange, citrus, pear, berry, basket, salad],
    listB: [kiwi, ripe, banana, cherry, juice, bowl],
    prototype: fruit,
    highestAssociates: [apple, vegetable],
    lowestAssociate: cocktail,
};

//Define all variables for list 14: Girl
const girl  = 'girl';
const female = 'female';
const dress = 'dress';
const hair = 'hair';
const dance = 'dance';
const cute = 'cute';
const aunt = 'aunt';
const young = 'young';
const pretty = 'pretty';
const niece = 'niece';
const beautiful = 'beautiful';
const date = 'date';
const daughter = 'daughter'; 
const boy = 'boy';
const dolls = 'dolls';
const sister = 'sister'; 

let Girl = {
    listNumber: 14,
    listA: [female, dress, hair, dance, cute, aunt],
    listB: [young, pretty, niece, beautiful, date, daughter],
    prototype: girl,
    highestAssociates: [boy, dolls],
    lowestAssociate: sister,
};

//Define all variables for list 15: High
const high  = 'high';
const up = 'up';
const tower = 'tower';
const above = 'above';
const noon = 'noon';
const sky = 'sky';
const airplane = 'airplane';
const tall = 'tall';
const jump = 'jump';
const building = 'building';
const cliff = 'cliff';
const over = 'over';
const dive = 'dive'; 
const low = 'low';
const clouds = 'clouds';
const elevate = 'elevate'; 

let High = {
    listNumber: 15,
    listA: [up, tower, above, noon, sky, airplane],
    listB: [tall, jump, building, cliff, over, dive],
    prototype: high,
    highestAssociates: [low, clouds],
    lowestAssociate: elevate,
};

//Define all variables for list 16: King
const king  = 'king';
const crown = 'crown';
const george = 'george';
const palace = 'palace';
const chess = 'chess';
const subjects = 'subjects';
const royal = 'royal';
const  prince = 'prince';
const dictator = 'dictator';
const throne = 'throne';
const rule = 'rule';
const monarch = 'monarch';
const leader = 'leader'; 
const queen = 'queen';
const england = 'England';
const reign = 'reign'; 

let King = {
    listNumber: 16,
    listA: [crown, george, palace, chess, subjects, royal],
    listB: [prince, dictator, throne, rule, monarch, leader],
    prototype: king,
    highestAssociates: [queen, england],
    lowestAssociate: reign,
};

//Define all variables for list 17: Lion
const lion  = 'lion';
const jungle = 'jungle';
const den = 'den';
const africa = 'africa';
const cage = 'cage';
const roar = 'roar';
const bears = 'bears';
const tamer = 'tamer';
const cub = 'cub';
const mane = 'mane';
const feline = 'feline';
const fierce = 'fierce';
const hunt = 'hunt'; 
const tiger = 'tiger';
const circus = 'circus';
const pride = 'pride'; 

let Lion = {
    listNumber: 17,
    listA: [jungle, den, africa, cage, roar, bears],
    listB: [tamer, cub, mane, feline, fierce, hunt],
    prototype: lion,
    highestAssociates: [tiger, circus],
    lowestAssociate: pride,
};

//Define all variables for list 18: Man
const man  = 'man';
const uncle = 'uncle';
const mouse = 'mouse';
const father = 'father';
const friend = 'friend';
const person = 'person';
const muscle = 'muscle';
const lady = 'lady';
const male = 'male';
const strong = 'strong';
const beard = 'beard';
const handsome = 'handsome';
const suit = 'suit'; 
const woman = 'woman';
const husband = 'husband';
const old = 'old'; 

let Man = {
    listNumber: 18,
    listA: [uncle, mouse, father, friend, person, muscle],
    listB: [lady, male, strong, beard, handsome, suit],
    prototype: man,
    highestAssociates: [woman, husband],
    lowestAssociate: old,
};

//Define all variables for list 19: Mountain
const mountain  = 'mountain';
const climb = 'climb';
const top2 = 'top';
const peak = 'peak';
const glacier = 'glacier';
const bike = 'bike';
const range = 'range';
const summit = 'summit';
const molehill = 'molehill';
const plain = 'plain';
const goat = 'goat';
const climber = 'climber';
const steep = 'steep'; 
const hill = 'hill';
const valley = 'valley';
const ski = 'ski'; 

let Mountain = {
    listNumber: 19,
    listA: [climb, top2, peak, glacier, bike, range],
    listB: [summit, molehill, plain, goat, climber, steep],
    prototype: mountain,
    highestAssociates: [hill, valley],
    lowestAssociate: ski,
};

//Define all variables for list 20: Music
const music  = 'music';
const piano = 'piano';
const radio = 'radio';
const melody = 'melody';
const concert = 'concert';
const symphony = 'symphony';
const orchestra = 'orchestra';
const sing = 'sing';
const band = 'band';
const horn = 'horn';
const instrument = 'instrument';
const jazz = 'jazz';
const art = 'art';
const note = 'note'; 
const sound = 'sound';
const rhythm = 'rhythm';

let Music = {
    listNumber: 20,
    listA: [piano, radio, melody, concert, symphony, orchestra],
    listB: [sing, band, horn, instrument, jazz, art],
    prototype: music,
    highestAssociates: [note, sound],
    lowestAssociate: rhythm,
};

//Define all variables for list 21: Needle
const needle  = 'needle';
const eye = 'eye';
const sharp = 'sharp';
const prick = 'prick';
const haystack = 'haystack';
const hurt = 'hurt';
const syringe = 'syringe';
const sewing = 'sewing';
const point = 'point';
const thimble = 'thimble';
const thorn = 'thorn';
const injection = 'injection';
const cloth = 'cloth';
const thread = 'thread'; 
const pin = 'pin';
const knitting = 'knitting';

let Needle = {
    listNumber: 21,
    listA: [eye, sharp, prick, haystack, hurt, syringe],
    listB: [sewing, point, thimble, thorn, injection, cloth],
    prototype: needle,
    highestAssociates: [thread, pin],
    lowestAssociate: knitting,
};

//Define all variables for list 22: Pen
const pen  = 'pen';
const fountain = 'fountain';
const quill = 'quill';
const bic = 'bic';
const crayon = 'crayon';
const tip = 'tip';
const red = 'red';
const leak = 'leak';
const felt = 'felt';
const scribble = 'scribble';
const cross = 'cross';
const marker = 'marker';
const cap = 'cap';
const pencil = 'pencil'; 
const write = 'write';
const letter = 'letter';

let Pen = {
    listNumber: 22,
    listA: [fountain, quill, bic, crayon, tip, red],
    listB: [leak, felt, scribble, cross, marker, cap],
    prototype: pen,
    highestAssociates: [pencil, write],
    lowestAssociate: letter,
};

//Define all variables for list 23: River
const river  = 'river';
const lake = 'lake';
const boat = 'boat';
const swim = 'swim';
const run = 'run';
const creek = 'creek';
const fish = 'fish';
const mississippi = 'Mississippi';
const tide = 'tide';
const flow = 'flow';
const barge = 'barge';
const brook = 'brook';
const bridge = 'bridge';
const water = 'water'; 
const stream = 'stream';
const winding = 'winding';

let River = {
    listNumber: 23,
    listA: [lake, boat, swim, run, creek, fish],
    listB: [mississippi, tide, flow, barge, brook, bridge],
    prototype: river,
    highestAssociates: [water, stream],
    lowestAssociate: winding,
};

//Define all variables for list 24: Rough
const rough  = 'rough';
const road = 'road';
const sandpaper = 'sandpaper';
const ready = 'ready';
const uneven = 'uneven';
const rugged = 'rugged';
const boards = 'boards';
const tough = 'tough';
const jagged = 'jagged';
const coarse = 'coarse';
const riders = 'riders';
const sand = 'sand';
const ground = 'ground';
const smooth = 'smooth';
const bumpy = 'bumpy'; 
const gravel = 'gravel';

let Rough = {
    listNumber: 24,
    listA: [road, sandpaper, ready, uneven, rugged, boards],
    listB: [tough, jagged, coarse, riders, sand, ground],
    prototype: rough,
    highestAssociates: [smooth, bumpy],
    lowestAssociate: gravel,
};

//Define all variables for list 25: Rubber
const rubber  = 'rubber';
const gloves = 'gloves';
const ball = 'ball';
const springy = 'springy';
const galoshes = 'galoshes';
const latex = 'latex';
const flexible = 'flexible';
const tire = 'tire';
const eraser = 'eraser';
const foam = 'foam';
const soles = 'soles';
const glue = 'glue';
const resilient = 'resilient';
const elastic = 'elastic';
const bounce = 'bounce'; 
const stretch = 'stretch';

let Rubber = {
    listNumber: 25,
    listA: [gloves, ball, springy, galoshes, latex, flexible],
    listB: [tire, eraser, foam, soles, glue, resilient],
    prototype: rubber,
    highestAssociates: [elastic, bounce],
    lowestAssociate: stretch,
};

//Define all variables for list 26: Shirt
const shirt  = 'shirt';
const pants = 'pants';
const button = 'button';
const iron = 'iron';
const collar = 'collar';
const pocket = 'pocket';
const belt = 'belt';
const tie = 'tie';
const shorts = 'shorts';
const polo = 'polo';
const vest = 'vest';
const jersey = 'jersey';
const linen = 'linen';
const blouse = 'blouse';
const sleeves = 'sleeves'; 
const cuffs = 'cuffs';

let Shirt = {
    listNumber: 26,
    listA: [pants, button, iron ,collar, pocket, belt],
    listB: [tie, shorts, polo, vest, jersey, linen],
    prototype: shirt,
    highestAssociates: [blouse,sleeves],
    lowestAssociate: cuffs,
};

//Define all variables for list 27: Sleep
const sleep  = 'sleep';
const awake = 'awake';
const dream = 'dream';
const snooze = 'snooze';
const doze = 'doze';
const snore = 'snore';
const peace = 'peace';
const tired = 'tired';
const wake = 'wake';
const blanket = 'blanket';
const slumber = 'slumber';
const nap = 'nap';
const yawn = 'yawn';
const bed = 'bed';
const rest = 'rest'; 
const drowsy = 'drowsy';

let Sleep = {
    listNumber: 27,
    listA: [awake, dream, snooze, doze, snore, peace],
    listB: [tired, wake, blanket, slumber, nap, yawn],
    prototype: sleep,
    highestAssociates: [bed, rest],
    lowestAssociate: drowsy,
};

//Define all variables for list 28: Slow
const slow  = 'slow';
const stop = 'stop';
const snail = 'snail';
const delay = 'delay';
const turtle = 'turtle';
const speed = 'speed';
const sluggish = 'sluggish';
const listless = 'listless';
const cautious = 'cautious';
const traffic = 'traffic';
const hesitant = 'hesitant';
const quick = 'quick';
const wait = 'wait';
const fast = 'fast';
const lethargic = 'lethargic'; 
const molasses = 'molasses';

let Slow = {
    listNumber: 28,
    listA: [stop, snail, delay, turtle, speed, sluggish],
    listB: [listless, cautious, traffic, hesitant, quick, wait],
    prototype: slow,
    highestAssociates: [fast, lethargic],
    lowestAssociate: molasses,
};

//Define all variables for list 29: Smell
const smell  = 'smell';
const sniff = 'sniff';
const hear = 'hear';
const nostril = 'nostril';
const scent = 'scent';
const stench = 'stench';
const perfume = 'perfume';
const aroma = 'aroma';
const see = 'see';
const whiff = 'whiff';
const reek = 'reek';
const fragrance = 'fragrance';
const salts = 'salts';
const nose = 'nose';
const breathe = 'breathe'; 
const rose = 'rose';

let Smell = {
    listNumber: 29,
    listA: [sniff, hear, nostril, scent, stench, perfume],
    listB: [aroma, see, whiff, reek, fragrance, salts],
    prototype: smell,
    highestAssociates: [nose, breathe],
    lowestAssociate: rose,
};

//Define all variables for list 30: Smoke
const smoke  = 'smoke';
const blaze = 'blaze';
const pollution = 'pollution';
const cigar = 'cigar';
const fire = 'fire';
const stink = 'stink';
const lungs = 'lungs';
const billows = 'billows';
const ashes = 'ashes';
const chimney = 'chimney';
const tobacco = 'tobacco';
const pipe = 'pipe';
const flames = 'flames';
const cigarette = 'cigarette';
const puff = 'puff'; 
const stain = 'stain';

let Smoke = {
    listNumber: 30,
    listA: [blaze, pollution, cigar, fire, stink, lungs],
    listB: [billows, ashes, chimney, tobacco, pipe, flames],
    prototype: smoke,
    highestAssociates: [cigarette, puff],
    lowestAssociate: stain,
};

//Define all variables for list 31: Soft
const soft  = 'soft';
const pillow = 'pillow';
const loud = 'loud';
const fur = 'fur';
const fluffy = 'fluffy';
const furry = 'furry';
const kitten = 'kitten';
const plush = 'plush';
const cotton = 'cotton';
const touch = 'touch';
const feather = 'feather';
const downy = 'downy';
const skin = 'skin';
const hard = 'hard';
const light = 'light'; 
const tender = 'tender';

let Soft = {
    listNumber: 31,
    listA: [pillow, loud, fur, fluffy, furry, kitten],
    listB: [plush, cotton, touch, feather, downy, skin],
    prototype: soft,
    highestAssociates: [hard, light],
    lowestAssociate: tender,
};

//Define all variables for list 32: Spider
const spider  = 'spider';
const big2 = 'big';
const fly = 'fly';
const crawl = 'crawl';
const poison = 'poison';
const creepy = 'creepy';
const ugly = 'ugly';
const fright = 'fright';
const arachnid = 'arachnid';
const tarantula = 'tarantula';
const bite = 'bite';
const animal = 'animal';
const feelers = 'feelers';
const web = 'web';
const insect = 'insect'; 
const small = 'small';

let Spider = {
    listNumber: 32,
    listA: [big2, fly, crawl, poison, creepy, ugly],
    listB: [fright, arachnid, tarantula, bite, animal, feelers],
    prototype: spider,
    highestAssociates: [web, insect],
    lowestAssociate: small,
};

//Define all variables for list 33: Sweet
const sweet  = 'sweet';
const sugar = 'sugar';
const good = 'good';
const tooth = 'tooth';
const honey = 'honey';
const chocolate = 'chocolate';
const cake = 'cake';
const bitter = 'bitter';
const taste = 'taste';
const nice = 'nice';
const soda = 'soda';
const heart = 'heart';
const tart = 'tart';
const sour = 'sour';
const candy = 'candy'; 
const pie = 'pie';

let Sweet = {
    listNumber: 33,
    listA: [sugar, good, tooth, honey, chocolate, cake],
    listB: [bitter, taste, nice, soda, heart, tart],
    prototype: sweet,
    highestAssociates: [sour, candy],
    lowestAssociate: pie,
};

//Define all variables for list 34: Thief
const thief  = 'thief';
const crook = 'crook';
const money = 'money';
const bad = 'bad';
const jail = 'jail';
const villain = 'villain';
const bank = 'bank';
const burglar = 'burglar';
const cop = 'cop';
const rob = 'rob';
const gun = 'gun';
const crime = 'crime';
const bandit = 'bandit';
const steal = 'steal';
const robber = 'robber'; 
const criminal = 'criminal';

let Thief = {
    listNumber: 34,
    listA: [crook, money, bad, jail, villain, bank],
    listB: [burglar, cop, rob, gun, crime, bandit],
    prototype: thief,
    highestAssociates: [steal, robber],
    lowestAssociate: criminal,
};

//Define all variables for list 35: Trash
const trash  = 'trash';
const can = 'can';
const sewage = 'sewage';
const junk = 'junk';
const sweep = 'sweep';
const pile = 'pile';
const landfill = 'landfill';
const refuse = 'refuse';
const bag = 'bag';
const rubbish = 'rubbish';
const scraps = 'scraps';
const dump = 'dump';
const debris = 'debris';
const garbage = 'garbage';
const waster = 'waster'; 
const litter = 'litter';

let Trash = {
    listNumber: 35,
    listA: [can, sewage, junk, sweep, pile, landfill],
    listB: [refuse, bag, rubbish, scraps, dump, debris],
    prototype: trash,
    highestAssociates: [garbage, waster],
    lowestAssociate: litter,
};

//Define all variables for list 36: Window
const window2  = 'window';
const pane = 'pane';
const ledge = 'ledge';
const house = 'house';
const curtain = 'curtain';
const view = 'view';
const sash = 'sash';
const shade = 'shade';
const sill = 'sill';
const open = 'open';
const frame = 'frame';
const breeze = 'breeze';
const screen = 'screen';
const door = 'door';
const glass = 'glass'; 
const shutter = 'shutter';

let Window = {
    listNumber: 36,
    listA: [pane, ledge, house, curtain, view, sash],
    listB: [shade, sill, open, frame, breeze, screen],
    prototype: window2,
    highestAssociates: [door, glass],
    lowestAssociate: shutter,
};
 
// ... after you have defined all of your lists

let allLists = [Anger, Army, Black, Bread, Car, Chair, City, Cold, Cup, Doctor, Flag, Foot, Fruit, Girl, High, King, Lion, Man, Mountain, Music, Needle, Pen, River, Rough, Rubber, Shirt, Sleep, Slow, Smell, Smoke, Soft, Spider, Sweet, Thief, Trash, Window]; // need to add all other lists to


// and randomize
let randomizedLists = jsPsych.randomization.repeat(allLists, 1);

let bucket1 = randomizedLists.slice(0,18); // takes first 18 lists of randomize dlists and places them into "bucket"
let bucket2 = randomizedLists.slice(0,18);
let bucket3 = randomizedLists.slice(18,36);
let bucket4 = randomizedLists.slice(18,36);

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
randomizedLists = jsPsych.randomization.repeat(randomizedLists, 1);

let incongruentPrototypeTrials = [];
// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial1.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial1.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial1.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial18.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial18.prototype, drmTrial_type:"incongruentPrototype", word_position:"target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial2.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial2.listA[i], duration: durationForListWords, word_position: "list", data: {test_part:"test", stim: incongruentPrototypeTrial2.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial17.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial17.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial3.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial3.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial3.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial16.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial16.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial4.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial4.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial4.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial15.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial15.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial5.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial5.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial5.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial14.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial14.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial6.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial6.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial6.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial13.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial13.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial7.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial7.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial7.listA[i], drmTrial_type:"incongruentPrototype",word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial12.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial12.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial8.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial8.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial8.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial11.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial11.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial9.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial9.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial9.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial10.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial10.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial10.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial10.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial10.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial9.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial9.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial11.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial11.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial11.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial8.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial8.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial12.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial12.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial12.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial7.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial7.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial13.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial13.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial13.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial6.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial6.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial14.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial14.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial14.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial5.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial5.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial15.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial15.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial15.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial4.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial4.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial16.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial16.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial16.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial3.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial3.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial17.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial17.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial17.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial2.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial2.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from listA
for (let i=0; i<incongruentPrototypeTrial18.listA.length; i++) {
    incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial18.listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentPrototypeTrial18.listA[i], drmTrial_type:"incongruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentPrototypeTrials.push({stimulus: incongruentPrototypeTrial1.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: incongruentPrototypeTrial1.prototype, drmTrial_type:"incongruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
incongruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type:"incongruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2



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
for (let i=0; i<congruentPrototypeTrial1.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial1.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial1.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial1.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial1.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial2.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial2.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial2.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial2.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial2.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial3.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial3.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial3.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial3.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial3.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial4.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial4.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial4.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial4.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial4.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial5.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial5.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial5.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial5.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial5.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial6.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial6.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial6.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial6.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial6.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial7.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial7.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial7.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial7.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial7.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial8.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial8.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial8.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial8.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial8.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial9.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial9.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial9.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial9.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial9.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial10.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial10.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial10.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial10.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial10.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial11.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial11.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial11.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial11.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial11.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial12.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial12.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial12.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial12.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial12.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial13.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial13.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial13.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial13.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial13.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial14.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial14.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial14.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial14.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial14.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial15.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial15.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial15.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial15.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial15.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial16.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial16.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial16.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial16.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial15.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial17.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial17.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial17.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial17.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial17.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2

for (let i=0; i<congruentPrototypeTrial18.listB.length; i++) {
    congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial18.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentPrototypeTrial18.listB[i], drmTrial_type: "congruentPrototype", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
congruentPrototypeTrials.push({stimulus: congruentPrototypeTrial18.prototype, duration: durationForTargetWords, data: {test_part:"test", stim: congruentPrototypeTrial18.prototype, drmTrial_type: "congruentPrototype", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // pushes 8th item placeholder for prototype
congruentPrototypeTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentPrototype"}, confidence: ''}); // pushes 9th item placeholder for TONE2


/// trying to replicate structure from incongruent and congruent prototype trials to create incongruent highest associates 

let incongruentHighestAssociateTrial1 = [incongruentHighestAssociate[0][0], incongruentHighestAssociate[1][0]];// in each trial,  add 1 to the number in the second set of brackets for each item
let incongruentHighestAssociateTrial2 = [incongruentHighestAssociate[0][1], incongruentHighestAssociate[1][1]];
let incongruentHighestAssociateTrial3 = [incongruentHighestAssociate[0][2], incongruentHighestAssociate[1][2]];
let incongruentHighestAssociateTrial4 = [incongruentHighestAssociate[0][3], incongruentHighestAssociate[1][3]];
let incongruentHighestAssociateTrial5 = [incongruentHighestAssociate[0][4], incongruentHighestAssociate[1][4]];
let incongruentHighestAssociateTrial6 = [incongruentHighestAssociate[0][5], incongruentHighestAssociate[1][5]];
let incongruentHighestAssociateTrial7 = [incongruentHighestAssociate[0][6], incongruentHighestAssociate[1][6]];
let incongruentHighestAssociateTrial8 = [incongruentHighestAssociate[0][7], incongruentHighestAssociate[1][7]];
let incongruentHighestAssociateTrial9 = [incongruentHighestAssociate[0][8], incongruentHighestAssociate[1][8]];
let incongruentHighestAssociateTrial10 = [incongruentHighestAssociate[0][9], incongruentHighestAssociate[1][9]];
let incongruentHighestAssociateTrial11 = [incongruentHighestAssociate[0][10], incongruentHighestAssociate[1][10]];
let incongruentHighestAssociateTrial12 = [incongruentHighestAssociate[0][11], incongruentHighestAssociate[1][11]];
let incongruentHighestAssociateTrial13 = [incongruentHighestAssociate[0][12], incongruentHighestAssociate[1][12]];
let incongruentHighestAssociateTrial14 = [incongruentHighestAssociate[0][13], incongruentHighestAssociate[1][13]];
let incongruentHighestAssociateTrial15 = [incongruentHighestAssociate[0][14], incongruentHighestAssociate[1][14]];
let incongruentHighestAssociateTrial16 = [incongruentHighestAssociate[0][15], incongruentHighestAssociate[1][15]];
let incongruentHighestAssociateTrial17 = [incongruentHighestAssociate[0][16], incongruentHighestAssociate[1][16]];
let incongruentHighestAssociateTrial18 = [incongruentHighestAssociate[0][17], incongruentHighestAssociate[1][17]];


let incongruentHighestAssociateTrials = [];
// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial1 array)
for (let i=0; i<incongruentHighestAssociateTrial1[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial1[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial1[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial1[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial3[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial1's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2


// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial2 array)
for (let i=0; i<incongruentHighestAssociateTrial2[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial2[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial2[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial2[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial2[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial2's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2


// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial3[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial3[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial3[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial3[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial3[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2


// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial4[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial4[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial4[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial4[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial4[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial5[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial5[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial5[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial5[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial5[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2


// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial6[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial6[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial6[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial6[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial6[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial7[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial7[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial7[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial7[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial7[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial8[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial8[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial8[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial8[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial8[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial9[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial9[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial9[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial9[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial9[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial10[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial10[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial10[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial10[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial10[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2


// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial11[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial11[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial11[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial11[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial11[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial12[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial12[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial12[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial12[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial12[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial13[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial13[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial13[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial13[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial13[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial14[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial14[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial14[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial14[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial14[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial15[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial15[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial15[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial15[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial15[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial16[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial16[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial16[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial16[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial16[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial17[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial17[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial17[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial17[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial17[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// pushes 6 items from 0th listA (which is the list A of the 0th item in the incongruentHighestAssociateTrial3 array)
for (let i=0; i<incongruentHighestAssociateTrial18[0].listA.length; i++) {
    incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial18[0].listA[i], duration: durationForListWords, data: {test_part:"test", stim: incongruentHighestAssociateTrial18[0].listA[i], drmTrial_type: "incongruentHighestAssociate", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}
incongruentHighestAssociateTrials.push({stimulus: incongruentHighestAssociateTrial18[1].highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim:incongruentHighestAssociateTrial18[1].highestAssociates[0], drmTrial_type: "incongruentHighestAssociate", word_position: "target", correct_response: "102"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // grabs the highest assocaite from 1st item (so, in reality, it's the highest associate from incongruentHighestAssociateTrial3's 2nd list)
incongruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "incongruentHighestAssociate"}, confidence: ''}); // pushes 9th item placeholder for TONE2


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
for (let i=0; i<1; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial1.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial1.listB[i], drmTrial_type: "congruentHighestAssociate_2", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial1.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial1.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_2", word_position:"list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 


//add in remaining list b items 
for (let i=2; i<congruentHighestAssociateTrial1.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial1.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial1.listB[i], drmTrial_type:"congruentHighestAssociate_2", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial1.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial1.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_2", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentHighestAssociate_2"}, confidence: ''}); // pushes 9th item placeholder for TONE2


//this section shows how to make  trial where the highest assocaite is in the 2nd word position 
for (let i=0; i<1; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial2.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial2.listB[i], drmTrial_type: "congruentHighestAssociate_2", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial2.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial2.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_2", word_position: "list"}, confidence: '' }); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 


//add in remaining list b items 
for (let i=2; i<congruentHighestAssociateTrial2.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial2.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial2.listB[i], drmTrial_type:"congruentHighestAssociate_2", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial2.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial2.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_2", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentHighestAssociate_2"}, confidence: ''}); // pushes 9th item placeholder for TONE2


//this section shows how to make  trial where the highest assocaite is in the 2nd word position 
for (let i=0; i<1; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial3.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial3.listB[i], drmTrial_type: "congruentHighestAssociate_2", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial3.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial3.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_2", word_position: "list"}, confidence: ''});


//add in remaining list b items 
for (let i=2; i<congruentHighestAssociateTrial3.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial3.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial3.listB[i], drmTrial_type:"congruentHighestAssociate_2", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial3.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial3.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_2", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentHighestAssociate_2"}, confidence: ''}); // pushes 9th item placeholder for TONE2


//this section shows how to make  trial where the highest assocaite is in the 2nd word position 
for (let i=0; i<1; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial4.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial4.listB[i], drmTrial_type: "congruentHighestAssociate_2", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial4.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial4.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_2", word_position: "list"}, confidence: ''});


//add in remaining list b items 
for (let i=2; i<congruentHighestAssociateTrial4.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial4.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial4.listB[i], drmTrial_type:"congruentHighestAssociate_2", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial4.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial4.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_2", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentHighestAssociate_2"}, confidence: ''}); // pushes 9th item placeholder for TONE2


//this section shows how to make  trial where the highest assocaite is in the 2nd word position 
for (let i=0; i<1; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial5.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial5.listB[i], drmTrial_type: "congruentHighestAssociate_2", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial5.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial5.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_2", word_position: "list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 


//add in remaining list b items 
for (let i=2; i<congruentHighestAssociateTrial5.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial5.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial5.listB[i], drmTrial_type:"congruentHighestAssociate_2", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial5.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial5.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_2", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentHighestAssociate_2"}, confidence: ''}); // pushes 9th item placeholder for TONE2


// how to create trial for highest associate in 3rd position
for (let i=0; i<2; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial6.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial6.listB[i], drmTrial_type:"congruentHighestAssociate_3", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial6.highestAssociates[0],duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial6.highestAssociates[0], drmTrial_type:"congruentHighestAssociate_3", word_position:"list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 

//add in remaining list b items 
for (let i=3; i<congruentHighestAssociateTrial6.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial6.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial6.listB[i], drmTrial_type: "congruentHighestAssociate_3", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial6.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial6.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_3", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentHighestAssociate_3"}, confidence: ''}); // pushes 9th item placeholder for TONE2


// how to create trial for highest associate in 3rd position
for (let i=0; i<2; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial7.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial7.listB[i], drmTrial_type:"congruentHighestAssociate_3", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial7.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial7.highestAssociates[0], drmTrial_type:"congruentHighestAssociate_3", word_position: "list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 

//add in remaining list b items 
for (let i=3; i<congruentHighestAssociateTrial7.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial7.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial7.listB[i], drmTrial_type: "congruentHighestAssociate_3", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial7.highestAssociates[0],duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial7.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_3", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentHighestAssociate_3"}, confidence: ''}); // pushes 9th item placeholder for TONE2


// how to create trial for highest associate in 3rd position
for (let i=0; i<2; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial8.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial8.listB[i], drmTrial_type:"congruentHighestAssociate_3", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial8.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial8.highestAssociates[0], drmTrial_type:"congruentHighestAssociate_3", word_position: "list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 

//add in remaining list b items 
for (let i=3; i<congruentHighestAssociateTrial8.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial8.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial8.listB[i], drmTrial_type: "congruentHighestAssociate_3", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial8.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial8.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_3", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentHighestAssociate_3"}, confidence: ''}); // pushes 9th item placeholder for TONE2


// how to create trial for highest associate in 3rd position
for (let i=0; i<2; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial9.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial9.listB[i], drmTrial_type:"congruentHighestAssociate_3", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial9.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial9.highestAssociates[0], drmTrial_type:"congruentHighestAssociate_3", word_position: "list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 

//add in remaining list b items 
for (let i=3; i<congruentHighestAssociateTrial9.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial9.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial9.listB[i], drmTrial_type: "congruentHighestAssociate_3", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial9.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial9.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_3", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim: "tone2", drmTrial_type: "congruentHighestAssociate_3"}, confidence: ''}); // pushes 9th item placeholder for TONE2


// how to create trial for highest associate in 4th position
for (let i=0; i<3; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial10.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial10.listB[i], drmTrial_type: "congruentHighestAssociate_4", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial10.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial10.highestAssociates[0], drmTrial_type:"congruentHighestAssociate_4", word_position:"list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 


//add in remaining list b items 
for (let i=4; i<congruentHighestAssociateTrial10.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial10.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial10.listB[i], drmTrial_type:"congruentHighestAssociate_4", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial10.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial10.highestAssociates[0], drmTrial_type:"congruentHighestAssociate_4", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim:"tone2", drmTrial_type: "congruentHighestAssociate_4"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// how to create trial for highest associate in 4th position
for (let i=0; i<3; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial11.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial11.listB[i], drmTrial_type: "congruentHighestAssociate_4", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial11.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial11.highestAssociates[0], drmTrial_type:"congruentHighestAssociate_4", word_position: "list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 


//add in remaining list b items 
for (let i=4; i<congruentHighestAssociateTrial11.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial11.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial11.listB[i], drmTrial_type: "congruentHighestAssociate_4", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial11.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial11.highestAssociates[0], drmTrial_type:"congruentHighestAssociate_4", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim:"tone2", drmTrial_type: "congruentHighestAssociate_4"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// how to create trial for highest associate in 4th position
for (let i=0; i<3; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial12.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial12.listB[i], drmTrial_type: "congruentHighestAssociate_4", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial12.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial12.highestAssociates[0], drmTrial_type:"congruentHighestAssociate_4", word_position: "list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 


//add in remaining list b items 
for (let i=4; i<congruentHighestAssociateTrial12.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial12.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial12.listB[i], drmTrial_type: "congruentHighestAssociate_4", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial12.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial12.highestAssociates[0], drmTrial_type:"congruentHighestAssociate_4", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim:"tone2", drmTrial_type: "congruentHighestAssociate_4"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// how to create trial for highest associate in 4th position
for (let i=0; i<3; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial13.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial13.listB[i], drmTrial_type: "congruentHighestAssociate_4", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial13.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial13.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_4", word_position: "list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 


//add in remaining list b items 
for (let i=4; i<congruentHighestAssociateTrial13.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial13.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial13.listB[i], drmTrial_type: "congruentHighestAssociate_4", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial13.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial13.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_4", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim:"tone2", drmTrial_type: "congruentHighestAssociate_4"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// how to create congruent highest associate trials with highests associate in 5th position
for (let i=0; i<4; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial14.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial14.listB[i], drmTrial_type: "congruentHighestAssociate_5", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial14.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial14.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_5", word_position:"list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 


//add in remaining list b items 
for (let i=5; i<congruentHighestAssociateTrial14.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial14.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial14.listB[i], drmTrial_type: "congruentHighestAssociate_5", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial14.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial14.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_5", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim:"tone2", drmTrial_type: "congruentHighestAssociate_5"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// how to create congruent highest associate trials with highests associate in 5th position
for (let i=0; i<4; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial15.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial15.listB[i], drmTrial_type: "congruentHighestAssociate_5", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial15.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial15.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_5", word_position: "list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 


//add in remaining list b items 
for (let i=5; i<congruentHighestAssociateTrial15.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial15.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial15.listB[i], drmTrial_type: "congruentHighestAssociate_5", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial15.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial15.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_5", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim:"tone2", drmTrial_type: "congruentHighestAssociate_5"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// how to create congruent highest associate trials with highests associate in 5th position
for (let i=0; i<4; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial16.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial16.listB[i], drmTrial_type: "congruentHighestAssociate_5", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial16.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial15.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_5", word_position: "list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 


//add in remaining list b items 
for (let i=5; i<congruentHighestAssociateTrial16.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial16.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial16.listB[i], drmTrial_type: "congruentHighestAssociate_5", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial16.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial16.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_5", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim:"tone2", drmTrial_type: "congruentHighestAssociate_5"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// how to create congruent highest associate trials with highests associate in 5th position
for (let i=0; i<4; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial17.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial17.listB[i], drmTrial_type: "congruentHighestAssociate_5", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial17.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial17.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_5", word_position: "list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 


//add in remaining list b items 
for (let i=5; i<congruentHighestAssociateTrial17.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial17.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial17.listB[i], drmTrial_type: "congruentHighestAssociate_5", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial17.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial17.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_5", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim:"tone2", drmTrial_type: "congruentHighestAssociate_5"}, confidence: ''}); // pushes 9th item placeholder for TONE2

// how to create congruent highest associate trials with highests associate in 5th position
for (let i=0; i<4; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial18.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial18.listB[i], drmTrial_type: "congruentHighestAssociate_5", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

// push the highest associate into the list 
congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial18.highestAssociates[0], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial18.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_5", word_position: "list"}, confidence: ''}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 


//add in remaining list b items 
for (let i=5; i<congruentHighestAssociateTrial18.listB.length; i++) {
    congruentHighestAssociateTrials.push({stimulus:congruentHighestAssociateTrial18.listB[i], duration: durationForListWords, data: {test_part:"test", stim: congruentHighestAssociateTrial18.listB[i], drmTrial_type: "congruentHighestAssociate_5", word_position:"list"}, confidence: ''}); //creating csv file
    //use underscores for data fields and headers and camel case for script
}

congruentHighestAssociateTrials.push({stimulus: congruentHighestAssociateTrial18.highestAssociates[0], duration: durationForTargetWords, data: {test_part:"test", stim: congruentHighestAssociateTrial18.highestAssociates[0], drmTrial_type: "congruentHighestAssociate_5", word_position: "target", correct_response: "106"}, confidence: progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'}); // need to check with Phil to see if there is a preference for using highest associate 0 or 1 since we are using the b lists. 
congruentHighestAssociateTrials.push({stimulus: "TONE2", duration: fixationDuration, data: {test_part:"test", stim:"tone2", drmTrial_type: "congruentHighestAssociate_5"}, confidence: ''}); // pushes 9th item placeholder for TONE2



let interleavedFinalStim = [];

for (let i=0; i<=575; i++) {
  interleavedFinalStim.push(i);
}


randomizationScheme = [];

for (let i=0; i<=17; i++) {
  //zeros for incongruent prototype
  randomizationScheme.push(0);
}
for (let i=0; i<=17; i++) {
  //ones for congruent prototype
  randomizationScheme.push(1);
}

for (let i=0; i<=17; i++) {
    //2s for incongruent highest associate 
    randomizationScheme.push(2);
  }

  for (let i=0; i<=17; i++) {
    //3s for congruent highest associate 
    randomizationScheme.push(3);
  }
//randomizationFinal = randomizationScheme; //shuffled array no repeats
randomizationFinal = jsPsych.randomization.repeat(randomizationScheme, 1); //shuffled array no repeats
while (interleavedFinalStim.length>0) {
  interleavedFinalStim.pop();
}

for (let i=0; i<=randomizationFinal.length; i++) {

  if (randomizationFinal[i] === 0) {
    // first add 8 incongruent prototype items 
    for (let i=0; i<=7; i++) {
      interleavedFinalStim.push(incongruentPrototypeTrials[i]);
    }
    // then remove 8 incongruent prototype items 
    for (let i=0; i<=7; i++) {
      incongruentPrototypeTrials.shift();
    }
  } else if (randomizationFinal[i] === 1) {
    // then! ADD 8 congruent prototype items 
    for (let i=0; i<=7; i++) {
      interleavedFinalStim.push(congruentPrototypeTrials[i]);
    }
    // then! Remove 8 congruent prototype items
    for (let i=0; i<=7; i++) {
      congruentPrototypeTrials.shift();
    }
  }  else if (randomizationFinal[i] === 2) {
    // then! ADD 8 items from incongruent highest associates trials
    for (let i=0; i<=7; i++) {
      interleavedFinalStim.push(incongruentHighestAssociateTrials[i]);
    }
    // then! Remove 8 incongruent highest associates items 
    for (let i=0; i<=7; i++) {
      incongruentHighestAssociateTrials.shift();
    }
  } else if (randomizationFinal[i] === 3) {
    // then! ADD 8 congruent highest associate items 
    for (let i=0; i<=7; i++) {
      interleavedFinalStim.push(congruentHighestAssociateTrials[i]);
    }
    // then! Remove 8 congruent highest associate items
    for (let i=0; i<=7; i++) {
      congruentHighestAssociateTrials.shift();
    }
  }
  };