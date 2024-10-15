"use strict";

let silentPause = "stim/audio_instructions/silence.mp3";
let startTrial = "stim/audio_tones/tone_2.mp3";

let pauseTrial = {
    stimulus: silentPause,
    response_ends_trial: false,
    trial_ends_after_audio: true,
    data: {
        test_part: "practice",
        stim: silentPause,
        trial_type: "practice",
    },
    confidence: "x",
};

let startToneTrial = {
    stimulus: startTrial,
    response_ends_trial: false,
    trial_ends_after_audio: true,
    data: {
        test_part: "practice",
        stim: startTrial,
        trial_type: "practice",
    },
    confidence: "x",
};

let isTonePlaying = false;

function createTrial(
    list,
    trialType,
    wordPosition = "list",
    isPractice = false
) {
    return {
        stimulus: list.stimulus,
        trial_duration:
            wordPosition === "startTone" ? 3000 : durationForListWords,
        response_ends_trial: false,
        trial_ends_after_audio: true,
        data: {
            test_part: isPractice ? "practice" : "test",
            stim: list.stimulus,
            trial_type: trialType,
            word_position: wordPosition,
        },
        confidence: "x",
        on_start: function (trial) {
            let audio = new Audio(trial.stimulus);
            audio.addEventListener("canplaythrough", function () {
                trial.stimulus = audio;
            });
        },
    };
}

function createTargetTrial(stimulus, trialType, isPractice = false) {
    return {
        stimulus: stimulus,
        trial_duration: durationForTargetWords,
        response_ends_trial: false,
        trial_ends_after_audio: true,
        data: {
            test_part: isPractice ? "practice" : "test",
            stim: stimulus,
            trial_type: trialType,
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
            let audio = new Audio(trial.stimulus);
            audio.addEventListener("canplaythrough", function () {
                trial.stimulus = audio;
            });
        },
    };
}

function createTrialSet(list, trialType, isPractice = false) {
    let trials = [];

    trials.push(startToneTrial);
    trials.push(pauseTrial);

    if (trials.length > 0) {
        if (trials[0]) {
            trials[0].trial_duration = 3000;
        }
        if (trials.length > 1) {
            trials[trials.length - 1].trial_duration = 600;
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
            "responsePrompt",
            isPractice
        )
    );
    trials.push(createTargetTrial(list.prototype, trialType, isPractice));

    return trials;
}
