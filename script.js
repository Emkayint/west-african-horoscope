function validate() {
    let DD = document.getElementById('dates').value;
    let MM = document.getElementById('months').value;
    let year = document.getElementById("years").value;
    let myday = DD.toString();
    let mymonth = DD.toString();
    let myyear = year.toString();
    let gender = document.getElementById('gender').value;
    let name = document.getElementById("name").value;

    let monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (DD > monthsDays[MM - 1] || DD < 1 || myday.length > 2) {
        alert('Choose The Correct Date');
        
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
        calculateDate(year, MM, DD, gender, name);
    }
    document.getElementById('full').style.display = "block";


}

function calculateDate(year, MM, DD, gender, name) {
    let day = new Date(`${MM} ${DD}, ${year}`);
    let d = day.getDay();
    displayInfo(d, gender, name, DD, MM, year);
}

function displayInfo(d, gender, name, MM, DD, year) {
    let males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", 'Kofi', "Kwame"];
    let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let dayOfWeek = ['Sunday', "Monday", "Tuesday", "Wednesday", 'Thursday', 'Friday', 'Suturday'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (gender === "male") {
        document.getElementById('fullName').innerHTML = `Welcome ${name}`;
        document.getElementById('birthday').innerHTML = `Birthday was on ${dayOfWeek[d]}, ${DD} ${months[MM-1]}, ${year}`;
        document.getElementsByClassName("akan").innerHTML = `${males[d]} is your Akan name`;
    } else if(gender === "female") {
        document.getElementsByClassName('fullName').innerHTML = `Welcome ${name}`;
        document.getElementById('birthday').innerHTML = `Birthday was on ${dayOfWeek[d]}, ${DD} ${months[MM-1]}, ${year}`;
        document.getElementsByClassName("akan").innerHTML = `${female[d]} is your Akan name`;

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
