//UC1 - Prime factorization program to store all the prime factors of the given number to Array and print output
function primeFactors(number) {
    function isPrime(number) {
        for(let i=2; i<=Math.sqrt(number); i++) {
            if(number % i == 0) return false;
        }
        return true;
    }

    const array = [];
    for(let i=2; i<=number; i++) {
        while(isPrime(i) && number%i === 0){
            if(!array.includes(i)) array.push(i);
            number /= i;
        }
    }
    return array;
}

console.log(primeFactors(153470));