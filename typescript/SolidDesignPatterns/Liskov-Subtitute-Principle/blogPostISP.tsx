// crearting posts
// commenting posts
// sharing posts
// Admin (create comments, share)
// Regular (comment, share)

interface IPost {
  create(): void;
}

interface IComment {
  share(): void;
}

interface IShare {
  posting(): void;
}
class User1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  displayName(): void {
    console.log(`User: ${this.name}`);
  }
}


class AdminUser extends User1 implements IPost, IComment, IShare {
  create(): void {
    console.log("create")
  }
  share(): void {
    console.log("share")
  }
  posting(): void {
    console.log("post")
  }
}

class RegularUser extends User1 implements IComment, IShare {
  share(): void {
    console.log("share")
  }
  posting(): void {
    console.log("post")
  }
}

