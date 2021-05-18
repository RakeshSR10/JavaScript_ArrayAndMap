//UC1 find 2nd small and 2nd big number from array without using sort() method
var arrayNumbers = [];

while(arrayNumbers.length < 10) {
    let numbers = Math.floor( Math.random() * 900 ) + 100;

    if(arrayNumbers.indexOf(arrayNumbers) === -1){
        arrayNumbers.push(numbers);
    }
}

console.log(arrayNumbers);

let size = arrayNumbers.length;

for(let i=0; i<size; i++) {
    for(let j=i+1; j<size; j++) {
        if(arrayNumbers[i] > arrayNumbers[j]) {
            let temp = arrayNumbers[i];
            arrayNumbers[i] = arrayNumbers[j];
            arrayNumbers[j] = temp;
        }
    }
}
console.log("Second Largest Number  = "+arrayNumbers[size-2]);

for(let i=0; i<size; i++) {
    for(let j=i+1; j<size; j++) {
        if(arrayNumbers[i] < arrayNumbers[j]) {
            let temp = arrayNumbers[i];
            arrayNumbers[i] = arrayNumbers[j];
            arrayNumbers[j] = temp;
        }
    }
}
console.log("Second Smallest Number  = "+arrayNumbers[size-2]);

//UC1 find 2nd small and 2nd big number from array with using sort() method
let sortMethod = arrayNumbers.sort();
console.log("Sorted Array = "+sortMethod);
console.log("Second largest number = "+sortMethod[size-2]);
console.log("Second Smallest number = "+sortMethod[size-9]);