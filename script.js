let DD = 4;
let MM = 3;
let year = 2022;
let myday = DD.toString();
let mymonth = DD.toString();
let myyear = year.toString();
let CC = parseInt(myyear.slice(0, 2));
let YY = parseInt(myyear.slice(2, 4))
console.log(CC);
console.log(YY);

let MM2 = [11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let monthsDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

console.log(monthsDays[MM-1])
function validate(){
    if(DD > monthsDays[MM-1] || DD < 1 || myday.length > 2){
        console.log("error");
    } else if (MM > 12 || MM < 1){
        console.log("error");
    } else if (year < 1000 || myyear.length > 4){
        console.log("error wrong ");
    } else {
        calculate()
    }
    
}
validate()

function calculate(){
    let t = [ 0, 3, 2, 5, 0, 3, 5,  1, 4, 6, 2, 4];
    year -= (MM < 3) ? 1 : 0;
    let d = Math.round((year + year/4 - year/100 + year/400 + t[MM -1] + DD) % 7);
    displayInfo(d)
}

function displayInfo(data){
    console.log(data)
}