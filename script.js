
        
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
                if (homePercentage > 60 && homePercentage <= 70) {
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
                if (awayPercentage > 60 && awayPercentage <= 70) {
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

    
