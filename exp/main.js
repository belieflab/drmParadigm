// main order in which things are pushed to timeline
let practiceSection = {
    timeline: [trials],
    timeline_variables: practiceTrials,
};

let testSection = {
    timeline: [trials],
    timeline_variables: interleavedFinalStim,
};

console.log("Number of practice trials:", practiceTrials.length);
console.log("Number of test trials:", interleavedFinalStim.length);

timeline.push(preload);

timeline.push(before_instructions);
timeline.push(instructions_0);
timeline.push(continue_trial);
timeline.push(instructions_1);
timeline.push(pause_before_short_tone);
timeline.push(short_tone);
timeline.push(instructions_after_example_reponsePromptTone);
timeline.push(pressJorF); 
timeline.push(instructions_2);
timeline.push(instructions_2_continued);
timeline.push(instructions_3);
timeline.push(continue_trial);
timeline.push(instructions_4);
timeline.push(instructions_5);
timeline.push(continue_trial);
timeline.push(practiceSection);
timeline.push(instructions_6);
timeline.push(pause_before_continue_to_test_section);
timeline.push(continue_to_test_section);
timeline.push(testSection);
timeline.push(instructions_7);
timeline.push(continue_trial);

timeline.push(dataSave);

if (subjectId) {
    jsPsych.run(timeline);
}