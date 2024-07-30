// Function to add list words (modified for practice)
function addListWords(trialArray, trial, listName, trialType) {
    if (!trial) {
        console.error(`Trial is undefined for ${trialType}`);
        return;
    }
    if (!trial[listName]) {
        console.error(`${listName} is undefined for ${trialType}`);
        return;
    }
    for (let i = 0; i < trial[listName].length; i++) {
        trialArray.push({
            stimulus: trial[listName][i],
            trial_duration: durationForListWords,
            response_ends_trial: false,
            data: {
                test_part: "practice",
                stim: trial[listName][i],
                drmTrial_type: trialType,
                word_position: "list",
            },
            confidence: "x",
        });
    }
}

// Function to add tone trial
function addToneTrial(trialArray, toneType) {
    trialArray.push({
        stimulus: toneType === "start" ? trialStartTone : responsePromptTone,
        trial_duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "practice",
            stim: toneType === "start" ? trialStartTone : responsePromptTone,
            drmTrial_type: "practice",
        },
        confidence: "x",
    });
}

// Function to add target trial
function addTargetTrial(trialArray, trial, correctResponse) {
    trialArray.push({
        prompt: "Did you hear the word ",
        stimulus: trial.prototype,
        prompt_end: "?",
        trial_duration: durationForTargetWords,
        response_ends_trial: false,
        data: {
            test_part: "practice",
            stim: trial.prototype,
            drmTrial_type: "practice",
            word_position: "target",
            correct_response: correctResponse,
        },
        confidence:
            progressBar +
            fillUp +
            feedbackGenerator +
            timeRemaining +
            '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
    });
}

// Function to add fixation trial
function addFixationTrial(trialArray, trialType) {
    trialArray.push({
        stimulus: trialStartTone,
        trial_duration: fixationDuration,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: responsePromptTone,
            drmTrial_type: trialType,
        },
        confidence: "x",
    });
}
