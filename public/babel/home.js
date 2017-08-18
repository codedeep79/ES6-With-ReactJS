class School {
    constructor(roomName, sumRoom, sumClass){
        this.roomName   = roomName;
        this.sumRoom    = sumRoom;
        this.sumClass   = sumClass;
    }

    report(){
        return "Đây là " + this.roomName + " có " 
            + this.sumRoom + " phòng và tổng số lớp toàn trường " + this.sumClass;
    }
}

class Class extends School{
    constructor(roomName, sumRoom, sumClass, className, sumStudent){
        super(roomName, sumRoom, sumClass);
        this.className  = className;
        this.sumStudent = sumStudent;
    }

    report(){
        return "Đây là " + this.roomName + " có " 
            + this.sumRoom + " phòng và tổng số lớp toàn trường " + this.sumClass 
            + " lớp " + this.className + " sĩ số " + this.sumStudent;
    }
}

var s = new School("phòng Tuyển Sinh", "2", "1000");
var c = new Class("phòng TH11307", "1", "1", "chất lượng cao", "50");
console.log(s.report());
console.log(c.report());

// Initial Constructor
class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            student: 10
        }
    }
    addStudent(){
        this.setState({student: this.state.student + 1});
    }
    render(){
        return(
            <div>
                <p>This Is {this.props.course} Course</p>
                <p>Has {this.state.student} Student</p>
                <button onClick={this.addStudent.bind(this)}>Add Student</button>
            </div>
        )
    }
}

Note.defaultProps = {
    course: 'C++'
};
ReactDOM.render(
    <div>
        <Note course="NodeJS"/>
        <Note/>
    </div>, document.getElementById("root"));
