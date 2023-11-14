// This function is used to calculate the age based on the date of birth provided
function calculateAge() {
    clearData();
    document.getElementsByClassName('loader-wrapper')[0].style.display = 'block';
    document.getElementsByClassName('second-div')[0].style.display = 'none';
    
    // Getting the date of birth from the input field
    var dob = new Date(document.getElementById('dob-selector').value);
    // Extracting the day, month and year from the date of birth
    var dobDate = dob.getDate();
    var dobMonth = 1 + dob.getMonth();
    var dobYear = dob.getFullYear();

    // Getting the current date
    var curentDate = new Date();
    var newDate = curentDate.getDate();
    var newMonth = 1 + curentDate.getMonth();
    var newYear = curentDate.getFullYear();

    // Array to hold the number of days in each month
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Checking if the date of birth is in the future
    if (dobYear > newYear || (dobYear === newYear && dobMonth > newMonth) || (dobYear === newYear && dobMonth === newMonth && dobDate > newDate)) {
        // Displaying an error message if the date of birth is in the future
        document.getElementsByClassName('alert-message')[0].style.display = 'block';
        setTimeout(function () {
            document.getElementsByClassName('loader-wrapper')[0].style.display = 'none';
            document.getElementsByClassName('second-div')[0].style.display = 'block';
        }, 1500);
        return;
    }

    // Adjusting the date and month if the date of birth is greater than the current date
    if (dobDate > newDate) {
        newDate = newDate + month[newMonth - 1];
        newMonth = newMonth - 1;
    }

    // Adjusting the month and year if the month of birth is greater than the current month
    if (dobMonth > newMonth) {
        newMonth = newMonth + 12;
        newYear = newYear - 1;
    }

    // Calculating the age in days, months and years
    var days = newDate - dobDate;
    var months = newMonth - dobMonth;
    var years = newYear - dobYear;

    // Displaying the calculated age
    document.getElementsByClassName('age-wrapper')[0].style.display = 'flex';
    document.getElementsByClassName('clear-button-wrapper')[0].style.display = 'block';
    document.getElementById('calculated-year').innerHTML = years;
    document.getElementById('calculated-month').innerHTML = months;
    document.getElementById('calculated-day').innerHTML = days;
    setTimeout(function () {
        document.getElementsByClassName('loader-wrapper')[0].style.display = 'none';
        document.getElementsByClassName('second-div')[0].style.display = 'block';
    }, 1500);
}

// This function is used to clear the data
function clearData(allData) {
    // Clearing all 
    if (allData) {
        document.getElementById('dob-selector').value = '';
        document.getElementById('dob-selector').setAttribute('data', 'YYYY-MM-DD');
    }

    // Clearing other components
    document.getElementsByClassName('age-wrapper')[0].style.display = 'none';
    document.getElementsByClassName('clear-button-wrapper')[0].style.display = 'none';
    document.getElementsByClassName('alert-message')[0].style.display = 'none';
    document.getElementById('calculated-year').innerHTML = '';
    document.getElementById('calculated-month').innerHTML = '';
    document.getElementById('calculated-day').innerHTML = '';
}

// This function is used to change the format of the date
function changeDateFormat(e) {
    document.getElementById('dob-selector').setAttribute('data', e.target.value);
}
