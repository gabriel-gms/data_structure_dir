const array = [];
const SIZE = 10;

function stacking(value){
    if(array.length >= SIZE){
        console.log("Stack is full");
        return;
    }

    array.push(value);
}

function unstack(){
    if(array.length === 0){
        console.log("Stack is empty");
        return;
    }
    
    array.pop();
}

console.log(array);
stacking(4);
console.log(array);
stacking(3);
console.log(array);
unstack();
console.log(array);
stacking(8);
console.log(array);
unstack();
console.log(array);