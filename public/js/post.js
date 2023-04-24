const editFormHandler = async (event) => {
  alert("edit button clicked");

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();

    if (title && content) {
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Post updated");
        document.location.replace("/dashboard");
      } else {
        alert("Failed to update post");
      }
    }
  }
};

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Post created");
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post");
    }
  }
};

const delButtonHandler = async (event) => {
  alert("delete button clicked");
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);

document
  .querySelector("#delete-post-btn")
  .addEventListener("click", delButtonHandler);
