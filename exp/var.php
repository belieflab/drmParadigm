<!-- Purpose of var.js: To include all global variables (e.g., trialIterator) -->
<!-- And any php server side logic -->

<?php
// include any php code here
?>

<script>

switch (version) {
    case "audio":
        $.getScript("exp/var-audio.js");
        break;
    case "visual":
        $.getScript("exp/var-visual.js");
        break;
}


</script>