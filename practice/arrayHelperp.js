// for문 연습
// const colors = ["red", "green", "yellow"]
//     for(color of colors){
//         console.log(color)
//     }


// for문 연습2
// colors.forEach(function(color){
//     console.log(color)
// })

function handlePosts(){
    const posts = [
        {id:1 , title:"hihi"},
        {id:13 , title:"hello"},
        {id:17 , title:"123132"},
    ]
    // for (let i=0; i < posts.length; i++){
    //     console.log(posts[i].title)
    // }

posts.forEach(function(post,index,original){
    // console.log(post.title,index,original)

posts.forEach(function(post,index,original){
    console.log(post.title,index,original)
})
})
}
handlePosts()
