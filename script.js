function validate() {
    let DD = document.getElementById('dates').value;
    let MM = document.getElementById('months').value;
    let year = document.getElementById("years").value;
    let myday = DD.toString();
    let mymonth = DD.toString();
    let myyear = year.toString();
    let gender = document.getElementById('gender').value;
    let name = document.getElementById("name").value;

    let MM2 = [11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (DD > monthsDays[MM - 1] || DD < 1 || myday.length > 2) {
        alert('Error');
        
    } else if (MM > 12 || MM < 1 || mymonth.length > 2) {
        alert("Months Does Not Exist");
        
    } else if (year < 1000 || myyear.length > 4) {
        alert("The year you Enterd is incorrect ");
        
    } else if(gender === ''){
        alert("Please Choose Your Gender");
        
    } else if(MM === ""){
        alert("error");
        
    } else if(year === ""){
        alert("The year Field is not Field");
        
    } else if(DD === ""){
        alert("Please Insert Date");
        
    } else if(name === ""){
        alert("Please Enter Your Name");
        
    } else {
        calculate(year, MM, DD, gender);
    }

}

function calculate(year, MM, DD, gender) {
    let day = new Date(`${MM} ${DD}, ${year}`);
    let d = day.getDay();
    displayInfo(d, gender, day);
}

function displayInfo(d, gender, day) {
    let males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", 'Kofi', "Kwame"];
    let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let dayOfWeek = ['Sunday', "Monday", "Tuesday", "Wednesday", 'Thursday', 'Friday', 'Suturday']

    if (gender === "male") {
        alert(`You were born on ${dayOfWeek[d]} your Akan name is ${males[d]}`);
    } else if(gender === "female") {
        alert(`${female[d]}`);
    }
    reset();
}

function reset() {
    document.getElementById("years").value = "";
    document.getElementById("months").value = '';
    document.getElementById("dates").value = '';
    document.getElementById("name").value = '';
    document.getElementById('gender').value = '';

}
