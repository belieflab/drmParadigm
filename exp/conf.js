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
const version = "audio"//"visual";

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

const durationForListWords = 150;
const durationForTargetWords = 3000;
const fixationDuration = 1000;
const numberOfTrials = 486;

// Redirect Configuration (Daisy Chaining)
const urlConfig = {
    default: "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_bErtyAFIwnwDhWu",
    loss: "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_8qsU4yfds5mH6Pc",
    gain: "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_8qsU4yfds5mH6Pc",
};