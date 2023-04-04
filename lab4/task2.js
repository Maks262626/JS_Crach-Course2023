//count spaces
let str = prompt("Enter string: ");
spaceCount = str.split(" ").length - 1;
console.log(spaceCount);
//function that converts the first character of a string to uppercase.
function f(str){
    return str[0].toUpperCase();
}

console.log(f("aboba"))
//number of words user entered
let wordsCount = str.split(" ").length;
console.log("words: " + wordsCount);
//abbreviation.
let abbreviation = ''
let arrOfwords = str.split(" ");
for (let i = 0; i < arrOfwords.length; i++) {
    abbreviation += f(arrOfwords[i]);
    
}
console.log(abbreviation);

//check if str is palindrome
console.log(str == str.split("").reverse().join("") ? `${str} is palindrom` : `${str} is not a palindrom`); 
let url = "https://career.softserveinc.com/uk-ua/technology/course";
let splitUrl = url.split("/");
let protocol = splitUrl[0];
let domain = splitUrl[2];
let path = splitUrl.slice(3).join("/");
console.log("protocol: " + protocol.slice(0,protocol.length-1));
console.log("domain: " + domain);
console.log("path: " + path);
