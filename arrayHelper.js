// for문 연습
// const colors = ["red", "green", "yellow"]
// // for(color of colors){
// //     console.log(color)
// // }
// colors.forEach(function(color){
//     console.log(color)
// })


//     function handlePosts(){
//         const posts = [
//             {id:1 , title:"hihi"},
//             {id:13 , title:"hello"},
//             {id:17 , title:"123132"},
//         ]
//         for (let i=0; i < posts.length; i++){
//             console.log(posts[i].title)
//         }

//     posts.forEach(function(post,index,original){
//         console.log(post.title,index,original)
//     })
// }
// handlePosts()

// const numbers = [1,2,3]

// const double = numbers.map(function(number){
//     return number * 2
// })

// console.log(double)

// const images = [
//     {h:"30px",w:"30px"},
//     {h:"50px",w:"500px"},
//     {h:"100px",w:"1000px"},
// ]
// const hs = images.map(function(h){
//     return h.h
// })
// console.log(hs)

// const trips = [
//     {distance:30, time:10},
//     {distance:90, time:50},
//     {distance:59, time:25},
// ]

// const vc = trips.map(function(v){
//     return v.distance/v.time
// })
// console.log(vc)

const products = [
    {name : "phone", value : 100},
    {name : "notebook", value:200},
    {name : "desktop", value:300},
    {name: "mouse", value:1},
]

const twoH = products.filter(function(p){
    return p.value === 200
})
console.log(twoH)

const numbers = [10,20,30]

function reject(array,iterate){
    // 여기를 채워주세요
    return array.filter(function(item){
        return iterate(item)
    })
}

const lessThan15 = reject(numbers,function(number){
    return number < 15
})

console.log(lessThan15)

const heros = [
    {name: 'tony stark'},
    {name: 'thor'},
    {name: 'iron man'},
]
// 파인드는 맨처음 요소만 찾음
const tony = heros.find(function(hero){
    return hero.name == "tony stark"
})
console.log(tony)