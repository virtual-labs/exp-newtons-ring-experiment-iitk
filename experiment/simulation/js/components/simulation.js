class Simulation {
    constructor() {
        this.testType = 'indentation';
        this.force = 50;
        this.speed = 30;
        this.depth = 40;
        this.isSimulating = false;
        this.initialize();
    }

    initialize() {
        const simulation = document.getElementById('simulation');
        simulation.innerHTML = this.template();
        this.attachEventListeners();
    }

    template() {
        return `
            <div class="container">
                <h2 class="section-title">Interactive Simulation</h2>
                <p class="section-description">Experience our testing capabilities virtually</p>
                
                <div class="simulation-grid">
                    <div class="simulation-controls">
                        <div class="test-type-buttons" style="opacity:0">
                            <button class="btnbtn-primary' : 'btn-secondary'}"
                                    data-test="indentation">
                                Scratch Test
                            </button>
                            
                        </div>
                        
                       
                        <div class="simulation-buttons">
                        <img id="lightImage" src="light.png" alt="Light On" style="display: none; position: absolute; top: 50px; left: 50px;">

                            <button class="btn btn-primary" id="lightOn">
                            </button>   
                            <div class="slide-container"> Microscope Position
    <input type="range" id="slider" min="0" max="100" value="0">
</div>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown Table Redirect</title>
</head>
<body>
    <div class="slider-container" style="text-align: center;">
        <label for="sizeSelect">Radius of Curvature:</label><br>
        <select id="sizeSelect">
            <option value="../simulation/js/components/Table2.html">100cm</option>
            <option value="../simulation/js/components/Table3.html">110cm</option>
            <option value="../simulation/js/components/Table4.html">115cm</option>
            <option value="../simulation/js/components/Table5.html">120cm</option>
            <option value="../simulation/js/components/Table6.html">125cm</option>
        </select>
    </div>

    <div class="slider-container" style="text-align: center; margin-top: 10px;">
        <button onclick="redirectToTable()">Calculate</button>
    </div>

    <script>
        function redirectToTable() {
            var selectedFile = document.getElementById("sizeSelect").value;
            window.location.href = selectedFile;
        }
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Procedure</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
            background-color: #f4f4f4;
        }

        .procedure-button {
            background-color: #007bff;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            text-decoration: none;
            display: inline-block;
        }

        .procedure-button:hover {
            background-color: #0056b3;
        }

        /* Modal Styling */
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            overflow: auto;
        }

        .modal-content {
            background-color: white;
            margin: 5% auto;
            padding: 30px;
            border: 1px solid #888;
            width: 80%; /* Increased width */
            max-width: 900px; /* Ensuring a maximum size */
            border-radius: 12px;
            box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
            text-align: left;
            font-size: 18px;
            line-height: 1.6;
        }

        .close {
            float: right;
            font-size: 26px;
            font-weight: bold;
            text-decoration: none;
            color: black;
        }

        .close:hover {
            color: red;
        }

        /* Show modal when linked */
        #procedure:target {
            display: block;
        }
    </style>
</head>
<body>

    <!-- Button to open procedure -->
    <a href="#procedure" class="procedure-button">Show Procedure</a>

    <!-- Modal Dialog -->
    <div id="procedure" class="modal">
        <div class="modal-content">
            <a href="#" class="close">&times;</a>
            <h2>Newton's Rings Experiment Procedure</h2>
            <p>Follow these steps to determine the wavelength of sodium light:</p>
            <ol>
                <li>Select any radius to perform the calculation.</li>
                <li>Click on both ends of the rings to measure their diameter, and observe the values as they appear in the table.</li>
                <li>Measure the diameter up to the nth ring.</li>
                <li>Calculate the wavelength using the formula:<br>
                    <strong>λ = (D²<sub>n+m</sub> - D²<sub>n</sub>) / 4mR</strong>
                </li>
                <li>Click the Calculate button to determine the wavelength.</li>
            </ol>
            <p><strong>Note:</strong> The experiment should be performed in a carefully controlled environment to minimize any external disturbances and to obtain accurate results.</p>
        </div>
    </div>

</body>
</html>

  
  
  <div class="display-value" id="display-value"></div>

                            
                            
                        </div>
                    </div>
                    
                    <div class="simulation-preview">
                        <div class="simulation-canvas">

                 


<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1366 768">
  <!-- Generator: Adobe Illustrator 29.1.0, SVG Export Plug-In . SVG Version: 2.1.0 Build 142)  -->
  <defs>
    <style>
      .st0 {
        fill: url(#linear-gradient);
      }
    </style>
    <linearGradient id="linear-gradient" x1="580.8" y1="497.1" x2="663.2" y2="497.1" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#000"/>
    </linearGradient>
  </defs>
  <g id="Layer_1">
    <image width="541" height="212" transform="translate(305 486)" xlink:href="newton ring-1.png"/>
  </g>
  <g id="Layer_1_copy_4">
    <image width="512" height="93" transform="translate(340.5 565.6) scale(.9)" xlink:href="newton ring-2.png"/>
  </g>
  <g id="Layer_1_copy_6">
    <image width="512" height="105" transform="translate(399.5 485) scale(.7)" xlink:href="newton ring-3.png"/>
    <image id="stand5" width="512" height="78" transform="translate(363.2 241.3) scale(.4)" xlink:href="newton ring-4.png"/>
  </g>
    <g id="Layer_1_copy_5">
    <g>
      <image id="boxShadow" width="512" height="353" transform="translate(540.3 452) scale(.3)" xlink:href="newton ring-10.png"/>
      <g>
        <path d="M663.2,495.9c.8,21.3-17.7,39.2-41.2,39.2s-42-17.9-41.2-39.2c.8-20.5,19.2-36.6,41.2-36.6s40.5,16.1,41.2,36.6Z"/>
        <path class="st0" d="M622,460.2c10.4,0,20.4,3.7,27.9,10.4,7.6,6.7,11.9,15.7,12.3,25.3.3,9.5-3.2,18.6-10.1,25.7-7.6,7.9-18.6,12.4-30.1,12.4s-22.5-4.5-30.1-12.4c-6.8-7.1-10.4-16.2-10.1-25.7.4-9.6,4.7-18.6,12.3-25.3,7.6-6.7,17.5-10.4,27.9-10.4M622,459.2c-22,0-40.5,16.1-41.2,36.6-.8,21.3,17.6,39.2,41.2,39.2s42-17.9,41.2-39.2c-.7-20.5-19.2-36.6-41.2-36.6h0Z"/>
      </g>
    </g>
  <g id="Layer_1_copy_9">
    <image width="512" height="40" transform="translate(389.7 591.5) scale(.7)" xlink:href="newton ring-5.png"/>
    <image  id="stand4" width="512" height="372" transform="translate(387.5 535.4) scale(.3)" xlink:href="newton ring-6.png"/>
    <image id="stand3" width="512" height="318" transform="translate(421.4 538.5) scale(.2)" xlink:href="newton ring-7.png"/>
    <image id="stand" width="115" height="520" transform="translate(425.3 210.3) scale(.7)" xlink:href="newton ring-8.png"/>
    <image id="stand2" width="488" height="512" transform="translate(410.1 125.7) scale(.2)" xlink:href="newton ring-9.png"/>
  </g>

    <g>
      <image id="stand7" width="175" height="512" transform="translate(582.1 35.4) scale(.3)" xlink:href="newton ring-11.png"/>
      <image width="512" height="211" transform="translate(587.2 29.4) scale(0)" xlink:href="newton ring-12.png"/>
    </g>
    <imageid="stand8"  width="450" height="215" transform="translate(565.4 393.7) scale(.2)" xlink:href="newton ring-13.png"/>
    <image id="stand6"  width="155" height="512" transform="translate(562.0 104) scale(.6)" xlink:href="newton ring-14.png"/>
  </g>
</svg>
<div class="circle">
<svg><?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 612 792">
  <!-- Generator: Adobe Illustrator 29.1.0, SVG Export Plug-In . SVG Version: 2.1.0 Build 142)  -->
  <defs>
    <style>
    */{
   height:100px;
   }
      .st0 {
        stroke-width: 20px;
      }

      .st0, .st1 {
        fill: #fff;
        stroke: #231f20;
        stroke-miterlimit: 10;
        height:50000000px;
      }

      .st1 {
        stroke-width: 5px;
      }
    </style>
  </defs>
  <circle class="st1" cx="306.67" cy="269.33" r="85.02"/>
  <circle class="st1" cx="306.67" cy="269.33" r="67.73"/>
  <circle class="st1" cx="306.67" cy="269.33" r="47.97"/>
  <circle class="st1" cx="306.67" cy="269.33" r="29.13"/>
  <circle class="st0" cx="306" cy="269.33" r="7.01"/>
</svg></div>
                           

          <!-- Separate div for the button and dropdown menu -->
                        <div class="procedure-dropdown">
                            
                            <div id="procedureMenu" class="dropdown-content">
                                <span id="closeButton">&times;</span>
                                <p>Procedure of Micro Combi Texter:</p>
                                <ol>
                                    <p>Note: The material is already loaded on the stage.</p>
                                    <li>Step 1: Start : The stage Move from left to right For Calibration</li>
                                    <li>Step 2: Calibration : The stage Move from right to Left For Calibration.</li>
                                    <li>Step 3: Position : Set Postion under the Microscope.</li>
                                    <li>Step 4: Microscope : Moves the stage up under the Microsocpe.</li>
                                    <li>Step 5: Position 2 : Set Postion under Indenter.</li>
                                       <li>Step 6: Scratch : Moves the stage up under the Indenter For scratching.</li>
                                </ol>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
       
        <!-- Results Section -->
        <div id="resultsSection" class="results-section">
            <h3>Results</h3>
            <div class="slider-container">
                <button id="scrollLeft" class="arrow-button">&larr;</button>
                <div class="image-container">
                    <div class="slide">
                        <img src="2D optical profilo  image of micro scratch.jpeg" alt="Result 1">
                        <p class="image-title">2D optical profilo  image of micro scratch</p>
                    </div>
                    <div class="slide">
                        <img src="3D profilo image of micro scratch.jpeg" alt="Result 2">
                        <p class="image-title">3D profilo image of micro scratch</p>
                    </div>
                   <div class="slide">
                        <img src="3D profilo image of micro scratch.jpeg" alt="Result 2">
                        <p class="image-title">3D profilo image of micro scratch</p>
                    </div>
                    <div class="slide">
                        <img src="Scratch parameters.jpeg" alt="Result 4" stye="width 100px, height=100px">
                        <p class="image-title">Scratch parameters</p>
                    </div>
                </div>
                <button id="scrollRight" class="arrow-button">&rarr;</button>
            </div>
        </div>
        `;
    }


    
    attachEventListeners() {
        const testButtons = document.querySelectorAll('[data-test]');
        testButtons.forEach(button => {
            button.addEventListener('click', () => this.setTestType(button.dataset.test));
        });

        const sliders = document.querySelectorAll('.parameter-slider');
        sliders.forEach(slider => {
            slider.addEventListener('input', (e) => this.updateParameter(e.target));
        });

        document.getElementById('resetSimulation').addEventListener('click', () => this.resetSimulation());

        // Add event listeners for the Output button
        document.getElementById('result').addEventListener('click', () => this.showResults());

        // Add event listeners for the slider buttons
        document.getElementById('scrollLeft').addEventListener('click', () => this.changeSlide(-1));
        document.getElementById('scrollRight').addEventListener('click', () => this.changeSlide(1));
    }

    showResults() {
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.style.display = 'block'; // Show the results section
        
       
    
        // Example calculation logic
    
        // Update the results section with the calculated result
        const displayValueElement = document.getElementById('display-value');
        displayValueElement.innerHTML = `<p>Calculated Result: <strong>${result.toFixed(2)} Nm</strong></p>`;
    
        this.currentSlide = 0; // Reset to the first slide
        this.showSlide(this.currentSlide); // Show the first slide
    }
    
   

    showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`; // Move slides based on index
        });
    }

    changeSlide(direction) {
        const slides = document.querySelectorAll('.slide');
        this.currentSlide += direction; // Update current slide index
        if (this.currentSlide < 0) {
            this.currentSlide = slides.length - 1; // Loop to last slide
        } else if (this.currentSlide >= slides.length) {
            this.currentSlide = 0; // Loop to first slide
        }
        this.showSlide(this.currentSlide); // Show the updated slide
    }

    createParameterControl(label, name, value) {
        return `
            <div class="parameter-control">
                <label>${label}</label>
                <input type="range" min="0" max="100" value="${value}"
                       data-param="${name}" class="parameter-slider">
                <div class="parameter-value">${value}</div>
            </div>
        `;
    }


}



new Simulation();
function redirectToTable() {
    var selectedFile = document.getElementById("sizeSelect").value;
    window.location.href = selectedFile;
}

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the button and dropdown menu
    const procedureButton = document.getElementById("procedureButton");
    const procedureMenu = document.getElementById("procedureMenu");
    const closeButton = document.getElementById("closeButton");

    // Toggle the dropdown menu when the button is clicked
    procedureButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click from propagating to the document
        if (procedureMenu.style.display === "block") {
            procedureMenu.style.display = "none"; // Hide the menu if it's already visible
        } else {
            procedureMenu.style.display = "block"; // Show the menu if it's hidden
        }
    });
    

    // Close the dropdown menu when the close button is clicked
    closeButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click from propagating to the document
        procedureMenu.style.display = "none"; // Hide the menu
    });

    // Close the dropdown menu when clicking outside of it
    document.addEventListener("click", function(event) {
        if (procedureMenu.style.display === "block" && !procedureMenu.contains(event.target) && !procedureButton.contains(event.target)) {
            procedureMenu.style.display = "none"; // Hide the menu
        }
    });
});

document.getElementById('reloadButton').addEventListener('click', function() {
    location.reload(); // Reloads the current page
});








