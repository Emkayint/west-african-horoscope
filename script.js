

function validate(){
    let DD = document.getElementById('dates').value;
    let MM = document.getElementById('months').value;
    let year = document.getElementById("years").value;
    let myday = DD.toString();
    let mymonth = DD.toString();
    let myyear = year.toString();
    let gender = "female";

    let MM2 = [11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let monthsDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(DD > monthsDays[MM-1] || DD < 1 || myday.length > 2){
        console.log(`${DD} ${MM} ${year}`);
    } else if (MM > 12 || MM < 1 || mymonth.length > 2){
        console.log("error");
    } else if (year < 1000 || myyear.length > 4){
        console.log("error wrong ");
    } else {
        calculate(year, MM, DD, gender)
    }
    
}

function calculate(year, MM, DD, gender){
    let t = [ 0, 3, 2, 5, 0, 3, 5,  1, 4, 6, 2, 4];
    year -= (MM < 3) ? 1 : 0;
    let d = Math.round((year + year/4 - year/100 + year/400 + t[MM -1] + DD) % 7);
    displayInfo(d, gender)
}

function displayInfo(data, gender, year, MM, DD){
    male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", 'Kofi', "Kwame"];
    female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    dayOfWeek = ['Sunday', ]

    if( gender === "male"){
        console.log(`${male[data]}`)
    } else if (gender === "female"){
        console.log(`${female[data]}`)
    } else {
        console.log("error")
    }
    reset();
}

function reset(){
    document.getElementById("years").value = "";
    document.getElementById("months").value = '';
    document.getElementById("dates").value = '';
}
