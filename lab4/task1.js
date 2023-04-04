let arr = [];


//filling arr
for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 100 + 1));    
}
//Show arr
for (let i = 1; i <= arr.length; i++) {
    console.log(`[${i}] - ${arr[i-1]}`);
}
//sorting arr(decrising)

arr.sort((a,b)=>{return b-a});
console.log(arr);
//multiply of 7
let multipleOf7 = arr.find((i)=> i%7==0) ? true : false;
console.log(multipleOf7);
//delete first 3 el
for (let i = 0; i < 3; i++) {
    arr.shift();
}
console.log(arr);
//count even
evenNumbers = arr.filter(x => x%2==0);
console.log("Count of even numbers: " + evenNumbers.length);
//check duplicates
console.log(arr);
let hasDuplicate = false;
for (let i = 0; i < arr.length-1; i++) {
    if(arr[i] == arr[i+1]){
        hasDuplicate = true;
        break;
    }

}
console.log("Has duplicate: " + hasDuplicate);

//filling second half arr with 0
for(let i = Math.floor(arr.length/2);i < arr.length;i++){
    arr[i] = 0;
}
console.log(arr);