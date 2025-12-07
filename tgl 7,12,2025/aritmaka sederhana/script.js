let angka1 = 1;
let angka2 = 2;

// hasil
let result = angka1 + angka2;
document.writeln("1 + 2 = " + result);
let originalResult = result;

document.writeln("<br>");

result = result - 1 ;
document.writeln("<p>"+ originalResult + " - 1 = " + result +"</p>");
originalResult = result;


result = result * 2 ;
document.writeln("<p>"+ originalResult + " × 2 = " + result +"</p>");
originalResult = result;


result **= 2 ;
document.writeln("<p>"+ originalResult + "² = " + result +"</p>");
originalResult = result;

result /= 2 ;
document.writeln("<p>"+ originalResult + " ÷ 2 = " + result +"</p>");
originalResult = result;

result %= 2 ;
document.writeln("<p>"+ originalResult + " Bagi 2 sisanya = " + result +"</p>");
originalResult = result;