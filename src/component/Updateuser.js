import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";

const Updateuser = () => {
    const[id,setId]=useState(0);
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[role,setRole]=useState('staff');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {code} = useParams();

    const userobj=useSelector((state)=>state.user.userobj)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const userobj={ id, name, email, phone, role };
        dispatch(FunctionUpdateUser(userobj,id));
        navigate('/user')
        window.alert("user updated successfully!")
        console.log("userobj...",userobj);

    }
    useEffect(()=>{
        dispatch(FetchUserObj(code));
    },[]);

    useEffect(()=>{
        if(userobj){
            setId(userobj.id);
            setName(userobj.name);
            setEmail(userobj.email);
            setPhone(userobj.phone);
            setRole(userobj.role);
        }
    },[userobj])
    console.log("state...");
    return ( 
        <div>
        <form onSubmit={handleSubmit}>
            <div><h2>Update User</h2></div>
            <div>
                <table border={2}>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Role</td>
                            <td>Email</td>
                            <td>Phone</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type='text' value={id} disabled="disabled"></input></td>
                            <td><input type='text' value={name} onChange={e=>setName(e.target.value)}></input></td>
                            <td><select value={role} onChange={e=>setRole(e.target.value)}>
                            <option value="admin">Admin</option>
                            <option value="staff">Staff</option>
                            </select></td>
                            <td><input type='email' value={email} onChange={e=>setEmail(e.target.value)}></input></td>
                            <td><input type='number' value={phone} onChange={e=>setPhone(e.target.value)}></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button type="submit">Save</button>
                <button><Link to={'/user'}>Back</Link></button>
            </div>
            </form>
        </div>
     );
}
 
export default Updateuser;