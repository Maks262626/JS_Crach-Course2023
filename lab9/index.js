function getPromise(message, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}
getPromise("Aboba", 2000)
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    });

function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        let product = 1;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number') {
                reject("Error! Incorrect array!");
            }
            product *= arr[i];
        }
        resolve(product);
    });
}
calcArrProduct([3,4,5]).then(res => console.log(res));
calcArrProduct([5,"user2",7,12]).then(res => console.log(res));