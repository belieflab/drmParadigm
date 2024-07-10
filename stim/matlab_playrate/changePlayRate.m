function [] = changePlayRate(rateIncreaseFactor, directoryPath)
    % directoryParh = "../audio_instructions/"; OR "../audio_stimuli/"

    % Step 0: Get a list of all files in the directory
    filePattern = fullfile(directoryPath, '*'); % Adjust the pattern to match the files you want, e.g., '*.wav' for audio files
    fileList = dir(filePattern);

    % loop cycle for all stimuli
    for i = 3:length(fileList)
        % Step 1: Read the audio file
        fullFileName = fullfile(fileList(i).folder, fileList(i).name);
        [y, Fs] = audioread(fullFileName); % Read the audio file
              
        % Step 2: Increase the playback rate
        % rateIncreaseFactor = 1.5; % For example, increase playback speed by 50%
        newFs = Fs * rateIncreaseFactor;
        
        % Step 3: Play the modified audio
        sound(y, newFs); % Play the audio at the new sample rate
        
        % Use fileparts to split the full file path
        [filePath, fileName, fileExtension] = fileparts(fullFileName);

        % If you want to save the modified audio:
        audiowrite(strcat(fileName,'_x',num2str(rateIncreaseFactor),'.wav'), y, newFs); % Save the modified audio file
    end
end