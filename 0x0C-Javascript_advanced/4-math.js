const divideBy = (firstNumber) => {
    return (secondNumber) => {
        return ( secondNumber / firstNumber)
    }
}

const addBy = (firstNumber) => {
    return (secondNumber) => {
        return (firstNumber + secondNumber)
    }
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
