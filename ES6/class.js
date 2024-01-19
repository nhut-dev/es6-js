// diem
// comment
class Course {
    constructor(cou){
        this.course = cou;
    }

    returned(){
        return "Tan Nhut " + this.course;
    }
}

class Comment extends Course{
    constructor(cou, cmt){
        super(cou)
        this.comment = cmt
    };
    show(){
        return this.returned() + " Tan Nhut " + this.comment;
    }
}

export default Comment