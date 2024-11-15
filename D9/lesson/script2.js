const fetchBtn = document.getElementById('fetch-btn')


// const fetchPosts = async () => { 
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         console.log(response)
        
//         if (!response.ok) {
//             throw new Error('Network response was not ok')
//         }

//         const data = await response.json() //response.json returns a promise that is why we use await
//         console.log(data)
//         // return data 
//     } catch (error) {
//         console.log(error)
//     }
    
// }

const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.status === 200) {
      const posts = await response.json();
      console.log(posts);
    } else {
      throw new Error('Failed to fetch posts');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

fetchBtn.addEventListener('click', () => {
    fetchPosts().then(data => console.log(data))
})