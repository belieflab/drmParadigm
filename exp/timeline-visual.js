let timeline = [];
const numberOfTrials = 486;


let instructions_audio_0 = {
  type: "html-keyboard-response",
  stimulus: "<p> Hello and thank you for taking part in our experiment!</p>"+
  "<p>This experiment will be presnted entirely in an auditory format.</p>"+
  "<p>It should take about 30 minutes.</p>"+
  "<p> <i> Press spacebar to begin listening to your instructions. </i> </p>",
  choices: [32],
  on_start: function(){
    jsPsych.setProgressBar(0);
  }
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

let instructions_audio_1 = {
  type: "html-keyboard-response",
  stimulus: "<p> This experiment assesses your ability to remember whether a particular word was presented in a list of words.</p>"+
  "<p>First, you will hear a list of six words. At the conclusion of the list, you will hear a short tone. </p>"+
  "<p> <i> Press the spacebar to hear the short tone now. </i> </p>",
  choices: [32],
  
};

let instructions_audio_2 = {
  type: "html-keyboard-response",
  stimulus: "<p> After the short tone, you will hear one word. </p>"+
  "<p> Your job is to indicate whether that word was or was not on the list that you heard before the tone. </p>"+
  "<p> If the word was on the list, press the “j” key. If the word was not on the list, press the “f” key. </p>" +
  "<p> <i> Press either the f or j key to hear additional instructions. </i> </p>",
  choices: [70, 74],
  
};

//need to add in confidence bar here 
let instructions_audio_3 = {
  type: "html-keyboard-response",
  stimulus: "<p> You can indicate your confidence in your response by varying the amount of time you hold down the “f” or “j” key. </p>"+
  "<p> If you are very confident in your response, hold the key down for []. If you are unsure about your response,  simply tap the key. </p>"+
  "<p> A tone will play when you press and/or hold down the f or j keys. The longer you hold down the key, the higher in frequency the tone will go. </p>" +
  "<p> <i> Hold down either the f or j key to hear what it sounds like when you are very confident in your response. </i> </p>",
  choices: [70, 74],
  
};


let instructions_audio_4 = {
  type: "html-keyboard-response",
  stimulus: "<p> Please give your response as quickly as possible.  </p>"+
  "<p> At the end of the response period, you will hear a long low tone. This tone indicates that the response period has ended. </p>"+
  "<p> <i> Press the spacebar to hear the long low tone now. </i> </p>",
  choices: [32],
  
};

let instructions_audio_5 = {
  type: "html-keyboard-response",
  stimulus: "<p> After you hear the long low tone,  the next trial will begin. </p>"+
  "<p> To continue to a couiple of practice trials, please press either the f or j key. </p>"+
  "<p> <i> Alternatively, if you would like to hear the instructions again, press the spacebar. </i> </p>",
  choices: [32, 70, 74],
  
};

let instructions_visual_0 = {
  type: "html-keyboard-response",
  stimulus: "<p> Hello and thank you for taking part in our experiment!</p>"+
  "<p>It should take about 45 minutes.</p>"+
  "<p> <i> Press the spacebar to view your instructions. </i> </p>",
  choices: [32],
  on_start: function(){
    jsPsych.setProgressBar(0);
  }
  
};

let instructions_visual_1 = {
  type: "html-keyboard-response",
  stimulus: "<p> This experiment assesses your ability to remember whether a particular word was presented in a list of words.</p>"+
  "<p>First, you will be presented a list of six words, with one word appearing on the screen at a time. </p>"+
  "<p> <i> Press the spacebar to view more instructions. </i> </p>",
  choices: [32],
  
};

let instructions_visual_2 = {
  type: "html-keyboard-response",
  stimulus: "<p> After viewing the list of six words, you will be asked whether a particular word was on the list. </p>"+
  "<p> Your job is to indicate whether that word was or was not on the list. </p>"+
  "<p> If the word was on the list, press the “j” key. If the word was not on the list, press the “f” key. </p>" +
  "<p> <i> Press either the f or j key to view additional instructions. </i> </p>",
  choices: [70, 74],
  
};

//need to add in confidence bar here 
let instructions_visual_3 = {
  type: "html-keyboard-response",
  stimulus: "<p> You can indicate your confidence in your response by varying the amount of time you hold down the “f” or “j” key. </p>"+
  "<p> If you are very confident in your response, hold the key down for []. If you are unsure about your response,  simply tap the key. </p>"+
  "<p>The confidence meter (see below) keeps track of how confident you are in your response. The longer you hold down the key, the more the confidence meter will fill up. </p>" +
  progressBar + fillUp + feedbackGenerator + timeRemaining + '<input autocomplete="autocomplete_off_hack_xfr4!k" id="tapTap" type="text" style="background-color:black; color: transparent; outline:none; border:none; background:none" onkeypress="">' +

  "<p> <i> Hold down either the f or j key to see what it looks like when the confidence meter fills up. </i> </p>",
  choices: [70, 74],
  
};


let instructions_visual_4 = {
  type: "html-keyboard-response",
  stimulus: "<p> At the end of the response period, you automatically will be brought to a page that begins the next trial. </p>"+
  "<p> You are now ready to proceed to some practice trials!</p>" +
  "<p> <i> To continue to a couiple of practice trials, please press either the f or j key. </i> </p>",
  choices: [70, 74],
  
};


let practice = {
  type: "html-keyboard-response",
  data: jsPsych.timelineVariable("data"),
  stimulus: function(){
    var html="<p>"+jsPsych.timelineVariable('prompt', true)+jsPsych.timelineVariable('stimulus', true)+jsPsych.timelineVariable('prompt_end', true)+jsPsych.timelineVariable('confidence', true)+"</p>";
    return html;
  },
trial_duration: jsPsych.timelineVariable("duration"),
response_ends_trial:jsPsych.timelineVariable("response_ends_trial"),
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


let instructions_audio_6 = {
  type: "html-keyboard-response",
  stimulus: "<p> You have successfully completed the practice trials!. </p>"+
  "<p> You are now ready to begin the experiment. </p>"+
  "<p> Remember, pressing the f key means that you think the word was not on the list and pressing the j key means that you think the word was on the list.  </p>"+
  "<p> <i> Press either the f or j key to begin now. </i> </p>",
  choices: [70, 74],
  
};

let instructions_visual_5 = {
  type: "html-keyboard-response",
  stimulus: "<p> You have successfully completed the practice trials!. </p>"+
  "<p> You are now ready to begin the experiment. </p>"+
  "<p> Remember, pressing the f key means that you think the word was not on the list and pressing the j key means that you think the word was on the list.  </p>"+
  "<p> <i> Press either the f or j key to begin the experiment now. </i> </p>",
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
  //choices: [70, 74],
  choices: [jsPsych.NO_KEYS],
  on_load: function buttonPress(data){
    barFill = document.getElementById("fillUp");
    barFill.innerHTML = 'Hold response key to indicate confidence level.';
    document.getElementById("tapTap").focus(); //gives focus to the text box
    $(document).ready(function(){
        $("#tapTap").keypress(function(event){
            var keycode = event.which;
            if (barFill.innerHTML = 'Hold response key to indicate confidence level.') { // reused from eefrt, just needed a placeholder here
              if (keycode == 70) {
                document.getElementById("counter").setAttribute("onkeydown", "return moveConfidence()"); // event.charCode allows us to set specific keys to use
                responseKey = 70;
                console.log(responseKey);
              } else if (keycode == 74) {
                document.getElementById("counter").setAttribute("onkeydown", "return moveConfidence()"); // event.charCode allows us to set specific keys to use
                responseKey = 74;
                console.log(responseKey);
              } else { // all other keys ignored
                document.getElementById("counter").setAttribute("onkeydown", "return false"); // event.charCode allows us to set specific keys to use 
              }
          }
        });
    });
},
  on_start: function(){
    //update progress bar with each iteration
    var currentProgressBarValue=jsPsych.getProgressBarCompleted();
    jsPsych.setProgressBar(currentProgressBarValue+(1/numberOfTrials));
  },
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