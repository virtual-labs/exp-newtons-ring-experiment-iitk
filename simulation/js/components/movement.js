const slider = document.getElementById('slider');
const standImage = document.getElementById('stand'); // Get the image with id="stand"
const standImage2 = document.getElementById('stand2');
const standImage3 = document.getElementById('stand3');
const standImage4 = document.getElementById('stand4');
const standImage5 = document.getElementById('stand5');
const standImage6 = document.getElementById('stand6');
const standImage7 = document.getElementById('stand7');
const standImage8 = document.getElementById('stand8');
const maxRange = 50; // Define the maximum range of movement in pixels

// Get the initial X and Y coordinates
const initialX = 425.3;
const initialY = 210.3;
const initialX2 = 410.1;
const initialY2 = 125.7;
const initialX3 = 421.4;
const initialY3 = 538.5;
const initialX4 = 387.5;
const initialY4 = 535.4;
const initialX5 = 363.2;
const initialY5 = 241.3;
const initialX6 = 562.0;
const initialY6 = 104;
const initialX7 = 582.1;
const initialY7 = 35.4;
const initialX8 = 565.4;
const initialY8 = 393.7;


document.getElementById('lightOn').addEventListener('click', function() {
    const boxShadow = document.getElementById('boxShadow');
    boxShadow.style.boxShadow = '0px 0px 10px 5px yellow'; // Add a yellow box shadow
});

slider.addEventListener('input', () => {
    const sliderValue = slider.value; // Get the current slider value (0 to 100)
    const translateX = (sliderValue / 100) * maxRange; // Calculate the X translation

    // Update the transform attribute to include the new X-coordinate
    standImage.setAttribute('transform', `translate(${initialX + translateX} ${initialY}) scale(.7)`);
    standImage2.setAttribute('transform', `translate(${initialX2 + translateX} ${initialY2}) scale(.2)`);
    standImage3.setAttribute('transform', `translate(${initialX3 + translateX} ${initialY3}) scale(.2)`);
    standImage4.setAttribute('transform', `translate(${initialX4 + translateX} ${initialY4}) scale(.3)`);
    standImage5.setAttribute('transform', `translate(${initialX5 + translateX} ${initialY5}) scale(.4)`);
    standImage6.setAttribute('transform', `translate(${initialX6 + translateX} ${initialY6}) scale(.6)`);
    standImage7.setAttribute('transform', `translate(${initialX7 + translateX} ${initialY7}) scale(.3)`);
    standImage8.setAttribute('transform', `translate(${initialX8 + translateX} ${initialY8}) scale(.2)`);


    // Alternatively, you can use the getAttribute and setAttribute methods
    // const currentTransform = standImage.getAttribute('transform');
    // standImage.setAttribute('transform', `translate(${initialX + translateX} ${initialY}) scale(.7)`);
});









function updateRadiusValue(value) {
    document.getElementById('radiusValue').innerText = value;
}

function updateMicroscopeValue(value) {
    document.getElementById('microscopeValue').innerText = value;
}

function displayValue() {
    const value = "5890 Å";
    document.getElementById('display-value').innerText = value;
}




