function variableNameUK(number1 , number2) {
    console.log("The number is : ");
    return number1 + number2; // This function returns the sum of number1 and number2

}

//console.log(variableNameUK(10, 20)); // This will log undefined because the function does not return anything



const myarrauy = [1, 3, 7, 4, 5];
//sort the array in ascending order
let newArray =myarrauy.sort((a,c) => {
    return a - c; // This will sort the array in ascending order
}

);
console.log(newArray); // This will log the sorted array