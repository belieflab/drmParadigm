
// main order in which things are pushed to timeline 


let practiceSection= {
    timeline:[practice],
    // defines which array to draw stimuli from 
    timeline_variables: practiceTrials,
    // timeline_variables: incongruentPrototypeTrials,
   // choices: [32],
};

let joshTest= {
    timeline:[test],
    // defines which array to draw stimuli from 
    timeline_variables: interleavedFinalStim,
    // timeline_variables: incongruentPrototypeTrials,
    choices: [32],
};

// let joshTest= {
//     timeline:[test], 
//     // defines which array to draw stimuli from 
//     timeline_variables: interleavedFinalStim,
//     choices: [32],
// };

// let deannaTest= {
//     timeline:[test], 
//     // defines which array to draw stimuli from 
//     timeline_variables: congruentPrototypeTrials,
//     choices: [32],
// };

// let deannaTestIncongruentHighestAssociate= {
//     timeline:[test], 
//     // defines which array to draw stimuli from 
//     timeline_variables: incongruentHighestAssociateTrials,
//     choices: [32],
// };

// let deannaTestCongruentHighestAssociate= {
//     timeline:[test], 
//     // defines which array to draw stimuli from 
//     timeline_variables: congruentHighestAssociateTrials,
//     choices: [32],
// };

// timeline.push(instructions_audio_0);
// timeline.push(instructions_audio_1);
// timeline.push(instructions_audio_2);
// timeline.push(instructions_audio_3);
// timeline.push(instructions_audio_4);
// timeline.push(instructions_audio_5);
// timeline.push(practiceSection);
// timeline.push(instructions_audio_6);
// timeline.push(joshTest);

// timeline.push(deannaTest);
// timeline.push(deannaTestIncongruentHighestAssociate); 
// timeline.push(deannaTestCongruentHighestAssociate);

// timeline.push(instructions1);


timeline.push(instructions_visual_0);
timeline.push(instructions_visual_1);
timeline.push(instructions_visual_2);
timeline.push(instructions_visual_3);
timeline.push(instructions_visual_4);
timeline.push(practiceSection);
timeline.push(instructions_visual_5);
timeline.push(joshTest);
//timeline.push(deannaTest);
//timeline.push(deannaTestIncongruentHighestAssociate); 
//timeline.push(deannaTestCongruentHighestAssociate);


timeline.push(dataSave);