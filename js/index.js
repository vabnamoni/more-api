function loadPosts(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => displayPosts(data))

}
/*
1.grt the container element where you want to add the new element 
2.create child element
3.set innerText or innerHTML
4.append child
*/
function displayPosts(posts){
    const postsContainer =document.getElementById('post-container');
    for (const post of posts){
        const postDiv =document.createElement('div');
        console.log(post);
        postDiv.innerHTML=
        `<h4>User-${post.userId} </h4>
        <h5>Post:${post.title}</h5>
        <p>Post ${post.body}</p>
        `;
        postContainer.appendChild(postDiv);

    }

}