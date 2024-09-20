"use strict";

// Helper functions (keep the shuffleArray function as is)
let isTonePlaying = false;

function createTrial(
    list,
    trialType,
    wordPosition = "list",
    isPractice = false,
    delayBeforeNextTrial = 3000,
) {
    return {
        stimulus: list.stimulus,
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: isPractice ? "practice" : "test",
            stim: list.stimulus,
            drmTrial_type: trialType,
            word_position: wordPosition,
        },
        confidence: "x",
        on_start: function () {
            if (list.stimulus === trialStartTone) {
                // Set the flag to indicate that the start tone is playing
                isTonePlaying = true;
            }
             // Ensure audio is fully loaded before playing
             let audio = new Audio(trial.stimulus);
             audio.addEventListener('canplaythrough', function() {
                 // Audio is loaded and can be played without buffering
                 trial.stimulus = audio;
             });
        },
        on_finish: function(data) {
            if (list.stimulus === trialStartTone) {
                isTonePlaying = false;
                jsPsych.pauseExperiment();
                setTimeout(() => {
                    jsPsych.resumeExperiment();
                }, 500); // 500ms delay after tone
            } else if (wordPosition === "list" && data.trial_index === 0) {
                // This is the first word of a list
                jsPsych.pauseExperiment();
                setTimeout(() => {
                    jsPsych.resumeExperiment();
                }, 250); // 250ms delay after first word
            }
        }
    };
}

function createTargetTrial(stimulus, trialType, isPractice = false) {
    return {
        stimulus: stimulus,
        trial_duration: durationForTargetWords,
        response_ends_trial: false,
        data: {
            test_part: isPractice ? "practice" : "test",
            stim: stimulus,
            drmTrial_type: trialType,
            word_position: "target",
            correct_response: "74",
        },
        confidence:
            progressBar +
            fillUp +
            feedbackGenerator +
            timeRemaining +
            '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
            on_start: function (trial) {
                // Ensure audio is fully loaded before playing
                let audio = new Audio(trial.stimulus);
                audio.addEventListener('canplaythrough', function() {
                    // Audio is loaded and can be played without buffering
                    trial.stimulus = audio;
                });
            },
    };
}

function createTrialSet(list, trialType, isPractice = false) {
    let trials = [];

    trials.push(
        createTrial({ stimulus: trialStartTone }, trialType, "list", isPractice)
    );
    
    if (trials.length > 0) {
        if (trials[0]) {
            trials[0].trial_duration = fixationDuration;
        }        
        if (trials.length > 1) {
            trials[trials.length - 1].trial_duration = fixationDuration;
        }
        list.listA.forEach((word) =>
            trials.push(
                createTrial({ stimulus: word }, trialType, "list", isPractice)
            )
        );
    }
    
    trials.push(
        createTrial(
            { stimulus: responsePromptTone },
            trialType,
            "list",
            isPractice
        )
    );
    trials.push(createTargetTrial(list.prototype, trialType, isPractice));
    
    return trials;
}
