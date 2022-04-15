export class Post {
  authorId: number;
  isPublished: boolean;
  content: string;
  constructor(authorId: number) {
    this.authorId = authorId;
    (this.content = ""), (this.isPublished = false); // only admin can publish it
  }
}
