let day = 1;
let month = 12;
let year = 1767;

let monthsDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

console.log(monthsDays[month-1])
function validate(){
    let myday = day.toString();
    let mymonth = day.toString();
    let myyear = year.toString();

    if(day > monthsDays[month-1] || day < 1){
        console.log("error")
    }
    
}
validate()