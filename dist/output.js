function playaudio() {
  return {
    currentlyPlaying: false,
    //play and stop the audio
    playAndStop() {
      if (this.currentlyPlaying) {
        this.$refs.audio.pause();
        this.$refs.audio.currentTime = 0;
        this.currentlyPlaying = false;
      } else {
        this.$refs.audio.play();
        this.currentlyPlaying = true;
      }
    },
  };
}

// https://developer.chrome.com/blog/play-request-was-interrupted/

// Show loading animation. playPromise = audio.play();

// function playaudio() {
//    var playPromise = audio.play();
//   return {
//     //play and stop the audio
//     playAndStop() {
//     if (playPromise !== undefined) {
//     playPromise
//     .then((_) => {
//       // Automatic playback started!
//       // Show playing UI.
//       this.$refs.audio.pause();
//       this.$refs.audio.currentTime = 0;
//       this.currentlyPlaying = false;
//     })
//     .catch((error) => {
//       // Auto-play was prevented
//       // Show paused UI.
//       this.$refs.audio.play();
//       this.currentlyPlaying = true;
//     });
//    }
// }
