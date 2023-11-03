//drop-down for h2tags
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-form");
    const formContainer = document.getElementById("form-container");

    toggleButton.addEventListener("click", function () {
        if (formContainer.style.display === "none" || formContainer.style.display === "") {
            formContainer.style.display = "block";
        } else {
            formContainer.style.display = "none";
        }
    });

    // Rest of your JavaScript code here
});

     // bet properties function
        document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const HGInput = document.getElementById("HG");
    const HAInput = document.getElementById("HA");
    const sideSelect = document.getElementById("side");
    const gspResult = document.getElementById("gsp");
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");

    submitButton.addEventListener("click", function () {
        const homeGoals = parseFloat(HGInput.value);
        const awayGoals = parseFloat(HAInput.value);
        const totalGoals = homeGoals + awayGoals;

        const homePercentage = (homeGoals / totalGoals) * 100;
        const awayPercentage = (awayGoals / totalGoals) * 100;

        if (sideSelect.value === "home") {
            gspResult.textContent = homePercentage.toFixed(2) + "%";

            if (homePercentage > 50) {
                checkbox1.checked = true;
                if (homePercentage > 60) {
                    checkbox2.checked = true;
                } else {
                    checkbox2.checked = false;
                }
            } else {
                checkbox1.checked = false;
                checkbox2.checked = false;
            }
        } else if (sideSelect.value === "away") {
            gspResult.textContent = awayPercentage.toFixed(2) + "%";

            if (awayPercentage > 50) {
                checkbox1.checked = true;
                if (awayPercentage > 60) {
                    checkbox2.checked = true;
                } else {
                    checkbox2.checked = false;
                }
            } else {
                checkbox1.checked = false;
                checkbox2.checked = false;
            }
        }
    });
});

//stake

function displayMessage() {
      alert("Server not connected");
    }

      function displayMessage() {
  alert("Server not connected");
}

function generateDateOptions() {
  var dateSelect = document.getElementById("date");

  var today = new Date();
  for (var i = 0; i < 10; i++) {
    var option = document.createElement("option");
    option.value = today.toISOString().split('T')[0];
    option.text = today.toDateString();
    dateSelect.appendChild(option);

    today.setDate(today.getDate() + 1); // Move to the next day
  }
}

//dialogue

       function showDialog() {
            const dialog = document.getElementById("info-dialog");
            
            if (dialog.style.display === "none" || dialog.style.display === "") {
                dialog.style.display = "block";
            } else {
                dialog.style.display = "none";
            }
       }
generateDateOptions(); // Call the function to generate date options

    
// reset code
window.onload = function() {
    // Get the form element by its ID
    var form = document.getElementById('match-predictor'); // Replace 'yourFormId' with your actual form's ID

    // Check if the form element exists
    if (form) {
        // Reset the form to clear its input fields
        form.reset();
    }
}





                    
