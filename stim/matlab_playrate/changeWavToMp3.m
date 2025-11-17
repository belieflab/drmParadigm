function [] = changeWavToMp3(directoryPath)
    % directoryParh = "../audio_practice/"; OR "../audio_stimuli/"

    % Define a target sample rate that is supported (e.g., 48000 Hz)
    % Sample rate for MP3 format must be one of 48000 Hz, 44100 Hz, 32000 Hz, 
    % 24000 Hz, 22050 Hz, 16000 Hz, 12000 Hz, 11025 Hz, or 8000 Hz
    targetFs = 48000;

    % Step 0: Get a list of all files in the directory
    filePattern = fullfile(directoryPath, '*'); % Adjust the pattern to match the files you want, e.g., '*.wav' for audio files
    fileList = dir(filePattern);

    % loop cycle for all stimuli (elements 434 and 569: short-white-noise.mp3 and 
    % white-noise.mp3) does not work.
    % always start with 3 (the first two elements are non valid)
    for i = 3:length(fileList)
        
        % file name
        fullFileName = fullfile(fileList(i).folder, fileList(i).name);
        % Use fileparts to split the full file path
        [filePath, fileName, fileExtension] = fileparts(fullFileName);

        % Read the WAV file
        % info = audioinfo('../audio_stimuli/above.wav');
        % disp(['Sample Rate: ', num2str(info.SampleRate), ' Hz']);

        % Step 1: Read the audio file
        [y, originalFs] = audioread(fullFileName); % Read the audio file
            
        % Step 2: Resample the audio to the target sample rate
        y_resampled = resample(y, targetFs, originalFs);

        % Step 3: Write the resampled audio to an MP3 file
        audiowrite(strcat(fileName,'.mp3'), y_resampled, targetFs);

        % Step 4: Play the modified audio
        sound(y_resampled, targetFs); % Play the audio at the new sample rate
    end
end

     
    
