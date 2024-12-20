/* Posts Page JavaScript */

"use strict";

// Load posts
async function loadPosts() {
  const loginData = getLoginData();

  const response = await fetch(`${apiBaseURL}/api/posts`, {
    headers: { Authorization: `Bearer ${loginData.token}` },
  });
  const posts = await response.json();
  console.log(posts);
  const container = document.getElementById("postsContainer");
  container.innerHTML = posts
    .map(
      (post) => `
        <div>
            <p><strong>${post.username}</strong>: ${post.text}</p>
            <small>${new Date(post.createdAt).toLocaleString()}</small>
        </div>`
    )
    .join("");
}

if (window.location.pathname.includes("posts.html")) {
  loadPosts();
}

// Create post handler
document.getElementById("postForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const content = e.target.postContent.value;

  await fetch(`${apiBaseUrl}/posts`, {
    method: "POST",
    headers: { "": "Content-Type", "application/json": Authorization`Bearer ${loginData.token}` },
    body: JSON.stringify({ content }),
  });

  window.location.href = "posts.html";
});

// Logout handler
document.getElementById("logoutButton")?.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "index.html";
});

// Call the function to render posts
renderPosts();

function addPost(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Get the post content
  const postContent = document.getElementById("tweetInput").value;

  // Check if the input is empty (optional validation)
  if (!postContent.trim()) {
    alert("Post content cannot be empty!");
    return;
  }
}
