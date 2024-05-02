import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  el.playButton.toggleAttribute("hidden");
  el.stopButton.toggleAttribute("hidden");

  timer.countDown();
}

export function stop() {
  reset();
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function reset() {
  state.isRunning = document.documentElement.classList.remove("running");
  el.playButton.toggleAttribute("hidden");
  el.stopButton.toggleAttribute("hidden");
  timer.updateDisplay();
}

export function plusFiveSeconds() {
  console.log("plusFiveSeconds function called");
}

export function minusFiveSeconds() {
  console.log("minusFiveSeconds function called");
}

export function playTreeSound() {
  if (state.isMuted) {
    el.treeIcon.classList.toggle("sound-on");
    sounds.treeAudio.play();
    state.isMuted = false;
  } else {
    el.treeIcon.classList.toggle("sound-on");
    sounds.treeAudio.pause();
    state.isMuted = true;
  }
}

export function playRainSound() {
  if (state.isMuted) {
    el.rainIcon.classList.toggle("sound-on");
    sounds.rainAudio.play();
    state.isMuted = false;
  } else {
    sounds.rainAudio.pause();
    el.rainIcon.classList.toggle("sound-on");
    state.isMuted = true;
  }
}

export function playCoffeShopSound() {
  if (state.isMuted) {
    el.coffeeShopIcon.classList.toggle("sound-on");
    sounds.coffeeShopAudio.play();
    state.isMuted = false;
  } else {
    el.coffeeShopIcon.classList.toggle("sound-on");
    sounds.coffeeShopAudio.pause();
    state.isMuted = true;
  }
}

export function playFireSound() {
  if (state.isMuted) {
    el.fireIcon.classList.toggle("sound-on");
    sounds.fireAudio.play();
    state.isMuted = false;
  } else {
    el.fireIcon.classList.toggle("sound-on");
    sounds.fireAudio.pause();
    state.isMuted = true;
  }
}
