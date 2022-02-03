
// main order in which things are pushed to timeline 


let joshTest= {
    timeline:[test], 
    // defines which array to draw stimuli from 
    timeline_variables: incongruentPrototypeTrials,
    choices: [32],
};

let deannaTest= {
    timeline:[test], 
    // defines which array to draw stimuli from 
    timeline_variables: congruentPrototypeTrials,
    choices: [32],
};

let deannaTestInCongruentHighestAssociate= {
    timeline:[test], 
    // defines which array to draw stimuli from 
    timeline_variables: incongruentHighestAssociateTrials,
    choices: [32],
};

timeline.push(instructions0);
timeline.push(joshTest);
timeline.push(deannaTest);
timeline.push(deannaTestInCongruentHighestAssociate); 
// timeline.push(instructions1);