const blogUpdateHandler = async (event) => {
    event.preventDefault();
  
    const blog_id = document.querySelector('#blog-title').getAttribute('data-id');
    const blog_title = document.querySelector('#blog-title').value;

    const blog_content = document.querySelector('#card-text').value.trim();
  
    if (blog_content) {
      const response = await fetch(`/api/blogs/${blog_id}`, {
        method: 'PUT',
        body: JSON.stringify({ blog_title, blog_content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blog');
      }
    }
  };

  
  document
    .querySelector('#blog-update')
    .addEventListener('click',blogUpdateHandler);