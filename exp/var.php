<!-- Purpose of var.js: To include all global variables (e.g., trialIterator) -->
<!-- And any php server side logic -->

<?php
// include any php code here
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

// Arrays of file paths for each stimulus type
$instructionsArray = getFilePaths($instructionPath);
$stimuliArray = getFilePaths($stimuliPath);

// JSON-encoded strings for use in JavaScript
$instructionsArrayJSON = json_encode($instructionsArray);
$stimuliArrayJSON = json_encode($stimuliArray);

?>

<script>

switch (version) {
    case "audio":
        $.getScript("exp/var-audio.js");
        // Arrays of stimuli, parsed from JSON provided by PHP
        const instructionsAudio = <?php echo $instructionsArrayJSON; ?>;
        const stimuliAudio = <?php echo $stimuliArrayJSON; ?>;
        break;
    case "visual":
        $.getScript("exp/var-visual.js");
        break;
}

</script>