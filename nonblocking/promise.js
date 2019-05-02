// 오더를 받는다.

// 종업원이 약속을 한다.

// 1. 다 만들면 resolve 로 커피를 주고
// 2. 문제가 있으면 reject로 알려줄께
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


makeOrder()
.then((coffee)=>{console.log(coffee)})
.catch((error)=>{console.log(error)})