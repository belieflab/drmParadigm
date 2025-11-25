"use strict";

const jsPsych = initJsPsych({
    show_progress_bar: true,
    message_progress_bar: "Completion Progress",
    auto_update_progress_bar: false,
});

let timeline = [];

const practiceTrialsCount = 20;
const testTrialsCount = 792;
const timelineEventCount = 25;
const totalTimelineEvents =
    practiceTrialsCount + testTrialsCount + timelineEventCount;
let currentEvent = 0;

function updateProgressBar() {
    const progress = currentEvent / totalTimelineEvents;
    jsPsych.setProgressBar(progress);
    currentEvent++;
}

const audioInstructions = {
    silence: "stim/audio_instructions/silence.mp3",
    instruction0: "stim/audio_instructions/DRM_instructions_0.mp3",
    instruction1: "stim/audio_instructions/drm_instructions_1.mp3",
    shortTone: "stim/audio_tones/tone_1.mp3",
    instructionsAfterShortTone:
        "stim/audio_instructions/drm_instructions_after_short_tone.mp3",
    instruction2: "stim/audio_instructions/drm_instructions_2.mp3",
    instruction3: "stim/audio_instructions/drm_instructions_3.mp3",
    instruction5: "stim/audio_instructions/drm_instructions_5.mp3",
    instruction6: "stim/audio_instructions/drm_instructions_6.mp3",
    instruction7: "stim/audio_instructions/drm_instructions_7.mp3",
};

const preload = {
    type: jsPsychPreload,
    audio: [
        ...practiceTrial1.listA,
        ...practiceTrial2.listA,
        trialStartTone,
        responsePromptTone,
        audioInstructions.silence,
        audioInstructions.instruction6,
        "stim/audio_tones/confidence.mp3",
        audioFiles,
    ],
    show_detailed_errors: true,
    on_success: function (file) {
        console.log("File successfully preloaded:", file);
    },
    on_error: function (file) {
        console.error("Error preloading file:", file);
    },
    on_complete: function (data) {
        console.log("Preloading completed");
    },
    on_start: updateProgressBar,
};

let before_instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
        "<p> This experiment is presented in an auditory format</p>" +
        "<p>Please make sure that you increase the volume on your computer.</p>" +
        "<p>If you are blind and use a screenreader (e.g., JAWS, NVDA, VoiceOver), we highly recommend that you turn it off before starting the experiment.</p>" +
        "<p> <i> Press the spacebar to start hearing the instructions. </i> </p>",
    choices: [" "],
    on_start: updateProgressBar,
};

let continue_trial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: [" "],
    stimulus: audioInstructions.silence,
    response_ends_trial: true,
    on_start: updateProgressBar,
};

let instructions_0 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.instruction0,
    choices: "NO_KEYS",
    response_ends_trial: false,
    trial_ends_after_audio: true,
    on_start: updateProgressBar,
};

let instructions_1 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.instruction1,
    choices: "NO_KEYS",
    response_ends_trial: false,
    trial_ends_after_audio: true,
    on_start: updateProgressBar,
};

let pause_before_short_tone = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.silence,
    choices: [" "],
    response_ends_trial: true,
    on_start: updateProgressBar,
};

let short_tone = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.shortTone,
    choices: "NO_KEYS",
    response_ends_trial: false,
    trial_ends_after_audio: true,
    on_start: updateProgressBar,
};

let instructions_after_example_reponsePromptTone = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.instructionsAfterShortTone,
    choices: "NO_KEYS",
    response_ends_trial: false,
    trial_ends_after_audio: true,
    on_start: updateProgressBar,
};

let pressJorF = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.silence,
    response_ends_trial: true,
    choices: ["f", "j"],
    on_start: updateProgressBar,
};

let instructions_2 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.instruction2,
    choices: "NO KEYS",
    response_ends_trial: false,
    trial_ends_after_audio: true,
    on_start: updateProgressBar,
};

let instructions_2_continued = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.silence,
    prompt:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<audio id="beep" src="stim/audio_tones/confidence.mp3"></audio>' +
        '<form autocomplete="off" action=""> <input autocomplete="false" name="hidden" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none;" onkeypress="">',
    choices: "NO_KEYS",
    on_load: () => {
        buttonPressWithArguments(70, 74, true);
    },
    response_ends_trial: false,
    on_finish: () => {
        document.getElementById("keyBar").remove();
        document.getElementById("fillUp").remove();
        document.getElementById("feedbackGenerator").remove();
        document.getElementById("timeRemaining").remove();
        document.getElementById("beep").remove();
        document.getElementById("tapTap").remove();
    },
    on_start: updateProgressBar,
};

let instructions_3 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.instruction3,
    choices: "NO KEYS",
    response_ends_trial: false,
    trial_ends_after_audio: true,
    on_start: updateProgressBar,
};

let instructions_4 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: trialStartTone,
    choices: "NO_KEYS",
    response_ends_trial: false,
    trial_ends_after_audio: true,
    on_start: updateProgressBar,
};

let instructions_5 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.instruction5,
    choices: "NO KEYS",
    response_ends_trial: false,
    trial_ends_after_audio: true,
    on_start: updateProgressBar,
};

let instructions_6 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.instruction6,
    choices: "NO_KEYS",
    response_ends_trial: false,
    trial_ends_after_audio: true,
    on_start: updateProgressBar,
};

// Instructions 6 Duration: 15960ms
let instructions_6_duration = 15960;
let audio = new Audio(audioInstructions.instruction6);

audio.addEventListener("error", function (e) {
    console.error("Error loading audio:", e);
});

audio.addEventListener("loadedmetadata", function () {
    instructions_6_duration = audio.duration * 1000;
    console.log("Instructions 6 Duration: " + instructions_6_duration + "ms");
});

let pause_before_continue_to_test_section = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.silence,
    choices: "NO_KEYS",
    trial_duration: function () {
        return instructions_6_duration || 15960;
    },
    on_start: updateProgressBar,
};

let continue_to_test_section = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: audioInstructions.silence,
    choices: [" "],
    response_ends_trial: true,
    on_start: function () {
        updateProgressBar, console.log("Starting continue_to_test_section");
    },
    conditional_function: function () {
        return (
            jsPsych.data.get().last(1).values()[0].instructions_6_finished ===
            true
        );
    },
};

let trials = {
    type: jsPsychAudioKeyboardResponse,
    data: jsPsych.timelineVariable("data"),
    stimulus: jsPsych.timelineVariable("stimulus"),
    prompt: () => {
        var html =
            "<p>" +
            jsPsych.timelineVariable("confidence", true) +
            "</p>" +
            '<audio id="beep" src="stim/audio_tones/confidence.mp3"></audio>';
        return html;
    },
    trial_duration: jsPsych.timelineVariable("trial_duration"),
    response_ends_trial: jsPsych.timelineVariable("response_ends_trial"),
    choices: ["NO KEYS"],
    on_load: () => {
        buttonPressWithArguments(70, 74, true);
    },
    on_start: function () {
        const progress = currentEvent / totalTimelineEvents;
        jsPsych.setProgressBar(progress); // Set the progress bar before incrementing currentEvent
    },
    on_finish: function (data) {
        currentEvent++;

        data.response = responseKey;
        if (data.word_position != "target") {
            data.response = "";
            data.confidence = "";
            data.accuracy_experiment = "";
        } else if (responseKey == data.correct_response) {
            data.accuracy_experiment = "correct";
            data.confidence = totalConfidence;
            responseKey = "";
        } else if (responseKey == data.incorrect_response) {
            data.accuracy_experiment = "incorrect";
            data.confidence = totalConfidence;
            responseKey = "";
        } else if (responseKey == "") {
            data.accuracy_experiment = "incorrect";
            data.confidence = 0;
            responseKey = "";
        }
        totalConfidence = 0; // need to reset totalConfidence to 0 after each trial !!IMPORTANT
        data.index = trialIterator;
        trialIterator++;
        switch (data.word_position) {
            case "congruentPrototype":
                data.index_by_trial_type = trialIteratorCongruentPrototype;
                trialIteratorCongruentPrototype++;
                break;
            case "incogruentPrototype":
                data.index_by_trial_type = trialIteratorIncongruentPrototype;
                trialIteratorIncongruentPrototype++;
                break;
            case "congruentHighestAssociate":
                data.index_by_trial_type =
                    trialIteratorCongruentHighestAssociate;
                trialIteratorCongruentHighestAssociate++;
                break;
            case "incogruentHighestAssociate":
                data.index_by_trial_type =
                    trialIteratorIncongruentHighestAssociate;
                trialIteratorIncongruentHighestAssociate++;
                break;
        }
    },
};

let instructions_7 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: audioInstructions.instruction7,
    choices: "NO_KEYS",
    response_ends_trial: false,
    trial_ends_after_audio: true,
    on_start: updateProgressBar,
};

const dataSave = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: dataSaveAnimation(),
    choices: "NO_KEYS",
    trial_duration: 5000,
    on_start: updateProgressBar,
    on_finish: writeCsvRedirect,
};

$.getScript("exp/main.js");
