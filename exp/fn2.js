function startExperiment() {
    jsPsych.init({
        timeline: timeline,
        // default_iti: delayList[0],
        show_progress_bar: true,
        auto_update_progress_bar: false,
        //  preload_images: [stimArrayForPrelikingPhase, stimArrayForAssociativeInverted, stimArrayForAssociativeTextile, longDelayForAssociative1500msPath, shortDelayForAssociative500msPath],
    });
}
