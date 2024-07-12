"use strict";

const jsPsych = initJsPsych({
    show_progress_bar: true,
    message_progress_bar: "Completion Progress",
    auto_update_progress_bar: false,
});

let timeline = [];

const preload = {
    type: jsPsychPreload,
    images: [],
    // audio: [instructionsAudio, stimuliAudio],
    show_detailed_errors: true,
};

let instructions_0 = {
    type: jsPsychAudioKeyboardResponse,
    prompt:
         "<p> Hello and thank you for taking part in our experiment!</p>" +
         "<p>This experiment will be presnted entirely in an auditory format.</p>" +
         "<p>It should take about 30 minutes.</p>" +
         "<p> <i> Press spacebar to begin listening to your instructions. </i> </p>",
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
        "<p>First, you will hear a list of six words. At the conclusion of the list, you will be asked if a particular word was on the list. </p>" +
        "<p> <i> Press the spacebar to hear more instructions. </i> </p>",
    stimulus: "stim/audio_instructions/old_DRM_instructions_1.mp3",
    choices: [" "],
};

let instructions_2 = {
    type: jsPsychAudioKeyboardResponse,
        prompt: "<p> After the short tone, you will hear one word. </p>" +
        "<p> Your job is to indicate whether that word was or was not on the list that you heard before the tone. </p>" +
        "<p> If the word was on the list, press the “j” key. If the word was not on the list, press the “f” key. </p>" +
        "<p> <i> Press either the f or j key to hear additional instructions. </i> </p>",
    stimulus: "stim/audio_instructions/drm_instructions_2.mp3",
    choices: ["f", "j"],
};

//need to add in confidence bar here
let instructions_3 = {
    type: jsPsychAudioKeyboardResponse,
    prompt:
        "<p> You can indicate your confidence in your response by varying the amount of time you hold down the “f” or “j” key. </p>" +
        "<p> If you are very confident in your response, hold the key down for []. If you are unsure about your response,  simply tap the key. </p>" +
        "<p> A tone will play when you press and/or hold down the f or j keys. The longer you hold down the key, the higher in frequency the tone will go. </p>" +
        "<p> <i> Hold down either the f or j key to hear what it sounds like when you are very confident in your response. </i> </p>",
    stimulus: "stim/audio_instructions/drm_instructions_3.mp3",
    choices: ["f", "j"],
};

let instructions_4 = {
    type: jsPsychAudioKeyboardResponse,
    prompt:"<p> white nosie.  </p>",
    stimulus: "stim/audio_stimuli/short-white-noise.mp3",
    choices: [" "],
};

let instructions_5 = {
    type: jsPsychAudioKeyboardResponse,
    prompt: "<p> After you hear the long low tone,  the next trial will begin. </p>" +
        "<p> To continue to a couiple of practice trials, please press either the f or j key. </p>" +
        "<p> <i> Alternatively, if you would like to hear the instructions again, press the spacebar. </i> </p>",
     stimulus: "stim/audio_instructions/drm_instructions_5.mp3",
    choices: [" ", "f", "j"],
};

let instructions_visual_0 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
        "<p> Hello and thank you for taking part in our experiment!</p>" +
        "<p>It should take about 45 minutes.</p>" +
        "<p> <i> Press the spacebar to view your instructions. </i> </p>",
    choices: [32],
    on_start: function () {
        jsPsych.setProgressBar(0);
    },
};

let practice = {
    type: jsPsychHtmlKeyboardResponse,
    data: jsPsych.timelineVariable("data"),
    stimulus: function () {
        var html =
            "<p>" +
            jsPsych.timelineVariable("prompt", true) +
            jsPsych.timelineVariable("stimulus", true) +
            jsPsych.timelineVariable("prompt_end", true) +
            jsPsych.timelineVariable("confidence", true) +
            "</p>";
        return html;
    },
    trial_duration: jsPsych.timelineVariable("duration"),
    response_ends_trial: jsPsych.timelineVariable("response_ends_trial"),
    // stimulus: jsPsych.timelineVariable('stimulus'),
    choices: ["NO_KEYS"],
    response_ends_trial: false,
    // trial_duration: 30000,
    on_load: function buttonPress(data) {
        barFill = document.getElementById("fillUp");
        barFill.innerHTML = "Hold response key to indicate confidence level.";
        document.getElementById("tapTap").focus(); //gives focus to the text box
        $(document).ready(function () {
            $("#tapTap").keypress(function (event) {
                var keycode = event.which;
                if (
                    (barFill.innerHTML =
                        "Hold response key to indicate confidence level.")
                ) {
                    // reused from eefrt, just needed a placeholder here
                    if (keycode == 102) {
                        document
                            .getElementById("counter")
                            .setAttribute(
                                "onkeydown",
                                "return moveConfidence()"
                            ); // event.charCode allows us to set specific keys to use
                        responseKey = 102;
                        // console.log(responseKey);
                    } else if (keycode == 106) {
                        document
                            .getElementById("counter")
                            .setAttribute(
                                "onkeydown",
                                "return moveConfidence()"
                            ); // event.charCode allows us to set specific keys to use
                        responseKey = 106;
                        // console.log(responseKey);
                    } else {
                        // all other keys ignored
                        document
                            .getElementById("counter")
                            .setAttribute("onkeydown", "return false"); // event.charCode allows us to set specific keys to use
                    }
                }
            });
        });
    },
    // on_finish: function(data){
    //   if (data.stim== "tone1") {
    //     data.accuracy_test= "" ;
    //    } else if (data.stim=="tone2") {
    //     data.accuracy_test= "" ;
    //    } else if (data.word_position=="list") {
    //     data.accuracy_test= "" ;
    //   //   (data.key_press==null){
    //   //    data.accuracy_test = null;

    //   } else if (data.key_press == data.correct_response) {
    //      console.log('correct');
    //      data.accuracy_test = true;
    //    } else if (data.key_press != data.correct_response) {
    //    console.log('incorrect');
    //      data.accuracy_test = false;
    //    };
    //   }
};

let instructions_audio_6 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
        "<p> You have successfully completed the practice trials!. </p>" +
        "<p> You are now ready to begin the experiment. </p>" +
        "<p> Remember, pressing the f key means that you think the word was not on the list and pressing the j key means that you think the word was on the list.  </p>" +
        "<p> <i> Press either the f or j key to begin now. </i> </p>",
    choices: [70, 74],
};

let instructions_visual_5 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
        "<p> You have successfully completed the practice trials!. </p>" +
        "<p> You are now ready to begin the experiment. </p>" +
        "<p> Remember, pressing the f key means that you think the word was not on the list and pressing the j key means that you think the word was on the list.  </p>" +
        "<p> <i> Press either the f or j key to begin the experiment now. </i> </p>",
    choices: [70, 74],
};

let test = {
    type: jsPsychHtmlKeyboardResponse,
    // prompt: jsPsych.timelineVariable("confidence"),
    data: jsPsych.timelineVariable("data"),
    stimulus: function () {
        var html =
            "<p>" +
            jsPsych.timelineVariable("stimulus", true) +
            jsPsych.timelineVariable("confidence", true) +
            "</p>";
        return html;
    },
    // stimulus: jsPsych.timelineVariable('stimulus'),
    //choices: [70, 74],
    choices: ["NO_KEYS"],
    trial_duration: 3000,
    response_ends_trial: false,
    on_load: function buttonPress(data) {
        barFill = document.getElementById("fillUp");
        barFill.innerHTML = "Hold response key to indicate confidence level.";
        document.getElementById("tapTap").focus(); //gives focus to the text box
        $(document).ready(function () {
            $("#tapTap").keypress(function (event) {
                var keycode = event.which;
                if (
                    (barFill.innerHTML =
                        "Hold response key to indicate confidence level.")
                ) {
                    // reused from eefrt, just needed a placeholder here
                    if (keycode == 102) {
                        document
                            .getElementById("counter")
                            .setAttribute(
                                "onkeydown",
                                "return moveConfidence()"
                            ); // event.charCode allows us to set specific keys to use
                        responseKey = 102;
                        console.log(responseKey);
                    } else if (keycode == 106) {
                        document
                            .getElementById("counter")
                            .setAttribute(
                                "onkeydown",
                                "return moveConfidence()"
                            ); // event.charCode allows us to set specific keys to use
                        responseKey = 106;
                        console.log(responseKey);
                    } else {
                        // all other keys ignored
                        document
                            .getElementById("counter")
                            .setAttribute("onkeydown", "return false"); // event.charCode allows us to set specific keys to use
                    }
                }
            });
        });
    },
    on_start: function () {
        //update progress bar with each iteration
        var currentProgressBarValue = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(currentProgressBarValue + 1 / numberOfTrials);
    },
    on_finish: function (data) {
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

// let instructions1 = {
//   type: 'audio-keyboard-response',
//   stimulus: 'stim/audio_instructions/old_DRM_instructions_1.mp3',
//   choices: "NO_KEYS",
//   trial_ends_after_audio: true
// };

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
