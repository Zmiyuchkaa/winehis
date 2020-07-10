const onLoad = () => {
const prevButton = document.querySelector("#back");
const nextButton = document.querySelector("#forward");
const content = document.querySelector(".page-content__slider__text");
const currentElem = document.querySelector("#current");
const totalElem = document.querySelector("#total")


// window.addEventListener("scroll", function() {
//   document.getElementById("logo").innerHTML = <div><img src="images/short-logo.png"/></div>
// })

let state = {
  index: 0,
  values: [
    "Learn about the vast world of wine in a relaxed and fun atmosphere with other wine lovers and enthusiasts. Wine trails are suitable for those who are already in love with the world of wine and those who are just beginning to appreciate it.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    "Dignissim cras tincidunt lobortis feugiat vivamus. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Pellentesque id nibh tortor id aliquet. Fermentum posuere urna nec tincidunt praesent semper. Imperdiet proin fermentum leo vel orci porta non pulvinar."
  ]
}

function isNextButtonDisabled(state) {
  return state.index === state.values.length -1;
}

function isPrevButtonDisabled(state) {
  return state.index == 0;
}

prevButton.addEventListener("click", () => {
  state.index  -= 1;
  currentElem.innerText = "0" + (state.index +1);
  content.innerText = state.values[state.index]
  prevButton.disabled = isPrevButtonDisabled(state)
  nextButton.disabled = isNextButtonDisabled(state)
})

nextButton.addEventListener("click", () => {
  state.index  += 1;
  currentElem.innerText = "0" + (state.index +1);
  content.innerText = state.values[state.index]
  prevButton.disabled = isPrevButtonDisabled(state)
  nextButton.disabled = isNextButtonDisabled(state)
})

function InitJS() {
  content.innerText =  state.values[state.index];
  prevButton.disabled = isPrevButtonDisabled(state);
  nextButton.disabled = isNextButtonDisabled(state);
  currentElem.innerText = "0" + (state.index +1);
  totalElem.innerText = "0" + (state.values.length);
}

InitJS()
}

document.addEventListener("DOMContentLoaded",(ev) => onLoad());