interface MediaPlayerImplemenation {
  playAudio(): void;
  playVideo(): void;
}

class WindowsMediaPlayer implements MediaPlayerImplemenation {
  public playAudio(): void {
    console.log("Playing audio on windows media player");
  }
  public playVideo(): void {
    console.log("Playing video on windows media player");
  }
}

class MacOsMediaPlayer implements MediaPlayerImplemenation {
  public playAudio(): void {
    console.log("Playing audio on MacOs media player");
  }
  public playVideo(): void {
    console.log("Playing video on MacOs media player");
  }
}

abstract class MediaPlayerAbstraction {
  constructor(protected mediaPlayerImplementation: MediaPlayerImplemenation) {}
  abstract playFile(): void;
}

class AudioPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.mediaPlayerImplementation.playAudio();
  }
}

class VideoPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.mediaPlayerImplementation.playVideo();
  }
}

//Client code
let windowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer());
windowsAudioPlayer.playFile();

let macOSVideoPlayer = new VideoPlayer(new MacOsMediaPlayer());
macOSVideoPlayer.playFile();
