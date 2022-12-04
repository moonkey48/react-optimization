function fetchUser(userId:string){
    let user:any = null;
    const suspender = fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then(response=>response.json())
    .then(data=>{
        setTimeout(()=>{
            user = data
        },3000)
    });

    return {
       read(){
            if(user === null){
                throw suspender;
            }else{
                console.log(user)
                return user;
            }
       } 
    }
}

function fetchPosts(userId:string){
    let posts:any = null;
    const suspender = fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    )
    .then(res=>res.json())
    .then(data=>{
        setTimeout(()=>{
            posts = data;
        },3000)
    })

    return {
        read(){
            if(posts === null){
                throw suspender;
            }else{
                return posts;
            }
        }
    }
}

function fetchData(userId:string){
    return {
        user:fetchUser(userId),
        posts:fetchPosts(userId)
    }
}
export default fetchData;