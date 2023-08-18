function shout(string) {
    return string;
  }
  "Hello!".toUpperCase(); // 'HELLO!'
  function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string;
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    const shout = string.toUpperCase();
    console.log(shout);
  }
  function logWhisper(string) {
    const whisper = string.toLowerCase();
    console.log(whisper);
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else {
        // Handle other cases
      }
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
      return "YES INDEED!";
    } else {
      // Handle other cases
    }
  }