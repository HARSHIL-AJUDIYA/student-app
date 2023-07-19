import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { FetchUserList,Removeuser} from "../Redux/Action";

const Userlisting = (props) => {
    useEffect(()=>{
        props.loaduser();
    },[]);
    console.log("props...",props);
    const handleDelete=(code)=>{
        if(window.confirm('Do you want to remove?')){
            props.Removeuser(code);
            props.loaduser();
            // window.alert('User removed successfully.')
        }
    }
  return (
    props.user.loading?<div><h2>Loading...</h2></div>:
    props.user.errmsg?<div><h2>{props.user.errmsg}</h2></div>:
    <div>
      <div>
        <div>
            <button><Link to={'/user/add'}>Add User [+]</Link></button>
        </div>
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Role</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.user.userlist && props.user.userlist.map(item=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.role}</td>
                            <td>
                            <button><Link to={'/user/edit/'+item.id}>Edit</Link></button>
                            <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
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
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loaduser:()=>dispatch(FetchUserList()),
        Removeuser: (code)=>dispatch(Removeuser(code))
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Userlisting);
