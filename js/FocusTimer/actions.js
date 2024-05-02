import state from "./state.js"

export function toggleRunning() {
  const playButton = document.querySelector(".ph-play-circle")
  const stopButton = document.querySelector(".ph-stop-circle")

  state.isRunning = document.documentElement.classList.toggle("running")
  playButton.toggleAttribute("hidden")
  stopButton.toggleAttribute("hidden")
}

export function plusFiveSeconds() {
  console.log("plusFiveSeconds function called")
}

export function minusFiveSeconds() {
  console.log("minusFiveSeconds function called")
}
