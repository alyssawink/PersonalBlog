const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
function createAndRenderBlog() {
    const blog = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }
};
const blogs = blogs.push(blog);
localStorage.getItem(JSON.stringify(blog));

const blogs = JSON.parse(localStorage.getItem('blogs'));