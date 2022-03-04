let DD = 30;
let MM = 1;
let year = 17672;
let myday = DD.toString();
let mymonth = DD.toString();
let myyear = year.toString();
let CC = parseInt(myyear.slice(0, 2));
let YY = parseInt(myyear.slice(2, 4))
console.log(CC);
console.log(YY);

let monthsDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

console.log(monthsDays[MM-1])
function validate(){
    if(DD > monthsDays[MM-1] || DD < 1 || myday.length > 2){
        console.log("error");
    } else if (MM > 12 || MM < 1){
        console.log("error");
    } else if (year < 1000 || myyear.length > 4){
        console.log("error wrong ");
    }
    
}
validate()

function calculate(){

}