function shout(string) {
  return string.toUpperCase();
}

const whisper = string => {
  return string.toLowerCase();
}

const logShout = string => {
  console.log(string.toUpperCase());
}

const logWhisper = string => {
  console.log(string.toLowerCase());
}

const sayHiToGrandma = string => {
  if (string === string.toLowerCase) {
    return true;
  }
}