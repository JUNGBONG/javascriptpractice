const makeOrder = function(order,serve){
    let coffee

    setTimeout(function(){
        coffee = order
        serve(coffee)
    },3000);

    return coffee
}

const coffe = makeOrder("Americano",console.log)