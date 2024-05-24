"use strict";

const startExperiment = () => {
    jsPsych.init({
        timeline: timeline,
        show_progress_bar: true,
        preload_images: [],
        preload_audio: [],
        preload_video: [],
    });
};

let timeline = [];

let instructions_0 = {
    type: "html-keyboard-response",
    stimulus:
        "<p> Hello and thank you for taking part in our experiment!</p>" +
        "<p>It should take about 45 minutes.</p>" +
        "<p> <i> Press the spacebar to view your instructions. </i> </p>",
    choices: [32],
    on_start: function () {
        jsPsych.setProgressBar(0);
    },
};

let instructions_1 = {
    type: "html-keyboard-response",
    stimulus:
        "<p> This experiment assesses your ability to remember whether a particular word was presented in a list of words.</p>" +
        "<p>First, you will be presented a list of six words, with one word appearing on the screen at a time. </p>" +
        "<p> <i> Press the spacebar to view more instructions. </i> </p>",
    choices: [32],
};

let instructions_2 = {
    type: "html-keyboard-response",
    stimulus:
        "<p> After viewing the list of six words, you will be asked whether a particular word was on the list. </p>" +
        "<p> Your job is to indicate whether that word was or was not on the list. </p>" +
        "<p> If the word was on the list, press the “j” key. If the word was not on the list, press the “f” key. </p>" +
        "<p> <i> Press either the f or j key to view additional instructions. </i> </p>",
    choices: [70, 74],
};

//need to add in confidence bar here
let instructions_3 = {
    type: "html-keyboard-response",
    stimulus:
        "<p> You can indicate your confidence in your response by varying the amount of time you hold down the “f” or “j” key. </p>" +
        "<p> If you are very confident in your response, hold the key down for []. If you are unsure about your response,  simply tap the key. </p>" +
        "<p>The confidence meter (see below) keeps track of how confident you are in your response. The longer you hold down the key, the more the confidence meter will fill up. </p>" +
        // progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">'+
        "<p> <i> Hold down either the f or j key to see what it looks like when the confidence meter fills up. </i> </p>",
    prompt:
        progressBar +
        fillUp +
        feedbackGenerator +
        timeRemaining +
        '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
    choices: [jsPsych.NO_KEYS],
    response_ends_trial: false,
    trial_duration: 30000,
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
                    }
                }
            });
        });
    },
    on_finish: function (data) {
        //add in this section so that if someone does not answer on first practice trial, then the response will be blank.
        data.confidence = "";
        responseKey = "";
    },
};

let instructions_4 = {
    type: "html-keyboard-response",
    stimulus:
        "<p> At the end of the response period, you automatically will be brought to a page that begins the next trial. </p>" +
        "<p> You are now ready to proceed to some practice trials!</p>" +
        "<p> <i> To continue to some practice trials, please press either the f or j key. </i> </p>",
    choices: [70, 74],
};

let practice = {
    type: "html-keyboard-response",
    data: jsPsych.timelineVariable("data"),
    stimulus: function () {
        var html =
            "<p>" +
            jsPsych.timelineVariable("prompt", true) +
            "</p>" +
            "<p class='words'>" +
            jsPsych.timelineVariable("stimulus", true) +
            "</p>" +
            "<p>" +
            jsPsych.timelineVariable("confidence", true) +
            "</p>";
        return html;
    },
    trial_duration: jsPsych.timelineVariable("duration"),
    //response_ends_trial:jsPsych.timelineVariable("response_ends_trial"),
    choices: [jsPsych.NO_KEYS],
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
                    }
                }
            });
        });
    },
    on_finish: function (data) {
        data.response = responseKey;
        //in missed trials, the data files shows a blank in the response colum,
        //a 0 for incorrect in the accuracy column, and
        // and 0 for the confidence
        if (data.word_position != "target") {
            data.response = "";
            data.confidence = "";
            data.accuracy_practice = "";
        } else if (responseKey == data.correct_response) {
            data.accuracy_practice = "correct";
            data.confidence = totalConfidence;
            responseKey = "";
        } else if (responseKey == data.incorrect_response) {
            data.accuracy_practice = "incorrect";
            data.confidence = totalConfidence;
            responseKey = "";
        } else if (responseKey == "") {
            data.accuracy_practice = "incorrect";
            data.confidence = 0;
            responseKey = "";
        }
    },
};

let instructions_5 = {
    type: "html-keyboard-response",
    stimulus:
        "<p> You have successfully completed the practice trials!. </p>" +
        "<p> You are now ready to begin the experiment. </p>" +
        "<p> Remember, pressing the f key means that you think the word was not on the list and pressing the j key means that you think the word was on the list.  </p>" +
        "<p> <i> Press either the f or j key to begin the experiment now. </i> </p>",
    choices: [70, 74],
};

let test = {
    type: "html-keyboard-response",
    // prompt: jsPsych.timelineVariable("confidence"),
    data: jsPsych.timelineVariable("data"),
    stimulus: function () {
        var html =
            "<p>" +
            jsPsych.timelineVariable("prompt", true) +
            "</p>" +
            "<p class='words'>" +
            jsPsych.timelineVariable("stimulus", true) +
            "</p>" +
            "<p>" +
            jsPsych.timelineVariable("confidence", true) +
            "</p>";
        return html;
    },

    //choices: [70, 74],
    trial_duration: jsPsych.timelineVariable("duration"),
    // response_ends_trial:jsPsych.timelineVariable("response_ends_trial"),
    choices: [jsPsych.NO_KEYS],
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
        data.response = responseKey;
        //in missed trials, the data files shows a blank in the response colum,
        //a 0 for incorrect in the accuracy column, and
        // and 0 for the confidence
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
    },
};

const dataSave = {
    type: "html-keyboard-response",
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
                    window.location.replace(feedbackLink);
                }
            });
    },
};

$.getScript("exp/main.js");
