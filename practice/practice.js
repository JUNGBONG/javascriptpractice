const numbersEach = (numbers,callback) => {
    let calcul
    for (const number of numbers){
        calcul = callback(number, calcul)
    }
    return calcul

}

const addEach = (number, sum=0) =>{
    return number + sum
}
console.log(numbersEach([[1,2,3],addEach]))