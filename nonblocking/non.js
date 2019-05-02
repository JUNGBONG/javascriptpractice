// function makeOrder(){}


const makeOrder = function(order){
    let coffee

    setTimeout(function(){
        coffee = order
    },3000)

    return coffee
}
const coffee = makeOrder("Americano")

console.log(coffee)
