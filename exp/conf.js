//***********************************//
//   EXPERIMENT CONFIGURATION FILE   //
//***********************************//

"use strict";

// Debug Mode
// Options: true, false
let debug = true; // Default debug mode setting for the experiment

// Experiment Name
const experimentName = "drmParadigm"; // Name displayed in the browser title bar
const experimentAlias = "drm"; // Unique identifier for the experiment, used in data saving

// Experiment Language
const language = "english"; // Language setting for the experiment

// User Interface Theme
// Options: "light", "dark", "white" (useful for images with white backgrounds)
const theme = "light"; // Default theme setting for the user interface

const version = "visual"; // Current version of the experiment (audio/visual)
// Add additional global configuration constants here

// Note: Uncomment the desired options. Ensure only one option per setting is active at a time.
const adminEmail = undefined;
const feedbackLink = undefined;

// Global variables for sites and phenotypes
const sites = ["Yale", "UChicago", "MPRC"];
const phenotypes = ["hc"];

// Number of repetitions for each phase, user-defined object
// reference in main procedures object repetitions property:
// e.g.
// repetitions: getRepetitions().learning
const repetitions = {
    production: 0,
    debug: 0,
};

const durationForListWords = 150;
const durationForTargetWords = 3000;
const fixationDuration = 1000;

const numberOfTrials = 486;
