import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { FetchStudentList,Removestudent} from "../Redux/Action";

class Studentlisting extends Component {
    constructor (props){
        super(props);
        console.log("props...",props);
    }
    componentDidMount = () => {
        this.props.loadstudent();
    }

    handleDelete = (code) => {
        if(window.confirm('Do you want to remove?')){
            this.props.Removestudent(code);
            setTimeout(()=>{this.props.loadstudent()},100)
            // this.forceUpdate();
        }
    }
    render(){
        return (
      this.props.user.loading?<div><h2>Loading...</h2></div>:
      this.props.user.errmsg?<div><h2>{this.props.user.errmsg}</h2></div>:
    <div>
      <div className="list">
        <div>
            <button className="add-btn"><Link to={'/list/add'}>Add Student [+]</Link></button>
        </div>
        <div>
            <table border={2} align='center'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Role</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.user.studentlist && this.props.user.studentlist.map(item=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.role}</td>
                            <td>
                            <button><Link to={'/list/edit/'+item.id}>Edit</Link></button>
                            <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadstudent:()=>dispatch(FetchStudentList()),
        Removestudent: (code)=>dispatch(Removestudent(code))
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Studentlisting);
