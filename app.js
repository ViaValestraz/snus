const DLSwicther = document.getElementById("DLSwitch")
const sliderRound = document.getElementById("sliderRoundDL")
const CheckedSwitch = document.getElementById("DLSwitch").checked = true
const UncheckedSwitch = document.getElementById("DLSwitch").checked = false
const bgImg = document.body
const d = window.getComputedStyle(sliderRound, "::before")
const a = d.getPropertyValue("border-radius")
console.log(a === "11px")

DLSwicther.addEventListener("click", updateButtonDL)

function updateButtonDL() {
  if (DLSwitch.checked === CheckedSwitch) {
    DLSwitch.value = "Тёмная тема"
    bgImg.style.backgroundImage = "url('pictures/mainbgDT.png')"
    bgImg.style.transition = ".4s"
  } else {
    DLSwitch.value = "Светлая тема"
    bgImg.style.backgroundImage = "url('pictures/mainbgLT.png')"
    bgImg.style.transition = ".4s"
  }
}

const NYSwitcher = document.getElementById("NYSwitch")

NYSwitcher.addEventListener("click", updateButtonNY)

  function updateButtonNY() {

  }