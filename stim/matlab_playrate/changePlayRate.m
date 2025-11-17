% changePlayRate(rateIncreaseFactor, nSemiTones, directoryPath), 
% Receives 3 arguments: 
%   1. rateIncreaseFactor: audio speed rate increase (e.g., 2), 
%   2. nSemiTones: how many semitones will the audio be shifted (e.g., -14)
%   3. directoryPath: where are the audios you want to transform located
%   (e.g., "../audio_stimuli/")
function [] = changePlayRate(rateIncreaseFactor, nSemiTones, directoryPath)
    % directoryParh = "../audio_instructions/"; OR "../audio_stimuli/"

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


        % Step 1: Read the audio file
        [y, Fs] = audioread(fullFileName); % Read the audio file
            
        % Step 2: Increase the playback rate
        % rateIncreaseFactor = 1.5; % For example, increase playback speed by 50%
        newFs = round(Fs * rateIncreaseFactor);

        % shift pitch
        y = shiftPitch(y,nSemiTones);
             
        % If you want to save the modified audio:
        % audiowrite(strcat(fileName,'_x',num2str(rateIncreaseFactor),'_t',num2str(nSemiTones),'.wav'), y, newFs); % Save the modified audio file
        audiowrite(strcat(fileName,'.mp3'), y, newFs);

        % Step 3: Play the modified audio
        sound(y, newFs); % Play the audio at the new sample rate
    end
end

% old function before the pitch shift
% function [] = changePlayRate(rateIncreaseFactor, directoryPath)
%     % directoryParh = "../audio_instructions/"; OR "../audio_stimuli/"
% 
%     % Step 0: Get a list of all files in the directory
%     filePattern = fullfile(directoryPath, '*'); % Adjust the pattern to match the files you want, e.g., '*.wav' for audio files
%     fileList = dir(filePattern);
% 
%     % loop cycle for all stimuli
%     for i = 3:length(fileList)
%         % Step 1: Read the audio file
%         fullFileName = fullfile(fileList(i).folder, fileList(i).name);
%         [y, Fs] = audioread(fullFileName); % Read the audio file
% 
%         % Step 2: Increase the playback rate
%         % rateIncreaseFactor = 1.5; % For example, increase playback speed by 50%
%         newFs = round(Fs * rateIncreaseFactor);
% 
%         % Use fileparts to split the full file path
%         [filePath, fileName, fileExtension] = fileparts(fullFileName);
% 
%         % If you want to save the modified audio:
%         audiowrite(strcat(fileName,'_x',num2str(rateIncreaseFactor),'.wav'), y, newFs); % Save the modified audio file
% 
%         % Step 3: Play the modified audio
%         sound(y, newFs); % Play the audio at the new sample rate
%     end
% end