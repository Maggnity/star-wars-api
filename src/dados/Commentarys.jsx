export default class ArrayComments{
    constructor(){
        this.comments = [];
    }

    addComment(name,email,comment){
        const newComment = new Comment(name, email, comment);
        this.comments.push(newComment);
    }
}

class Comment{
    constructor(name,email,comment){
        this.name = name;
        this.email = email;
        this.comment = comment;
    }
}