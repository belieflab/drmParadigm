<!-- Purpose of var.js: To include all global variables (e.g., trialIterator) -->
<!-- And any php server side logic -->

<?php
// include any php code here
?>

<script>

if (version === "audio") {
    $.getScript("exp/var-audio.js");
} else if (version === "visual") {
    $.getScript("exp/var-visual.js");
}

</script>