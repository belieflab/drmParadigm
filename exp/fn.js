// Function to add list words (modified for practice and test)
function addListWords(trialArray, trial, listName, trialType) {
    if (!trial) {
        console.error(`Trial is undefined for ${trialType}`);
        return;
    }
    if (!trial[listName]) {
        console.error(`${listName} is undefined for ${trialType}`);
        return;
    }
    const isPractice = trialType.includes("practice");
    for (let i = 0; i < trial[listName].length; i++) {
        trialArray.push({
            stimulus: trial[listName][i],
            trial_duration: durationForListWords,
            response_ends_trial: false,
            data: {
                test_part: isPractice ? "practice" : "test",
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
    const isPractice = toneType.includes("practice");
    trialArray.push({
        stimulus: toneType === "start" ? trialStartTone : responsePromptTone,
        trial_duration: fixationDuration,
        response_ends_trial: false,
        data: {
            test_part: isPractice ? "practice" : "test",
            stim: toneType === "start" ? trialStartTone : responsePromptTone,
            drmTrial_type: toneType,
        },
        confidence: "x",
    });
}

// Function to add target trial
function addTargetTrial(trialArray, trial, trialType, targetWord) {
    const isPractice = trialType.includes("practice");
    trialArray.push({
        prompt: "Did you hear the word ",
        stimulus: targetWord,
        prompt_end: "?",
        trial_duration: durationForTargetWords,
        response_ends_trial: false,
        data: {
            test_part: isPractice ? "practice" : "test",
            stim: targetWord,
            drmTrial_type: trialType,
            word_position: "target",
            correct_response: trial.correct_response,
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
    const isPractice = trialType.includes("practice");
    trialArray.push({
        stimulus: trialStartTone,
        trial_duration: fixationDuration,
        response_ends_trial: false,
        data: {
            test_part: isPractice ? "practice" : "test",
            stim: responsePromptTone,
            drmTrial_type: trialType,
        },
        confidence: "x",
    });
}
