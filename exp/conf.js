//***********************************//
//   EXPERIMENT CONFIGURATION FILE   //
//***********************************//

"use strict";

// Debug Mode
// Options: true, false
let debug = true; // Default debug mode setting for the experiment

// Experiment Name
const experimentName = "DRM Paradigm"; // Name displayed in the browser title bar
const experimentAlias = "drm"; // Unique identifier for the experiment, used in data saving

// Experiment Language
const language = "english"; // Language setting for the experiment

// User Interface Theme
// Options: "light", "dark", "white" (useful for images with white backgrounds)
const theme = "dark"; // Default theme setting for the user interface

// Current version of the experiment
// Options: "audio", "visual"
const version = "audio"; //"visual";

// const counterbalance = false; // Ensures that the experiment's order can be randomized to control for potential biases.

let phase = undefined; // Tracks the stage of the experiment to apply different logic or content depending on the current phase.

// Note: Uncomment the desired options. Ensure only one option per setting is active at a time.
const adminEmail = undefined;

// Global variables for sites and phenotypes
const sites = ["Yale", "UChicago", "MPRC"];
const phenotypes = ["hc"];

// Number of repetitions for each phase, user-defined object
// reference in main procedures object repetitions property:
// e.g.
// repetitions: getRepetitions().learning
// set to 0 if no repetitions are required
const repetitions = {
    production: 1,
    debug: 0,
};

const durationForListWords = 1000;
const durationForTargetWords = 5000; //3000;
const fixationDuration = 4000;
const numberOfTrials = debug ? 6 : interleavedFinalStim.length;
const durationForTone1 = 2000;

const counterbalance = true; 

const urlConfig = {
    audio: {
        1: "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_9z7mh9OjwDi0hr8/?participantId=${e://Field/participantId?format=urlencode}",
        0: "https://belieflab.yale.edu/medlearn/mediatedLearning/",  
    }
}