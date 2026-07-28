function iterativeFactorial(n){
    let factorial = 1
    for(let i = 1; i <= n; i++){
        factorial = factorial * i
    }
    return factorial
}

// factorial
function recursiveFactorial(n){
    if(n === 0){
        return 1
    }
    return n * recursiveFactorial(n - 1)
}

// double factorial
function recursiveDoubleFactorial(n){
    if(n === 0 || n === 1){
        return 1
    }
    return n * recursiveDoubleFactorial(n - 2)
}

console.log(iterativeFactorial(5))
console.log(recursiveFactorial(5))
console.log(recursiveDoubleFactorial(5))