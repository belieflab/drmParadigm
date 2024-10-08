# 🧠 Deese, Roediger, and McDermott (DRM) Task

Welcome to the DRM Task! This experiment explores false memory creation and confidence in recall, particularly in relation to associative memory processes.

## 📚 Task Overview

In the DRM task, participants are presented with lists of words that are semantically related to a critical target word. Interestingly, participants sometimes falsely recall seeing the critical target word, even though it was never presented. This phenomenon provides insights into memory processes and belief formation.

There are 4 trial types:
1. **Congruent Prototype**
2. **Incongruent Prototype**
3. **Congruent Highest Associate**
4. **Incongruent Highest Associate**

Each trial type is presented **18 times** during the task.

## 📊 Task Versions

### 🎧 Auditory

### 👁️ Visual 
* 🚧 UNDER CONSTRUCTION 🚧

## 🎯 Task Procedure

### Auditory Version
1. 🎧 Participants listen to a series of word lists through headphones.
2. ⏱️ Each word is played one at a time with a second interval at a specific speed.
3. 🎯 After hearing the word list, a single "target word" is played to the participant.
4. 🤔 Participants decide if the target word was part of the word list.
5. 📊 They rate their confidence in hearing the word by filling a confidence bar using the keyboard:
   * 📉 By pressing the 'F' key, they can indicate that the target word _was_ _not_ on the list. 
   * 📈 By pressing the 'J' key, they can indicate that the target word _was_ on the list. 
   * 🔢 Participants fill the confidence bar based on their certainty (confidence bar ranges from 0% to 100%). 

⚠️ _The task measures participants' recall accuracy and confidence levels for presented words._

**⏳ Approximate runtime: 30 minutes.**

### Visual Version
* 🚧 UNDER CONSTRUCTION 🚧

### 🎯 Example

- Critical target (congruent prototype): _"mountain"_
- Presented words: _top, peak, range, glacier, bike, climb_
- When queried with "mountain", participants may report having seen it, despite it never being presented.

## 🚀 Getting Started

Clone the Repository:

```bash
git clone --recurse-submodules -j4 git@github.com:belieflab/drmParadigm.git && cd drmParadigm && git submodule foreach --recursive 'git checkout $(git config -f $toplevel/.gitmodules submodule.$name.branch || echo main)' && git update-index --assume-unchanged exp/conf.js
```

## ✅ Staying Updated

When pulling changes, run:

```bash
./sync.sh
```

> 🔄 This ensures all submodules are up-to-date.

> 👌 Pulling changes will not remove any data.

## ⚙️ Configuration

Modify `exp/conf.js` to adjust task parameters such as:
- 📊 Version
- ⏱️ Time durations for lists/words

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
