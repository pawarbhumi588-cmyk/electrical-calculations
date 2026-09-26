// script.js

function calculate() {

    let voltage = parseFloat(document.getElementById("voltage").value);
    let current = parseFloat(document.getElementById("current").value);
    let resistance = parseFloat(document.getElementById("resistance").value);

    const voltageMissing = Number.isNaN(voltage);
    const currentMissing = Number.isNaN(current);
    const resistanceMissing = Number.isNaN(resistance);

    const missingCount =
        Number(voltageMissing) +
        Number(currentMissing) +
        Number(resistanceMissing);

    if (missingCount > 1) {
        alert("Please enter at least two values.");
        return;
    }

    if (
        (!voltageMissing && voltage < 0) ||
        (!currentMissing && current < 0) ||
        (!resistanceMissing && resistance < 0)
    ) {
        alert("Please enter positive values.");
        return;
    }

    // V = I × R
    if (voltageMissing) {
        voltage = current * resistance;
    }

    // I = V / R
    if (currentMissing) {

        if (resistance === 0) {
            alert("Resistance cannot be zero when calculating current.");
            return;
        }

        current = voltage / resistance;
    }

    // R = V / I
    if (resistanceMissing) {

        if (current === 0) {
            alert("Current cannot be zero when calculating resistance.");
            return;
        }

        resistance = voltage / current;
    }

    // P = V × I
    const power = voltage * current;

    document.getElementById("power").textContent =
        power.toFixed(2) + " W";

    document.getElementById("resultVoltage").textContent =
        voltage.toFixed(2) + " V";

    document.getElementById("resultCurrent").textContent =
        current.toFixed(2) + " A";

    document.getElementById("resultResistance").textContent =
        resistance.toFixed(2) + " Ω";
}


function resetCalculator() {

    document.getElementById("voltage").value = "";
    document.getElementById("current").value = "";
    document.getElementById("resistance").value = "";

    document.getElementById("power").textContent = "-- W";
    document.getElementById("resultVoltage").textContent = "-- V";
    document.getElementById("resultCurrent").textContent = "-- A";
    document.getElementById("resultResistance").textContent = "-- Ω";
}
