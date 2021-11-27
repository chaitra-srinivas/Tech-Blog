const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const blog_id = document.querySelector('#comment-btn').getAttribute('data-id');
    const comment_content = document.querySelector('#comment-text').value.trim();
  
    if (comment_content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ blog_id, comment_content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create new comment');
      }
    }
  };

  
  document
    .querySelector('#comment-btn')
    .addEventListener('click',newCommentHandler);