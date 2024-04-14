function validateForm() {
    let grossIncome = document.getElementById("grossIncome").value.trim();
    let extraIncome = document.getElementById("extraIncome").value.trim();
    let deductions = document.getElementById("deductions").value.trim();
    let age = document.getElementById("age").value.trim();

    if (!isNumeric(grossIncome)) {
        showError("grossIncomeError", "Please enter a valid number ");
        return;
    }

    if (!isNumeric(extraIncome)) {
        showError("extraIncomeError", "Please enter a valid number");
        return;
    }

    if (!isNumeric(deductions)) {
        showError("deductionsError", "Please enter a valid number");
        return;
    }

    if (age === "") {
        showError("ageError", "Please select an age group.");
        return;
    }

    // Reset error messages
    hideError("grossIncomeError");
    hideError("extraIncomeError");
    hideError("deductionsError");
    hideError("ageError");

    // Calculate overall income
    let overallIncome = parseFloat(grossIncome) + parseFloat(extraIncome) - parseFloat(deductions);

    // Show result modal
    let message;
    if (overallIncome < 8) {
        message = " not taxed.";
    } else {
        message = `after tax deductions`;
    }

    document.getElementById("resultModalMessage").innerHTML = `<b>Your overall income will be</b><br>${overallIncome.toFixed(2)}.<br>${message}`;
    document.getElementById("resultModal").style.display = "block";
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function showError(id, message) {
    document.getElementById(id).innerText = message;
    document.getElementById(id).style.display = "block";
    document.getElementById(id + "Icon").style.display = "block";
}

function hideError(id) {
    document.getElementById(id).innerText = "";
    document.getElementById(id).style.display = "none";
}

function closeErrorModal() {
    document.getElementById("errorModal").style.display = "none";
}

function closeResultModal() {
    document.getElementById("resultModal").style.display = "none";
}

function closeResultModal() {
    document.getElementById("resultModal").style.display = "none";
    document.getElementById("taxForm").reset(); // Reset the form
}




function showIncomeInfo() {
    const incomeInfo = document.getElementById("incomeInfo");
    incomeInfo.style.display = "block";
}



