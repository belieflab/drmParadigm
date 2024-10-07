switch (version) {
    case "audio":
        $.getScript("exp/timeline-audio.js");
        break;
    case "visual":
        $.getScript("exp/timeline-visual.js");
        break;
}