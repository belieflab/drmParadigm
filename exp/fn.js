"use strict";

// Helper functions (keep the shuffleArray function as is)
let isTonePlaying = false;

function createTrial(
    list,
    trialType,
    wordPosition = "list",
    isPractice = false,
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
        },
        on_finish: function () {
            if (list.stimulus === trialStartTone) {
                // Reset the flag after the tone has finished playing
                isTonePlaying = false;
            }
        },
        // on_start: function() {
        //     if (list.stimulus === trialStartTone) {
        //       isTonePlaying = true;
        //       setTimeout(() => {
        //         isTonePlaying = false;
        //       }, durationForListWords); 
        //     }
        // }
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
    };
}

function createTrialSet(list, trialType, isPractice = false) {
    let trials = [];

    trials.push(
        createTrial({ stimulus: trialStartTone }, trialType, "list", isPractice)
    );
    list.listA.forEach((word) =>
        trials.push(
            createTrial({ stimulus: word }, trialType, "list", isPractice)
        )
    );
    trials.push(
        createTrial(
            { stimulus: responsePromptTone },
            trialType,
            "list",
            isPractice
        )
    );
    trials.push(createTargetTrial(list.prototype, trialType, isPractice));

    trials[0].trial_duration = fixationDuration; // Set this to the duration of the start tone

    return trials;
}
