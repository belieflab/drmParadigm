if (version === "audio") {
    $.getScript("exp/timeline-audio.js");
} else if (version === "visual") {
    $.getScript("exp/timeline-visual.js");
} else {
    $.getScript("exp/timeline.js");
}
