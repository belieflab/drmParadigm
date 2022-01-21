let timeline = [];

let instructions0 = {
  type: "html-keyboard-response",
  stimulus: "<p> Hello and thank you for taking part in our experiment!</p>"+
  "<p>It should take about 30 minutes.</p>"+
  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32]
};

let test = {
  type: "html-keyboard-response",
  stimulus: "<p> Hello and thank you for taking part in our experiment!</p>"+
  "<p>It should take about 30 minutes.</p>"+
  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32]
};


let instructions1 = {
  type: 'audio-keyboard-response',
  stimulus: 'stim/audio_instructions/DRM_instructions_1.mp3',
  choices: "NO_KEYS",
  trial_ends_after_audio: true
};


$.getScript("exp/main.js");