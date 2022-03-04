let day = 30;
let month = 1;
let year = 17672;

let monthsDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

console.log(monthsDays[month-1])
function validate(){
    let myday = day.toString();
    let mymonth = day.toString();
    let myyear = year.toString();

    if(day > monthsDays[month-1] || day < 1 || myday.length > 2){
        console.log("error");
    } else if (month > 12 || month < 1){
        console.log("error");
    } else if (year < 1000 || myyear.length > 4){
        console.log("error wrong ");
    }
    
}
validate()

// function calculate(){

// }