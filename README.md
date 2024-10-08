# 🧠 Deese, Roediger, and McDermott (DRM) Task

Welcome to the DRM Task! This experiment explores false memory creation and confidence in recall, particularly in relation to associative memory processes.

## 📚 Task Overview

In the DRM task, participants are presented with lists of words that are semantically related to a critical target word. Interestingly, participants sometimes falsely recall seeing the critical target word, even though it was never presented. This phenomenon provides insights into memory processes and belief formation.

## 📊 Task Versions

### 🎧 Auditory

### 👁️ Visual 
* 🚧 UNDER CONSTRUCTION 🚧

## 🎯 Task Procedure

### Auditory Version
1. 🎧 Participants listen to a series of word lists through headphones.
2. ⏱️ Each word is presented with a 1.5-second interval.
3. 🎯 The target word is presented to the participant.
4. 🤔 Participants recall the presented word.
5. 📊 They rate their confidence in hearing the word by filling a confidence bar:
   * 📉 Press the 'F' key to indicate the target word _was_ _not_ on the list. 
   * 📈 Press the 'J' key to indicate the target word _was_ on the list. 
   * 🔢 Participants fill the confidence bar based on their certainty. _Confidence bar ranges from 0% to 100%_

⏳ Approximate runtime: 30 minutes.

⚠️ The task measures participants' recall accuracy and confidence levels for presented words.

### 🎯 Example

- Critical target (congruent prototype): _"mountain"_
- Presented words: _top, peak, range, glacier, bike, climb_
- When queried with "mountain", participants may report having seen it, despite it never being presented.

## 🚀 Getting Started

Clone the Repository:

```bash
git clone --recurse-submodules -j4 git@github.com:belieflab/drmParadigm.git && cd drmParadigm && git submodule foreach --recursive 'git checkout $(git config -f $toplevel/.gitmodules submodule.$name.branch || echo main)' && git update-index --assume-unchanged exp/conf.js
```

## 🔄 Staying Updated

When pulling changes, run:

```bash
./sync.sh
```

- This ensures all submodules are up-to-date.
- Pulling changes will not remove any data.

## 📊 Task Procedure

1. Participants are presented with lists of words semantically related to a critical target.
2. They are then asked to recall the words they've seen.
3. The task measures both correct recalls and false alarms (recalling words that weren't presented).
4. Participants rate their confidence in their recalls.

## ⚙️ Configuration

Modify `exp/conf.js` to adjust task parameters such as:
- version
- time durations for lists/words 

## 🛠 Development Guide

### Dependencies
- PHP version 8.x
- jsPsych version 7.x

### XAMPP Setup
1. Download XAMPP
2. Start XAMPP and services
3. Clone the repository into htdocs
4. Modify permissions as needed
5. Launch the experiment

🧠 Ready to explore the fascinating world of false memories and associative recall? Let's dive into the DRM task! 🎓💭
