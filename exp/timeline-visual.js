let timeline = [];
const numberOfTrials = 486;

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

let dataSave = {
    type: "html-keyboard-response",
    stimulus:
        "<p style='color:white;'>Data saving...</p>" +
        '<div class="sk-cube-grid">' +
        '<div class="sk-cube sk-cube1"></div>' +
        '<div class="sk-cube sk-cube2"></div>' +
        '<div class="sk-cube sk-cube3"></div>' +
        '<div class="sk-cube sk-cube4"></div>' +
        '<div class="sk-cube sk-cube5"></div>' +
        '<div class="sk-cube sk-cube6"></div>' +
        '<div class="sk-cube sk-cube7"></div>' +
        '<div class="sk-cube sk-cube8"></div>' +
        '<div class="sk-cube sk-cube9"></div>' +
        "</div>" +
        "<p style='color:white;'>Do not close this window until the text dissapears.</p>",
    choices: jsPsych.NO_KEYS,
    trial_duration: 5000,
    on_finish: function () {
        saveData("drm_" + workerId, jsPsych.data.get().csv()); //function with file name and which type of file as the 2 arguments
        document.getElementById("unload").onbeforeunload = ""; //removes popup (are you sure you want to exit) since data is saved now
        // returns cursor functionality
        $(document).ready(function () {
            $("body").addClass("showCursor");
        });
        // at the end of each trial, update the progress bar
        // based on the current value and the proportion to update for each trial
        var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(curr_progress_bar_value + 1 / 720);
    },
};

let end = {
    type: "html-keyboard-response",
    stimulus:
        "<p style='color:white;'>Thank you!</p>" +
        "<p style='color:white;'>You have successfully completed the experiment and your data has been saved.</p>" +
        "<p style='color:white;'>To proceed to the next section of this experiment, please click the following link:</p>" +
        "<p style='color:white;'><a href=" +
        feedbackLink +
        ">Continue to questionnaires!</a></p>",
    // "<p style='color:white;'>Please wait for the experimenter to continue.</p>"+
    // "<p style='color:white;'><i>You may now close the experiment window at anytime.</i></p>",
    choices: jsPsych.NO_KEYS,
    // on_load: function() {
    //   alert(reward);
    // }
};

$.getScript("exp/main.js");
