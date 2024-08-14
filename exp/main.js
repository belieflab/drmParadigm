// main order in which things are pushed to timeline

let practiceSection = {
    timeline: [trials],
    timeline_variables: practiceTrials,
};

let testSection = {
    timeline: [trials],
    timeline_variables: interleavedFinalStim,
};

timeline.push(preload);

timeline.push(instructions_0);
timeline.push(instructions_1);
timeline.push(instructions_2);
timeline.push(instructions_3);
timeline.push(instructions_4);
timeline.push(instructions_5);
timeline.push(practiceSection);
timeline.push(instructions_6);
timeline.push(testSection);

timeline.push(dataSave);

// don't allow experiment to start unless subjectId is set
if (subjectId) {
    // New jsPsych 7.x syntax
    jsPsych.run(timeline);
}
