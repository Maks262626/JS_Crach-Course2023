//Problem1
const birthYear = +(prompt("Enter your birth year"));
const currentYear = 2023; 
const age = currentYear - birthYear;
alert("Your age is about " + age);
//Problem2
const circleRadius = +(prompt("Enter radius of circle"));
const area = Math.PI * Math.pow(circleRadius,2);
alert("Area of circle with radius " + circleRadius + " is: " + area);
//Problem3
const distance = +(prompt("Enter distance (km)"));
const time = +(prompt("Enter time (hours)"));
const speed = distance/time;
alert(speed);
//Problem4
const USDtoEUR = 0.92;
const USD = prompt("Enter dollars: ");
const EUR = USD* USDtoEUR;
alert(USD + " dollars in euros: " + EUR);
//Problem5
const memmory820 = 820;
const memmory = +(prompt("Enter memmory of your flash drive"));
alert("Your flash drive can save " + Math.floor(memmory/memmory820) + " files of size 820MB");