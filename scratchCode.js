function doWhileLoop() {
    while (!isNaN(button.innerHTML)) {  
        arrayOfStrings.push(button.innerHTML)
        if (isNaN(button.innerHTML)) {
            arrayOfStrings.forEach((item) => numberString += item);
            break;
        }
    }
    console.log(arrayOfStrings);
    console.log(numberString);
    console.log(Number(numberString));
    return Number(numberString);
}
doWhileLoop();