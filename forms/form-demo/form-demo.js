// Controls
const sliderControl = document.querySelector('#slider');
const selectControl = document.querySelector('select');

// Other Selectors
let sliderValueText = document.querySelector('#slider-value-text');

const markAsJavaScript = function(element) {
    element.style.backgroundColor = "forestGreen";
    element.style.color = "lightGrey";
    element.style.paddingTop = "4px";
    element.style.paddingLeft = "4px";
    element.style.paddingRight = "4px";
    element.style.border = "1px solid darkGrey";
}

markAsJavaScript(sliderValueText);

sliderControl.addEventListener('input', (event) => {
    sliderValueText.textContent = event.target.value;
});

selectControl.addEventListener('change', (event) => {
    if (event.target.value === "dog") {
        event.target.style.backgroundColor = "lightGreen";
    } else {
        event.target.style.backgroundColor = "red";
    }
    
});
