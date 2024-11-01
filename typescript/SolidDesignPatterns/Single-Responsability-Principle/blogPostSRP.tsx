interface BlogPostJsonInterface {
  title: string,
  content: string
}

class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  // Methods related to content management
  createPost() {
    // Implementation here
  }

  updatePost() {
    // Implementation here
  }

  deletePost() {
    // Implementation here
  }
}

class BlogPostDisplay {
  constructor(public blogPost: BlogPost) { }

  // Method related to post display
  displayHTML() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
  }
}

//not so good for OOP
class DisplayBlogpostMetho2 {

  public display(blog: BlogPost) {
    return `<h1>${blog.title}</h1><p>${blog.content}</p>`;
  }

}


//if we want a method that returns the blog as json
class BlogPostJson {
  constructor(public blogPost: BlogPost) {

  }

  public JsonValue(): BlogPostJsonInterface {
    return {
      title: this.blogPost.title,
      content: this.blogPost.content
    }
  }
}
