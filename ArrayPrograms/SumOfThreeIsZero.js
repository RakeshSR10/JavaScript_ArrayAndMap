//UC1 - Find sum of three numbers is equal to zero from array
let arrayNumbers = [1,2,4,-3,-1,5,6];

for(let i=0; i<arrayNumbers.length-2; i++){
    for(let j=i+1; j<arrayNumbers.length-1; j++){
        for(let k=j+1; k<arrayNumbers.length; k++){
            if(arrayNumbers[i] + arrayNumbers[j] + arrayNumbers[k] === 0){
                console.log("Numbers  = "+arrayNumbers[i] +","+arrayNumbers[j]+","+ arrayNumbers[k]);
            }
        }
    }
}