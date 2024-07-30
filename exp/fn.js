function createTrial(list, trialType, wordPosition = "list") {
    return {
        stimulus: list.stimulus,
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: list.stimulus,
            drmTrial_type: trialType,
            word_position: wordPosition,
        },
        confidence: "x",
    };
}

function createTargetTrial(stimulus, trialType) {
    return {
        stimulus: stimulus,
        trial_duration: durationForTargetWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
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
