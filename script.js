const newBlogPostForm = document.getElementById('newBlogPostForm');
const blogpostDiv = document.getElementById('blogposts');

newBlogPostForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const response = await fetch('/api/blogposts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            content
        })
    });

    const data = await response.json();

    if (response.ok) {
        const blogpostDiv = document.createElement('div');
        blogpostDiv.textContent = `Title: ${data.title}\nContent: ${data.content}`;
        blogpostsDiv.appendChild(blogpostDiv);
        newBlogPostForm.reset();
    } else {
        console.error(data.message);
    }
});

const fetchBlogPosts = async () => {
    const response = await fetch('/api/blogposts');
    const data = await response.json();
    
    if (response.ok) {
        blogpostsDiv.innerHTML = '';
        data.forEach((blogpost) => {
            const blogpostDiv = document.createElement('div');
            blogpostDiv.textContent = `Title: ${blogpost.title}\nContent: ${blogpost.content}`;
            blogpostsDiv.appendChild(blogpostDiv);
        });
    } else {
        console.error(data.message);
    }
};

fetchBlogPosts();