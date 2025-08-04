let display = document.getElementById("display");
let ans = "";
let buttonSound = document.getElementById("buttonSound");
let answerSound = document.getElementById("answerSound");

function playButtonSound() {
  if (navigator.vibrate) navigator.vibrate(30);
  buttonSound.currentTime = 0;
  buttonSound.play();
}

function playAnswerSound() {
  if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
  answerSound.currentTime = 0;
  answerSound.play();
}

function append(val) {
  playButtonSound();
  const last = display.value.slice(-1);
  if (
    val === '(' && /[0-9eπ)]$/.test(last) ||
    /^[a-z]/i.test(val) && /[0-9eπ)]$/.test(last)
  ) {
    display.value += '*' + val;
  } else {
    display.value += val;
  }
}

function appendFunction(funcName) {
  append(funcName + '(');
}

function clearDisplay() {
  playButtonSound();
  display.value = "";
}

function delChar() {
  playButtonSound();
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    math.config({ number: 'number', angle: 'deg' });
    let result = math.evaluate(display.value);
    display.value = result;
    ans = result;
    playAnswerSound();
  } catch {
    alert("Invalid Expression");
  }
}

function useAns() {
  append(ans.toString());
}
