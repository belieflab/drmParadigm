<!-- Purpose of var.js: To include all global variables (e.g., trialIterator) -->
<!-- And any php server side logic -->

<?php
// include any php code here
// Directory paths for different stimulus types
$instructionPath = './stim/audio_instructions/';
$stimuliPath = './stim/audio_stimuli/';

// Function to scan directory and return array of file paths, excluding . and ..
function getFilePaths($dirPath) {
    $files = scandir($dirPath);
    $fileArray = [];
    foreach ($files as $file) {
        if ($file !== '.' && $file !== '..') {
            $fileArray[] = $dirPath . $file;
        }
    }
    return $fileArray;
}

// echo("lol");
// Arrays of file paths for each stimulus type
$instructionsArray = getFilePaths($instructionPath);
//print_r($instructionsArray);
$stimuliArray = getFilePaths($stimuliPath);
//print_r($stimuliArray);
// JSON-encoded strings for use in JavaScript
$instructionsArrayJSON = json_encode($instructionsArray);
// echo($instructionsArrayJSON);
$stimuliArrayJSON = json_encode($stimuliArray);

?>

<script>
"use strict";

switch (version) {
    case "audio":
        // Arrays of stimuli, parsed from JSON provided by PHP
        const instructionsAudio = <?php echo $instructionsArrayJSON; ?>;
        const stimuliAudio = <?php echo $stimuliArrayJSON; ?>;

        // Function to create stimulus objects for an array of file paths
        function createStimuli(array, part) {
            return array.map(stimulus => ({
                stimulus,
                    data: { test_part: part, stim: stimulus },
                }));
        }

        // Stimulus objects for each category
        const instr_audio = createStimuli(instructionsAudio, "instr");
        const stim_audio = createStimuli(stimuliAudio, "stim");

        // document.write('<script src="exp/var-audio.js"></' + 'script>');
        $.getScript("exp/var-audio.js");
        break;

    case "visual":
        $.getScript("exp/var-visual.js");
        break;
}
</script>