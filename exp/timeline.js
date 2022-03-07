let timeline = [];

let instructions0 = {
  type: "html-keyboard-response",
  stimulus: "<p> Hello and thank you for taking part in our experiment!</p>"+
  "<p>This experiment will be presnted entirely in an auditory format.</p>"+
  "<p>It should take about 30 minutes.</p>"+
  "<p> <i> Press spacebar to begin listening to your instructions. </i> </p>",
  choices: [32],
  // on_finish: function() {
  //   // this needs to be wrapped in a while loop
  //   // checks against other protyotype vals to ensure inconrugency
  //   if (randomizedLists[0].prototype === Anger.prototype) {
  //     randomizedLists.push(randomizedLists.shift());
  //     console.log("shifted");
  //   } else {
  //     console.log("not shifted");
  //   }
  //   incongruentPrototypeTrials.pop(); // pops the 9th item
  //   incongruentPrototypeTrials.pop(); // pops the 8th item
  //   incongruentPrototypeTrials.push({stimulus: randomizedLists[0].prototype, data: {test_part:"test", stim: randomizedLists[0].prototype}}); // pushes 8th item prototype
  //   incongruentPrototypeTrials.push({stimulus: "TONE2"}); // pushes 9th item tone2
    
  // }
};

let instructions1 = {
  type: "html-keyboard-response",
  stimulus: "<p> This experiment assesses your ability to remember whether a particular word was presented in a list of words.</p>"+
  "<p>First, you will hear a list of six words. At the conclusion of the list, you will hear a short tone. </p>"+
  "<p> <i> Press the spacebar to hear the short tone now. </i> </p>",
  choices: [32],
  
};

let instructions2 = {
  type: "html-keyboard-response",
  stimulus: "<p> After the short tone, you will hear one word. </p>"+
  "<p> Your job is to indicate whether that word was or was not on the list that you heard before the tone. </p>"+
  "<p> If the word was on the list, press the “j” key. If the word was not on the list, press the “f” key. </p>" +
  "<p> <i> Press either the f or j key to hear additional instructions. </i> </p>",
  choices: [70, 74],
  
};

//need to add in confidence bar here 
let instructions3 = {
  type: "html-keyboard-response",
  stimulus: "<p> You can indicate your confidence in your response by varying the amount of time you hold down the “f” or “j” key. </p>"+
  "<p> If you are very confident in your response, hold the key down for []. If you are unsure about your response,  simply tap the key. </p>"+
  "<p> A tone will play when you press and/or hold down the f or j keys. The longer you hold down the key, the higher in frequency the tone will go. </p>" +
  "<p> <i> Hold down either the f or j key to hear what it sounds like when you are very confident in your response. </i> </p>",
  choices: [70, 74],
  
};


let instructions4 = {
  type: "html-keyboard-response",
  stimulus: "<p> Please give your response as quickly as possible.  </p>"+
  "<p> At the end of the response period, you will hear a long low tone. This tone indicates that the response period has ended. </p>"+
  "<p> <i> Press the spacebar to hear the long low tone now. </i> </p>",
  choices: [32],
  
};

let instructions5 = {
  type: "html-keyboard-response",
  stimulus: "<p> After you hear the long low tone,  the next trial will begin. </p>"+
  "<p> To continue to a couiple of practice trials, please press either the f or j key. </p>"+
  "<p> <i> Alternatively, if you would like to hear the instructions again, press the spacebar. </i> </p>",
  choices: [32, 70, 74],
  
};

let practice = {
  type: "html-keyboard-response",
  // prompt: jsPsych.timelineVariable("confidence"),
  data: jsPsych.timelineVariable("data"),
  stimulus: function(){
    var html="<p>"+jsPsych.timelineVariable('stimulus', true)+jsPsych.timelineVariable('confidence', true)+"</p>";
    return html;
  },
  // stimulus: jsPsych.timelineVariable('stimulus'),
  choices: [70, 74],
  // on_finish: function(data){
  //   if (data.stim== "tone1") {
  //     data.accuracy_test= "" ;
  //    } else if (data.stim=="tone2") {
  //     data.accuracy_test= "" ;
  //    } else if (data.word_position=="list") {
  //     data.accuracy_test= "" ;
  //   //   (data.key_press==null){
  //   //    data.accuracy_test = null;
    
  //   } else if (data.key_press == data.correct_response) {
  //      console.log('correct');
  //      data.accuracy_test = true;
  //    } else if (data.key_press != data.correct_response) {
  //    console.log('incorrect');
  //      data.accuracy_test = false;
  //    };
  //   }

};


let instructions6 = {
  type: "html-keyboard-response",
  stimulus: "<p> You have successfully completed the practice trials!. </p>"+
  "<p> You are now ready to begin the experiment. </p>"+
  "<p> Remember, pressing the f key means that you think the word was not on the list and pressing the j key means that you think the word was on the list.  </p>"+
  "<p> <i> Press either the f or j key to begin now. </i> </p>",
  choices: [70, 74],
  
};



let test = {
  type: "html-keyboard-response",
  // prompt: jsPsych.timelineVariable("confidence"),
  data: jsPsych.timelineVariable("data"),
  stimulus: function(){
    var html="<p>"+jsPsych.timelineVariable('stimulus', true)+jsPsych.timelineVariable('confidence', true)+"</p>";
    return html;
  },
  // stimulus: jsPsych.timelineVariable('stimulus'),
  choices: [70, 74],
  on_finish: function(data){
    if (data.stim== "tone1") {
      data.accuracy_test= "" ;
     } else if (data.stim=="tone2") {
      data.accuracy_test= "" ;
     } else if (data.word_position=="list") {
      data.accuracy_test= "" ;
    //   (data.key_press==null){
    //    data.accuracy_test = null;
    
    } else if (data.key_press == data.correct_response) {
       console.log('correct');
       data.accuracy_test = true;
     } else if (data.key_press != data.correct_response) {
     console.log('incorrect');
       data.accuracy_test = false;
     };
    }

};


// let instructions1 = {
//   type: 'audio-keyboard-response',
//   stimulus: 'stim/audio_instructions/DRM_instructions_1.mp3',
//   choices: "NO_KEYS",
//   trial_ends_after_audio: true
// };

let dataSave = {
  type: "html-keyboard-response",
  stimulus: "<p style='color:black;'>Data saving...</p>"+
  '<div class="sk-cube-grid">'+
  '<div class="sk-cube sk-cube1"></div>'+
  '<div class="sk-cube sk-cube2"></div>'+
  '<div class="sk-cube sk-cube3"></div>'+
  '<div class="sk-cube sk-cube4"></div>'+
  '<div class="sk-cube sk-cube5"></div>'+
  '<div class="sk-cube sk-cube6"></div>'+
  '<div class="sk-cube sk-cube7"></div>'+
  '<div class="sk-cube sk-cube8"></div>'+
  '<div class="sk-cube sk-cube9"></div>'+
  '</div>'+
  "<p style='color:black;'>Do not close this window until the text dissapears.</p>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
  on_finish: function() {
    saveData("drm_" + workerId, jsPsych.data.get().csv()); //function with file name and which type of file as the 2 arguments
    document.getElementById("unload").onbeforeunload=''; //removes popup (are you sure you want to exit) since data is saved now
    // returns cursor functionality
    $(document).ready(function() {
    $("body").addClass("showCursor");
    });
      // at the end of each trial, update the progress bar
      // based on the current value and the proportion to update for each trial
      var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
      jsPsych.setProgressBar(curr_progress_bar_value + (1/720));
  }
};



$.getScript("exp/main.js");