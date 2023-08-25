let date =  new Date();

let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
let currentDay = date.getDate();

let userYear = document.getElementById('yearInput');
let userMonth = document.getElementById('monthInput');
let userDay = document.getElementById('dayInput');

let dayError = document.getElementById('day-error');
let monthError = document.getElementById('month-error');
let yearError = document.getElementById('year-error');

let dayTitle = document.getElementById('day-title');
let monthTitle = document.getElementById('month-title');
let yearTitle = document.getElementById('year-title');

let dayResult = document.getElementById('day-result');
let monthResult = document.getElementById('month-result');
let yearResult = document.getElementById('year-result');


yearError.style.color = " hsl(0, 100%, 67%)";
monthError.style.color = " hsl(0, 100%, 67%)";
dayError.style.color = " hsl(0, 100%, 67%)";

document.getElementById('submit').onclick = function(){
    dayTitle.style.color = " hsl(0, 100%, 67%)";
    monthTitle.style.color = " hsl(0, 100%, 67%)";
    yearTitle.style.color = " hsl(0, 100%, 67%)";

    if(userYear.value == "" || userMonth.value == "" || userDay.value == ""){

        if(userYear.value == ""){
            yearError.textContent = "This field is required";
        }else{
            yearError.textContent = "";
            yearTitle.style.color = "hsl(0, 1%, 44%)";
        }

        if(userMonth.value == ""){
            monthError.textContent = "This field is required";
        }else{
            monthError.textContent = "";
            monthTitle.style.color = "hsl(0, 1%, 44%)";
        }

        if(userDay.value == ""){
            dayError.textContent = "This field is required";
        }else{
            dayError.textContent = "";
            dayTitle.style.color = "hsl(0, 1%, 44%)";
        } 
    }
            
    if(userYear.value != "" && userMonth.value != "" && userDay.value != ""){
        yearError.textContent = "";
        monthError.textContent= "";
        dayError.textContent = "";

        dayTitle.style.color = "hsl(0, 1%, 44%)";
        monthTitle.style.color = "hsl(0, 1%, 44%)";
        yearTitle.style.color = "hsl(0, 1%, 44%)";

        if(userYear.value > currentYear){
            yearError.textContent = "Must be a valid year";
            yearTitle.style.color = " hsl(0, 100%, 67%)";

        }else if(userMonth.value > 12){
            monthError.textContent = `Must be a valid month`;
            monthTitle.style.color = " hsl(0, 100%, 67%)";

        }else if(userMonth.value > currentMonth && userYear.value == currentYear){
            monthError.textContent = `${currentYear} hasn't reached ${userMonth.value}`;
            monthTitle.style.color = " hsl(0, 100%, 67%)";

        }else if(userYear.value%4 == 0 && userMonth.value == 2 && userDay.value > 29){
            dayError.textContent = "Feburary doesn't have more than 29 days in a leap year";
            dayTitle.style.color = " hsl(0, 100%, 67%)";

        }else if(userYear.value%4 != 0 && userMonth.value == 2 && userDay.value > 28){
            dayError.textContent = "Feburary doesn't have more than 28 days in a non-leap year";
            dayTitle.style.color = " hsl(0, 100%, 67%)";
            
        }else if(userMonth.value%2 == 0 && userMonth.value != 2 && userDay.value > 30){
            dayError.textContent = "Even Month only have 30 days";
            dayTitle.style.color = " hsl(0, 100%, 67%)";

        }else if(userMonth.value%2 != 0 && userDay.value > 31){
            dayError.textContent = "Odd Month only have 31 days";
            dayTitle.style.color = " hsl(0, 100%, 67%)";

        }else{
            yearResult.textContent = birthYear(currentYear,userYear.value,currentMonth,userMonth.value);
            monthResult.textContent = birthMonth(currentMonth,userMonth.value,currentDay,userDay.value);
            dayResult.textContent = birthDate(currentDay,userDay.value,userYear.value,userMonth.value);
        }
    }

}
        
function birthYear(currentYear,userYear,currentMonth,userMonth){
    userYear = Number(userYear);
    let age = currentYear - userYear;
    if(currentMonth < userMonth){
        age -= 1;
    }
    return age;
}

function birthMonth(currentMonth,userMonth,currentDay,userDay){
    let totalMonth  = 12;
    userMonth = Number(userMonth);
    if(currentMonth > userMonth){
        var month = currentMonth - userMonth;
    }else{
        var fullYear = currentMonth + totalMonth;
        var month = fullYear - userMonth;
    }  

    if(currentDay < userDay){
        month -= 1;
    }
    return month;
}

function birthDate(currentDay,userDay,userYear,userMonth){
    userDay = Number(userDay);
    if(currentDay < userDay){
        if(userMonth == 2){
            if(userYear%4 == 0){
                currentDay += 29;
            }else{
                currentDay += 28;
            }
        }else if(userMonth != 2 && userMonth%2 == 0){
            currentDay += 30;
        }else if(userMonth%2 != 0){
            currentDay += 31;
        }
            return currentDay - userDay;
    }else{
        return currentDay - userDay;
    }
}