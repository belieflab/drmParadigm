const trials = Array.from({ length: 18 }, (_, i) => i + 1); // Generate an array [1, 2, ..., 18]

const durationForListWords = 1000; // Example duration
const responsePromptTone = 'prompt_tone'; // Example stimulus
const trialStartTone = 'start_tone'; // Example stimulus
const fixationDuration = 500; // Example duration
const progressBar = ''; // Placeholder
const fillUp = ''; // Placeholder
const feedbackGenerator = ''; // Placeholder
const timeRemaining = ''; // Placeholder

// Placeholder trial data
const prototypeData = (trialNumber) => ({
    listB: [`item${trialNumber}_1`, `item${trialNumber}_2`, `item${trialNumber}_3`], // Example listB items
    prototype: `prototype_item${trialNumber}` // Example prototype
});

let congruentPrototypeTrials = []; // Initialize an array to hold the trials

for (let trial of trials) {
    const trialData = prototypeData(trial);

    // Iterate over listB items
    for (let i = 0; i < trialData.listB.length; i++) {
        congruentPrototypeTrials.push({
            stimulus: trialData.listB[i],
            duration: durationForListWords,
            data: {
                test_part: "test",
                stim: trialData.listB[i],
                drmTrial_type: "congruentPrototype",
                word_position: "list",
            },
            confidence: "x",
        });
    }

    // Push responsePromptTone
    congruentPrototypeTrials.push({
        stimulus: responsePromptTone,
        duration: durationForListWords,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: responsePromptTone,
            drmTrial_type: "congruentPrototype",
        },
        confidence: "x",
    });

    // Push prototype item
    congruentPrototypeTrials.push({
        stimulus: trialData.prototype,
        data: {
            test_part: "test",
            stim: trialData.prototype,
            drmTrial_type: "congruentPrototype",
            word_position: "target",
            correct_response: "70",
        },
        confidence: progressBar + fillUp + feedbackGenerator + timeRemaining +
            '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">',
    });

    // Push trialStartTone
    congruentPrototypeTrials.push({
        stimulus: trialStartTone,
        duration: fixationDuration,
        response_ends_trial: false,
        data: {
            test_part: "test",
            stim: trialStartTone,
            drmTrial_type: "congruentPrototype",
        },
        confidence: "x",
    });
}

// Debugging: Output the generated trials
console.log(congruentPrototypeTrials);
