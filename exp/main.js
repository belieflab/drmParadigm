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

timeline.push(before_instructions);
timeline.push(instructions_0);
timeline.push(instructions_1);
timeline.push(instructions_responsePromptTone);
timeline.push(instructions_after_example_reponsePromptTone);
timeline.push(instructions_2);
timeline.push(instructions_2_continued);
timeline.push(instructions_3);
timeline.push(instructions_4);
timeline.push(instructions_5);
timeline.push(continue_trial);
timeline.push(practiceSection);
// timeline.push(continue_trial);
timeline.push(instructions_6);
timeline.push(continue_trial);
timeline.push(testSection);
timeline.push(instructions_7);

timeline.push(dataSave);

if (subjectId) {
    jsPsych.run(timeline);
}
