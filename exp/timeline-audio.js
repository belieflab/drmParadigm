"use strict";

const jsPsych = initJsPsych({
    show_progress_bar: true,
    message_progress_bar: "Completion Progress",
    auto_update_progress_bar: false,
});

let timeline = [];

const preload = {
    type: jsPsychPreload,
    // images: [],
    audio: [
        ...practiceTrial1.listA,
        ...practiceTrial2.listA,
        trialStartTone,
        responsePromptTone,
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
};

let instructions_0 = {
    type: jsPsychAudioKeyboardResponse,
    prompt:
        "<p> Welcome to the experiment! </p>" +
        "<p> This experiment will be presented entirely in an auditory format.</p>" +
        "<p>  It should take about 30 minutes to complete.</p>" +
        "<p> <i> When you are ready to hear the instructions, please press the spacebar. </i> </p>",
    stimulus: "stim/audio_instructions/DRM_instructions_0.mp3",
    choices: [" "],
    on_start: function () {
        jsPsych.setProgressBar(0);
    },
};

let instructions_1 = {
    type: jsPsychAudioKeyboardResponse,
    prompt:
        "<p> This experiment assesses your ability to remember whether a particular word was presented in a list of words.</p>" +
        "<p>First, you will hear a list of six words. At the conclusion of the list, you will be asked if a particular word was on the list. If the word was on the list, press the “J” key. If the word was not on the list, press the “F ” key. </p>" +
        "<p> <i> Press the ”F” or “J” key to hear more instructions. </i> </p>",
    stimulus: "stim/audio_instructions/drm_instructions_1.mp3",
    choices: ["f", "j"],
};

let instructions_2 = {
    type: jsPsychAudioKeyboardResponse,
    prompt:
        "<p> You can indicate your confidence in your response by varying the amount of time you hold down the “F” or “J” key. </p>" +
        "<p>  If you are very confident in your response, hold the key down for three seconds. If you are unsure about your response, simply tap the key.  </p>" +
        "<p> As you hold down either of the keys, you will hear a tone. The longer you hold down the key, the higher in pitch the tone will become. </p>" +
        "<p> <i> Press and hold down the “F” or “J” key to hear what the confidence meter sounds like. </i> </p>",
    stimulus: "stim/audio_instructions/drm_instructions_2.mp3",
    choices: ["f", "j"],
};

//need to add in confidence bar here
let instructions_3 = {
    type: jsPsychAudioKeyboardResponse,
    prompt:
        "<p> Please give your response as quickly as possible. </p>" +
        "<p> At the end of the response period, you will hear a double tone. </p>" +
        "<p> This tone indicates that the response period has ended. </p>" +
        "<p> <i> Press the spacebar to hear the double tone now. </i> </p>",
    stimulus: "stim/audio_instructions/drm_instructions_3.mp3",
    choices: [" "],
};

let instructions_4 = {
    type: jsPsychAudioKeyboardResponse,
    prompt: "<p> double nosie. </p>",
    stimulus: trialStartTone,
    choices: "NO_KEYS",
    response_ends_trial: false,
    trial_ends_after_audio: true,
};

let instructions_5 = {
    type: jsPsychAudioKeyboardResponse,
    prompt:
        "<p> After you hear the double tone, the next trial will begin. </p>" +
        "<p> To continue to a couple of practice trials, please press either the “F” or “J” key. </p>" +
        "<p> <i> Alternatively, if you would like to hear the instructions again, press the spacebar. </i> </p>",
    stimulus: "stim/audio_instructions/drm_instructions_5.mp3",
    choices: [" ", "f", "j"],
};

let instructions_6 = {
    type: jsPsychAudioKeyboardResponse,
    prompt:
        "<p> Fantastic! You completed the practice trials. </p>" +
        "<p> Remember, if the word was on the list, press the “J” key. </p>" +
        "<p>  If the word was not on the list, press the “F” key. </p>" +
        "<p> <i> To hear the instructions and practice trials again, press the spacebar. To begin the experiment, press the “F” or “J” key. </i> </p>",
    stimulus: "stim/audio_instructions/drm_instructions_6.mp3",
    choices: [" ", "f", "j"],
    response_ends_trial: true,
    trial_duration: 10000,
};

let instructions_visual_5 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
        "<p> You have successfully completed the practice trials!. </p>" +
        "<p> You are now ready to begin the experiment. </p>" +
        "<p> Remember, pressing the f key means that you think the word was not on the list and pressing the j key means that you think the word was on the list.  </p>" +
        "<p> <i> Press either the f or j key to begin the experiment now. </i> </p>",
    response_ends_trial: true,
    trial_duration: 10000,
    choices: ["f", "j"],
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
    choices: ["NO KEYS"], // handled instead by buttonPress()

    on_load: () => {
        buttonPressWithArguments(70, 74, true);
    },
    on_start: () => {
        //update progress bar with each iteration
        var currentProgressBarValue = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(currentProgressBarValue + 1 / numberOfTrials);
    },
    on_finish: (data) => {
        if (data.stim == "tone1") {
            data.accuracy_test = "";
        } else if (data.stim == "tone2") {
            data.accuracy_test = "";
        } else if (data.word_position == "list") {
            data.accuracy_test = "";
            //   (data.key_press==null){
            //    data.accuracy_test = null;
        } else if (data.key_press == data.correct_response) {
            console.log("correct");
            data.accuracy_test = true;
        } else if (data.key_press != data.correct_response) {
            console.log("incorrect");
            data.accuracy_test = false;
        }
    },
};

const dataSave = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: dataSaveAnimation(),
    choices: "NO_KEYS",
    trial_duration: 5000,
    on_finish: () => {
        var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(curr_progress_bar_value + 1 / 720);
        // const updatedScore =
        //     typeof score !== "undefined"
        //         ? score
        //         : jsPsych.data.get().select("score").values.slice(-1)[0]; // Replace 'score' with actual data key if necessary
        // Now, generate the thank you message with the updated score
        const thankYou = instructions[10];

        saveDataPromise(
            `${experimentAlias}_${subjectId}`,
            jsPsych.data.get().csv()
        )
            .then((response) => {
                console.log("Data saved successfully.", response);
                // Update the stimulus content directly via DOM manipulation
                document.querySelector("#jspsych-content").innerHTML = thankYou;
            })
            .catch((error) => {
                console.log("Failed to save data.", error);
                // Check if the error object has 'error' property and use it, otherwise convert object to string
                let errorMessage = error.error || JSON.stringify(error);
                switch (errorMessage) {
                    case '{"success":false}':
                        errorMessage =
                            "The ./data directory does not exit on this server.";
                        break;
                    case "Not Found":
                        errorMessage =
                            "There was an error saving the file to disk.";
                        break;
                    default:
                        errorMessage = "Unknown error.";
                }
                // Update the stimulus content directly via DOM manipulation
                const dataFailure = `
              <div class="error-page">
                  <p>Oh no!</p>
                  <p>An error has occured and your data has not been saved:</p>
                  <p>${errorMessage}</p>
                  <p>Please wait for the experimenter to continue.</p>
              </div>`;
                document.querySelector("#jspsych-content").innerHTML =
                    dataFailure;
            })
            .finally(() => {
                document.getElementById("unload").onbeforeunload = ""; // Removes popup
                $("body").addClass("showCursor"); // Returns cursor functionality
                closeFullscreen(); // Kill fullscreen
                if (!src_subject_id) {
                    window.location.replace(redirectLink);
                }
            });
    },
};

$.getScript("exp/main.js");
