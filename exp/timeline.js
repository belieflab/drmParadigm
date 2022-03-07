let timeline = [];

let instructions0 = {
  type: "html-keyboard-response",
  stimulus: "<p> Hello and thank you for taking part in our experiment!</p>"+
  "<p>It should take about 30 minutes.</p>"+
  "<p> <i> Press spacebar to continue</i> </p>",
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


let instructions1 = {
  type: 'audio-keyboard-response',
  stimulus: 'stim/audio_instructions/DRM_instructions_1.mp3',
  choices: "NO_KEYS",
  trial_ends_after_audio: true
};

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