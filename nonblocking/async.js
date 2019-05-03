const makeOrder = (order) => new Promise((resolve,reject) => {
        let coffee;

        setTimeout(function() {
            if(order === undefined){
            // 문제 생김
                reject("주문 잘못하셨어요!!!")
            } else {
                coffee = order
                resolve(coffee)
            }
        }, 3000);
    })

const getCoffee = async (order) =>  {
    try{
        const coffee = await makeOrder(order)
        console.log(coffee)
    }catch(error){
        console.log(error)
    }
}

getCoffee("americano")

